import { useEffect, useRef } from 'react'
import { useIsMobile } from '@/hooks/useMediaQuery'

/**
 * Soft spotlight — updates DOM directly on a throttled rAF, no React state.
 */
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isMobile) return
    const el = ref.current
    if (!el) return

    let x = 0
    let y = 0
    let pending = false

    const flush = () => {
      pending = false
      el.style.background = `radial-gradient(500px circle at ${x}px ${y}px, rgba(239,68,68,0.07), transparent 42%)`
      if (document.body.classList.contains('light')) {
        el.style.background = `radial-gradient(500px circle at ${x}px ${y}px, rgba(220,38,38,0.09), transparent 42%)`
      }
    }

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      if (!pending) {
        pending = true
        requestAnimationFrame(flush)
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [isMobile])

  if (isMobile) return null

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[1]"
      aria-hidden
    />
  )
}

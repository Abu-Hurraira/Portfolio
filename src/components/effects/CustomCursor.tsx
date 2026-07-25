import { useEffect, useRef } from 'react'
import { useIsMobile } from '@/hooks/useMediaQuery'

/**
 * Lightweight custom cursor — DOM transforms only, no React re-renders on mousemove.
 */
export function CustomCursor() {
  const isMobile = useIsMobile()
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const visible = useRef(false)
  const hovering = useRef(false)
  const pos = useRef({ x: -100, y: -100 })
  const ring = useRef({ x: -100, y: -100 })
  const raf = useRef(0)

  useEffect(() => {
    if (isMobile) return

    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX
      pos.current.y = e.clientY
      if (!visible.current) {
        visible.current = true
        if (dotRef.current) dotRef.current.style.opacity = '1'
        if (ringRef.current) ringRef.current.style.opacity = '0.85'
      }
    }

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null
      const next = !!t?.closest('a, button, [role="button"], .magnetic, input, textarea')
      if (next === hovering.current) return
      hovering.current = next
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%) scale(${next ? 0.45 : 1})`
      }
      if (ringRef.current) {
        ringRef.current.style.width = next ? '52px' : '36px'
        ringRef.current.style.height = next ? '52px' : '36px'
        ringRef.current.style.borderColor = next
          ? 'rgba(248,113,113,0.85)'
          : 'rgba(239,68,68,0.55)'
      }
    }

    const tick = () => {
      const dx = pos.current.x - ring.current.x
      const dy = pos.current.y - ring.current.y
      ring.current.x += dx * 0.18
      ring.current.y += dy * 0.18

      if (dotRef.current) {
        const s = hovering.current ? 0.45 : 1
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%) scale(${s})`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`
      }
      raf.current = requestAnimationFrame(tick)
    }

    raf.current = requestAnimationFrame(tick)
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })

    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full bg-white opacity-0 mix-blend-difference will-change-transform"
        style={{ transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)' }}
        aria-hidden
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-9 w-9 rounded-full border-2 border-accent/50 opacity-0 will-change-transform"
        style={{ transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)' }}
        aria-hidden
      />
    </>
  )
}

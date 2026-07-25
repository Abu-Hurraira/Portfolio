import { useRef, type ReactNode, type MouseEvent } from 'react'
import { cn } from '@/utils/cn'

interface TiltCardProps {
  children: ReactNode
  className?: string
  glare?: boolean
}

/**
 * CSS-transform tilt — no Framer springs on every mousemove.
 */
export function TiltCard({ children, className, glare = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)
  const pending = useRef(false)
  const last = useRef({ rx: 0, ry: 0, gx: 0, gy: 0 })

  const flush = () => {
    pending.current = false
    const el = ref.current
    if (!el) return
    el.style.transform = `perspective(900px) rotateX(${last.current.rx}deg) rotateY(${last.current.ry}deg)`
    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(320px circle at ${last.current.gx}px ${last.current.gy}px, rgba(239,68,68,0.16), transparent 45%)`
    }
  }

  const handleMove = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    last.current = {
      rx: (py - 0.5) * -8,
      ry: (px - 0.5) * 8,
      gx: e.clientX - rect.left,
      gy: e.clientY - rect.top,
    }
    if (!pending.current) {
      pending.current = true
      requestAnimationFrame(flush)
    }
  }

  const reset = () => {
    last.current = { rx: 0, ry: 0, gx: 0, gy: 0 }
    const el = ref.current
    if (el) el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
    if (glareRef.current) glareRef.current.style.background = 'transparent'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={cn(
        'relative overflow-hidden rounded-2xl transition-transform duration-200 will-change-transform',
        className,
      )}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          aria-hidden
        />
      )}
    </div>
  )
}

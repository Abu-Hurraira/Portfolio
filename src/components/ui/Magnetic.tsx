import { useRef, type ReactNode, type MouseEvent } from 'react'
import { cn } from '@/utils/cn'

interface MagneticProps {
  children: ReactNode
  className?: string
  strength?: number
}

/** Lightweight magnetic pull via CSS transform — no spring re-renders. */
export function Magnetic({ children, className, strength = 0.28 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) * strength
    const y = (e.clientY - top - height / 2) * strength
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`
  }

  const onLeave = () => {
    const el = ref.current
    if (el) el.style.transform = 'translate3d(0, 0, 0)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn('magnetic inline-block transition-transform duration-150 ease-out will-change-transform', className)}
    >
      {children}
    </div>
  )
}

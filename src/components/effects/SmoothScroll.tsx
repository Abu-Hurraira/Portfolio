import { useEffect } from 'react'
import Lenis from 'lenis'
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
      wheelMultiplier: 1,
    })

    const w = window as unknown as { __lenis?: Lenis }
    w.__lenis = lenis

    let raf = 0
    const frame = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)
    document.documentElement.classList.add('lenis')

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      delete w.__lenis
      document.documentElement.classList.remove('lenis')
    }
  }, [reduced])

  return <>{children}</>
}

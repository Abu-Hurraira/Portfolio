import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Automatically resets scroll position to the top of the page on route change */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }

    // Instantly scroll window and document body to top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0

    // Reset Lenis smooth scroll if active
    const w = window as unknown as { __lenis?: { scrollTo: (target: number, opts?: { immediate?: boolean }) => void } }
    if (w.__lenis) {
      w.__lenis.scrollTo(0, { immediate: true })
    }
  }, [pathname, hash])

  return null
}

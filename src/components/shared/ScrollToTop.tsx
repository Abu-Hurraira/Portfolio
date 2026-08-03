import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToHash } from '@/utils/navigation'

/** Automatically resets scroll position to the top of the page on route change, or scrolls to target section if hash present */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        scrollToHash(hash)
      }, 100)
      return () => clearTimeout(timer)
    }

    // Instantly scroll window and document body to top if no hash
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

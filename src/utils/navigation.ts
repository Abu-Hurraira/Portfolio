import { revealSection } from '@/components/shared/LazyLoad'

/**
 * Navigation and smooth scrolling utilities.
 */

/**
 * Checks if the current location pathname corresponds to the home page.
 */
export function isHomePage(pathname: string): boolean {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const cleanPath = pathname.replace(/\/$/, '')
  return cleanPath === '' || cleanPath === base
}

/**
 * Smoothly scrolls to a target section (e.g. "#projects" or "projects") using Lenis if active,
 * or standard element scrollIntoView.
 */
export function scrollToHash(hash: string): void {
  const cleanId = hash.replace(/^#/, '')
  if (!cleanId) return

  // 1. Instantly trigger reveal on lazy section so its DOM node and height exist
  revealSection(cleanId)

  const targetId = `#${cleanId}`

  const executeScroll = () => {
    const targetEl = document.querySelector(targetId)
    if (targetEl) {
      const w = window as unknown as {
        __lenis?: { scrollTo: (target: HTMLElement | string, opts?: { duration?: number; offset?: number }) => void }
      }
      if (w.__lenis) {
        w.__lenis.scrollTo(targetId, { duration: 1.0, offset: -20 })
      } else {
        targetEl.scrollIntoView({ behavior: 'smooth' })
      }
      if (window.location.hash !== targetId) {
        window.history.pushState(null, '', targetId)
      }
    }
  }

  // Execute scroll immediately and schedule follow-up to account for lazy-loaded component expand
  executeScroll()
  setTimeout(executeScroll, 50)
  setTimeout(executeScroll, 200)
}

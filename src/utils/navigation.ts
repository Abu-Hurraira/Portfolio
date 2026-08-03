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
  const targetId = hash.startsWith('#') ? hash : `#${hash}`
  const targetEl = document.querySelector(targetId)
  if (targetEl) {
    const w = window as unknown as {
      __lenis?: { scrollTo: (target: HTMLElement | string, opts?: { duration?: number }) => void }
    }
    if (w.__lenis) {
      w.__lenis.scrollTo(targetId, { duration: 1.2 })
    } else {
      targetEl.scrollIntoView({ behavior: 'smooth' })
    }
    window.history.pushState(null, '', targetId)
  }
}

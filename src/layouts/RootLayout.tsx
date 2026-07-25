import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { lazy, Suspense, useEffect, useState } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { ScrollProgress } from '@/components/effects/ScrollProgress'
import { SmoothScroll } from '@/components/effects/SmoothScroll'
import { useKonamiCode } from '@/hooks/useKonamiCode'
import { pageTransition } from '@/animations/variants'
import { PageLoader } from '@/components/shared/LazyLoad'

const Footer = lazy(() =>
  import('@/components/layout/Footer').then((m) => ({ default: m.Footer })),
)
const FloatingDock = lazy(() =>
  import('@/components/layout/FloatingDock').then((m) => ({ default: m.FloatingDock })),
)
const CommandPalette = lazy(() =>
  import('@/components/shared/CommandPalette').then((m) => ({ default: m.CommandPalette })),
)
const EasterEgg = lazy(() =>
  import('@/components/shared/EasterEgg').then((m) => ({ default: m.EasterEgg })),
)
const CustomCursor = lazy(() =>
  import('@/components/effects/CustomCursor').then((m) => ({ default: m.CustomCursor })),
)
const Spotlight = lazy(() =>
  import('@/components/effects/Spotlight').then((m) => ({ default: m.Spotlight })),
)

function DeferredChrome() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
      cancelIdleCallback?: (id: number) => void
    }

    if (typeof w.requestIdleCallback === 'function') {
      const id = w.requestIdleCallback(() => setReady(true), { timeout: 1200 })
      return () => w.cancelIdleCallback?.(id)
    }

    const t = window.setTimeout(() => setReady(true), 150)
    return () => window.clearTimeout(t)
  }, [])

  if (!ready) return null

  return (
    <Suspense fallback={null}>
      <CustomCursor />
      <Spotlight />
      <CommandPalette />
      <EasterEgg />
      <FloatingDock />
    </Suspense>
  )
}

export function RootLayout() {
  const location = useLocation()
  const [ready, setReady] = useState(false)
  useKonamiCode()

  useEffect(() => {
    setReady(true)
  }, [])

  // Prefetch other routes after home is interactive
  useEffect(() => {
    const prefetch = () => {
      void import('@/pages/ContactPage')
      void import('@/pages/CompanyPage')
      void import('@/pages/ProjectDetailPage')
    }
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
      cancelIdleCallback?: (id: number) => void
    }
    if (typeof w.requestIdleCallback === 'function') {
      const id = w.requestIdleCallback(prefetch, { timeout: 2500 })
      return () => w.cancelIdleCallback?.(id)
    }
    const t = window.setTimeout(prefetch, 800)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <SmoothScroll>
      <ScrollProgress />
      <DeferredChrome />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={ready ? 'initial' : false}
          animate="animate"
          exit="exit"
          variants={pageTransition}
        >
          <Suspense fallback={<PageLoader full />}>
            <Outlet />
          </Suspense>
        </motion.main>
      </AnimatePresence>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </SmoothScroll>
  )
}

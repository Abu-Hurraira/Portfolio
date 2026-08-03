import {
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
} from 'react'
import { cn } from '@/utils/cn'

/** Survives theme toggles / parent re-renders — once revealed, stays revealed. */
const revealedSections = new Set<string>()

/**
 * Manually force a section to reveal by ID (e.g. when user clicks a nav tab).
 */
export function revealSection(id: string) {
  const cleanId = id.replace(/^#/, '')
  revealedSections.add(cleanId)
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('reveal-section', { detail: cleanId }))
  }
}

export function PageLoader({ full = false }: { full?: boolean }) {
  return (
    <div
      className={cn('flex items-center justify-center', full ? 'min-h-[60vh]' : 'py-24')}
      role="status"
      aria-label="Loading"
    >
      <div className="h-9 w-9 animate-spin rounded-full border-2 border-accent border-t-transparent" />
    </div>
  )
}

export function SectionSkeleton({ tall = false }: { tall?: boolean }) {
  return (
    <div className="container-premium section-pad py-16" aria-hidden>
      <div
        className={cn(
          'animate-pulse rounded-2xl bg-white/5 dark:bg-white/5',
          'border border-transparent',
          tall ? 'h-72' : 'h-44',
        )}
        style={{ background: 'var(--color-surface)' }}
      />
    </div>
  )
}

/** Renders children only after the placeholder enters (or nears) the viewport. */
export function LazyWhenVisible({
  id,
  children,
  rootMargin = '280px 0px',
  fallback,
  className,
}: {
  id: string
  children: ReactNode
  rootMargin?: string
  fallback?: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(() => revealedSections.has(id))

  useEffect(() => {
    const handleReveal = (e: Event) => {
      const customEvent = e as CustomEvent<string>
      if (customEvent.detail === id) {
        revealedSections.add(id)
        setShow(true)
      }
    }
    window.addEventListener('reveal-section', handleReveal)
    return () => window.removeEventListener('reveal-section', handleReveal)
  }, [id])

  useEffect(() => {
    if (show) {
      revealedSections.add(id)
      return
    }

    const el = ref.current
    if (!el) return

    const reveal = () => {
      revealedSections.add(id)
      setShow(true)
    }

    if (!('IntersectionObserver' in window)) {
      reveal()
      return
    }

    // Already on screen (e.g. after theme switch remount) — reveal immediately
    const rect = el.getBoundingClientRect()
    const margin = 280
    if (rect.top < window.innerHeight + margin && rect.bottom > -margin) {
      reveal()
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal()
          io.disconnect()
        }
      },
      { rootMargin, threshold: 0.01 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [id, show, rootMargin])

  return (
    <div ref={ref} id={id} className={className} data-lazy-section={id}>
      {show ? children : (fallback ?? <SectionSkeleton tall={id === 'projects'} />)}
    </div>
  )
}

/** Code-split a section and mount it only when scrolled near. Persists across theme switches. */
export function LazySection({
  id,
  section: Section,
  tall,
}: {
  id: string
  section: ComponentType
  tall?: boolean
}) {
  return (
    <LazyWhenVisible id={id} fallback={<SectionSkeleton tall={tall} />}>
      <Suspense fallback={<SectionSkeleton tall={tall} />}>
        <Section />
      </Suspense>
    </LazyWhenVisible>
  )
}

export function lazyNamed<T extends ComponentType<unknown>>(
  factory: () => Promise<Record<string, T>>,
  name: string,
) {
  return lazy(async () => {
    const mod = await factory()
    return { default: mod[name] }
  })
}

import { Link } from 'react-router-dom'
import { SEO } from '@/components/shared/SEO'
import { Button } from '@/components/ui/Button'
import { AuroraBackground } from '@/components/effects/AuroraBackground'

export function NotFoundPage() {
  return (
    <>
      <SEO title="404" description="Page not found" path="/404" />
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        <AuroraBackground />
        <div className="relative z-10 px-6 text-center">
          <p className="font-display text-8xl font-bold gradient-text">404</p>
          <h1 className="mt-4 font-display text-2xl font-semibold">Lost in the void</h1>
          <p className="mt-2 text-muted">This route doesn&apos;t exist in the system.</p>
          <Button asChild className="mt-8" variant="glow">
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

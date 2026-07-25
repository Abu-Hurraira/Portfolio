import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Magnetic } from '@/components/ui/Magnetic'
import { Reveal } from '@/components/ui/SectionHeading'

export function ContactCTA() {
  return (
    <section className="relative py-24">
      <div className="container-premium section-pad">
        <Reveal>
          <div className="glass gradient-border relative overflow-hidden rounded-[2rem] px-8 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-purple/20" />
            <h2 className="relative font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Let&apos;s build something <span className="gradient-text">extraordinary</span>
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-muted">
              Open to roles, collaborations, and ambitious product work across Laravel, React, and
              .NET.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Magnetic>
                <Button asChild size="lg" variant="glow">
                  <Link to="/contact">Start a Conversation</Link>
                </Button>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

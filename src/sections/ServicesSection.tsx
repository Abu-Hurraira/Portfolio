import {
  Code2,
  Component,
  Database,
  LayoutDashboard,
  Network,
  Server,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react'
import { SERVICES } from '@/data'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TiltCard } from '@/components/ui/TiltCard'
import { useGsapReveal } from '@/hooks/useGsapReveal'

const iconMap = {
  server: Server,
  component: Component,
  code: Code2,
  network: Network,
  database: Database,
  layout: LayoutDashboard,
  users: Users,
  zap: Zap,
  sparkles: Sparkles,
}

export function ServicesSection() {
  const ref = useGsapReveal<HTMLDivElement>()

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container-premium section-pad">
        <SectionHeading
          eyebrow="Services"
          title="What I Offer"
          description="End-to-end engineering for products that need reliability, polish, and intelligent automation."
        />
        <div ref={ref} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Code2
            return (
              <div key={service.id} data-reveal>
                <TiltCard className="glass gradient-border group h-full rounded-2xl p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-secondary transition group-hover:shadow-[0_0_24px_rgba(239,68,68,0.35)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted">{service.description}</p>
                </TiltCard>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

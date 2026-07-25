import { TECH_LOGOS } from '@/data'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function TechStackSection() {
  const logos = [...TECH_LOGOS, ...TECH_LOGOS]

  return (
    <section id="tech-stack" className="relative py-20 overflow-hidden">
      <div className="container-premium section-pad mb-10">
        <SectionHeading
          eyebrow="Stack"
          title="Technologies In Orbit"
          description="The languages, frameworks, and tools that power my day-to-day engineering."
          align="center"
        />
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
        <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-4">
          {logos.map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="glass flex h-16 min-w-[140px] items-center justify-center rounded-2xl px-6 text-sm font-medium text-muted transition hover:text-text hover:shadow-[0_0_24px_rgba(239,68,68,0.25)]"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

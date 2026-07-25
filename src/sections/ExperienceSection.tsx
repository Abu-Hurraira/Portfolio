import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { EXPERIENCES } from '@/data'
import { SectionHeading, Reveal } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'

export function ExperienceSection() {
  const exp = EXPERIENCES[0]

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container-premium section-pad">
        <SectionHeading
          eyebrow="Experience"
          title="Work Timeline"
          description="Shipping production software with ownership across backend, integrations, and product polish."
        />

        <Reveal>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-accent via-secondary to-transparent md:left-1/2 md:-translate-x-px" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative md:grid md:grid-cols-2 md:gap-12"
            >
              <div className="mb-6 md:mb-0 md:text-right md:pr-10">
                <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  Current
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold">{exp.role}</h3>
                <p className="mt-1 text-secondary">{exp.company}</p>
                <p className="text-sm text-muted">
                  {exp.location} · {exp.period}
                </p>
                {exp.website && (
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm text-muted hover:text-text"
                  >
                    Visit company <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>

              <div className="relative pl-12 md:pl-10">
                <div className="absolute top-2 left-[9px] h-4 w-4 rounded-full border-2 border-accent bg-bg shadow-[0_0_16px_rgba(239,68,68,0.7)] md:left-0 md:-translate-x-1/2" />
                <Card className="hover:border-accent/30">
                  <h4 className="mb-3 text-sm font-semibold tracking-wide text-text">
                    Responsibilities
                  </h4>
                  <ul className="mb-5 space-y-2 text-sm text-muted">
                    {exp.responsibilities.map((r) => (
                      <li key={r} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <h4 className="mb-3 text-sm font-semibold tracking-wide text-text">
                    Achievements
                  </h4>
                  <ul className="mb-5 space-y-2 text-sm text-muted">
                    {exp.achievements.map((a) => (
                      <li key={a} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        {a}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted transition hover:border-accent/40 hover:text-text"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

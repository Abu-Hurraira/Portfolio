import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { COMPANY, EXPERIENCES, PROJECTS, SITE } from '@/data'
import { SEO } from '@/components/shared/SEO'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { AuroraBackground } from '@/components/effects/AuroraBackground'
import { Link } from 'react-router-dom'

export function CompanyPage() {
  const crm = PROJECTS.find((p) => p.slug === 'creative-it-park-crm')
  const exp = EXPERIENCES[0]

  return (
    <>
      <SEO
        title="Creative IT Park"
        description="Company showcase — Laravel development, enterprise CRM, and AI automation at Creative IT Park."
        path="/company"
      />
      <section className="relative overflow-hidden pt-28 pb-20">
        <AuroraBackground />
        <div className="container-premium section-pad relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-accent to-purple font-display text-2xl font-bold shadow-[0_0_40px_rgba(239,68,68,0.45)]">
              CIP
            </div>
            <h1 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
              <span className="gradient-text">{COMPANY.name}</span>
            </h1>
            <p className="mt-3 text-secondary">
              {COMPANY.role} · {COMPANY.location}
            </p>
            <p className="mt-5 max-w-2xl text-muted">{COMPANY.overview}</p>
            <div className="mt-6">
              <Button asChild variant="glow">
                <a href={SITE.company.url} target="_blank" rel="noreferrer">
                  Visit Website <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <h2 className="mb-4 font-display text-xl font-semibold">Current Role</h2>
              <p className="text-sm text-muted">
                As a Laravel Developer, I contribute to production CRM systems — APIs, database
                design, WhatsApp Business automation, Gemini AI features, and the workflows that
                keep leads, deals, and meetings moving.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-muted">
                {exp.responsibilities.map((r) => (
                  <li key={r} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {r}
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h2 className="mb-4 font-display text-xl font-semibold">Focus Areas</h2>
              <div className="space-y-2">
                {COMPANY.focus.map((f) => (
                  <div
                    key={f}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm"
                  >
                    {f}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {crm && (
            <Card className="mt-6">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs text-secondary">Featured Project</p>
                  <h2 className="font-display text-2xl font-semibold">{crm.title}</h2>
                  <p className="mt-1 max-w-xl text-sm text-muted">{crm.description}</p>
                </div>
                <Button asChild variant="outline">
                  <Link to={`/projects/${crm.slug}`}>View Case Study</Link>
                </Button>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {crm.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          )}

          <Card className="mt-6">
            <h2 className="mb-4 font-display text-xl font-semibold">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-accent/20 bg-accent/5 px-3 py-1.5 text-xs text-secondary"
                >
                  {t}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}

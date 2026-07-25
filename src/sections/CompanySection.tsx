import { ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { COMPANY, SITE } from '@/data'
import { SectionHeading, Reveal } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export function CompanySection() {
  return (
    <section id="company" className="relative py-24 sm:py-32">
      <div className="container-premium section-pad">
        <SectionHeading
          eyebrow="Company"
          title="Creative IT Park"
          description="Where I build enterprise CRM systems, automation, and AI-assisted workflows."
        />
        <Reveal>
          <Card className="overflow-hidden">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div className="flex flex-col justify-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-purple font-display text-xl font-bold shadow-[0_0_30px_rgba(239,68,68,0.4)]">
                  CIP
                </div>
                <h3 className="font-display text-2xl font-bold">{COMPANY.name}</h3>
                <p className="mt-1 text-sm text-secondary">
                  {COMPANY.role} · {COMPANY.location}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{COMPANY.overview}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild variant="glow">
                    <Link to="/company">Company Showcase</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={SITE.company.url} target="_blank" rel="noreferrer">
                      Website <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {COMPANY.focus.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm transition hover:border-accent/30 hover:bg-accent/5"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}

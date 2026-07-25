import { motion } from 'framer-motion'
import { ArrowDown, Building2, MapPin } from 'lucide-react'
import { JOURNEY, SITE } from '@/data'
import { SectionHeading, Reveal } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { fadeInUp, staggerContainer } from '@/animations/variants'

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-premium section-pad">
        <SectionHeading
          eyebrow="About"
          title="Professional Story"
          description="From curiosity to craft — a path into computer science, web engineering, and shipping real products."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <Card className="group relative overflow-hidden">
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent/20 blur-3xl transition group-hover:bg-purple/25" />
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-purple font-display text-lg font-bold shadow-[0_0_30px_rgba(239,68,68,0.35)]">
                  CIP
                </div>
                <div>
                  <p className="text-xs text-secondary">Current Position</p>
                  <h3 className="font-display text-xl font-semibold">{SITE.company.role}</h3>
                </div>
              </div>
              <div className="mb-4 flex flex-wrap gap-3 text-sm text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Building2 className="h-3.5 w-3.5" /> {SITE.company.name}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" /> {SITE.company.location}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                Working on an enterprise CRM platform — Laravel backends, automation pipelines,
                WhatsApp Business integration, and Gemini AI features that turn CRM into a living
                operating system for leads, deals, and client workflows.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Enterprise CRM', 'Laravel', 'Automation', 'AI', 'WhatsApp', 'Gemini', 'REST APIs', 'Database Design'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative pl-6">
              <div className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-accent via-secondary to-purple" />
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {JOURNEY.map((step, i) => (
                  <motion.div key={step.title} variants={fadeInUp} className="relative">
                    <div className="absolute top-1.5 -left-[21px] h-3 w-3 rounded-full border-2 border-accent bg-bg shadow-[0_0_12px_rgba(239,68,68,0.6)]" />
                    <h4 className="font-display font-semibold">{step.title}</h4>
                    <p className="mt-1 text-sm text-muted">{step.description}</p>
                    {i < JOURNEY.length - 1 && (
                      <ArrowDown className="mt-3 h-3.5 w-3.5 text-muted/50" />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

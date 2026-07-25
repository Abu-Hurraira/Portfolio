import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { EDUCATION } from '@/data'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'

export function EducationSection() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="container-premium section-pad">
        <SectionHeading
          eyebrow="Education"
          title="Academic Timeline"
          description="Foundations in computer science with a clear trajectory toward professional engineering."
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-accent via-secondary to-purple" />
          <div className="space-y-6">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-16"
              >
                <div className="absolute top-5 left-[17px] flex h-7 w-7 items-center justify-center rounded-full border border-accent/40 bg-card text-secondary shadow-[0_0_16px_rgba(239,68,68,0.4)]">
                  <GraduationCap className="h-3.5 w-3.5" />
                </div>
                <Card>
                  <p className="text-xs text-secondary">{edu.period}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold">{edu.institution}</h3>
                  <p className="text-sm text-muted">{edu.degree}</p>
                  {edu.status && (
                    <p className="mt-2 text-xs text-muted/80">{edu.status}</p>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

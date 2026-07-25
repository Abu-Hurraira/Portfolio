import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/data'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 5000)
    return () => clearInterval(id)
  }, [])

  const t = TESTIMONIALS[index]

  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="container-premium section-pad">
        <SectionHeading
          eyebrow="Testimonials"
          title="Kind Words"
          description="Placeholder testimonials reflecting the caliber of collaboration I aim for."
          align="center"
        />

        <div className="mx-auto max-w-3xl">
          <Card className="relative min-h-[220px] overflow-hidden text-center">
            <Quote className="absolute top-6 left-6 h-8 w-8 text-accent/30" />
            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="px-4 py-6"
              >
                <p className="text-lg text-balance text-text/90 sm:text-xl">&ldquo;{t.content}&rdquo;</p>
                <div className="mt-8">
                  <p className="font-display font-semibold">{t.name}</p>
                  <p className="text-sm text-muted">
                    {t.role} · {t.company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="mt-2 flex justify-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? 'w-6 bg-accent' : 'w-1.5 bg-white/20'
                  }`}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

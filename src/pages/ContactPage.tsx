import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Github, Linkedin, Mail, MapPin, Phone, Send } from '@/components/icons'
import { toast } from 'sonner'
import { SITE } from '@/data'
import { SEO } from '@/components/shared/SEO'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { AuroraBackground } from '@/components/effects/AuroraBackground'
import { Magnetic } from '@/components/ui/Magnetic'

export function ContactPage() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      toast.success('Message prepared — connect via email to continue.')
    }, 900)
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Ammar Abu Hurraira for roles, collaborations, and product work."
        path="/contact"
      />
      <section className="relative min-h-screen overflow-hidden pt-28 pb-20">
        <AuroraBackground />
        <div className="container-premium section-pad relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 max-w-2xl"
          >
            <p className="mb-3 text-xs tracking-[0.25em] text-secondary uppercase">Contact</p>
            <h1 className="font-display text-4xl font-bold sm:text-5xl">
              Let&apos;s <span className="gradient-text">connect</span>
            </h1>
            <p className="mt-4 text-muted">
              Tell me about your role, product, or problem. I respond thoughtfully and build with
              care.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
                { icon: Phone, label: 'Phone', value: SITE.phone, href: `tel:${SITE.phoneIntl}` },
                { icon: MapPin, label: 'Location', value: SITE.location },
                { icon: Github, label: 'GitHub', value: 'Abu-Hurraira', href: SITE.github },
                { icon: Linkedin, label: 'LinkedIn', value: 'Connect', href: SITE.linkedin },
              ].map((item) => (
                <Card key={item.label} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-secondary">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm hover:text-secondary" target="_blank" rel="noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm">{item.value}</p>
                    )}
                  </div>
                </Card>
              ))}

              <Card className="overflow-hidden p-0">
                <div className="relative aspect-[16/10] bg-gradient-to-br from-accent/20 via-card to-secondary/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="mx-auto mb-2 h-8 w-8 text-secondary" />
                      <p className="font-display font-semibold">Islamabad</p>
                      <p className="text-xs text-muted">Pakistan</p>
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(239,68,68,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.2) 1px, transparent 1px)',
                      backgroundSize: '32px 32px',
                    }}
                  />
                </div>
              </Card>
            </div>

            <Card className="relative overflow-hidden">
              {sent ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <CheckCircle2 className="mb-4 h-14 w-14 text-secondary" />
                  <h2 className="font-display text-2xl font-bold">Message ready</h2>
                  <p className="mt-2 max-w-sm text-sm text-muted">
                    Thanks for reaching out. Prefer email? Write to{' '}
                    <a href={`mailto:${SITE.email}`} className="text-secondary">
                      {SITE.email}
                    </a>
                  </p>
                  <Button className="mt-6" variant="outline" onClick={() => setSent(false)}>
                    Send another
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Name" name="name" required placeholder="Your name" />
                    <Field label="Email" name="email" type="email" required placeholder="you@company.com" />
                  </div>
                  <Field label="Subject" name="subject" required placeholder="Opportunity / project" />
                  <div>
                    <label className="mb-1.5 block text-xs text-muted" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell me about the role or idea…"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                  <Magnetic>
                    <Button type="submit" variant="glow" size="lg" disabled={loading}>
                      <Send className="h-4 w-4" />
                      {loading ? 'Sending…' : 'Send Message'}
                    </Button>
                  </Magnetic>
                </form>
              )}
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs text-muted" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
      />
    </div>
  )
}

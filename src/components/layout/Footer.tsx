import { ArrowUp, Github, Linkedin, Mail } from '@/components/icons'
import { Link } from 'react-router-dom'
import { SITE, SOCIAL_LINKS } from '@/data'
import { Magnetic } from '@/components/ui/Magnetic'

export function Footer() {
  const year = new Date().getFullYear()

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const iconMap = {
    github: Github,
    linkedin: Linkedin,
    mail: Mail,
  }

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/5">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent" />
      <div className="container-premium section-pad relative py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-purple font-display text-sm font-bold">
                A
              </span>
              <span className="font-display font-semibold">{SITE.name}</span>
            </div>
            <p className="max-w-xs text-sm text-muted">
              Software Engineer crafting enterprise systems, AI automation, and premium product experiences.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-text">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <a href="/#about" className="hover:text-text">About</a>
              <a href="/#projects" className="hover:text-text">Projects</a>
              <Link to="/company" className="hover:text-text">Company</Link>
              <Link to="/contact" className="hover:text-text">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-text">Connect</h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => {
                const Icon = iconMap[s.icon as keyof typeof iconMap]
                return (
                  <Magnetic key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.name}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted transition hover:border-accent/40 hover:text-text hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]"
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                    </a>
                  </Magnetic>
                )
              })}
            </div>
            <button
              onClick={scrollTop}
              className="mt-6 inline-flex items-center gap-2 text-sm text-muted transition hover:text-text"
            >
              Back to top <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-8 text-xs text-muted sm:flex-row">
          <p>© {year} {SITE.name}. Crafted with precision.</p>
          <p>Islamabad · Laravel · React · .NET</p>
        </div>
      </div>
    </footer>
  )
}

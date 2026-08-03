import { ArrowDown, Download, FolderKanban, Github, Linkedin, Mail, Sparkles } from '@/components/icons'
import { Link } from 'react-router-dom'
import { ROTATING_TITLES, SITE } from '@/data'
import { Button } from '@/components/ui/Button'
import { Magnetic } from '@/components/ui/Magnetic'
import { Typewriter } from '@/components/ui/Typewriter'
import { AuroraBackground } from '@/components/effects/AuroraBackground'
import { withBase } from '@/utils/assets'
import { scrollToHash } from '@/utils/navigation'

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <AuroraBackground />

      <div className="container-premium section-pad relative z-10 grid items-center gap-16 py-16 lg:grid-cols-[1fr_0.9fr] lg:gap-24 xl:gap-28">
        <div className="fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-xs text-secondary">
            <Sparkles className="h-3.5 w-3.5" />
            Available for opportunities · {SITE.company.location}
          </div>

          <p className="mb-2 text-lg text-muted sm:text-xl">Hello, I&apos;m</p>

          <h1 className="font-display text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="gradient-text">{SITE.name.toUpperCase()}</span>
          </h1>

          <div className="mt-5 min-h-[2.5rem] text-xl font-medium sm:text-2xl">
            <Typewriter words={ROTATING_TITLES} />
          </div>

          <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">
            Building enterprise CRM systems, AI-powered automation, and premium web products —
            currently crafting production software at{' '}
            <a
              href={SITE.company.url}
              target="_blank"
              rel="noreferrer"
              className="text-secondary underline-offset-4 hover:underline"
            >
              {SITE.company.name}
            </a>
            .
          </p>

          <div className="mt-8 flex flex-nowrap items-center gap-2 sm:gap-3">
            <Magnetic className="shrink-0">
              <Button variant="glow" size="default" className="h-11 px-4 sm:px-5" asChild>
                <a
                  href={withBase(SITE.resumeUrl)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 whitespace-nowrap"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Resume</span>
                </a>
              </Button>
            </Magnetic>
            <Magnetic className="shrink-0">
              <Button
                variant="outline"
                size="default"
                className="h-11 px-4 sm:px-5 cursor-pointer"
                onClick={() => scrollToHash('projects')}
              >
                <FolderKanban className="h-4 w-4" />
                <span className="whitespace-nowrap">View Projects</span>
              </Button>
            </Magnetic>
            <Magnetic className="shrink-0">
              <Button variant="secondary" size="default" className="h-11 px-4 sm:px-5" asChild>
                <Link to="/contact" className="whitespace-nowrap">
                  Hire Me
                </Link>
              </Button>
            </Magnetic>
          </div>

          <div className="mt-6 flex gap-3">
            {[
              { href: SITE.github, icon: Github, label: 'GitHub' },
              { href: SITE.linkedin, icon: Linkedin, label: 'LinkedIn' },
              { href: `mailto:${SITE.email}`, icon: Mail, label: 'Email' },
            ].map((s) => (
              <Magnetic key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted transition hover:border-accent/50 hover:text-text hover:shadow-[0_0_24px_rgba(239,68,68,0.4)]"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              </Magnetic>
            ))}
          </div>
        </div>

        {/* Samurai art — no card / black rectangle frame */}
        <div
          className="fade-up relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-[22rem] lg:justify-self-end"
          style={{ animationDelay: '80ms' }}
        >
          <div className="pointer-events-none absolute -inset-6 rounded-full bg-accent/20 blur-3xl" aria-hidden />
          <div className="relative">
            <img
              src={withBase('/hero/anime-character.jpg')}
              alt="Red aesthetic samurai anime artwork"
              className="relative z-10 mx-auto h-auto max-h-[min(59vh,465px)] w-full object-contain object-center drop-shadow-[0_20px_50px_rgba(239,68,68,0.25)]"
              width={724}
              height={950}
              decoding="async"
              fetchPriority="high"
              loading="eager"
            />

            <div className="absolute right-0 bottom-1 left-0 z-20 flex flex-wrap items-end justify-between gap-2 px-1 sm:bottom-2">
              <div className="rounded-2xl border border-accent/30 bg-bg/70 px-3 py-2 backdrop-blur-md sm:px-4 sm:py-2.5">
                <p className="text-[10px] tracking-wider text-muted uppercase">Currently</p>
                <p className="text-sm font-semibold text-text">{SITE.company.role}</p>
              </div>
              <div className="flex flex-wrap justify-end gap-1.5">
                {['Laravel', 'React', '.NET'].map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-accent/25 bg-bg/70 px-2.5 py-1.5 text-[10px] font-medium text-secondary backdrop-blur-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault()
          scrollToHash('about')
        }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted transition hover:text-text cursor-pointer"
      >
        Scroll
        <ArrowDown className="h-4 w-4" />
      </a>
    </section>
  )
}

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github } from '@/components/icons'
import { Link, useParams } from 'react-router-dom'
import { PROJECTS } from '@/data'
import { SEO } from '@/components/shared/SEO'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ProjectImage } from '@/components/ui/ProjectImage'
import { AuroraBackground } from '@/components/effects/AuroraBackground'
import { NotFoundPage } from '@/pages/NotFoundPage'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = PROJECTS.find((p) => p.slug === slug)

  if (!project) return <NotFoundPage />

  return (
    <>
      <SEO
        title={project.title}
        description={project.description}
        path={`/projects/${project.slug}`}
      />
      <section className="relative overflow-hidden pt-28 pb-24">
        <AuroraBackground />
        <div className="container-premium section-pad relative z-10">
          <Link
            to="/#projects"
            className="mb-8 inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-medium text-muted transition duration-300 hover:border-accent/40 hover:bg-accent/10 hover:text-text"
          >
            <ArrowLeft className="h-4 w-4 text-accent" /> Back to projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold tracking-wider text-accent uppercase">
              <span>{project.category}</span>
              <span className="opacity-40">•</span>
              <span>{project.year}</span>
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-text leading-[1.15]">
              <span className="gradient-text">{project.title}</span>
            </h1>
            <p className="mt-4 max-w-3xl text-base sm:text-lg text-muted leading-relaxed">
              {project.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {project.github && (
                <Button asChild variant="outline">
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </Button>
              )}
              {project.live && (
                <Button asChild variant="glow">
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                </Button>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass gradient-border mb-12 overflow-hidden rounded-3xl p-3 sm:p-4 bg-card/80 shadow-2xl"
          >
            <div className="relative w-full max-h-[520px] overflow-hidden rounded-2xl bg-black/60 flex items-center justify-center">
              <ProjectImage
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-[520px] object-contain sm:object-cover"
              />
            </div>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-2">
              <Card className="p-6 sm:p-8">
                <h2 className="mb-4 font-display text-xl font-semibold tracking-wide text-text flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent" /> Overview
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-muted">{project.longDescription}</p>
                <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wider">Role:</span>
                  <span className="rounded-lg bg-white/5 px-3 py-1 text-xs font-medium text-text border border-white/10">
                    {project.role}
                  </span>
                </div>
              </Card>

              <Card className="p-6 sm:p-8">
                <h2 className="mb-5 font-display text-xl font-semibold tracking-wide text-text flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent" /> Key Features
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted leading-relaxed p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <div className="grid gap-6 sm:grid-cols-2">
                <Card className="p-6 sm:p-8">
                  <h2 className="mb-4 font-display text-lg font-semibold tracking-wide text-text flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-purple" /> Challenges
                  </h2>
                  <ul className="space-y-3 text-sm text-muted">
                    {project.challenges.map((c) => (
                      <li key={c} className="flex items-start gap-3 leading-relaxed p-3 rounded-xl bg-white/[0.03] border border-white/5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card className="p-6 sm:p-8">
                  <h2 className="mb-4 font-display text-lg font-semibold tracking-wide text-text flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-secondary" /> Solutions
                  </h2>
                  <ul className="space-y-3 text-sm text-muted">
                    {project.solutions.map((s) => (
                      <li key={s} className="flex items-start gap-3 leading-relaxed p-3 rounded-xl bg-white/[0.03] border border-white/5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="p-6 sm:p-8">
                <h2 className="mb-4 font-display text-lg font-semibold text-text">Tech Stack</h2>
                <div className="flex flex-wrap gap-2.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-text transition hover:border-accent/40 hover:bg-accent/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>

              {project.architecture && (
                <Card className="p-6 sm:p-8">
                  <h2 className="mb-4 font-display text-lg font-semibold text-text">Architecture</h2>
                  <div className="flex flex-col gap-2">
                    {project.architecture.map((layer, i) => (
                      <div key={layer} className="flex flex-col items-center">
                        <div className="w-full rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-xs sm:text-sm font-medium text-text text-center shadow-sm">
                          {layer}
                        </div>
                        {i < project.architecture!.length - 1 && (
                          <div className="my-1.5 flex flex-col items-center">
                            <div className="h-4 w-0.5 bg-gradient-to-b from-accent to-secondary opacity-70" />
                            <div className="h-1.5 w-1.5 rotate-45 border-r border-b border-secondary opacity-70" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              <Card className="p-6 sm:p-8">
                <h2 className="mb-4 font-display text-lg font-semibold text-text">Gallery</h2>
                <div className="grid gap-4">
                  {project.gallery.map((img) => (
                    <div key={img} className="overflow-hidden rounded-xl border border-white/10 bg-black/40 p-1.5">
                      <ProjectImage
                        src={img}
                        alt={`${project.title} screenshot`}
                        className="w-full h-auto rounded-lg object-cover"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

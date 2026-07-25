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
      <section className="relative overflow-hidden pt-28 pb-20">
        <AuroraBackground />
        <div className="container-premium section-pad relative z-10">
          <Link
            to="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted hover:text-text"
          >
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <p className="mb-3 text-xs tracking-[0.2em] text-secondary uppercase">
              {project.category} · {project.year}
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="gradient-text">{project.title}</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">{project.subtitle}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.github && (
                <Button asChild variant="outline">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </Button>
              )}
              {project.live && (
                <Button asChild variant="glow">
                  <a href={project.live} target="_blank" rel="noreferrer">
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
            className="glass gradient-border mb-12 overflow-hidden rounded-3xl"
          >
            <ProjectImage
              src={project.image}
              alt={project.title}
              className="aspect-[21/9] w-full object-cover"
            />
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-2">
              <Card>
                <h2 className="mb-3 font-display text-xl font-semibold">Overview</h2>
                <p className="text-sm leading-relaxed text-muted">{project.longDescription}</p>
                <p className="mt-4 text-sm text-secondary">Role: {project.role}</p>
              </Card>

              <Card>
                <h2 className="mb-4 font-display text-xl font-semibold">Features</h2>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Card>

              <div className="grid gap-6 sm:grid-cols-2">
                <Card>
                  <h2 className="mb-4 font-display text-xl font-semibold">Challenges</h2>
                  <ul className="space-y-2 text-sm text-muted">
                    {project.challenges.map((c) => (
                      <li key={c} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card>
                  <h2 className="mb-4 font-display text-xl font-semibold">Solutions</h2>
                  <ul className="space-y-2 text-sm text-muted">
                    {project.solutions.map((s) => (
                      <li key={s} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <h2 className="mb-4 font-display text-lg font-semibold">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>

              {project.architecture && (
                <Card>
                  <h2 className="mb-4 font-display text-lg font-semibold">Architecture</h2>
                  <div className="space-y-3">
                    {project.architecture.map((layer, i) => (
                      <div key={layer} className="relative">
                        <div className="rounded-xl border border-accent/20 bg-accent/5 px-4 py-3 text-sm">
                          {layer}
                        </div>
                        {i < project.architecture!.length - 1 && (
                          <div className="mx-auto h-3 w-px bg-gradient-to-b from-accent to-secondary" />
                        )}
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              <Card>
                <h2 className="mb-3 font-display text-lg font-semibold">Gallery</h2>
                <div className="space-y-3">
                  {project.gallery.map((img) => (
                    <ProjectImage
                      key={img}
                      src={img}
                      alt={`${project.title} screenshot`}
                      className="rounded-xl border border-white/10"
                    />
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

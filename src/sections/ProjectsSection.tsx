import { ArrowUpRight, Github, ExternalLink } from '@/components/icons'
import { Link } from 'react-router-dom'
import { PROJECTS } from '@/data'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TiltCard } from '@/components/ui/TiltCard'
import { Button } from '@/components/ui/Button'
import { ProjectImage } from '@/components/ui/ProjectImage'
import { motion } from 'framer-motion'

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container-premium section-pad">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Work"
          description="Enterprise systems, map experiences, and product experiments — each built with intention."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <TiltCard className="glass gradient-border group h-full overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-accent/20 via-card to-purple/20">
                  <ProjectImage
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded-lg border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] backdrop-blur">
                    {project.category} · {project.year}
                  </span>
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold group-hover:gradient-text">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-secondary">{project.subtitle}</p>
                    </div>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition group-hover:border-accent/40 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.35)]"
                      aria-label={`Open ${project.title}`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <p className="mb-4 text-sm text-muted">{project.description}</p>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tech.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button asChild size="sm" variant="outline">
                      <Link to={`/projects/${project.slug}`}>Case Study</Link>
                    </Button>
                    {project.github && (
                      <Button asChild size="sm" variant="ghost">
                        <a href={project.github} target="_blank" rel="noreferrer">
                          <Github className="h-3.5 w-3.5" /> GitHub
                        </a>
                      </Button>
                    )}
                    {project.live && (
                      <Button asChild size="sm" variant="ghost">
                        <a href={project.live} target="_blank" rel="noreferrer">
                          <ExternalLink className="h-3.5 w-3.5" /> Live
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

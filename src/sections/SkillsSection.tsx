import { motion } from 'framer-motion'
import { SKILL_CATEGORIES } from '@/data'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TiltCard } from '@/components/ui/TiltCard'
import { Code2, Server, Database, Wrench, Palette } from '@/components/icons'
import { cn } from '@/utils/cn'

const categoryIcons: Record<string, typeof Code2> = {
  frontend: Code2,
  backend: Server,
  database: Database,
  tools: Wrench,
  design: Palette,
}

const categoryStyles: Record<
  string,
  {
    iconBg: string
    iconColor: string
    badgeBg: string
    badgeText: string
    borderGlow: string
    progressFill: string
    glowShadow: string
  }
> = {
  frontend: {
    iconBg: 'bg-red-500/15 border border-red-500/30',
    iconColor: 'text-red-400',
    badgeBg: 'bg-red-500/10 border border-red-500/25',
    badgeText: 'text-red-400',
    borderGlow: 'hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.25)]',
    progressFill: 'from-accent via-red-500 to-rose-400',
    glowShadow: 'shadow-[0_0_12px_rgba(239,68,68,0.45)]',
  },
  backend: {
    iconBg: 'bg-rose-500/15 border border-rose-500/30',
    iconColor: 'text-rose-400',
    badgeBg: 'bg-rose-500/10 border border-rose-500/25',
    badgeText: 'text-rose-400',
    borderGlow: 'hover:border-rose-500/50 hover:shadow-[0_0_30px_rgba(248,113,113,0.25)]',
    progressFill: 'from-rose-500 via-secondary to-purple',
    glowShadow: 'shadow-[0_0_12px_rgba(248,113,113,0.45)]',
  },
  database: {
    iconBg: 'bg-emerald-500/15 border border-emerald-500/30',
    iconColor: 'text-emerald-400',
    badgeBg: 'bg-emerald-500/10 border border-emerald-500/25',
    badgeText: 'text-emerald-400',
    borderGlow: 'hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]',
    progressFill: 'from-emerald-500 to-teal-400',
    glowShadow: 'shadow-[0_0_12px_rgba(16,185,129,0.45)]',
  },
  tools: {
    iconBg: 'bg-purple-500/15 border border-purple-500/30',
    iconColor: 'text-purple-400',
    badgeBg: 'bg-purple-500/10 border border-purple-500/25',
    badgeText: 'text-purple-400',
    borderGlow: 'hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]',
    progressFill: 'from-purple-500 via-indigo-500 to-accent',
    glowShadow: 'shadow-[0_0_12px_rgba(168,85,247,0.45)]',
  },
  design: {
    iconBg: 'bg-amber-500/15 border border-amber-500/30',
    iconColor: 'text-amber-400',
    badgeBg: 'bg-amber-500/10 border border-amber-500/25',
    badgeText: 'text-amber-400',
    borderGlow: 'hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]',
    progressFill: 'from-amber-500 to-accent',
    glowShadow: 'shadow-[0_0_12px_rgba(245,158,11,0.45)]',
  },
}

export function SkillsSection() {
  const topCategories = SKILL_CATEGORIES.filter(
    (c) => c.id === 'frontend' || c.id === 'backend',
  )
  const bottomCategories = SKILL_CATEGORIES.filter(
    (c) => c.id === 'database' || c.id === 'tools' || c.id === 'design',
  )

  const renderCard = (cat: (typeof SKILL_CATEGORIES)[0], index: number) => {
    const Icon = categoryIcons[cat.id] || Code2
    const style = categoryStyles[cat.id] || categoryStyles.frontend

    return (
      <motion.div
        key={cat.id}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 }}
        className="h-full"
      >
        <TiltCard
          className={cn(
            'glass gradient-border flex h-full flex-col justify-between rounded-3xl p-6 transition-all duration-500 sm:p-7',
            style.borderGlow,
          )}
        >
          <div>
            {/* Header */}
            <div className="mb-6 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    'flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110',
                    style.iconBg,
                  )}
                >
                  <Icon className={cn('h-5 w-5', style.iconColor)} />
                </div>
                <h3 className="font-display text-xl font-bold tracking-tight text-text">
                  {cat.title}
                </h3>
              </div>
              <span
                className={cn(
                  'rounded-lg px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase',
                  style.badgeBg,
                  style.badgeText,
                )}
              >
                {cat.skills.length} {cat.skills.length === 1 ? 'SKILL' : 'SKILLS'}
              </span>
            </div>

            {/* Skill list */}
            <div className="space-y-4">
              {cat.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-1.5 flex justify-between text-xs font-medium">
                    <span className="text-text/90 font-medium">{skill.name}</span>
                    <span className="text-muted font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/5 border border-white/5 p-[1px]">
                    <motion.div
                      className={cn(
                        'h-full rounded-full bg-gradient-to-r',
                        style.progressFill,
                        style.glowShadow,
                      )}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TiltCard>
      </motion.div>
    )
  }

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container-premium section-pad">
        <SectionHeading
          eyebrow="Skills"
          title="Capability Grid"
          description="A bento of the tools and stacks I use to ship polished, production-ready software."
        />

        <div className="space-y-6">
          {/* Top Row: 2 equal cards (Frontend & Backend) */}
          <div className="grid gap-6 lg:grid-cols-2">
            {topCategories.map((cat, i) => renderCard(cat, i))}
          </div>

          {/* Bottom Row: 3 equal cards (Database, Tools, Design) */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bottomCategories.map((cat, i) => renderCard(cat, i + 2))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { ACHIEVEMENTS } from '@/data'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useCountUp, useInView } from '@/hooks/useInView'
import { formatNumber } from '@/utils/cn'

function StatCard({
  label,
  value,
  suffix,
  prefix,
  active,
}: {
  label: string
  value: number
  suffix?: string
  prefix?: string
  active: boolean
}) {
  const count = useCountUp(value, active)
  return (
    <div className="glass gradient-border rounded-2xl p-6 text-center transition hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]">
      <p className="font-display text-3xl font-bold gradient-text sm:text-4xl">
        {prefix}
        {formatNumber(count)}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  )
}

export function AchievementsSection() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3)

  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="container-premium section-pad">
        <SectionHeading
          eyebrow="Impact"
          title="By The Numbers"
          description="A snapshot of momentum — projects shipped, tools mastered, and hours invested."
          align="center"
        />
        <div ref={ref} className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {ACHIEVEMENTS.map((a) => (
            <StatCard
              key={a.id}
              label={a.label}
              value={a.value}
              suffix={a.suffix}
              prefix={a.prefix}
              active={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

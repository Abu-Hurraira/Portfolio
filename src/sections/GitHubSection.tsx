import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, GitFork, Github, Star, Users } from '@/components/icons'
import { SITE } from '@/data'
import type { GitHubProfile, GitHubRepo } from '@/types'
import { fetchGitHubProfile, fetchGitHubRepos, fetchGitHubLanguages } from '@/services/github'
import { SectionHeading, Reveal } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { formatNumber } from '@/utils/cn'

export function GitHubSection() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [languages, setLanguages] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      const [p, r] = await Promise.all([fetchGitHubProfile(), fetchGitHubRepos(6)])
      if (!mounted) return
      setProfile(p)
      setRepos(r)
      setLanguages(await fetchGitHubLanguages(r))
      setLoading(false)
    })()
    return () => {
      mounted = false
    }
  }, [])

  return (
    <section id="github" className="relative py-24 sm:py-32">
      <div className="container-premium section-pad">
        <SectionHeading
          eyebrow="GitHub"
          title="Open Source Pulse"
          description="Live profile stats, repositories, and language distribution from GitHub."
        />

        {loading ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="glass h-36 animate-pulse rounded-2xl" />
            ))}
          </div>
        ) : (
          <>
            <Reveal>
              <Card className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  {profile?.avatar_url ? (
                    <img
                      src={profile.avatar_url}
                      alt={profile.login}
                      className="h-16 w-16 rounded-2xl border border-white/10"
                      loading="lazy"
                      decoding="async"
                      width={64}
                      height={64}
                    />
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20">
                      <Github className="h-7 w-7" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-display text-xl font-semibold">
                      {profile?.name || SITE.name}
                    </h3>
                    <p className="text-sm text-muted">@{profile?.login || SITE.githubUsername}</p>
                    <p className="mt-1 max-w-md text-sm text-muted">{profile?.bio}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2">
                    <p className="text-xs text-muted">Repos</p>
                    <p className="font-semibold">{profile?.public_repos ?? '—'}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2">
                    <p className="text-xs text-muted">Followers</p>
                    <p className="inline-flex items-center gap-1 font-semibold">
                      <Users className="h-3.5 w-3.5" />
                      {profile?.followers ?? '—'}
                    </p>
                  </div>
                  <Button asChild variant="outline">
                    <a href={SITE.github} target="_blank" rel="noreferrer">
                      <Github className="h-4 w-4" /> Profile
                    </a>
                  </Button>
                </div>
              </Card>
            </Reveal>

            {Object.keys(languages).length > 0 && (
              <Reveal delay={0.05}>
                <div className="mb-8 flex flex-wrap gap-2">
                  {Object.entries(languages)
                    .sort((a, b) => b[1] - a[1])
                    .map(([lang, count]) => (
                      <span
                        key={lang}
                        className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs text-secondary"
                      >
                        {lang} · {count}
                      </span>
                    ))}
                </div>
              </Reveal>
            )}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo, i) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass gradient-border group block rounded-2xl p-5 transition hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]"
                >
                  <div className="mb-3 flex items-start justify-between">
                    <h4 className="font-display font-semibold group-hover:text-secondary">
                      {repo.name}
                    </h4>
                    <ExternalLink className="h-3.5 w-3.5 text-muted opacity-0 transition group-hover:opacity-100" />
                  </div>
                  <p className="mb-4 line-clamp-2 text-sm text-muted">
                    {repo.description || 'No description'}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted">
                    {repo.language && <span>{repo.language}</span>}
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3 w-3" /> {formatNumber(repo.stargazers_count)}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitFork className="h-3 w-3" /> {formatNumber(repo.forks_count)}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {!repos.length && (
              <Card className="text-center text-sm text-muted">
                Unable to load repositories right now. Visit{' '}
                <a href={SITE.github} className="text-secondary underline">
                  GitHub
                </a>{' '}
                directly.
              </Card>
            )}
          </>
        )}
      </div>
    </section>
  )
}

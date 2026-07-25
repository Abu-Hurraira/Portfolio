import type { GitHubProfile, GitHubRepo } from '@/types'
import { SITE } from '@/data'

const BASE = 'https://api.github.com'

export async function fetchGitHubProfile(): Promise<GitHubProfile | null> {
  try {
    const res = await fetch(`${BASE}/users/${SITE.githubUsername}`, {
      headers: { Accept: 'application/vnd.github+json' },
    })
    if (!res.ok) return null
    return (await res.json()) as GitHubProfile
  } catch {
    return null
  }
}

export async function fetchGitHubRepos(limit = 8): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `${BASE}/users/${SITE.githubUsername}/repos?sort=updated&per_page=${limit}`,
      { headers: { Accept: 'application/vnd.github+json' } },
    )
    if (!res.ok) return []
    return (await res.json()) as GitHubRepo[]
  } catch {
    return []
  }
}

export async function fetchGitHubLanguages(repos: GitHubRepo[]): Promise<Record<string, number>> {
  const counts: Record<string, number> = {}
  for (const repo of repos) {
    if (repo.language) {
      counts[repo.language] = (counts[repo.language] ?? 0) + 1
    }
  }
  return counts
}

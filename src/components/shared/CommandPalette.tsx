import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Command, Search } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NAV_ITEMS, PROJECTS, SITE } from '@/data'
import { useApp } from '@/context/AppContext'
import { cn } from '@/utils/cn'
import { withBase } from '@/utils/assets'
import { scrollToHash } from '@/utils/navigation'

export function CommandPalette() {
  const { commandOpen, setCommandOpen } = useApp()
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const commands = useMemo(
    () => [
      ...NAV_ITEMS.map((n) => ({
        id: n.href,
        label: n.label,
        group: 'Navigate',
        action: () => {
          if (n.href.startsWith('/#')) {
            navigate('/')
            setTimeout(() => {
              scrollToHash(n.href.slice(1))
            }, 100)
          } else {
            navigate(n.href)
          }
        },
      })),
      ...PROJECTS.map((p) => ({
        id: p.slug,
        label: p.title,
        group: 'Projects',
        action: () => navigate(`/projects/${p.slug}`),
      })),
      {
        id: 'resume',
        label: 'Download Resume',
        group: 'Actions',
        action: () => window.open(withBase(SITE.resumeUrl), '_blank'),
      },
      {
        id: 'github',
        label: 'Open GitHub',
        group: 'Actions',
        action: () => window.open(SITE.github, '_blank'),
      },
    ],
    [navigate],
  )

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase()),
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setCommandOpen(!commandOpen)
      }
      if (e.key === 'Escape') setCommandOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [commandOpen, setCommandOpen])

  useEffect(() => {
    if (!commandOpen) setQuery('')
  }, [commandOpen])

  const run = (action: () => void) => {
    action()
    setCommandOpen(false)
  }

  return (
    <AnimatePresence>
      {commandOpen && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-start justify-center bg-black/60 px-4 pt-[15vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setCommandOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl"
            role="dialog"
            aria-label="Command palette"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
              <Search className="h-4 w-4 text-muted" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, projects, actions…"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted"
              />
              <kbd className="rounded border border-white/10 px-1.5 py-0.5 text-[10px] text-muted">
                ESC
              </kbd>
            </div>
            <div className="max-h-72 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-muted">No results</p>
              )}
              {filtered.map((c) => (
                <button
                  key={c.id}
                  onClick={() => run(c.action)}
                  className={cn(
                    'flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition hover:bg-white/8',
                  )}
                >
                  <div>
                    <p className="text-text">{c.label}</p>
                    <p className="text-[10px] text-muted">{c.group}</p>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-muted" />
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 border-t border-white/10 px-4 py-2 text-[10px] text-muted">
              <Command className="h-3 w-3" />
              <span>Ctrl / ⌘ + K</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

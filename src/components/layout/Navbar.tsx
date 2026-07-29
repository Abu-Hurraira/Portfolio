import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Command, Menu, Moon, Sun, Volume2, VolumeX, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV_ITEMS, SITE } from '@/data'
import { useApp, useTheme } from '@/context/AppContext'
import { Button } from '@/components/ui/Button'
import { Magnetic } from '@/components/ui/Magnetic'
import { cn } from '@/utils/cn'
import { withBase } from '@/utils/assets'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const { soundEnabled, toggleSound, setCommandOpen } = useApp()
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 40))

  const links = NAV_ITEMS.filter((n) => n.href.startsWith('/#') || n.href === '/contact' || n.href === '/company')

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
        scrolled ? 'border-b border-white/5 bg-bg/80 backdrop-blur-xl' : 'bg-transparent',
      )}
    >
      <div className="container-premium section-pad flex h-16 items-center justify-between lg:h-20">
        <Magnetic>
          <Link to="/" className="group flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-purple font-display text-sm font-bold shadow-[0_0_20px_rgba(239,68,68,0.4)]">
              A
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-wide sm:block">
              {SITE.shortName}
              <span className="text-muted">.dev</span>
            </span>
          </Link>
        </Magnetic>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.slice(0, 6).map((item) => {
            const isHome = location.pathname === '/' || location.pathname === import.meta.env.BASE_URL.replace(/\/$/, '')
            const href = item.href.startsWith('/#')
              ? isHome ? item.href.slice(1) : withBase(item.href)
              : withBase(item.href)

            return (
              <a
                key={item.href}
                href={href}
                className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-white/5 hover:text-text"
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Command palette"
            onClick={() => setCommandOpen(true)}
            className="hidden sm:inline-flex"
          >
            <Command className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Toggle sound" onClick={toggleSound}>
            {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Magnetic className="hidden md:block">
            <Button asChild size="sm" variant="glow">
              <Link to="/contact">Hire Me</Link>
            </Button>
          </Magnetic>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass border-t border-white/5 lg:hidden"
        >
          <div className="section-pad flex flex-col gap-1 py-4">
            {links.map((item) => {
              const isHome = location.pathname === '/' || location.pathname === import.meta.env.BASE_URL.replace(/\/$/, '')
              const href = item.href.startsWith('/#')
                ? isHome ? item.href.slice(1) : withBase(item.href)
                : withBase(item.href)

              return (
                <a
                  key={item.href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-muted hover:bg-white/5 hover:text-text"
                >
                  {item.label}
                </a>
              )
            })}
          </div>
        </motion.div>
      )}
    </header>
  )
}

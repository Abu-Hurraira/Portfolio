import { motion } from 'framer-motion'
import {
  Briefcase,
  FolderKanban,
  Github,
  Home,
  Mail,
  User,
} from '@/components/icons'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/utils/cn'
import { isHomePage, scrollToHash } from '@/utils/navigation'

const items = [
  { icon: Home, label: 'Home', href: '/#home' },
  { icon: User, label: 'About', href: '/#about' },
  { icon: Briefcase, label: 'Work', href: '/#experience' },
  { icon: FolderKanban, label: 'Projects', href: '/#projects' },
  { icon: Github, label: 'GitHub', href: '/#github' },
  { icon: Mail, label: 'Contact', href: '/contact' },
]

export function FloatingDock() {
  const location = useLocation()
  const isHome = isHomePage(location.pathname)

  return (
    <motion.nav
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.35, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-5 left-1/2 z-50 hidden -translate-x-1/2 md:block"
      aria-label="Dock navigation"
    >
      <div className="glass-strong flex items-center gap-1 rounded-2xl px-2 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
        {items.map((item) => {
          const Icon = item.icon
          const className = cn(
            'group relative flex h-11 w-11 items-center justify-center rounded-xl text-muted transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:text-text hover:shadow-[0_0_20px_rgba(239,68,68,0.35)]',
          )
          const isHash = item.href.startsWith('/#')

          if (isHash && isHome) {
            const hash = item.href.slice(1)
            return (
              <a
                key={item.label}
                href={hash}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToHash(hash)
                }}
                className={className}
                aria-label={item.label}
              >
                <Icon className="h-[18px] w-[18px]" />
                <span className="pointer-events-none absolute -top-9 rounded-md bg-card px-2 py-1 text-[10px] opacity-0 transition group-hover:opacity-100">
                  {item.label}
                </span>
              </a>
            )
          }

          return (
            <Link key={item.label} to={item.href} className={className} aria-label={item.label}>
              <Icon className="h-[18px] w-[18px]" />
              <span className="pointer-events-none absolute -top-9 rounded-md bg-card px-2 py-1 text-[10px] opacity-0 transition group-hover:opacity-100">
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </motion.nav>
  )
}

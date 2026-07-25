import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from '@/context/AppContext'

export function EasterEgg() {
  const { easterEgg } = useApp()

  return (
    <AnimatePresence>
      {easterEgg && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-24 left-1/2 z-[300] -translate-x-1/2"
        >
          <div className="glass-strong rounded-2xl px-6 py-4 text-center shadow-[0_0_40px_rgba(127,29,29),0.4)]">
            <p className="font-display text-lg font-bold gradient-text">Konami Unlocked</p>
            <p className="mt-1 text-xs text-muted">You found the engineer&apos;s secret. Nice.</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

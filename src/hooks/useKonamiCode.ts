import { useEffect } from 'react'
import { useApp } from '@/context/AppContext'

const SEQUENCE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
]

export function useKonamiCode() {
  const { triggerEasterEgg } = useApp()

  useEffect(() => {
    let index = 0
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
      const expected = SEQUENCE[index]
      if (key === expected || key === expected.toLowerCase()) {
        index += 1
        if (index === SEQUENCE.length) {
          triggerEasterEgg()
          index = 0
        }
      } else {
        index = 0
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [triggerEasterEgg])
}

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

interface AppContextValue {
  soundEnabled: boolean
  toggleSound: () => void
  commandOpen: boolean
  setCommandOpen: (v: boolean) => void
  easterEgg: boolean
  triggerEasterEgg: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)
const AppContext = createContext<AppContextValue | null>(null)

function applyTheme(theme: Theme) {
  const isLight = theme === 'light'
  document.body.classList.toggle('light', isLight)
  document.documentElement.classList.toggle('light', isLight)
  document.documentElement.style.colorScheme = isLight ? 'light' : 'dark'
  localStorage.setItem('theme', theme)
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark'
    return (localStorage.getItem('theme') as Theme) || 'dark'
  })
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [commandOpen, setCommandOpen] = useState(false)
  const [easterEgg, setEasterEgg] = useState(false)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  const toggleSound = useCallback(() => {
    setSoundEnabled((s) => !s)
  }, [])

  const triggerEasterEgg = useCallback(() => {
    setEasterEgg(true)
    setTimeout(() => setEasterEgg(false), 4000)
  }, [])

  const themeValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme],
  )

  const appValue = useMemo(
    () => ({
      soundEnabled,
      toggleSound,
      commandOpen,
      setCommandOpen,
      easterEgg,
      triggerEasterEgg,
    }),
    [soundEnabled, toggleSound, commandOpen, easterEgg, triggerEasterEgg],
  )

  return (
    <ThemeContext.Provider value={themeValue}>
      <AppContext.Provider value={appValue}>{children}</AppContext.Provider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within AppProvider')
  return ctx
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}

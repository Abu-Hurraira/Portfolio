import { useEffect, useState } from 'react'
import { cn } from '@/utils/cn'

interface TypewriterProps {
  words: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pause?: number
}

export function Typewriter({
  words,
  className,
  typingSpeed = 70,
  deletingSpeed = 40,
  pause = 1600,
}: TypewriterProps) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => i + 1)
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? word.slice(0, t.length - 1) : word.slice(0, t.length + 1),
          )
        },
        deleting ? deletingSpeed : typingSpeed,
      )
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pause])

  return (
    <span className={cn('inline-flex items-center', className)}>
      <span className="gradient-text">{text}</span>
      <span className="ml-0.5 inline-block h-[1.05em] w-[3px] animate-pulse bg-accent" />
    </span>
  )
}

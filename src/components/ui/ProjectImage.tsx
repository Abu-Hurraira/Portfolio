import { useState, type ImgHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

type ProjectImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src: string
}

/** Loads project screenshot; falls back to matching .svg placeholder if PNG is missing. */
export function ProjectImage({ src, alt, className, ...props }: ProjectImageProps) {
  const [current, setCurrent] = useState(src)

  return (
    <img
      src={current}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={cn(className)}
      onError={() => {
        if (current.endsWith('.png')) {
          setCurrent(current.replace(/\.png$/i, '.svg'))
        }
      }}
      {...props}
    />
  )
}

import { useState, type ImgHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'
import { withBase } from '@/utils/assets'

type ProjectImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src: string
}

/** Loads project screenshot; falls back to matching .svg placeholder if PNG is missing. */
export function ProjectImage({ src, alt, className, ...props }: ProjectImageProps) {
  const resolvedSrc = withBase(src)
  const [current, setCurrent] = useState(resolvedSrc)

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


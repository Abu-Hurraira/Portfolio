import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'glass gradient-border rounded-2xl p-6 transition-all duration-500 hover:shadow-[0_0_40px_rgba(239,68,68,0.15)]',
        className,
      )}
      {...props}
    />
  ),
)
Card.displayName = 'Card'

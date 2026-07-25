import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 magnetic',
  {
    variants: {
      variant: {
        default:
          'bg-accent text-white shadow-[0_0_24px_rgba(239,68,68,0.4)] hover:shadow-[0_0_36px_rgba(220,38,38,0.5)] hover:bg-accent/90',
        secondary:
          'bg-secondary/15 text-secondary border border-secondary/35 hover:bg-secondary/25 hover:shadow-[0_0_24px_rgba(248,113,113,0.25)]',
        outline:
          'border border-white/15 bg-white/5 text-text hover:bg-white/10 hover:border-accent/50',
        ghost: 'text-muted hover:text-text hover:bg-white/5',
        glow: 'relative overflow-hidden bg-gradient-to-r from-accent via-secondary to-purple text-white shadow-[0_0_30px_rgba(239,68,68,0.45)]',
      },
      size: {
        default: 'h-11 px-5 py-2',
        sm: 'h-9 rounded-lg px-3 text-xs',
        lg: 'h-12 rounded-2xl px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  },
)
Button.displayName = 'Button'

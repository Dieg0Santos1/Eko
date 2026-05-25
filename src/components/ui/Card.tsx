import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type CardProps = {
  className?: string
  children: ReactNode
}

export function Card({ className, children }: CardProps) {
  return (
    <section
      className={cn(
        'rounded-lg border border-white/10 bg-[#10162a]/82 p-4 shadow-[0_18px_70px_rgba(0,0,0,0.26)] backdrop-blur-xl',
        className,
      )}
    >
      {children}
    </section>
  )
}

type CardTitleProps = {
  icon: LucideIcon
  label: string
  className?: string
}

export function CardTitle({ icon: Icon, label, className }: CardTitleProps) {
  return (
    <div className={cn('flex items-center gap-2 text-sm font-extrabold text-white', className)}>
      <Icon className="size-5 text-violet-300" />
      {label}
    </div>
  )
}


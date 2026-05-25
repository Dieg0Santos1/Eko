import type { LucideIcon } from 'lucide-react'

type IconButtonProps = {
  icon: LucideIcon
  label: string
  badge?: string
}

export function IconButton({ icon: Icon, label, badge }: IconButtonProps) {
  return (
    <button
      className="relative grid size-12 place-items-center rounded-full border border-white/10 bg-white/[0.045] text-slate-200 transition hover:border-cyan-300/50 hover:text-white"
      type="button"
      aria-label={label}
      title={label}
    >
      <Icon className="size-5" />
      {badge ? (
        <span className="absolute -right-1 -top-1 grid size-6 place-items-center rounded-full bg-violet-500 text-xs font-bold text-white shadow-[0_0_22px_rgba(139,92,246,0.8)]">
          {badge}
        </span>
      ) : null}
    </button>
  )
}


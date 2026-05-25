import { navItems } from '@/data/navigation'
import { cn } from '@/lib/utils'

export function MobileDock() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-20 grid grid-cols-4 gap-2 rounded-lg border border-white/10 bg-[#0b1122]/90 p-2 backdrop-blur-xl xl:hidden">
      {navItems.slice(0, 4).map(({ icon: Icon, label, active }) => (
        <button
          className={cn(
            'grid h-12 place-items-center rounded-lg text-slate-400',
            active && 'bg-violet-600 text-white',
          )}
          key={label}
          type="button"
          aria-label={label}
        >
          <Icon className="size-5" />
        </button>
      ))}
    </div>
  )
}

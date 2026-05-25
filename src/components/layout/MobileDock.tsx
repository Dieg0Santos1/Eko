import { navItems } from '@/data/navigation'
import { cn } from '@/lib/utils'
import { NavLink } from 'react-router-dom'

export function MobileDock() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-20 grid grid-cols-4 gap-2 rounded-lg border border-white/10 bg-[#0b1122]/90 p-2 backdrop-blur-xl xl:hidden">
      {navItems.slice(0, 4).map(({ icon: Icon, label, path }) => (
        <NavLink
          className={({ isActive }) =>
            cn(
              'grid h-12 place-items-center rounded-lg text-slate-400',
              isActive && 'bg-violet-600 text-white',
            )
          }
          key={label}
          aria-label={label}
          to={path}
        >
          <Icon className="size-5" />
        </NavLink>
      ))}
    </div>
  )
}

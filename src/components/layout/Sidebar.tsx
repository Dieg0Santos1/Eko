import {
  CircleHelp,
  LogOut,
  Plus,
  Settings,
  type LucideIcon,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { AssistantOrb } from '@/components/brand/AssistantOrb'
import { navItems } from '@/data/navigation'
import { cn } from '@/lib/utils'

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 flex w-[236px] flex-col overflow-hidden border-r border-white/10 bg-[#080d1a]/74 p-4 backdrop-blur-xl">
      <div className="flex items-center gap-3 px-1">
        <AssistantOrb size="sm" />
        <span className="text-5xl font-black tracking-normal text-white">EKO</span>
      </div>

      <nav className="mt-10 space-y-2">
        {navItems.map(({ icon: Icon, label, path }) => (
          <NavLink
            className={({ isActive }) =>
              cn(
                'flex h-12 w-full items-center gap-4 rounded-lg px-4 text-left text-sm font-medium text-slate-400 transition hover:bg-white/[0.08] hover:text-white',
                isActive &&
                  'bg-[linear-gradient(135deg,rgba(146,73,255,0.98),rgba(67,38,170,0.62))] text-white shadow-[0_16px_50px_rgba(94,54,220,0.32)]',
              )
            }
            key={label}
            to={path}
          >
            <Icon className="size-5" />
            {label}
          </NavLink>
        ))}
      </nav>

      <NavLink
        className="mt-auto flex h-14 items-center justify-center gap-3 rounded-lg bg-[linear-gradient(135deg,#913cff,#5b18dd)] px-4 text-sm font-bold text-white shadow-[0_18px_50px_rgba(99,56,255,0.38)]"
        to="/tareas?nueva=1"
      >
        <Plus className="size-5" />
        Nueva tarea
      </NavLink>

      <div className="mt-9 space-y-2 text-slate-400">
        <SidebarUtility icon={CircleHelp} label="Ayuda" />
        <SidebarUtility icon={Settings} label="Configuración" />
      </div>

      <button
        className="mt-6 flex h-14 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3 text-sm text-slate-300"
        type="button"
      >
        <div className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-cyan-300 to-violet-600 text-xs font-bold">
          A
        </div>
        <span>Cerrar sesión</span>
        <LogOut className="ml-auto size-4 text-slate-500" />
      </button>
    </aside>
  )
}

type SidebarUtilityProps = {
  icon: LucideIcon
  label: string
}

function SidebarUtility({ icon: Icon, label }: SidebarUtilityProps) {
  return (
    <button
      className="flex h-11 w-full items-center gap-4 rounded-lg px-4 text-left text-sm transition hover:bg-white/[0.08] hover:text-white"
      type="button"
    >
      <Icon className="size-5" />
      {label}
    </button>
  )
}

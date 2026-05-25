import { Bell, Menu, Search } from 'lucide-react'
import { IconButton } from '@/components/ui/IconButton'

export function Header() {
  return (
    <header className="flex items-start justify-between gap-4">
      <div>
        <h1 className="max-w-[210px] text-[28px] font-extrabold leading-tight tracking-normal text-white sm:max-w-none sm:text-3xl">
          Buenos días, Alexander
        </h1>
        <p className="mt-2 text-base text-slate-400">24 de octubre, 2023 • 9:30 AM</p>
      </div>

      <div className="flex items-center gap-3">
        <IconButton label="Buscar" icon={Search} />
        <IconButton label="Notificaciones" icon={Bell} badge="3" />
        <button
          className="grid size-12 place-items-center rounded-full border border-white/10 bg-white/[0.045] text-slate-200 xl:hidden"
          type="button"
          aria-label="Abrir menú"
        >
          <Menu className="size-5" />
        </button>
      </div>
    </header>
  )
}

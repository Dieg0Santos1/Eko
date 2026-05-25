import { Grid2X2, ListFilter, ListTodo, Search, SlidersHorizontal } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { TaskStatus } from '@/types/tasks'

type TaskToolbarProps = {
  search: string
  status: TaskStatus | 'all'
  onSearchChange: (value: string) => void
  onStatusChange: (value: TaskStatus | 'all') => void
}

const tabs: Array<{ label: string; value: TaskStatus | 'all' }> = [
  { label: 'Todas', value: 'all' },
  { label: 'Pendientes', value: 'pending' },
  { label: 'En progreso', value: 'in-progress' },
  { label: 'Completadas', value: 'completed' },
]

export function TaskToolbar({
  search,
  status,
  onSearchChange,
  onStatusChange,
}: TaskToolbarProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <label className="flex h-12 w-full max-w-md items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 text-slate-400">
          <Search className="size-5 shrink-0" />
          <input
            className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Buscar tareas..."
            value={search}
          />
        </label>

        <div className="flex flex-wrap gap-3">
          <button
            className="flex h-12 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 text-sm font-bold text-white"
            type="button"
          >
            <SlidersHorizontal className="size-5 text-violet-300" />
            Filtros
            <span className="grid size-5 place-items-center rounded-full bg-violet-500 text-xs">2</span>
          </button>
          <button
            className="flex h-12 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 text-sm font-bold text-white"
            type="button"
          >
            <ListFilter className="size-5 text-violet-300" />
            Prioridad
          </button>
          <div className="flex overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
            <button className="grid size-12 place-items-center bg-violet-600/35 text-cyan-200" type="button" aria-label="Vista lista">
              <ListTodo className="size-5" />
            </button>
            <button className="grid size-12 place-items-center text-slate-400" type="button" aria-label="Vista cuadrícula">
              <Grid2X2 className="size-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 rounded-lg border border-white/10 bg-white/[0.035] p-1">
        {tabs.map((tab) => (
          <button
            className={cn(
              'h-10 rounded-md px-5 text-sm font-bold text-slate-300 transition hover:text-white',
              status === tab.value &&
                'bg-violet-600/35 text-white shadow-[inset_0_0_0_1px_rgba(168,85,247,0.45)]',
            )}
            key={tab.value}
            onClick={() => onStatusChange(tab.value)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}


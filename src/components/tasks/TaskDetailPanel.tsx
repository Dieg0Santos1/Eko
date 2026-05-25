import {
  Bell,
  CalendarDays,
  Check,
  Circle,
  Clock3,
  Folder,
  Plus,
  RotateCcw,
  Tag,
  X,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { PriorityBadge } from '@/components/tasks/TaskBadges'
import { Card } from '@/components/ui/Card'
import type { Task, TaskStatus } from '@/types/tasks'

type TaskDetailPanelProps = {
  task: Task
}

export function TaskDetailPanel({ task }: TaskDetailPanelProps) {
  const completedSubtasks = task.subtasks.filter((subtask) => subtask.completed).length
  const progress = Math.round((completedSubtasks / task.subtasks.length) * 100)

  return (
    <Card className="overflow-hidden p-0">
      <div className="border-b border-white/10 p-5">
        <div className="flex items-start justify-between gap-4">
          <PriorityBadge priority={task.priority} />
          <button
            className="grid size-8 place-items-center rounded-full text-slate-400 transition hover:bg-white/[0.06] hover:text-white"
            type="button"
            aria-label="Cerrar detalle"
          >
            <X className="size-5" />
          </button>
        </div>
        <h2 className="mt-5 text-2xl font-extrabold tracking-normal text-white">{task.title}</h2>
        <p className="mt-3 text-sm leading-6 text-slate-400">{task.description}</p>
      </div>

      <div className="space-y-4 border-b border-white/10 p-5">
        <DetailRow icon={Circle} label="Estado" value={statusLabels[task.status]} accent />
        <DetailRow icon={CalendarDays} label="Fecha" value="24 Oct 2023" />
        <DetailRow icon={Clock3} label="Hora" value={task.time} />
        <DetailRow icon={Folder} label="Categoría" value={task.category} />
        <DetailRow icon={Bell} label="Recordatorio" value={task.reminder} />
        <DetailRow icon={RotateCcw} label="Repetir" value={task.repeat} />
        <div className="flex items-start justify-between gap-4 text-sm">
          <span className="flex items-center gap-3 text-slate-400">
            <Tag className="size-4" />
            Etiquetas
          </span>
          <span className="flex flex-wrap justify-end gap-2">
            {task.tags.map((tag) => (
              <span className="rounded-md bg-violet-500/18 px-2 py-1 text-xs text-violet-100" key={tag}>
                {tag}
              </span>
            ))}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-extrabold tracking-normal text-white">Subtareas</h3>
          <span className="text-sm text-slate-400">
            {completedSubtasks}/{task.subtasks.length}
          </span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-5 space-y-3">
          {task.subtasks.map((subtask) => (
            <div className="flex items-center gap-3 text-sm text-slate-200" key={subtask.id}>
              <span className="grid size-5 place-items-center rounded-full border border-slate-500">
                {subtask.completed ? (
                  <Check className="size-4 rounded-full bg-emerald-400 p-0.5 text-[#09111e]" />
                ) : null}
              </span>
              {subtask.title}
            </div>
          ))}
        </div>

        <button
          className="mt-5 flex items-center gap-2 text-sm font-bold text-violet-200"
          type="button"
        >
          <Plus className="size-4" />
          Agregar subtarea
        </button>

        <button
          className="mt-7 h-12 w-full rounded-lg bg-[linear-gradient(135deg,#7438ff,#d946ef)] text-sm font-extrabold text-white shadow-[0_16px_42px_rgba(147,51,234,0.32)]"
          type="button"
        >
          Guardar cambios
        </button>
      </div>
    </Card>
  )
}

const statusLabels: Record<TaskStatus, string> = {
  pending: 'Pendiente',
  'in-progress': 'En progreso',
  completed: 'Completada',
}

type DetailRowProps = {
  icon: LucideIcon
  label: string
  value: string
  accent?: boolean
}

function DetailRow({ icon: Icon, label, value, accent }: DetailRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <span className="flex items-center gap-3 text-slate-400">
        <Icon className="size-4" />
        {label}
      </span>
      <span className={accent ? 'font-bold text-pink-200' : 'font-medium text-slate-200'}>{value}</span>
    </div>
  )
}

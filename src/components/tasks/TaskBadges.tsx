import { cn } from '@/lib/utils'
import type { TaskPriority, TaskStatus } from '@/types/tasks'

const priorityStyles: Record<TaskPriority, string> = {
  high: 'bg-pink-500/20 text-pink-200',
  medium: 'bg-amber-500/18 text-amber-200',
  low: 'bg-slate-500/20 text-slate-200',
}

const priorityLabels: Record<TaskPriority, string> = {
  high: 'Alta',
  medium: 'Media',
  low: 'Baja',
}

const statusStyles: Record<TaskStatus, string> = {
  pending: 'bg-sky-500/16 text-sky-200',
  'in-progress': 'bg-pink-500/18 text-pink-200',
  completed: 'bg-emerald-500/18 text-emerald-200',
}

const statusLabels: Record<TaskStatus, string> = {
  pending: 'Pendiente',
  'in-progress': 'En progreso',
  completed: 'Completada',
}

export function PriorityBadge({ priority }: { priority: TaskPriority }) {
  return (
    <span className={cn('rounded-md px-2 py-1 text-xs font-extrabold', priorityStyles[priority])}>
      {priorityLabels[priority]}
    </span>
  )
}

export function StatusBadge({ status }: { status: TaskStatus }) {
  return (
    <span className={cn('rounded-full px-3 py-1 text-xs font-extrabold', statusStyles[status])}>
      {statusLabels[status]}
    </span>
  )
}

import {
  CalendarDays,
  Circle,
  CheckCircle2,
  Clock3,
  GripVertical,
  Plus,
  Star,
} from 'lucide-react'
import { PriorityBadge, StatusBadge } from '@/components/tasks/TaskBadges'
import { cn } from '@/lib/utils'
import type { Task } from '@/types/tasks'

type TaskListProps = {
  tasks: Task[]
  selectedTaskId: string
  onCreateTask: () => void
  onSelectTask: (task: Task) => void
}

const groupLabels = {
  today: 'Hoy',
  tomorrow: 'Mañana',
}

const categoryAccent = {
  Trabajo: 'bg-sky-400',
  Estudios: 'bg-violet-400',
  Salud: 'bg-emerald-400',
  Personal: 'bg-amber-300',
}

export function TaskList({ tasks, selectedTaskId, onCreateTask, onSelectTask }: TaskListProps) {
  const groups = (['today', 'tomorrow'] as const)
    .map((group) => ({
      group,
      items: tasks.filter((task) => task.dateGroup === group),
    }))
    .filter(({ items }) => items.length > 0)

  return (
    <section className="space-y-6">
      {groups.map(({ group, items }) => (
        <div key={group}>
          <div className="mb-3 flex items-center gap-2">
            <h2 className="text-xl font-extrabold tracking-normal text-white">
              {groupLabels[group]}
            </h2>
            <span className="text-sm text-slate-500">•</span>
            <p className="text-sm font-medium text-slate-400">{items[0]?.dateLabel}</p>
          </div>
          <div className="space-y-2">
            {items.map((task) => (
              <TaskRow
                isSelected={task.id === selectedTaskId}
                key={task.id}
                onSelect={() => onSelectTask(task)}
                task={task}
              />
            ))}
          </div>
        </div>
      ))}

      <button
        className="flex h-14 w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.035] text-sm font-bold text-violet-200 transition hover:border-violet-300/50 hover:bg-violet-500/10"
        onClick={onCreateTask}
        type="button"
      >
        <Plus className="size-5" />
        Agregar nueva tarea
      </button>
    </section>
  )
}

type TaskRowProps = {
  task: Task
  isSelected: boolean
  onSelect: () => void
}

function TaskRow({ task, isSelected, onSelect }: TaskRowProps) {
  const completed = task.status === 'completed'

  return (
    <button
      className={cn(
        'group grid min-h-17 w-full grid-cols-[20px_22px_4px_minmax(0,1fr)_auto_28px] items-center gap-3 rounded-lg border border-white/[0.06] bg-[#10172a]/82 px-3 text-left transition hover:border-violet-300/35 hover:bg-white/[0.055]',
        isSelected &&
          'border-violet-400/35 bg-[linear-gradient(90deg,rgba(100,36,196,0.28),rgba(16,23,42,0.86))]',
      )}
      onClick={onSelect}
      type="button"
    >
      <GripVertical className="size-4 text-slate-600" />
      <span className="text-slate-500">
        {completed ? (
          <CheckCircle2 className="size-5 text-emerald-300" />
        ) : (
          <Circle className="size-5" />
        )}
      </span>
      <span className={cn('h-10 w-0.5 rounded-full', categoryAccent[task.category])} />
      <span className="min-w-0">
        <span className="flex min-w-0 items-center gap-2">
          <span className="truncate font-bold text-white">{task.title}</span>
          {task.priority === 'high' ? <PriorityBadge priority={task.priority} /> : null}
        </span>
        <span className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <CalendarDays className="size-3.5" />
            {task.category}
          </span>
          <span className="flex items-center gap-1">
            <Clock3 className="size-3.5" />
            {task.time}
          </span>
        </span>
      </span>
      <StatusBadge status={task.status} />
      <Star
        className={cn(
          'size-5 text-slate-500 transition group-hover:text-amber-200',
          task.favorite && 'fill-amber-300 text-amber-300',
        )}
      />
    </button>
  )
}

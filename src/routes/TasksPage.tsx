import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { NewTaskPanel } from '@/components/tasks/NewTaskPanel'
import { TaskDetailPanel } from '@/components/tasks/TaskDetailPanel'
import { TaskList } from '@/components/tasks/TaskList'
import { TaskSummaryCards } from '@/components/tasks/TaskSummaryCards'
import { TaskToolbar } from '@/components/tasks/TaskToolbar'
import { tasks } from '@/data/tasks'
import { AppShell } from '@/components/layout/AppShell'
import type { Task, TaskStatus } from '@/types/tasks'

export function TasksPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedTask, setSelectedTask] = useState<Task>(tasks[0])
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState<TaskStatus | 'all'>('all')
  const panelMode = searchParams.get('nueva') === '1' ? 'create' : 'detail'

  const filteredTasks = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    return tasks.filter((task) => {
      const matchesStatus = status === 'all' || task.status === status
      const matchesSearch =
        normalizedSearch.length === 0 ||
        task.title.toLowerCase().includes(normalizedSearch) ||
        task.category.toLowerCase().includes(normalizedSearch) ||
        task.tags.some((tag) => tag.toLowerCase().includes(normalizedSearch))

      return matchesStatus && matchesSearch
    })
  }, [search, status])

  const openCreatePanel = () => {
    setSearchParams({ nueva: '1' })
  }
  const openDetailPanel = (task: Task) => {
    setSelectedTask(task)
    setSearchParams({})
  }

  const renderSidePanel = () => (
    <AnimatePresence initial={false} mode="wait">
      {panelMode === 'create' ? (
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 36 }}
          initial={{ opacity: 0, x: 36 }}
          key="new-task"
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          <NewTaskPanel
            onCancel={() => {
              setSearchParams({})
            }}
          />
        </motion.div>
      ) : (
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 36 }}
          initial={{ opacity: 0, x: 36 }}
          key={selectedTask.id}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          <TaskDetailPanel task={selectedTask} />
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <AppShell rightRail={renderSidePanel()}>
      <header className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-normal text-white">Tareas</h1>
          <p className="mt-2 text-base text-slate-400">
            Organiza, prioriza y completa tus tareas con claridad.
          </p>
        </div>
        <button
          className="flex h-12 w-fit items-center gap-3 rounded-lg bg-[linear-gradient(135deg,#913cff,#5b18dd)] px-5 text-sm font-extrabold text-white shadow-[0_18px_50px_rgba(99,56,255,0.35)]"
          onClick={openCreatePanel}
          type="button"
        >
          <Plus className="size-5" />
          Nueva tarea
        </button>
      </header>

      <section className="mt-6 space-y-5">
        <TaskSummaryCards />
        <TaskToolbar
          onSearchChange={setSearch}
          onStatusChange={setStatus}
          search={search}
          status={status}
        />
        <TaskList
          onCreateTask={openCreatePanel}
          onSelectTask={openDetailPanel}
          selectedTaskId={selectedTask.id}
          tasks={filteredTasks}
        />
        <div className="xl:hidden">
          {renderSidePanel()}
        </div>
      </section>
    </AppShell>
  )
}

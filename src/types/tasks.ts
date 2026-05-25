import type { LucideIcon } from 'lucide-react'

export type TaskStatus = 'pending' | 'in-progress' | 'completed'
export type TaskPriority = 'high' | 'medium' | 'low'
export type TaskCategory = 'Trabajo' | 'Estudios' | 'Salud' | 'Personal'

export type TaskSubtask = {
  id: string
  title: string
  completed: boolean
}

export type Task = {
  id: string
  title: string
  description: string
  dateGroup: 'today' | 'tomorrow'
  dateLabel: string
  time: string
  category: TaskCategory
  status: TaskStatus
  priority: TaskPriority
  tags: string[]
  favorite?: boolean
  reminder: string
  repeat: string
  subtasks: TaskSubtask[]
}

export type TaskSummary = {
  icon: LucideIcon
  label: string
  value: string
  helper: string
  tone: string
}


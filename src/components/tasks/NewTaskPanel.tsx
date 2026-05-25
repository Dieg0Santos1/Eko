import { CalendarDays, Clock3, Folder, Plus, Sparkles, Tag, X } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { Card } from '@/components/ui/Card'

type NewTaskPanelProps = {
  onCancel: () => void
}

export function NewTaskPanel({ onCancel }: NewTaskPanelProps) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="border-b border-white/10 p-5">
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-500/18 px-3 py-1 text-xs font-extrabold text-violet-100">
            <Sparkles className="size-4" />
            Nueva tarea
          </span>
          <button
            aria-label="Cerrar formulario"
            className="grid size-8 place-items-center rounded-full text-slate-400 transition hover:bg-white/[0.06] hover:text-white"
            onClick={onCancel}
            type="button"
          >
            <X className="size-5" />
          </button>
        </div>
        <h2 className="mt-5 text-2xl font-extrabold tracking-normal text-white">Crear tarea</h2>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Define los detalles principales para que EKO pueda ayudarte a organizarla.
        </p>
      </div>

      <form className="space-y-5 p-5">
        <Field label="Título">
          <input
            className="field-control"
            placeholder="Ej. Preparar informe semanal"
            type="text"
          />
        </Field>

        <Field label="Descripción">
          <textarea
            className="field-control min-h-24 resize-none py-3"
            placeholder="Describe qué se debe completar..."
          />
        </Field>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
          <Field icon={CalendarDays} label="Fecha">
            <input className="field-control" type="date" />
          </Field>
          <Field icon={Clock3} label="Hora">
            <input className="field-control" type="time" />
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
          <Field icon={Folder} label="Categoría">
            <select className="field-control">
              <option>Trabajo</option>
              <option>Estudios</option>
              <option>Salud</option>
              <option>Personal</option>
            </select>
          </Field>
          <Field label="Prioridad">
            <select className="field-control">
              <option>Media</option>
              <option>Alta</option>
              <option>Baja</option>
            </select>
          </Field>
        </div>

        <Field icon={Tag} label="Etiquetas">
          <input
            className="field-control"
            placeholder="presentación, diseño, Q3"
            type="text"
          />
        </Field>

        <div className="rounded-lg border border-white/10 bg-white/[0.025] p-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-extrabold tracking-normal text-white">Subtareas</h3>
            <button className="flex items-center gap-2 text-sm font-bold text-violet-200" type="button">
              <Plus className="size-4" />
              Agregar
            </button>
          </div>
          <div className="mt-4 space-y-3">
            <input className="field-control" placeholder="Primera subtarea" type="text" />
            <input className="field-control" placeholder="Segunda subtarea" type="text" />
          </div>
        </div>

        <button
          className="h-12 w-full rounded-lg bg-[linear-gradient(135deg,#7438ff,#d946ef)] text-sm font-extrabold text-white shadow-[0_16px_42px_rgba(147,51,234,0.32)]"
          type="button"
        >
          Crear tarea
        </button>
      </form>
    </Card>
  )
}

type FieldProps = {
  icon?: LucideIcon
  label: string
  children: ReactNode
}

function Field({ icon: Icon, label, children }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-300">
        {Icon ? <Icon className="size-4 text-violet-300" /> : null}
        {label}
      </span>
      {children}
    </label>
  )
}

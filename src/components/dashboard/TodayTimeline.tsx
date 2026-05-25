import { Check, MoreVertical } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { dayPlan } from '@/data/dashboard'
import { cn } from '@/lib/utils'

export function TodayTimeline() {
  return (
    <Card className="flex h-full flex-col p-5">
      <h3 className="text-xl font-extrabold tracking-normal text-white">Tu día de hoy</h3>
      <div className="mt-5 flex flex-1 flex-col justify-between gap-2">
        {dayPlan.map((item, index) => (
          <div className="grid grid-cols-[76px_24px_1fr] items-center gap-2" key={item.title}>
            <span className="text-sm text-slate-300">{item.time}</span>
            <div className="relative grid place-items-center">
              {index !== dayPlan.length - 1 ? (
                <span className="absolute left-1/2 top-4 h-12 w-px -translate-x-1/2 bg-white/12" />
              ) : null}
              <span
                className={cn(
                  'relative z-10 grid size-4 place-items-center rounded-full border border-slate-500 bg-[#0d1428]',
                  item.done && 'border-emerald-300 bg-emerald-400 text-[#09111e]',
                  index === 1 && 'border-violet-200 bg-violet-500',
                )}
              >
                {item.done ? <Check className="size-3" /> : null}
              </span>
            </div>
            <div className="flex min-h-12 items-center gap-3 rounded-lg border border-white/[0.08] bg-white/[0.035] px-4">
              <span className="min-w-0 flex-1 truncate text-sm text-slate-100">{item.title}</span>
              {item.people ? (
                <span className="hidden text-xs text-slate-400 sm:inline">{item.people} pers.</span>
              ) : null}
              {item.tag ? <PriorityBadge value={item.tag} /> : null}
              <MoreVertical className="size-4 shrink-0 text-slate-500" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

function PriorityBadge({ value }: { value: string }) {
  const tone =
    value === 'Alta'
      ? 'bg-pink-400/18 text-pink-200'
      : value === 'Media'
        ? 'bg-cyan-400/18 text-cyan-200'
        : 'bg-slate-400/18 text-slate-200'

  return (
    <span className={cn('rounded-md px-2 py-1 text-xs font-bold', tone)}>{value}</span>
  )
}

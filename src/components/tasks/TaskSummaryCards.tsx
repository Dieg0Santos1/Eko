import { taskSummaries } from '@/data/tasks'
import { cn } from '@/lib/utils'

export function TaskSummaryCards() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {taskSummaries.map(({ icon: Icon, label, value, helper, tone }) => (
        <article
          className="rounded-lg border border-white/10 bg-[#10162a]/82 p-4 shadow-[0_18px_70px_rgba(0,0,0,0.22)]"
          key={label}
        >
          <div className="flex items-start gap-4">
            <div className={cn('grid size-11 shrink-0 place-items-center rounded-full', tone)}>
              <Icon className="size-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-300">{label}</p>
              <p className="mt-2 text-2xl font-extrabold tracking-normal text-white">{value}</p>
              <p className="mt-1 text-sm text-slate-400">{helper}</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}


import { CalendarDays, ChevronDown, Clock3, Sparkles } from 'lucide-react'
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip as ChartTooltip,
} from 'recharts'
import { Card, CardTitle } from '@/components/ui/Card'
import { productivityData } from '@/data/dashboard'

export function LeftStatsGroup() {
  return (
    <section className="grid gap-4 sm:grid-cols-2">
      <ProgressCard />
      <MetricCard
        icon={CalendarDays}
        label="Próxima actividad"
        value="11:00 AM"
        title="Reunión de equipo"
        description="Sala: Innovación"
        pill="En 1h 30m"
      />
    </section>
  )
}

export function RightStatsGroup() {
  return (
    <section className="grid gap-4 sm:grid-cols-2">
      <MetricCard
        icon={Clock3}
        label="Tiempo libre"
        value="2h 15m"
        description="Tiempo disponible antes de tu próxima reunión"
      />
      <ProductivityCard />
    </section>
  )
}

function ProgressCard() {
  const value = 62
  const radius = 38
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <Card className="grid h-56 grid-cols-[78px_1fr] items-center gap-3">
      <div className="relative size-[76px]">
        <svg className="size-[76px] -rotate-90" viewBox="0 0 96 96">
          <circle
            cx="48"
            cy="48"
            fill="none"
            r={radius}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="9"
          />
          <circle
            cx="48"
            cy="48"
            fill="none"
            r={radius}
            stroke="url(#progressGradient)"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            strokeWidth="9"
          />
          <defs>
            <linearGradient id="progressGradient" x1="0" x2="1" y1="0" y2="1">
              <stop stopColor="#19d3ff" />
              <stop offset="1" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute inset-0 grid place-items-center text-base font-extrabold text-white">
          {value}%
        </span>
      </div>
      <div>
        <CardTitle className="text-sm" icon={Sparkles} label="Progreso del día" />
        <p className="mt-4 text-sm text-slate-300">
          <strong className="text-white">5 de 8</strong> tareas completadas
        </p>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/[0.08]">
          <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-500" />
        </div>
      </div>
    </Card>
  )
}

type MetricCardProps = {
  icon: typeof CalendarDays
  label: string
  value: string
  title?: string
  description: string
  pill?: string
}

function MetricCard({ icon, label, value, title, description, pill }: MetricCardProps) {
  return (
    <Card className="h-56 overflow-hidden">
      <CardTitle icon={icon} label={label} />
      <p className="mt-5 text-3xl font-extrabold tracking-normal text-white">{value}</p>
      {title ? <p className="mt-2 font-bold text-white">{title}</p> : null}
      <p className="mt-1 text-sm leading-6 text-slate-400">{description}</p>
      {pill ? (
        <span className="mt-4 inline-flex h-8 items-center rounded-lg bg-violet-400/15 px-3 text-xs font-bold text-violet-100">
          {pill}
        </span>
      ) : null}
    </Card>
  )
}

function ProductivityCard() {
  return (
    <Card className="h-56 overflow-hidden">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-bold text-white">Horas productivas</p>
          <p className="mt-5 text-3xl font-extrabold tracking-normal text-white 2xl:text-2xl">
            3h 45m
          </p>
        </div>
        <button
          className="flex h-8 items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-xs text-slate-300"
          type="button"
        >
          Hoy
          <ChevronDown className="size-3" />
        </button>
      </div>
      <div className="mt-2 h-18">
        <ResponsiveContainer height="100%" width="100%">
          <AreaChart data={productivityData} margin={{ left: 0, right: 0, top: 8 }}>
            <defs>
              <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.34} />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <ChartTooltip
              contentStyle={{
                background: '#11182c',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 8,
                color: '#fff',
              }}
            />
            <Area
              dataKey="value"
              fill="url(#chartFill)"
              isAnimationActive={false}
              stroke="#22d3ee"
              strokeWidth={3}
              type="monotone"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

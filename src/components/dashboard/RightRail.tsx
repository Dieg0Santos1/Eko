import { Coins, Flame, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { UserAvatar } from '@/components/brand/UserAvatar'
import { Card, CardTitle } from '@/components/ui/Card'
import { cn } from '@/lib/utils'

const achievements = [
  {
    icon: Sparkles,
    title: 'Enfoque total',
    description: 'Completa 5 tareas sin distracciones',
    reward: '+100 XP',
    tone: 'from-violet-400 to-fuchsia-500',
  },
  {
    icon: Flame,
    title: 'Madrugador',
    description: 'Completa una tarea antes de las 8:00 AM',
    reward: '+50 XP',
    tone: 'from-amber-300 to-orange-500',
  },
]

export function RightRail() {
  return (
    <>
      <ProfilePanel />
      <UnlockPanel />
      <AchievementsPanel />
    </>
  )
}

function ProfilePanel() {
  return (
    <Card className="text-center">
      <UserAvatar />
      <div className="mt-4 flex items-center justify-center gap-5">
        <div>
          <p className="text-xs font-bold text-slate-400">Nivel</p>
          <div className="mt-1 grid size-16 place-items-center rounded-lg border border-violet-300/60 bg-violet-500/15 text-3xl font-black text-white">
            14
          </div>
        </div>
        <div className="text-left">
          <p className="font-bold text-white">Explorador Élite</p>
          <p className="mt-3 text-sm font-bold text-slate-300">1,240 / 2,000 XP</p>
          <div className="mt-2 h-2 w-36 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-500" />
          </div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <MiniStat icon={Coins} label="EKO Coins" value="1,250" />
        <MiniStat icon={Flame} label="Racha actual" value="12 días" />
      </div>
    </Card>
  )
}

function UnlockPanel() {
  return (
    <Card className="mt-5">
      <CardTitle icon={Sparkles} label="Próximo desbloqueo" />
      <div className="mt-5 overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(135deg,#1d1462,#312385_42%,#0aa3d3)] p-4">
        <div className="relative h-28 overflow-hidden rounded-lg bg-[linear-gradient(180deg,#130a35,#32125d_52%,#092d55)]">
          <div className="absolute bottom-0 left-4 h-16 w-9 bg-[#07132b] shadow-[32px_8px_0_#0b1834,78px_-8px_0_#111846,126px_4px_0_#0b1834,178px_-14px_0_#111846]" />
          <div className="absolute inset-x-0 bottom-0 h-10 bg-[linear-gradient(180deg,transparent,rgba(34,211,238,0.35))]" />
          <div className="absolute left-10 top-8 size-9 rounded-full bg-cyan-400/35 blur-lg" />
          <div className="absolute right-12 top-8 size-9 rounded-full bg-fuchsia-400/35 blur-lg" />
        </div>
        <p className="mt-4 text-lg font-extrabold tracking-normal text-white">Fondo Cyberpunk</p>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/12">
          <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-violet-400 to-cyan-300" />
        </div>
        <p className="mt-3 text-sm text-slate-300">500 / 750 XP</p>
      </div>
    </Card>
  )
}

function AchievementsPanel() {
  return (
    <Card className="mt-5">
      <div className="flex items-center justify-between">
        <h3 className="font-extrabold tracking-normal text-white">Logros recientes</h3>
        <button className="text-xs font-bold text-violet-200" type="button">
          Ver todos
        </button>
      </div>
      <div className="mt-5 space-y-3">
        {achievements.map(({ icon: Icon, title, description, reward, tone }) => (
          <div
            className="flex gap-4 rounded-lg border border-white/[0.08] bg-white/[0.035] p-4"
            key={title}
          >
            <div
              className={cn(
                'grid size-14 shrink-0 place-items-center rounded-lg bg-gradient-to-br shadow-lg',
                tone,
              )}
            >
              <Icon className="size-7 text-white" />
            </div>
            <div>
              <p className="font-bold text-white">{title}</p>
              <p className="mt-1 text-sm leading-5 text-slate-400">{description}</p>
              <p className="mt-2 text-sm font-bold text-slate-100">{reward}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

type MiniStatProps = {
  icon: LucideIcon
  label: string
  value: string
}

function MiniStat({ icon: Icon, label, value }: MiniStatProps) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-3 text-left">
      <div className="flex items-center gap-2 text-xs text-slate-400">
        <Icon className="size-4 text-amber-300" />
        {label}
      </div>
      <p className="mt-1 text-lg font-extrabold tracking-normal text-white">{value}</p>
    </div>
  )
}


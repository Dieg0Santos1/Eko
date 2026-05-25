import { Flame, Sparkles } from 'lucide-react'
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
    <Card className="overflow-hidden bg-[radial-gradient(circle_at_28%_18%,rgba(147,51,234,0.18),transparent_34%),rgba(16,22,42,0.86)] p-5 text-center">
      <div className="grid items-center gap-2 sm:grid-cols-[1fr_116px]">
        <div className="-ml-3">
          <UserAvatar />
        </div>
        <div className="grid justify-items-center">
          <p className="text-sm font-bold text-slate-300">Nivel</p>
          <LevelBadge value="14" />
        </div>
      </div>
      <p className="mt-3 text-lg font-extrabold tracking-normal text-white">Explorador Élite</p>
      <p className="mt-4 text-lg font-extrabold tracking-normal text-slate-100">
        1,240 <span className="font-bold text-slate-400">/ 2,000 XP</span>
      </p>
      <div className="mx-auto mt-2 h-2 w-48 max-w-full overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-[0_0_18px_rgba(217,70,239,0.5)]" />
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <RewardStat kind="coins" label="EKO Coins" value="1,250" />
        <RewardStat kind="streak" label="Racha actual" value="12 días" />
      </div>
    </Card>
  )
}

function LevelBadge({ value }: { value: string }) {
  return (
    <div className="relative mt-2 grid size-20 place-items-center">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#7c3cff,#c45cff)] [clip-path:polygon(50%_0%,93%_25%,93%_75%,50%_100%,7%_75%,7%_25%)] shadow-[0_0_26px_rgba(139,92,246,0.42)]" />
      <div className="absolute inset-[3px] bg-[#17123a] [clip-path:polygon(50%_0%,93%_25%,93%_75%,50%_100%,7%_75%,7%_25%)]" />
      <span className="relative text-3xl font-black tracking-normal text-white">{value}</span>
    </div>
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

type RewardStatProps = {
  kind: 'coins' | 'streak'
  label: string
  value: string
}

function RewardStat({ kind, label, value }: RewardStatProps) {
  return (
    <div className="flex min-h-16 items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.035] p-2.5 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      {kind === 'coins' ? <CoinIcon /> : <StreakIcon />}
      <div className="min-w-0">
        <p className="whitespace-nowrap text-xs font-medium text-slate-300">{label}</p>
        <p className="mt-0.5 whitespace-nowrap text-lg font-extrabold tracking-normal text-white">
          {value}
        </p>
      </div>
    </div>
  )
}

function CoinIcon() {
  return (
    <div className="relative grid size-10 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#ffe66d,#f59e0b)] shadow-[0_0_20px_rgba(245,158,11,0.42)]">
      <div className="absolute inset-1 rounded-full border-2 border-white/55" />
      <span className="relative text-lg font-black text-amber-900">$</span>
    </div>
  )
}

function StreakIcon() {
  return (
    <div className="grid size-10 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#ffda63,#fb923c_52%,#ef4444)] shadow-[0_0_22px_rgba(249,115,22,0.38)]">
      <Flame className="size-6 fill-white text-white drop-shadow-[0_2px_6px_rgba(127,29,29,0.45)]" />
    </div>
  )
}

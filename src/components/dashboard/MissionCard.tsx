import { Coins, Star, Target } from 'lucide-react'
import { Card, CardTitle } from '@/components/ui/Card'

export function MissionCard() {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <CardTitle icon={Target} label="Misión diaria" />
        <span className="text-xs text-slate-400">14h 29m restantes</span>
      </div>
      <div className="mt-7 flex items-center justify-between gap-4">
        <p className="font-bold text-white">Completa 3 tareas de enfoque</p>
        <span className="text-slate-300">2 / 3</span>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/[0.08]">
        <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300" />
      </div>
      <div className="mt-4 flex gap-5 text-sm text-slate-300">
        <span className="flex items-center gap-1">
          <Star className="size-4 text-violet-300" /> +20 XP
        </span>
        <span className="flex items-center gap-1">
          <Coins className="size-4 text-amber-300" /> +50
        </span>
      </div>
    </Card>
  )
}


import { Send, Sparkles } from 'lucide-react'
import { AssistantOrb } from '@/components/brand/AssistantOrb'
import { Card, CardTitle } from '@/components/ui/Card'

export function QuickChat() {
  return (
    <Card className="p-5">
      <CardTitle icon={Sparkles} label="Chat rápido con EKO" />
      <div className="mt-5 space-y-4">
        <div className="ml-auto max-w-[78%] rounded-lg bg-violet-600/55 px-4 py-3 text-sm text-white">
          EKO, agenda una reunión mañana a las 8.
          <p className="mt-1 text-right text-xs text-violet-100/80">9:28 AM</p>
        </div>
        <div className="flex gap-3">
          <AssistantOrb size="xs" />
          <div className="max-w-[78%] rounded-lg bg-white/[0.06] px-4 py-3 text-sm leading-6 text-slate-100">
            Perfecto, he programado la reunión para mañana a las 8:00 AM.
            <p className="mt-1 text-right text-xs text-slate-400">9:28 AM</p>
          </div>
        </div>
      </div>
      <div className="mt-5 flex h-11 items-center rounded-lg border border-white/10 bg-[#0b1122] pl-4">
        <input
          className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          placeholder="Escribe un mensaje..."
        />
        <button
          className="m-1 grid size-9 place-items-center rounded-lg bg-violet-600 text-white"
          type="button"
          aria-label="Enviar mensaje"
        >
          <Send className="size-4" />
        </button>
      </div>
    </Card>
  )
}

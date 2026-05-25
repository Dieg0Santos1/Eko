import { Mic, Zap } from 'lucide-react'
import { AssistantOrb } from '@/components/brand/AssistantOrb'
import { NetworkMesh } from '@/components/brand/NetworkMesh'

export function HeroRecommendation() {
  return (
    <section className="relative mt-6 overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(47,19,94,0.94),rgba(12,16,38,0.96)_48%,rgba(10,24,48,0.88))] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.35)]">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 opacity-75 lg:block">
        <NetworkMesh />
      </div>
      <div className="relative grid items-center gap-7 lg:grid-cols-[205px_minmax(0,1fr)]">
        <AssistantOrb size="lg" />
        <div>
          <span className="inline-flex h-8 items-center rounded-lg bg-violet-400/18 px-3 text-sm font-bold text-violet-100">
            EKO te recomienda
          </span>
          <h2 className="mt-4 max-w-2xl text-2xl font-extrabold tracking-normal text-white sm:text-[28px] sm:leading-[1.18]">
            Hoy es un buen día para avanzar en tu presentación Q3
          </h2>
          <p className="mt-3 max-w-xl text-base leading-6 text-slate-300">
            Tienes una reunión importante a las 2:00 PM.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              className="flex h-12 items-center gap-3 rounded-lg bg-[linear-gradient(135deg,#934dff,#5b19df)] px-5 text-sm font-bold text-white shadow-[0_16px_40px_rgba(104,60,255,0.34)]"
              type="button"
            >
              <Mic className="size-5" />
              Hablar con EKO
            </button>
            <button
              className="flex h-12 items-center gap-3 rounded-lg border border-white/15 bg-white/[0.035] px-5 text-sm font-bold text-white transition hover:border-cyan-300/50"
              type="button"
            >
              <Zap className="size-5 text-amber-300" />
              Organizar mi día
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


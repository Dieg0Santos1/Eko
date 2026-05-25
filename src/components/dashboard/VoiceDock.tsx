import { Mic } from 'lucide-react'

export function VoiceDock() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-10 hidden justify-center xl:flex">
      <div className="relative flex w-[560px] max-w-[44vw] items-center justify-center">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
        <div className="absolute inset-x-12 top-1/2 h-8 -translate-y-1/2 bg-[repeating-linear-gradient(90deg,transparent_0_9px,rgba(59,130,246,0.8)_9px_11px,transparent_11px_18px)] opacity-70 blur-[0.2px]" />
        <button
          className="pointer-events-auto relative grid size-20 place-items-center rounded-full border-[3px] border-cyan-300/80 bg-[linear-gradient(135deg,#7038ff,#912fff)] text-white shadow-[0_0_44px_rgba(139,92,246,0.65)]"
          type="button"
          aria-label="Activar micrófono"
        >
          <Mic className="size-9" />
        </button>
      </div>
    </div>
  )
}


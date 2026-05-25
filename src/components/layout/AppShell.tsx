import type { ReactNode } from 'react'
import { VoiceDock } from '@/components/dashboard/VoiceDock'
import { MobileDock } from '@/components/layout/MobileDock'
import { Sidebar } from '@/components/layout/Sidebar'

type AppShellProps = {
  children: ReactNode
  rightRail: ReactNode
}

export function AppShell({ children, rightRail }: AppShellProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070b17] text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_5%,rgba(98,59,255,0.20),transparent_27%),radial-gradient(circle_at_82%_0%,rgba(12,185,215,0.13),transparent_24%),linear-gradient(135deg,#080b17_0%,#080b15_44%,#0b1020_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:64px_64px] opacity-25" />

      <section className="relative grid min-h-screen grid-cols-1 xl:grid-cols-[236px_minmax(720px,1fr)_350px]">
        <Sidebar />
        <div className="min-w-0 border-x border-white/10 px-4 py-6 sm:px-6 lg:px-7">
          {children}
        </div>
        <aside className="hidden min-w-0 px-5 py-6 xl:block">{rightRail}</aside>
      </section>

      <MobileDock />
      <VoiceDock />
    </main>
  )
}

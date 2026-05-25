import { HeroRecommendation } from '@/components/dashboard/HeroRecommendation'
import { MissionCard } from '@/components/dashboard/MissionCard'
import { QuickChat } from '@/components/dashboard/QuickChat'
import { RightRail } from '@/components/dashboard/RightRail'
import { StatsGrid } from '@/components/dashboard/StatsGrid'
import { TodayTimeline } from '@/components/dashboard/TodayTimeline'
import { AppShell } from '@/components/layout/AppShell'
import { Header } from '@/components/layout/Header'

export function DashboardPage() {
  return (
    <AppShell rightRail={<RightRail />}>
      <Header />
      <HeroRecommendation />
      <StatsGrid />

      <section className="mt-5 grid gap-4 lg:grid-cols-[1.06fr_0.94fr]">
        <TodayTimeline />
        <div className="grid gap-4">
          <MissionCard />
          <QuickChat />
        </div>
      </section>
    </AppShell>
  )
}


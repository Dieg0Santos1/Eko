import { HeroRecommendation } from '@/components/dashboard/HeroRecommendation'
import { MissionCard } from '@/components/dashboard/MissionCard'
import { QuickChat } from '@/components/dashboard/QuickChat'
import { RightRail } from '@/components/dashboard/RightRail'
import { LeftStatsGroup, RightStatsGroup } from '@/components/dashboard/StatsGrid'
import { TodayTimeline } from '@/components/dashboard/TodayTimeline'
import { AppShell } from '@/components/layout/AppShell'
import { Header } from '@/components/layout/Header'

export function DashboardPage() {
  return (
    <AppShell rightRail={<RightRail />}>
      <Header />
      <HeroRecommendation />

      <section className="mt-5 grid items-start gap-4 lg:grid-cols-[1.06fr_0.94fr]">
        <div className="grid content-start gap-4">
          <LeftStatsGroup />
          <TodayTimeline />
        </div>
        <div className="grid content-start gap-4">
          <RightStatsGroup />
          <MissionCard />
          <QuickChat />
        </div>
      </section>
    </AppShell>
  )
}

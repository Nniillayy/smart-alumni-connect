import { MobileShell } from "@/components/mobile/mobile-shell"
import { QuickStats } from "@/components/mobile/home/quick-stats"
import { UpcomingEvents } from "@/components/mobile/home/upcoming-events"
import { RecentJobs } from "@/components/mobile/home/recent-jobs"
import { ActivityFeed } from "@/components/mobile/home/activity-feed"

export default function HomePage() {
  return (
    <MobileShell>
      <div className="flex flex-col gap-5 py-4">
        {/* Welcome Banner */}
        <div className="px-4">
          <div className="rounded-xl bg-gradient-to-r from-primary to-accent p-4 shadow-lg">
            <p className="text-xs font-medium text-primary-foreground/80">
              Welcome back,
            </p>
            <h2 className="text-lg font-bold text-primary-foreground mt-0.5">
              John Doe
            </h2>
            <p className="text-xs text-primary-foreground/70 mt-1">
              Class of 2022 - Computer Science
            </p>
          </div>
        </div>

        <QuickStats />
        <UpcomingEvents />
        <RecentJobs />
        <ActivityFeed />
      </div>
    </MobileShell>
  )
}

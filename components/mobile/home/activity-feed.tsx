"use client"

import { cn } from "@/lib/utils"

const activities = [
  {
    id: 1,
    user: "Sarah Chen",
    initials: "SC",
    action: "connected with",
    target: "Mike Johnson",
    time: "10 min ago",
    color: "bg-primary/10 text-primary",
  },
  {
    id: 2,
    user: "Alex Rivera",
    initials: "AR",
    action: "posted a new job:",
    target: "UX Designer at DesignCo",
    time: "30 min ago",
    color: "bg-accent/10 text-accent",
  },
  {
    id: 3,
    user: "Priya Sharma",
    initials: "PS",
    action: "earned the badge",
    target: "Top Contributor",
    time: "1h ago",
    color: "bg-warning/10 text-warning",
  },
  {
    id: 4,
    user: "David Kim",
    initials: "DK",
    action: "donated to",
    target: "Scholarship Fund 2026",
    time: "2h ago",
    color: "bg-success/10 text-success",
  },
]

export function ActivityFeed() {
  return (
    <section className="px-4">
      <h2 className="text-sm font-semibold text-foreground mb-3">
        Recent Activity
      </h2>
      <div className="flex flex-col gap-2.5">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-3 rounded-xl bg-card border border-border p-3 shadow-sm"
          >
            <div
              className={cn(
                "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold",
                activity.color
              )}
            >
              {activity.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-foreground leading-relaxed">
                <span className="font-semibold">{activity.user}</span>{" "}
                <span className="text-muted-foreground">
                  {activity.action}
                </span>{" "}
                <span className="font-semibold">{activity.target}</span>
              </p>
              <span className="text-[10px] text-muted-foreground mt-0.5 block">
                {activity.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

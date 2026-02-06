"use client"

import { Users, Briefcase, Calendar, Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  {
    label: "Connections",
    value: "128",
    icon: Users,
    color: "bg-primary/10 text-primary",
  },
  {
    label: "Job Posts",
    value: "24",
    icon: Briefcase,
    color: "bg-accent/10 text-accent",
  },
  {
    label: "Events",
    value: "8",
    icon: Calendar,
    color: "bg-success/10 text-success",
  },
  {
    label: "Points",
    value: "540",
    icon: Trophy,
    color: "bg-warning/10 text-warning",
  },
]

export function QuickStats() {
  return (
    <div className="grid grid-cols-4 gap-2 px-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-1.5 rounded-xl bg-card p-3 shadow-sm border border-border"
          >
            <div
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-lg",
                stat.color
              )}
            >
              <Icon className="h-4 w-4" />
            </div>
            <span className="text-base font-bold text-foreground">
              {stat.value}
            </span>
            <span className="text-[10px] text-muted-foreground font-medium text-center leading-tight">
              {stat.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}

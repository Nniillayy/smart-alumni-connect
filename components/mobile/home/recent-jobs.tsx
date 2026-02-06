"use client"

import { MapPin, Building2, ChevronRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const jobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    postedAgo: "2h ago",
    logo: "TC",
    logoColor: "bg-primary/10 text-primary",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "InnovateLabs",
    location: "Remote",
    type: "Full-time",
    postedAgo: "5h ago",
    logo: "IL",
    logoColor: "bg-accent/10 text-accent",
  },
  {
    id: 3,
    title: "Data Science Intern",
    company: "DataFlow Analytics",
    location: "New York, NY",
    type: "Internship",
    postedAgo: "1d ago",
    logo: "DA",
    logoColor: "bg-success/10 text-success",
  },
]

export function RecentJobs() {
  return (
    <section className="px-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-foreground">Recent Jobs</h2>
        <Link
          href="/jobs"
          className="flex items-center gap-0.5 text-xs font-medium text-primary"
        >
          See all
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="flex flex-col gap-2.5">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex items-start gap-3 rounded-xl bg-card border border-border p-3.5 shadow-sm"
          >
            <div
              className={cn(
                "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-xs font-bold",
                job.logoColor
              )}
            >
              {job.logo}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-foreground line-clamp-1">
                {job.title}
              </h3>
              <div className="flex items-center gap-1.5 mt-0.5">
                <Building2 className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                <span className="text-xs text-muted-foreground line-clamp-1">
                  {job.company}
                </span>
              </div>
              <div className="flex items-center gap-3 mt-1.5">
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-muted-foreground" />
                  <span className="text-[11px] text-muted-foreground">
                    {job.location}
                  </span>
                </div>
                <span className="inline-flex items-center rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                  {job.type}
                </span>
              </div>
            </div>
            <span className="text-[10px] text-muted-foreground flex-shrink-0 mt-0.5">
              {job.postedAgo}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

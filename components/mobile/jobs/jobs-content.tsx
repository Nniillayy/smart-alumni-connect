"use client"

import { useState } from "react"
import {
  Search,
  SlidersHorizontal,
  MapPin,
  Building2,
  Clock,
  ExternalLink,
  Bookmark,
  BookmarkCheck,
} from "lucide-react"
import { cn } from "@/lib/utils"

const filters = ["All", "Full-time", "Part-time", "Internship", "Remote"]

const jobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Build scalable microservices and lead a team of 5 engineers. Strong experience in React, Node.js, and cloud infrastructure required.",
    postedAgo: "2 hours ago",
    logo: "TC",
    logoColor: "bg-primary/10 text-primary",
    salary: "$150k - $200k",
    saved: false,
  },
  {
    id: 2,
    title: "Product Manager",
    company: "InnovateLabs",
    location: "Remote",
    type: "Full-time",
    description:
      "Drive product strategy for our B2B SaaS platform. 3+ years of PM experience required.",
    postedAgo: "5 hours ago",
    logo: "IL",
    logoColor: "bg-accent/10 text-accent",
    salary: "$130k - $170k",
    saved: true,
  },
  {
    id: 3,
    title: "Data Science Intern",
    company: "DataFlow Analytics",
    location: "New York, NY",
    type: "Internship",
    description:
      "Work with our data team on ML models for predictive analytics. Python and SQL required.",
    postedAgo: "1 day ago",
    logo: "DA",
    logoColor: "bg-success/10 text-success",
    salary: "$35/hr",
    saved: false,
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "DesignStudio",
    location: "Austin, TX",
    type: "Full-time",
    description:
      "Create pixel-perfect user interfaces with React and TypeScript for design tool products.",
    postedAgo: "2 days ago",
    logo: "DS",
    logoColor: "bg-warning/10 text-warning",
    salary: "$120k - $160k",
    saved: false,
  },
  {
    id: 5,
    title: "Marketing Associate",
    company: "GrowthCo",
    location: "Remote",
    type: "Part-time",
    description:
      "Manage social media campaigns and content marketing for an ed-tech startup.",
    postedAgo: "3 days ago",
    logo: "GC",
    logoColor: "bg-primary/10 text-primary",
    salary: "$30/hr",
    saved: false,
  },
]

export function JobsContent() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [savedJobs, setSavedJobs] = useState<Set<number>>(
    new Set(jobs.filter((j) => j.saved).map((j) => j.id))
  )

  const filteredJobs = jobs.filter(
    (job) => activeFilter === "All" || job.type === activeFilter
  )

  const toggleSave = (id: number) => {
    setSavedJobs((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <div className="flex flex-col gap-4 py-4">
      {/* Search & Filter */}
      <div className="px-4">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search jobs, companies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
          <button
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:bg-muted"
            aria-label="Filter options"
          >
            <SlidersHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Filter pills */}
      <div className="flex gap-2 overflow-x-auto px-4 pb-0.5 scrollbar-hide">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "flex-shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium transition-all",
              activeFilter === filter
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-secondary"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Results count */}
      <div className="px-4">
        <p className="text-xs text-muted-foreground">
          {filteredJobs.length} jobs found
        </p>
      </div>

      {/* Job cards */}
      <div className="flex flex-col gap-3 px-4">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="rounded-xl bg-card border border-border p-4 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div
                className={cn(
                  "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg text-xs font-bold",
                  job.logoColor
                )}
              >
                {job.logo}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold text-foreground leading-snug">
                    {job.title}
                  </h3>
                  <button
                    onClick={() => toggleSave(job.id)}
                    className="flex-shrink-0 text-muted-foreground hover:text-primary transition-colors"
                    aria-label={
                      savedJobs.has(job.id) ? "Unsave job" : "Save job"
                    }
                  >
                    {savedJobs.has(job.id) ? (
                      <BookmarkCheck className="h-4 w-4 text-primary" />
                    ) : (
                      <Bookmark className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Building2 className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    {job.company}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-2.5 leading-relaxed line-clamp-2">
              {job.description}
            </p>

            <div className="flex flex-wrap items-center gap-2 mt-3">
              <span className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                <MapPin className="h-2.5 w-2.5" />
                {job.location}
              </span>
              <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                {job.type}
              </span>
              <span className="inline-flex items-center rounded-md bg-success/10 px-2 py-0.5 text-[10px] font-semibold text-success">
                {job.salary}
              </span>
            </div>

            <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
              <div className="flex items-center gap-1 text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span className="text-[10px]">{job.postedAgo}</span>
              </div>
              <button className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                Apply
                <ExternalLink className="h-3 w-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

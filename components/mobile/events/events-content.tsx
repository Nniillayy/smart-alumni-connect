"use client"

import { useState } from "react"
import {
  Search,
  MapPin,
  Clock,
  Users,
  Video,
  Building,
  CalendarDays,
} from "lucide-react"
import { cn } from "@/lib/utils"

const filters = ["All", "Virtual", "In-Person", "Hybrid"]

const events = [
  {
    id: 1,
    title: "Alumni Meetup 2026",
    description:
      "Annual gathering of alumni from all departments. Network with peers, enjoy panel discussions, and reconnect with faculty.",
    type: "in-person",
    date: "Feb 15, 2026",
    time: "6:00 PM - 9:00 PM",
    location: "Campus Grand Auditorium",
    attendees: 142,
    maxAttendees: 200,
    organizer: "Alumni Association",
    featured: true,
  },
  {
    id: 2,
    title: "Tech Talk: AI in Industry",
    description:
      "Learn about the latest trends in AI adoption across industries from leading alumni in the field.",
    type: "virtual",
    date: "Feb 20, 2026",
    time: "3:00 PM - 4:30 PM",
    location: "Zoom Webinar",
    attendees: 78,
    maxAttendees: 500,
    organizer: "CS Department",
    featured: false,
  },
  {
    id: 3,
    title: "Career Workshop: Resume Building",
    description:
      "Interactive workshop on building an effective resume. Get feedback from senior alumni recruiters.",
    type: "hybrid",
    date: "Mar 1, 2026",
    time: "10:00 AM - 12:00 PM",
    location: "Innovation Lab & Zoom",
    attendees: 35,
    maxAttendees: 60,
    organizer: "Career Services",
    featured: false,
  },
  {
    id: 4,
    title: "Startup Pitch Night",
    description:
      "Alumni founders pitch their startups to a panel of investors and fellow alumni mentors.",
    type: "in-person",
    date: "Mar 10, 2026",
    time: "7:00 PM - 10:00 PM",
    location: "Entrepreneurship Center",
    attendees: 65,
    maxAttendees: 100,
    organizer: "E-Cell",
    featured: false,
  },
  {
    id: 5,
    title: "Wellness & Mindfulness Session",
    description:
      "Virtual session on managing stress and maintaining wellness in professional life.",
    type: "virtual",
    date: "Mar 15, 2026",
    time: "5:00 PM - 6:00 PM",
    location: "Google Meet",
    attendees: 28,
    maxAttendees: 100,
    organizer: "Wellness Club",
    featured: false,
  },
]

function getEventTypeIcon(type: string) {
  switch (type) {
    case "virtual":
      return Video
    case "in-person":
      return Building
    default:
      return Video
  }
}

function getEventTypeColor(type: string) {
  switch (type) {
    case "virtual":
      return "bg-primary/10 text-primary"
    case "in-person":
      return "bg-success/10 text-success"
    case "hybrid":
      return "bg-accent/10 text-accent"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function EventsContent() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredEvents = events.filter(
    (event) =>
      activeFilter === "All" ||
      event.type === activeFilter.toLowerCase()
  )

  return (
    <div className="flex flex-col gap-4 py-4">
      {/* Search */}
      <div className="px-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>
      </div>

      {/* Filters */}
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

      {/* Featured Event */}
      {filteredEvents.find((e) => e.featured) && (
        <div className="px-4">
          {filteredEvents
            .filter((e) => e.featured)
            .map((event) => (
              <div
                key={event.id}
                className="rounded-xl bg-gradient-to-br from-primary to-accent p-4 shadow-lg"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center rounded-md bg-primary-foreground/20 px-2 py-0.5 text-[10px] font-semibold text-primary-foreground">
                    Featured
                  </span>
                  <span className="inline-flex items-center rounded-md bg-primary-foreground/20 px-2 py-0.5 text-[10px] font-semibold text-primary-foreground capitalize">
                    {event.type}
                  </span>
                </div>
                <h3 className="text-base font-bold text-primary-foreground">
                  {event.title}
                </h3>
                <p className="text-xs text-primary-foreground/80 mt-1 line-clamp-2">
                  {event.description}
                </p>
                <div className="flex flex-col gap-1.5 mt-3">
                  <div className="flex items-center gap-1.5 text-primary-foreground/80">
                    <CalendarDays className="h-3 w-3" />
                    <span className="text-xs">
                      {event.date} at {event.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-primary-foreground/80">
                    <MapPin className="h-3 w-3" />
                    <span className="text-xs">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-primary-foreground/80">
                    <Users className="h-3 w-3" />
                    <span className="text-xs">
                      {event.attendees}/{event.maxAttendees} attending
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex -space-x-1.5">
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-6 w-6 rounded-full border-2 border-primary bg-primary-foreground/30"
                      />
                    ))}
                  </div>
                  <button className="rounded-lg bg-primary-foreground px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary-foreground/90">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Events list */}
      <div className="flex flex-col gap-3 px-4">
        {filteredEvents
          .filter((e) => !e.featured)
          .map((event) => (
            <div
              key={event.id}
              className="rounded-xl bg-card border border-border p-4 shadow-sm"
            >
              <div className="flex items-start gap-3">
                {/* Date block */}
                <div className="flex flex-col items-center justify-center rounded-lg bg-muted px-2.5 py-2 flex-shrink-0 min-w-[52px]">
                  <span className="text-[10px] font-medium text-muted-foreground uppercase">
                    {event.date.split(" ")[0]}
                  </span>
                  <span className="text-lg font-bold text-foreground leading-tight">
                    {event.date.split(" ")[1].replace(",", "")}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-semibold capitalize",
                        getEventTypeColor(event.type)
                      )}
                    >
                      {event.type}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span className="text-[10px]">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span className="text-[10px]">{event.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span className="text-[10px]">
                        {event.attendees}/{event.maxAttendees}
                      </span>
                    </div>
                    <button className="rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                      RSVP
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

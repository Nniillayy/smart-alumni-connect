"use client"

import { MapPin, Clock, ChevronRight } from "lucide-react"
import Link from "next/link"

const events = [
  {
    id: 1,
    title: "Alumni Meetup 2026",
    type: "in-person",
    date: "Feb 15",
    time: "6:00 PM",
    location: "Campus Auditorium",
    attendees: 42,
  },
  {
    id: 2,
    title: "Tech Talk: AI in Industry",
    type: "virtual",
    date: "Feb 20",
    time: "3:00 PM",
    location: "Zoom",
    attendees: 78,
  },
  {
    id: 3,
    title: "Career Workshop",
    type: "hybrid",
    date: "Mar 1",
    time: "10:00 AM",
    location: "Innovation Lab",
    attendees: 35,
  },
]

export function UpcomingEvents() {
  return (
    <section className="px-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-foreground">
          Upcoming Events
        </h2>
        <Link
          href="/events"
          className="flex items-center gap-0.5 text-xs font-medium text-primary"
        >
          See all
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-1 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex-shrink-0 w-56 snap-start rounded-xl bg-card border border-border p-4 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2.5">
              <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                {event.type}
              </span>
              <span className="text-xs text-muted-foreground font-medium">
                {event.date}
              </span>
            </div>
            <h3 className="text-sm font-semibold text-foreground mb-2 line-clamp-1">
              {event.title}
            </h3>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Clock className="h-3 w-3 flex-shrink-0" />
                <span className="text-xs">{event.time}</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="h-3 w-3 flex-shrink-0" />
                <span className="text-xs line-clamp-1">{event.location}</span>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex -space-x-1.5">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="h-5 w-5 rounded-full border-2 border-card bg-muted"
                  />
                ))}
                <div className="flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-card bg-primary/10 px-1">
                  <span className="text-[9px] font-bold text-primary">
                    +{event.attendees}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

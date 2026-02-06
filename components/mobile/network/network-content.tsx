"use client"

import { useState } from "react"
import { Search, UserPlus, Check, X, MapPin, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = ["Discover", "Requests", "My Network"]

const suggestions = [
  {
    id: 1,
    name: "Sarah Chen",
    initials: "SC",
    role: "Software Engineer at Google",
    department: "Computer Science",
    year: 2021,
    location: "Mountain View, CA",
    mutualConnections: 12,
    color: "from-primary to-accent",
  },
  {
    id: 2,
    name: "Michael Torres",
    initials: "MT",
    role: "Product Designer at Meta",
    department: "Design",
    year: 2020,
    location: "New York, NY",
    mutualConnections: 8,
    color: "from-accent to-primary",
  },
  {
    id: 3,
    name: "Emily Watson",
    initials: "EW",
    role: "Data Scientist at Netflix",
    department: "Statistics",
    year: 2022,
    location: "Los Angeles, CA",
    mutualConnections: 5,
    color: "from-primary to-success",
  },
  {
    id: 4,
    name: "Raj Patel",
    initials: "RP",
    role: "ML Engineer at OpenAI",
    department: "AI & ML",
    year: 2021,
    location: "San Francisco, CA",
    mutualConnections: 15,
    color: "from-warning to-accent",
  },
]

const requests = [
  {
    id: 1,
    name: "Lisa Park",
    initials: "LP",
    role: "Frontend Developer",
    department: "Computer Science",
    year: 2023,
    color: "from-primary to-accent",
  },
  {
    id: 2,
    name: "James Wilson",
    initials: "JW",
    role: "Business Analyst",
    department: "Business Admin",
    year: 2022,
    color: "from-accent to-primary",
  },
]

const connections = [
  {
    id: 1,
    name: "Anna Lee",
    initials: "AL",
    role: "UX Researcher at Apple",
    department: "Psychology",
    year: 2020,
    color: "from-primary to-accent",
  },
  {
    id: 2,
    name: "Chris Brown",
    initials: "CB",
    role: "Backend Engineer at Stripe",
    department: "Computer Science",
    year: 2021,
    color: "from-accent to-primary",
  },
  {
    id: 3,
    name: "Nina Shah",
    initials: "NS",
    role: "Consultant at McKinsey",
    department: "Economics",
    year: 2019,
    color: "from-success to-primary",
  },
]

export function NetworkContent() {
  const [activeTab, setActiveTab] = useState("Discover")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex flex-col gap-4 py-4">
      {/* Search */}
      <div className="px-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search alumni by name, company, skill..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4">
        <div className="flex gap-1 rounded-xl bg-muted p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "flex-1 rounded-lg py-2 text-xs font-medium transition-all",
                activeTab === tab
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground"
              )}
            >
              {tab}
              {tab === "Requests" && (
                <span className="ml-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[9px] font-bold text-destructive-foreground">
                  {requests.length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className="px-4">
        {activeTab === "Discover" && (
          <div className="flex flex-col gap-3">
            <p className="text-xs text-muted-foreground">
              People you may know from your university
            </p>
            {suggestions.map((person) => (
              <div
                key={person.id}
                className="flex items-start gap-3 rounded-xl bg-card border border-border p-3.5 shadow-sm"
              >
                <div
                  className={cn(
                    "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-xs font-bold text-primary-foreground",
                    person.color
                  )}
                >
                  {person.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-foreground">
                    {person.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                    {person.role}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-[10px] text-muted-foreground">
                      {person.department} &apos;{String(person.year).slice(2)}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      {person.mutualConnections} mutual
                    </span>
                  </div>
                </div>
                <button className="flex h-8 items-center gap-1 rounded-lg bg-primary px-3 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                  <UserPlus className="h-3.5 w-3.5" />
                  <span>Connect</span>
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Requests" && (
          <div className="flex flex-col gap-3">
            <p className="text-xs text-muted-foreground">
              {requests.length} pending connection requests
            </p>
            {requests.map((person) => (
              <div
                key={person.id}
                className="flex items-start gap-3 rounded-xl bg-card border border-border p-3.5 shadow-sm"
              >
                <div
                  className={cn(
                    "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-xs font-bold text-primary-foreground",
                    person.color
                  )}
                >
                  {person.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-foreground">
                    {person.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {person.role}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    {person.department} &apos;{String(person.year).slice(2)}
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
                    aria-label="Accept"
                  >
                    <Check className="h-4 w-4" />
                  </button>
                  <button
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted"
                    aria-label="Decline"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "My Network" && (
          <div className="flex flex-col gap-3">
            <p className="text-xs text-muted-foreground">
              {connections.length} connections
            </p>
            {connections.map((person) => (
              <div
                key={person.id}
                className="flex items-center gap-3 rounded-xl bg-card border border-border p-3.5 shadow-sm"
              >
                <div
                  className={cn(
                    "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-xs font-bold text-primary-foreground",
                    person.color
                  )}
                >
                  {person.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-foreground">
                    {person.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                    {person.role}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    {person.department} &apos;{String(person.year).slice(2)}
                  </p>
                </div>
                <button className="flex h-8 items-center rounded-lg border border-border px-3 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted">
                  Message
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

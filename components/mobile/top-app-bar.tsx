"use client"

import { Bell, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function TopAppBar() {
  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border pt-safe">
      <div className="flex items-center justify-between px-4 h-14">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
            <span className="text-sm font-bold text-primary-foreground">
              SA
            </span>
          </div>
          <div>
            <h1 className="text-base font-semibold text-foreground leading-tight">
              Smart Alumni
            </h1>
            <p className="text-xs text-muted-foreground leading-tight">
              Connect
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            className="relative flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Messages"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="absolute right-1.5 top-1.5 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
          </button>
          <button
            className="relative flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1">
              <span className="text-[10px] font-bold text-destructive-foreground">
                3
              </span>
            </span>
          </button>
          <button
            className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full ring-2 ring-primary/20"
            aria-label="Profile"
          >
            <div className="h-full w-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-xs font-bold text-primary-foreground">
                JD
              </span>
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}

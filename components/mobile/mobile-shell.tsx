"use client"

import { TopAppBar } from "./top-app-bar"
import { BottomNav } from "./bottom-nav"

export function MobileShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-dvh max-w-md mx-auto bg-background">
      <TopAppBar />
      <main className="pb-20">{children}</main>
      <BottomNav />
    </div>
  )
}

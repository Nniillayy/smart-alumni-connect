"use client"

import {
  Settings,
  Edit3,
  MapPin,
  GraduationCap,
  Linkedin,
  Award,
  Trophy,
  Heart,
  ChevronRight,
  Moon,
  Sun,
  LogOut,
  Shield,
  HelpCircle,
  Star,
} from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

const badges = [
  { name: "Early Adopter", icon: Star, color: "bg-warning/10 text-warning" },
  {
    name: "Top Contributor",
    icon: Trophy,
    color: "bg-primary/10 text-primary",
  },
  { name: "Mentor", icon: Award, color: "bg-accent/10 text-accent" },
  { name: "Philanthropist", icon: Heart, color: "bg-success/10 text-success" },
]

const menuItems = [
  {
    label: "Edit Profile",
    icon: Edit3,
    section: "account",
  },
  {
    label: "Privacy & Security",
    icon: Shield,
    section: "account",
  },
  {
    label: "Help & Support",
    icon: HelpCircle,
    section: "support",
  },
  {
    label: "Sign Out",
    icon: LogOut,
    section: "support",
    destructive: true,
  },
]

export function ProfileContent() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex flex-col gap-5 py-4">
      {/* Profile Header */}
      <div className="px-4">
        <div className="rounded-xl bg-card border border-border shadow-sm overflow-hidden">
          {/* Cover gradient */}
          <div className="h-20 bg-gradient-to-r from-primary to-accent" />

          {/* Avatar and info */}
          <div className="px-4 pb-4">
            <div className="flex items-end justify-between -mt-8 mb-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent ring-4 ring-card">
                <span className="text-xl font-bold text-primary-foreground">
                  JD
                </span>
              </div>
              <button className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted">
                <Edit3 className="h-3 w-3" />
                Edit
              </button>
            </div>

            <h2 className="text-lg font-bold text-foreground">John Doe</h2>
            <p className="text-sm text-muted-foreground mt-0.5">
              Software Engineer at TechCorp
            </p>

            <div className="flex flex-col gap-1.5 mt-3">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <GraduationCap className="h-3.5 w-3.5" />
                <span className="text-xs">
                  Computer Science, Class of 2022
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                <span className="text-xs">San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-1.5 text-primary">
                <Linkedin className="h-3.5 w-3.5" />
                <span className="text-xs font-medium">
                  linkedin.com/in/johndoe
                </span>
              </div>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-1 mt-4 pt-4 border-t border-border">
              <div className="flex-1 text-center">
                <p className="text-base font-bold text-foreground">128</p>
                <p className="text-[10px] text-muted-foreground font-medium">
                  Connections
                </p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="flex-1 text-center">
                <p className="text-base font-bold text-foreground">540</p>
                <p className="text-[10px] text-muted-foreground font-medium">
                  Points
                </p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="flex-1 text-center">
                <p className="text-base font-bold text-foreground">4</p>
                <p className="text-[10px] text-muted-foreground font-medium">
                  Badges
                </p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="flex-1 text-center">
                <p className="text-base font-bold text-foreground">#12</p>
                <p className="text-[10px] text-muted-foreground font-medium">
                  Rank
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="px-4">
        <div className="rounded-xl bg-card border border-border p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-foreground mb-2">About</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Passionate software engineer with a focus on building scalable web
            applications. Active alumnus helping bridge the gap between
            students and industry professionals. Love mentoring and
            contributing to open source projects.
          </p>
        </div>
      </div>

      {/* Badges */}
      <div className="px-4">
        <div className="rounded-xl bg-card border border-border p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-foreground">
              Badges & Achievements
            </h3>
            <button className="text-xs text-primary font-medium">
              See all
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {badges.map((badge) => {
              const Icon = badge.icon
              return (
                <div
                  key={badge.name}
                  className="flex items-center gap-2.5 rounded-lg bg-muted/50 p-2.5"
                >
                  <div
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-lg",
                      badge.color
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-medium text-foreground">
                    {badge.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Theme Toggle */}
      <div className="px-4">
        <div className="rounded-xl bg-card border border-border p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-foreground mb-3">
            Appearance
          </h3>
          <div className="flex gap-2">
            <button
              onClick={() => setTheme("light")}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-xs font-medium transition-all",
                theme === "light"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground"
              )}
            >
              <Sun className="h-4 w-4" />
              Light
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-xs font-medium transition-all",
                theme === "dark"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground"
              )}
            >
              <Moon className="h-4 w-4" />
              Dark
            </button>
            <button
              onClick={() => setTheme("system")}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-xs font-medium transition-all",
                theme === "system"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground"
              )}
            >
              <Settings className="h-4 w-4" />
              System
            </button>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="px-4">
        <div className="rounded-xl bg-card border border-border shadow-sm overflow-hidden">
          {menuItems.map((item, index) => {
            const Icon = item.icon
            return (
              <button
                key={item.label}
                className={cn(
                  "flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors hover:bg-muted",
                  index < menuItems.length - 1 && "border-b border-border",
                  item.destructive
                    ? "text-destructive"
                    : "text-foreground"
                )}
              >
                <Icon className="h-4 w-4 flex-shrink-0" />
                <span className="flex-1 text-sm font-medium">
                  {item.label}
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </button>
            )
          })}
        </div>
      </div>

      {/* App version */}
      <div className="px-4 pb-4">
        <p className="text-center text-[10px] text-muted-foreground">
          Smart Alumni Connect v1.0.0
        </p>
      </div>
    </div>
  )
}

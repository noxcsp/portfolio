import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SkillPillProps {
  /** Skill label text. Omit to render icon only. */
  name?: string
  /** Optional icon element (e.g. a react-icon, lucide icon, or <img>). Omit to render name only. */
  icon?: ReactNode
  className?: string
}

export function SkillPill({ name, icon, className }: SkillPillProps) {
  if (!name && !icon) return null

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[0.625rem] border border-dashed border-border/80 bg-muted/40 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground",
        !name && "px-1.5", // tighter padding for icon-only
        className,
      )}
    >
      {icon && <span className="flex shrink-0 items-center text-[1em]">{icon}</span>}
      {name && <span>{name}</span>}
    </span>
  )
}

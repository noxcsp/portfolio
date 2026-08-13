import { cn } from "@/lib/utils"
import type { ProjectStatus } from "@/constants/projects"

interface ProjectStatusBadgeProps {
  status: ProjectStatus
  label?: string
  className?: string
}

export function ProjectStatusBadge({ status, label, className }: ProjectStatusBadgeProps) {
  const getStatusConfig = () => {
    switch (status) {
      case "live":
        return {
          defaultLabel: "Live",
          pillClass:
            "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:border-emerald-500/50",
          dotClass: "bg-emerald-500",
          showPing: true,
        }
      case "in progress":
        return {
          defaultLabel: "In Progress",
          pillClass:
            "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:border-amber-500/50",
          dotClass: "bg-amber-500",
          showPing: false,
        }
      case "done":
        return {
          defaultLabel: "Done",
          pillClass:
            "border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 hover:border-indigo-500/50",
          dotClass: "bg-indigo-500",
          showPing: false,
        }
      default:
        return {
          defaultLabel: status,
          pillClass:
            "border-border/80 bg-muted/40 text-muted-foreground hover:border-primary/50 hover:text-foreground",
          dotClass: "bg-muted-foreground",
          showPing: false,
        }
    }
  }

  const config = getStatusConfig()
  const displayLabel = label || config.defaultLabel

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[0.625rem] border border-dashed px-2.5 py-1 font-mono text-xs font-medium transition-colors select-none",
        config.pillClass,
        className
      )}
    >
      <span className="relative flex h-2 w-2 items-center justify-center">
        {config.showPing && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        )}
        <span className={cn("relative inline-flex h-1.5 w-1.5 rounded-full", config.dotClass)} />
      </span>
      <span>{displayLabel}</span>
    </span>
  )
}

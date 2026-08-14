"use client"

import dynamic from "next/dynamic"
import { useTheme } from "next-themes"
import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa6"
import { useHasMounted } from "@/hooks/useHasMounted"

const DynamicGitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-36 w-full items-center justify-center text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-ping rounded-full bg-primary" />
          <span>Loading activity calendar...</span>
        </div>
      </div>
    ),
  }
)

export default function GithubActivity() {
  const mounted = useHasMounted()
  const { resolvedTheme } = useTheme()

  // Portfolio dark theme color palette for activity levels matching GitHub green theme
  const calendarTheme = {
    dark: [
      "#161b26", // Level 0: dark navy background cell
      "#0e4429", // Level 1: deep dark green
      "#006d32", // Level 2: medium emerald green
      "#26a641", // Level 3: bright green
      "#39d353", // Level 4: vibrant glowing green
    ],
    light: [
      "#ebedf0",
      "#9be9a8",
      "#40c463",
      "#30a14e",
      "#216e39",
    ],
  }

  return (
    <section className="w-full py-4 sm:py-6">
      <div className="flex flex-col gap-5 sm:gap-6">
        {/* Section Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-normal tracking-tight text-foreground sm:text-3xl">
              GitHub Activity
            </h2>
          </div>
          <a
            href="https://github.com/noxcsp"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-all hover:border-primary/50 hover:bg-muted hover:text-foreground sm:text-sm"
            aria-label="View GitHub Profile @noxcsp"
          >
            <FaGithub className="h-3 w-3 text-foreground sm:h-3.5 sm:w-3.5" />
            <span>@noxcsp</span>
            <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Calendar Card Container */}
        <div className="relative flex flex-col rounded-2xl border border-border/50 bg-muted/10 p-4 sm:p-6 shadow-xs [&_.react-activity-calendar__footer_.react-activity-calendar__legend]:hidden [&_.react-activity-calendar__legend]:hidden [&_.react-activity-calendar__footer]:mt-4 [&_.react-activity-calendar__footer]:text-xs [&_.react-activity-calendar__footer]:text-muted-foreground/80 [&_.react-activity-calendar__footer]:font-normal">
          {mounted ? (
            <div className="w-full flex flex-col items-center justify-center [&_svg]:w-full [&_svg]:h-auto [&_svg]:max-w-full">
              <DynamicGitHubCalendar
                username="noxcsp"
                colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
                showColorLegend={false}
                theme={calendarTheme}
                year={2026}
                blockSize={9.5}
                blockMargin={3}
                blockRadius={3}
                fontSize={11}
                labels={{
                  totalCount: "{{count}} contributions in the last year",
                }}
              />
            </div>
          ) : (
            <div className="flex h-36 w-full items-center justify-center text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-ping rounded-full bg-primary" />
                <span>Loading activity calendar...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

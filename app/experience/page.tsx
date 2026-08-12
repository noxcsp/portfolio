import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { EXPERIENCES } from "@/constants/experience"
import { HiArrowLongLeft } from "react-icons/hi2"

export default function ExperiencePage() {
  return (
    <main className="relative z-10 mx-auto flex w-full max-w-2xl min-w-0 flex-col gap-6 p-4 text-sm leading-loose sm:p-6">
      {/* Header & Back Navigation */}
      <div className="flex flex-col gap-3 py-4 sm:py-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
        >
          <HiArrowLongLeft className="h-3.5 w-3.5 stroke-[1.5] transition-transform group-hover:-translate-x-0.5 sm:h-4 sm:w-4" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-2xl font-normal tracking-tight text-foreground sm:text-3xl md:text-4xl">
          Experience & History
        </h1>
        <p className="text-sm text-muted-foreground">
          Detailed timeline of my professional roles, internships, and key
          project engagements.
        </p>
      </div>

      {/* Bryllim-Style Timeline Track */}
      <div className="relative ml-3 flex flex-col gap-10 border-l border-border/80 py-2 sm:ml-6">
        {EXPERIENCES.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col gap-3 pl-6 sm:pl-8"
          >
            {/* Monoline Node Indicator: Small center dot with space before monoline ring */}
            <div className="absolute top-1.5 -left-1.75 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-foreground bg-transparent">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            </div>

            {/* Header / Position Stack */}
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h2 className="text-base font-semibold text-foreground sm:text-lg">
                  {item.position}
                </h2>
                <p className="text-sm font-medium text-muted-foreground">
                  {item.company} &bull;{" "}
                  <span className="text-xs text-muted-foreground">
                    {item.location}
                  </span>
                </p>
              </div>
              <span className="font-mono text-xs font-medium text-muted-foreground sm:text-sm">
                {item.duration}
              </span>
            </div>

            {/* Bullet Accomplishments */}
            {item.description && item.description.length > 0 && (
              <ul className="flex list-inside list-disc flex-col gap-2 pl-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {item.description.map((bullet, idx) => (
                  <li key={idx} className="marker:text-muted-foreground">
                    <span className="inline">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Monoline Skill Pills */}
            {item.skills && item.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 rounded-[0.625rem] border border-dashed border-border/80 bg-muted/40 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  )
}

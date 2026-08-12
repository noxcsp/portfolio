import type { ExperienceItem } from "@/constants/experience"

interface ExperienceCardProps {
  experience: ExperienceItem
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { position, company, location, duration } = experience

  return (
    <div className="items-start gap-1 sm:gap-12 text-sm sm:grid sm:grid-cols-[160px_1fr]">
      {/* Left Column: Duration (Fixed column width) */}
      <div className="pt-0.5 text-left text-xs font-medium text-muted-foreground sm:text-sm">
        {duration}
      </div>

      {/* Right Column: Details stacked in 3 rows */}
      <div className="flex flex-col gap-0.5">
        {/* Row 1: Position */}
        <h3 className="font-semibold text-foreground leading-snug sm:text-base">
          {position}
        </h3>
        {/* Row 2: Company */}
        <p className="font-medium text-muted-foreground">
          {company}
        </p>
        {/* Row 3: Location */}
        <p className="text-xs text-muted-foreground">
          {location}
        </p>
      </div>

    </div>
  )
}

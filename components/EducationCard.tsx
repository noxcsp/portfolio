import type { EducationItem } from "@/constants/education"

interface EducationCardProps {
  education: EducationItem
}

export default function EducationCard({ education }: EducationCardProps) {
  const { degree, institution, location, duration, specialization, honors } = education

  return (
    <div className="items-start gap-1 text-sm sm:grid sm:grid-cols-[160px_1fr] sm:gap-12">
      {/* Left Column: Duration (Fixed column width matching ExperienceCard & CertificationCard) */}
      <div className="pt-0.5 text-left text-xs font-medium text-muted-foreground sm:text-sm">
        {duration}
      </div>

      {/* Right Column: Details */}
      <div className="flex flex-col gap-1">
        {/* Row 1: Degree & Optional Honors Badge */}
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-semibold text-foreground leading-snug sm:text-base">
            {degree}
          </h3>
          {honors && (
            <span className="inline-flex items-center rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[11px] font-medium text-primary">
              {honors}
            </span>
          )}
        </div>

        {/* Row 2: Institution */}
        <p className="font-medium text-muted-foreground">
          {institution}
        </p>

        {/* Row 3: Specialization */}
        {specialization && (
          <p className="text-xs text-muted-foreground">
            {specialization}
          </p>
        )}

        {/* Row 4: Location */}
        {location && (
          <p className="text-xs text-muted-foreground/80">
            {location}
          </p>
        )}
      </div>
    </div>
  )
}

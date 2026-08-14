import type { Metadata } from "next"
import Link from "next/link"
import { EXPERIENCES } from "@/constants/experience"
import { HiArrowLongLeft } from "react-icons/hi2"
import { ExperienceTimeline } from "@/components/ExperienceTimeline"
import { MotionSection } from "@/components/MotionSection"

export const metadata: Metadata = {
  title: "Experience & History",
  description:
    "Detailed timeline of professional roles, internships, and key project engagements for Clark Sean Payabyab.",
}

export default function ExperiencePage() {
  return (
    <main className="relative z-10 mx-auto flex w-full max-w-3xl min-w-0 flex-col gap-6 p-4 mb-8 text-sm leading-loose sm:p-6 sm:mb-16">
      {/* Header & Back Navigation */}
      <MotionSection className="py-2 sm:py-4">
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            prefetch={true}
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
      </MotionSection>

      {/* Animated Timeline Track */}
      <ExperienceTimeline experiences={EXPERIENCES} />
    </main>
  )
}

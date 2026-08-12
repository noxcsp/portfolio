import Link from "next/link"
import { EXPERIENCES } from "@/constants/experience"
import ExperienceCard from "@/components/experienceCard"
import { HiArrowLongRight } from "react-icons/hi2"

export default function Experience() {
  return (
    <section className="w-full py-4 sm:py-6">
      <div className="flex flex-col gap-5 sm:gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-normal tracking-tight text-foreground sm:text-3xl">
            Experience
          </h2>
          <Link
            href="/experience"
            className="group inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
          >
            <span>View details</span>
            <HiArrowLongRight className="h-3.5 w-3.5 stroke-[1.5] transition-transform group-hover:translate-x-0.5 sm:h-4 sm:w-4" />
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          {EXPERIENCES.map((item) => (
            <ExperienceCard key={item.id} experience={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

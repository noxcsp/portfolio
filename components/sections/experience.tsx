import { EXPERIENCES } from "@/constants/experience"
import ExperienceCard from "@/components/experienceCard"

export default function Experience() {
  return (
    <section className="w-full py-4 sm:py-6">
      <div className="flex flex-col gap-5 sm:gap-6">
        <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
          Experience
        </h2>
        <div className="flex flex-col gap-6">
          {EXPERIENCES.map((item) => (
            <ExperienceCard key={item.id} experience={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

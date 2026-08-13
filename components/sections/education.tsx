import { EDUCATION } from "@/constants/education"
import EducationCard from "@/components/EducationCard"

export default function Education() {
  if (!EDUCATION || EDUCATION.length === 0) return null

  return (
    <section className="w-full py-4 sm:py-6">
      <div className="flex flex-col gap-5 sm:gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-normal tracking-tight text-foreground sm:text-3xl">
            Education
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          {EDUCATION.map((item) => (
            <EducationCard key={item.id} education={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

import ProjectCard from "@/components/ProjectCard"
import { SAMPLE_PROJECTS } from "@/constants/projects"

export default function Projects() {
  return (
    <section className="w-full py-4 sm:py-6">
      <div className="flex flex-col gap-5 sm:gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-normal tracking-tight text-foreground sm:text-3xl">
            Featured Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SAMPLE_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} spotlightColor="var(--border)" />
          ))}
        </div>
      </div>
    </section>
  )
}

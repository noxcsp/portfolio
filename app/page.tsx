import Profile from "@/components/sections/profile"
import Technologies from "@/components/sections/technologies"
import Experience from "@/components/sections/experience"
import Education from "@/components/sections/education"
import Projects from "@/components/sections/projects"
import Certifications from "@/components/sections/certifications"
import GithubActivity from "@/components/sections/github-activity"

export default function Page() {
  return (
    <main className="relative z-10 mx-auto flex w-full max-w-3xl min-w-0 flex-col gap-4 p-4 text-sm leading-loose sm:p-6 sm:mb-16">
      <Profile />
      <Experience />
      <Projects />
      <Technologies />
      <Certifications />
      <Education />
      <GithubActivity />
    </main>
  )
}



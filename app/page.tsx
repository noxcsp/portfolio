import Hero from "@/components/sections/hero"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"

export default function Page() {
  return (
    <main className="relative z-10 mx-auto flex w-full max-w-3xl min-w-0 flex-col gap-4 p-4 text-sm leading-loose sm:p-6">
      <Hero />
      <Experience />
      <Projects />
    </main>
  )
}


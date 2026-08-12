import Hero from "@/components/sections/hero"
import Experience from "@/components/sections/experience"

export default function Page() {
  return (
    <main className="relative z-10 mx-auto flex w-full max-w-2xl min-w-0 flex-col gap-4 p-4 text-sm leading-loose sm:p-6">
      <Hero />
      <Experience />
    </main>
  )
}

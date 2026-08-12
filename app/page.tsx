import Hero from "@/components/sections/hero"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="min-h-screen w-full flex justify-center">
      <main className="w-full max-w-2xl min-w-0 flex flex-col gap-4 text-sm leading-loose mx-auto p-4 sm:p-6 ">
        <Hero />
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </main>
    </div>
  )
}

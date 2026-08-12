import LightRays from "@/components/LightRays"
import Hero from "@/components/sections/hero"
import Experience from "@/components/sections/experience"

export default function Page() {
  return (
    <div className="relative flex min-h-screen w-full justify-center">
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={1}
        rayLength={2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
        pulsating={false}
        fadeDistance={0.5}
        saturation={1}
      />
      <main className="relative z-10 mx-auto flex w-full max-w-2xl min-w-0 flex-col gap-4 p-4 text-sm leading-loose sm:p-6">
        <Hero />
        <Experience />
      </main>
    </div>
  )
}

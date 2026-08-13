import { CERTIFICATIONS } from "@/constants/certifications"
import CertificationCard from "@/components/certificationCard"

export default function Certifications() {
  if (!CERTIFICATIONS || CERTIFICATIONS.length === 0) return null

  return (
    <section className="w-full py-4 sm:py-6">
      <div className="flex flex-col gap-5 sm:gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-normal tracking-tight text-foreground sm:text-3xl">
            Certifications
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          {CERTIFICATIONS.map((item) => (
            <CertificationCard key={item.id} certification={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

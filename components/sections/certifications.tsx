"use client"

import { motion, useReducedMotion } from "motion/react"
import { CERTIFICATIONS } from "@/constants/certifications"
import CertificationCard from "@/components/CertificationCard"
import { MotionSection } from "@/components/MotionSection"

export default function Certifications() {
  const shouldReduceMotion = useReducedMotion()

  if (!CERTIFICATIONS || CERTIFICATIONS.length === 0) return null

  return (
    <MotionSection>
      <div className="flex flex-col gap-5 sm:gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-normal tracking-tight text-foreground sm:text-3xl">
            Certifications
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          {CERTIFICATIONS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.45,
                delay: shouldReduceMotion ? 0 : idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <CertificationCard certification={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

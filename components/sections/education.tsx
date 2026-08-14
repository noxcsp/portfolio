"use client"

import { motion, useReducedMotion } from "motion/react"
import { EDUCATION } from "@/constants/education"
import EducationCard from "@/components/EducationCard"
import { MotionSection } from "@/components/MotionSection"

export default function Education() {
  const shouldReduceMotion = useReducedMotion()

  if (!EDUCATION || EDUCATION.length === 0) return null

  return (
    <MotionSection>
      <div className="flex flex-col gap-5 sm:gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-normal tracking-tight text-foreground sm:text-3xl">
            Education
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          {EDUCATION.map((item, idx) => (
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
              <EducationCard education={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

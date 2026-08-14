"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import { EXPERIENCES } from "@/constants/experience"
import ExperienceCard from "@/components/ExperienceCard"
import { HiArrowLongRight } from "react-icons/hi2"
import { MotionSection } from "@/components/MotionSection"

export default function Experience() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <MotionSection>
      <div className="flex flex-col gap-5 sm:gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-normal tracking-tight text-foreground sm:text-3xl">
            Experience
          </h2>
          <Link
            href="/experience"
            prefetch={true}
            className="group inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
          >
            <span>View details</span>
            <HiArrowLongRight className="h-3.5 w-3.5 stroke-[1.5] transition-transform group-hover:translate-x-0.5 sm:h-4 sm:w-4" />
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          {EXPERIENCES.map((item, idx) => (
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
              <ExperienceCard experience={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

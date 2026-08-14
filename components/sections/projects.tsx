"use client"

import { motion, useReducedMotion } from "motion/react"
import ProjectCard from "@/components/ProjectCard"
import { SAMPLE_PROJECTS } from "@/constants/projects"
import { MotionSection } from "@/components/MotionSection"

export default function Projects() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <MotionSection>
      <div className="flex flex-col gap-5 sm:gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-normal tracking-tight text-foreground sm:text-3xl">
            Featured Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SAMPLE_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.45,
                delay: shouldReduceMotion ? 0 : idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full"
            >
              <ProjectCard project={project} spotlightColor="var(--border)" className="h-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

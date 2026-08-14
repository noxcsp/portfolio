"use client"

import React from "react"
import { motion, useReducedMotion } from "motion/react"
import { SkillPill } from "@/components/SkillPill"
import { getTechIcon } from "@/components/tech-icon-list"
import type { ExperienceItem } from "@/constants/experience"

interface ExperienceTimelineProps {
  experiences: ExperienceItem[]
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const shouldReduceMotion = useReducedMotion()
  const total = experiences.length

  return (
    <div className="relative ml-3 flex flex-col gap-10 py-2 sm:ml-6">
      {/* Static track guide line for structure */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border/40" />

      {/* Animated active line descending from top to bottom */}
      <motion.div
        initial={shouldReduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: shouldReduceMotion ? 0.2 : 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ originY: 0 }}
        className="absolute left-0 top-0 bottom-0 w-px bg-foreground"
      />

      {experiences.map((item, idx) => {
        // Calculate progressive arrival delay as the line descends from top to bottom
        const progress = idx / Math.max(1, total - 1)
        const pulseDelay = shouldReduceMotion ? 0 : 0.5 + progress * 0.42
        const cardDelay = shouldReduceMotion ? 0 : pulseDelay - 0.45

        return (
          <motion.div
            key={item.id}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: shouldReduceMotion ? 0.2 : 0.45,
              delay: cardDelay,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative flex flex-col gap-3 pl-6 sm:pl-8"
          >
            {/* Monoline Node Indicator with arrival pulse */}
            <div className="absolute top-1.5 -left-1.75 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-foreground bg-background">
              {/* Short pulse ping expanding outward when the line reaches the node */}
              {!shouldReduceMotion && (
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{
                    scale: [0.8, 1, 2.4],
                    opacity: [0, 0.8, 0],
                  }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.65,
                    delay: pulseDelay,
                    ease: "easeOut",
                  }}
                  className="absolute inline-flex h-full w-full rounded-full bg-foreground/60 pointer-events-none"
                />
              )}

              {/* Inner dot with subtle entrance scale */}
              <motion.span
                initial={shouldReduceMotion ? { scale: 1 } : { scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.25,
                  delay: pulseDelay,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-1.5 w-1.5 rounded-full bg-foreground"
              />
            </div>

            {/* Header / Position Stack */}
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h2 className="text-base font-semibold text-foreground sm:text-lg">
                  {item.position}
                </h2>
                <p className="text-sm font-medium text-muted-foreground">
                  {item.company} &bull;{" "}
                  <span className="text-xs text-muted-foreground">
                    {item.location}
                  </span>
                </p>
              </div>
              <span className="font-mono text-xs font-medium text-muted-foreground sm:text-sm">
                {item.duration}
              </span>
            </div>

            {/* Bullet Accomplishments */}
            {item.description && item.description.length > 0 && (
              <ul className="flex list-inside list-disc flex-col gap-2 pl-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {item.description.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="marker:text-muted-foreground">
                    <span className="inline">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Monoline Skill Pills */}
            {item.skills && item.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {item.skills.map((skill) => (
                  <SkillPill key={skill} name={skill} icon={getTechIcon(skill)} />
                ))}
              </div>
            )}
          </motion.div>
        )
      })}
    </div>
  )
}

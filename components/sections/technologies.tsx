"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import { Marquee } from "@/components/ui/marquee"
import { SkillPill } from "@/components/SkillPill"
import { getTechIcon } from "@/components/tech-icon-list"
import {
  MARQUEE_ROW_1,
  MARQUEE_ROW_2,
  MARQUEE_ROW_3,
  TECH_CATEGORIES,
} from "@/constants/technologies"
import { LayoutGrid, MoveHorizontal } from "lucide-react"
import { MotionSection } from "@/components/MotionSection"

export default function Technologies() {
  const [viewMode, setViewMode] = useState<"marquee" | "list">("marquee")
  const shouldReduceMotion = useReducedMotion()

  return (
    <MotionSection>
      <div className="flex flex-col gap-5 sm:gap-6">
        {/* Header with inline toggle button */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-normal tracking-tight text-foreground sm:text-3xl">
            Technologies
          </h2>
          <button
            type="button"
            onClick={() => setViewMode((prev) => (prev === "marquee" ? "list" : "marquee"))}
            className="group inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-muted/40 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-all hover:border-primary/50 hover:bg-muted hover:text-foreground"
            aria-label={`Switch to ${viewMode === "marquee" ? "list" : "marquee"} view`}
          >
            {viewMode === "marquee" ? (
              <>
                <LayoutGrid className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
                <span>List View</span>
              </>
            ) : (
              <>
                <MoveHorizontal className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
                <span>Marquee View</span>
              </>
            )}
          </button>
        </div>

        {/* Content View */}
        <AnimatePresence mode="wait" initial={false}>
          {viewMode === "marquee" ? (
            <motion.div
              key="marquee"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col gap-3 overflow-hidden rounded-xl py-3"
            >
              {/* Left and Right Fade Gradients */}
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-background to-transparent" />

              {/* Row 1: Forward */}
              <Marquee pauseOnHover className="[--duration:30s]">
                {MARQUEE_ROW_1.map((tech) => (
                  <SkillPill key={tech} name={tech} icon={getTechIcon(tech)} />
                ))}
              </Marquee>

              {/* Row 2: Reverse */}
              <Marquee reverse pauseOnHover className="[--duration:35s]">
                {MARQUEE_ROW_2.map((tech) => (
                  <SkillPill key={tech} name={tech} icon={getTechIcon(tech)} />
                ))}
              </Marquee>

              {/* Row 3: Forward */}
              <Marquee pauseOnHover className="[--duration:32s]">
                {MARQUEE_ROW_3.map((tech) => (
                  <SkillPill key={tech} name={tech} icon={getTechIcon(tech)} />
                ))}
              </Marquee>
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-5 rounded-xl border border-border/40 bg-muted/10 p-4 sm:p-5"
            >
              {TECH_CATEGORIES.map((category) => (
                <div key={category.title} className="flex flex-col gap-2">
                  <h3 className="text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((tech) => (
                      <SkillPill key={tech} name={tech} icon={getTechIcon(tech)} />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionSection>
  )
}

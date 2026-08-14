"use client"

import React from "react"
import { motion, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

interface MotionSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function MotionSection({
  children,
  className,
  delay = 0,
}: MotionSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn("w-full py-4 sm:py-6", className)}
    >
      {children}
    </motion.section>
  )
}

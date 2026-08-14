"use client"

import Image from "next/image"
import { BadgeCheck, GraduationCap } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

export default function Profile() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="w-full py-4 sm:py-6">
      <div className="flex flex-col gap-5 sm:gap-6">
        <div className="flex items-center gap-4 sm:gap-5">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border border-border shadow-sm sm:h-40 sm:w-40"
          >
            <Image
              src="/profile.png"
              alt="Clark Sean Payabyab"
              width={160}
              height={160}
              priority
              decoding="async"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMxYTIwMmMiLz48L3N2Zz4="
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.2 : 0.45,
              delay: shouldReduceMotion ? 0 : 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col justify-center gap-1.5"
          >
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Clark Sean Payabyab
              </span>
              <BadgeCheck
                className="h-5 w-5 shrink-0 fill-sky-600 text-background"
                aria-label="Verified"
              />
            </div>
            <a
              href="https://www.facebook.com/share/1K2hkJR1V6/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
            >
              <GraduationCap className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
              <span className="font-medium group-hover:underline">NU MOA</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0.2 : 0.45,
            delay: shouldReduceMotion ? 0 : 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <h1 className="text-2xl font-normal tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Full-Stack Web Developer
            <span className="text-muted-foreground"> &mdash; MERN</span>
          </h1>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0.2 : 0.45,
            delay: shouldReduceMotion ? 0 : 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-light space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          <p>
            I&apos;m a full-stack developer leveraging AI-assisted workflows
            alongside my core stack in React, Next.js, React Native, and Node.js
            to build modern web and mobile applications. I am actively seeking
            software engineering opportunities and am eager to adapt quickly to
            new technologies, embrace fast-paced environments, and contribute to
            production-grade software.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

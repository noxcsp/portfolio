import React from "react"
import Image from "next/image"
import Link from "next/link"
import SpotlightCard from "@/components/reactbits/SpotlightCard"
import { ProjectStatusBadge } from "@/components/project-status-badge"
import { TechIconList } from "@/components/tech-icon-list"
import { Separator } from "@/components/ui/separator"
import type { ProjectItem } from "@/constants/projects"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa6"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: ProjectItem
  className?: string
  spotlightColor?: string
}

export function ProjectCard({ project, className, spotlightColor }: ProjectCardProps) {
  const { title, category, description, image, imageAlt, status, techStack, liveUrl, githubUrl } = project

  return (
    <SpotlightCard
      className={cn("group flex flex-col justify-between gap-3 p-4 sm:p-5 transition-all", className)}
      spotlightColor={spotlightColor}
    >
      <div className="flex flex-col gap-2.5">
        {/* 1. Project Image */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted border border-border/50">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            loading="lazy"
            decoding="async"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDUiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjUiIGZpbGw9IiMxYTIwMmMiLz48L3N2Zz4="
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 384px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            unoptimized={image.startsWith("http")}
          />
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/repo absolute top-2.5 right-2.5 z-10 inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-background/80 px-2.5 py-1 text-xs font-medium text-muted-foreground backdrop-blur-md transition-all hover:border-primary/50 hover:bg-background/95 hover:text-foreground shadow-xs"
              aria-label={`View ${title} GitHub repository`}
            >
              <FaGithub className="h-3 w-3 text-foreground" />
              <span>GitHub</span>
              <ExternalLink className="h-3 w-3 transition-transform duration-200 ease-out group-hover/repo:translate-x-0.5 group-hover/repo:-translate-y-0.5" />
            </a>
          )}
        </div>

        {/* 2. Status & Category Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <ProjectStatusBadge status={status} />
          {category && (
            <span className="inline-flex items-center rounded-[0.625rem] border border-dashed border-border/80 bg-muted/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
              {category}
            </span>
          )}
        </div>

        {/* 3. Project Title */}
        <h3 className="text-base font-semibold tracking-tight text-foreground">
          {title}
        </h3>

        {/* 4. One-sentence short description */}
        <p className="text-xs sm:text-sm text-muted-foreground leading-normal">
          {description}
        </p>

        {/* 5. Horizontal list of tech icons */}
        <div>
          <TechIconList techStack={techStack} />
        </div>
      </div>

      <div className="flex flex-col gap-2.5 pt-1">
        {/* 6. Separator */}
        <Separator />

        {/* 7. Optional 'View' with upper-right arrow icon hyperlink */}
        <div className="flex items-center justify-between text-xs font-medium">
          {liveUrl ? (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1 text-foreground transition-colors hover:text-primary"
            >
              <span>View Live Website</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </Link>
          ) : (githubUrl ? (
            <span className="text-xs text-muted-foreground font-mono">Public Repository</span>
          ) : (
            <span className="text-xs text-muted-foreground font-mono">Private Repository</span>
          ))}
        </div>
      </div>
    </SpotlightCard>
  )
}

export default ProjectCard

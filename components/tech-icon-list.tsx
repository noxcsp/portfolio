import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import type { TechItem } from "@/constants/projects"
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiGooglechrome,
  SiPosthog,
  SiGoogleanalytics,
  SiNginx,
  SiGithubcopilot,
  SiExpo,
  SiCloudinary,
  SiSupabase,
} from "react-icons/si"
import { Code2 } from "lucide-react"
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { Icons } from "@/assets/icons";
interface TechIconListProps {
  techStack: TechItem[]
  className?: string
}

export function getTechIcon(name: string): React.ReactNode {
  const normalized = name.toLowerCase().trim()
  switch (normalized) {
    case "render":
      return <Image src={Icons.render} alt="Render" className="h-3 w-3" />
    case "vercel":
      return <Image src={Icons.vercel} alt="Vercel" className="h-4 w-4 bg-black rounded-full p-1" />
    case "posthog":
      return <Image src={Icons.posthog} alt="PostHog" className="h-4 w-4" />
    case "cursor":
      return <Image src={Icons.cursor} alt="Cursor" className="h-4 w-4" />
    case "google apps script":
      return <Image src={Icons.googleAppsScript} alt="Google Apps Script" className="h-4 w-4" />
    case "chrome extension":
      return <IoExtensionPuzzleOutline className="text-foreground" />
    case "firebase cloud messaging":
      return <Image src={Icons.firebaseCloudMessaging} alt="Firebase Cloud Messaging" className="h-4 w-4" />
    case "firebase":
      return <Image src={Icons.firebase} alt="Firebase" className="h-4 w-4" />
    case "supabase":
      return <SiSupabase className="text-green-500" />
    case "gemini api":
      return <Image src={Icons.googleGemini} alt="Gemini" className="h-3 w-3" />
    case "gemini":
      return <Image src={Icons.googleGemini} alt="Gemini" className="h-3 w-3" />
    case "antigravity ide":
      return <Image src={Icons.googleAntigravity} alt="Antigravity" className="h-4 w-4" />
    case "cloudinary":
      return <SiCloudinary />
    case "nginx":
      return <SiNginx className="text-[#269528]" />
    case "pm2":
      return <Image src={Icons.pm2} alt="PM2" className="h-4 w-4" />
    case "github copilot":
      return <SiGithubcopilot className="text-foreground" />
    case "react":
    case "react native":
      return <SiReact className="text-[#61DAFB]" />
    case "expo":
      return <SiExpo className="text-foreground" />
    case "next.js":
      return <SiNextdotjs className="text-foreground" />
    case "node.js":
      return <SiNodedotjs className="text-[#5FA04E]" />
    case "express.js":
      return <SiExpress className="text-foreground" />
    case "mongodb":
      return <SiMongodb className="text-[#47A248]" />
    case "typescript":
      return <SiTypescript className="text-[#3178C6]" />
    case "javascript":
      return <SiJavascript className="text-[#F7DF1E]" />
    case "html":
    case "html5":
      return <SiHtml5 className="text-[#E34F26]" />
    case "css":
    case "css3":
      return <SiCss className="text-[#1572B6]" />
    case "tailwind":
    case "tailwind css":
      return <SiTailwindcss className="text-[#06B6D4]" />
    case "chrome extension":
      return <SiGooglechrome className="text-[#4285F4]" />
    case "posthog":
      return <SiPosthog className="text-[#F54E00]" />
    case "google analytics":
      return <SiGoogleanalytics className="text-[#E37400]" />
    case "python":
      return <Image src={Icons.python} alt="Python" className="h-4 w-4" />
    default:
      return <Code2 className="text-muted-foreground h-4 w-4" />
  }
}

export function TechIconList({ techStack, className }: TechIconListProps) {
  if (!techStack || techStack.length === 0) return null

  return (
    <div className={cn("flex flex-wrap items-center gap-1.5 py-0.5", className)}>
      {techStack.map((tech, index) => {
        const iconContent = tech.icon ? (
          tech.icon
        ) : tech.iconUrl ? (
          <Image
            src={tech.iconUrl}
            alt={tech.name}
            width={16}
            height={16}
            className="h-4 w-4 object-contain"
          />
        ) : (
          getTechIcon(tech.name)
        )

        return (
          <div
            key={`${tech.name}-${index}`}
            title={tech.name}
            className={cn(
              "group/icon relative flex items-center justify-center h-7 w-7 rounded-md border border-border/80 bg-muted/40 text-xs transition-all duration-200 ease-out",
              "hover:-translate-y-0.5 hover:scale-110 hover:border-primary/50 hover:bg-muted hover:shadow-sm"
            )}
          >
            {iconContent}

            {/* Micro tooltip on hover */}
            <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-popover px-1.5 py-0.5 text-[10px] font-medium text-popover-foreground shadow-md opacity-0 transition-all duration-150 group-hover/icon:opacity-100 group-hover/icon:-top-8">
              {tech.name}
            </span>
          </div>
        )
      })}
    </div>
  )
}

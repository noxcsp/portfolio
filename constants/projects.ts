import type { ReactNode } from "react"

export type ProjectStatus = "live" | "in progress" | "done"

export interface TechItem {
  /** Name of the technology (e.g. "React", "TypeScript") */
  name: string
  /** Optional icon element (e.g. SVG or React Icon). Omit if using iconUrl or text fallback. */
  icon?: ReactNode
  /** Optional image URL/path for logo icon */
  iconUrl?: string
}

export interface ProjectItem {
  id: string
  title: string
  description: string
  image: string
  imageAlt?: string
  status: ProjectStatus
  techStack: TechItem[]
  liveUrl?: string
  githubUrl?: string
  isPrivate?: boolean
}

export const SAMPLE_PROJECTS: ProjectItem[] = [
  {
    id: "dataone-cms",
    title: "DataOne Asia Philippines",
    description:
      "A production-ready enterprise company website and custom CMS accelerating content workflow efficiency and boosting brand visibility.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    imageAlt: "DataOne Asia CMS Dashboard Preview",
    status: "live",
    liveUrl: "https://www.data1asia.com",
    techStack: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Nginx" },
      { name: "PM2" },
      { name: "GitHub Copilot" },
    ],
  },
  {
    id: "characTale",
    title: "CharacTale",
    description:
      "An AI-powered interactive learning platform teaching Filipino moral values through dynamic storytelling and assessments for Grade 4 to 6 students.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    imageAlt: "CharacTale Mobile App Preview",
    status: "done",
    techStack: [
      { name: "JavaScript" },
      { name: "React Native" },
      { name: "Expo" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Gemini API" },
      { name: "GitHub Copilot" },
      { name: "Cloudinary" },
    ],
  },
  {
    id: "phase",
    title: "Phase",
    description:
      "A cross-platform subscription tracking PWA automating recurring expense analytics and scheduled push notification pipelines.",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Phase Subscription Tracker Preview",
    status: "in progress",
    techStack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Supabase" },
      { name: "Firebase Cloud Messaging" },
      { name: "Antigravity IDE" },
    ],
  },
  {
    id: "outreach-analytics-automation",
    title: "Outreach & Analytics Automation",
    description:
      "A custom internal browser extension streamlining partner outreach automation and tracking visual correlation metrics between video campaigns and app installs.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Outreach & Analytics Automation Tool Preview",
    status: "done",
    isPrivate: true,
    techStack: [
      { name: "Cursor" },
      { name: "JavaScript" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Google Apps Script" },
      { name: "Chrome Extension" },
    ],
  },
]

import type { ReactNode } from "react"

export type ProjectStatus = "live" | "in progress" | "done"

export enum ProjectCategory {
  CAPSTONE = "Capstone Project",
  PERSONAL = "Personal Project",
  INTERNSHIP = "Internship Project",
  WORK = "Work Project",
  FREELANCE = "Freelance Project",
}

export interface TechItem {
  name: string
  icon?: ReactNode
  iconUrl?: string
}

export interface ProjectItem {
  id: string
  title: string
  category?: ProjectCategory
  description: string
  image: string
  imageAlt?: string
  status: ProjectStatus
  techStack: TechItem[]
  liveUrl?: string
  githubUrl?: string
}

export const SAMPLE_PROJECTS: ProjectItem[] = [
  {
    id: "dataone-cms",
    title: "DataOne Asia Philippines",
    category: ProjectCategory.INTERNSHIP,
    description:
      "A production-ready enterprise company website and custom CMS accelerating content workflow efficiency and boosting brand visibility.",
    image: "/project_thumbnails/dataone-asia-philippines.png",
    imageAlt: "DataOne Asia CMS Dashboard Preview",
    status: "live",
    liveUrl: "https://www.data1asia.com",
    techStack: [
      { name: "Claude" },
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
    category: ProjectCategory.CAPSTONE,
    description:
      "An AI-powered interactive learning platform teaching Filipino moral values through dynamic storytelling and assessments for Grade 4 to 6 students.",
    image: "/project_thumbnails/charactale.jpg",
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
      { name: "Render" },
    ],
  },
  {
    id: "phase",
    title: "Phase",
    category: ProjectCategory.PERSONAL,
    description:
      "A cross-platform subscription tracking PWA automating recurring expense analytics and scheduled push notification pipelines.",
    image: "/project_thumbnails/phase.png",
    imageAlt: "Phase Subscription Tracker Preview",
    status: "in progress",
    githubUrl: "https://github.com/noxcsp/Phase",
    techStack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Supabase" },
      { name: "Firebase Cloud Messaging" },
      { name: "Antigravity IDE" },
      { name: "Vercel" },
    ],
  },
  {
    id: "outreach-analytics-automation",
    title: "Outreach & Analytics Automation",
    category: ProjectCategory.FREELANCE,
    description:
      "A custom internal browser extension streamlining partner outreach automation and tracking visual correlation metrics between video campaigns and app installs.",
    image: "/project_thumbnails/outreach-and-analytics-automation .png",
    imageAlt: "Outreach & Analytics Automation Tool Preview",
    status: "done",
    techStack: [
      { name: "Cursor" },
      { name: "Claude" },
      { name: "JavaScript" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Google Apps Script" },
      { name: "Chrome Extension" },
    ],
  },
]

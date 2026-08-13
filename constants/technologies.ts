export interface TechnologyItem {
  name: string
  category?: string
}

export interface TechnologyCategory {
  title: string
  skills: string[]
}

// 3 Rows for Marquee Display
export const MARQUEE_ROW_1: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Python",
]

export const MARQUEE_ROW_2: string[] = [
  "Express.js",
  "MongoDB",
  "Supabase",
  "React Native",
  "Expo",
  "Firebase",
  "Google Apps Script",
  "Render",
  "Vercel",
]

export const MARQUEE_ROW_3: string[] = [
  "Antigravity IDE",
  "Cursor",
  "GitHub Copilot",
  "Gemini API",
  "Nginx",
  "PM2",
  "Cloudinary",
  "PostHog",
  "Google Analytics",
  "Chrome Extension",
]

// Categorized structure for List View
export const TECH_CATEGORIES: TechnologyCategory[] = [
  {
    title: "Languages & Frontend",
    skills: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Next.js",
      "TypeScript",
      "Python",
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Supabase",
      "Firebase",
    ],
  },
  {
    title: "Mobile & Extension",
    skills: [
      "React Native",
      "Expo",
      "Google Apps Script",
      "Chrome Extension",
    ],
  },
  {
    title: "AI Tools & Infrastructure",
    skills: [
      "Antigravity IDE",
      "Cursor",
      "GitHub Copilot",
      "Gemini API",
      "Render",
      "Vercel",
      "Nginx",
      "PM2",
      "Cloudinary",
      "PostHog",
      "Google Analytics",
    ],
  },
]

export interface ExperienceItem {
  id: string
  position: string
  company: string
  location: string
  duration: string
  description?: string[]
  skills?: string[]
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "freelance-programmer",
    position: "Project-Based Programmer",
    company: "Freelance",
    location: "Remote, Philippines",
    duration: "Jan 2026 – Apr 2026",
    description: [
      "Boosted organic discoverability and platform reach for applications serving 200,000+ users, improving search indexation and user traffic retention by creating dedicated SEO HTML pages, tracking index performance in Google Analytics, and resolving broken links using PostHog analytics.",
      "Automated end-to-end campaign collaboration workflows, significantly cutting down administrative overhead for email marketing by developing a private Chrome extension powered by Google Apps Script.",
    ],
    skills: ["HTML", "SEO", "Google Analytics", "PostHog", "Google Apps Script", "Chrome Extension"],
  },
  {
    id: "dataone-asia",
    position: "Web Developer Intern",
    company: "DataOne Asia (Philippines), Inc.",
    location: "Quezon City, Philippines",
    duration: "Nov 2025 – Apr 2026",
    description: [
      "Architected a production-ready company website and custom CMS, increasing internal content update efficiency by developing full-stack dynamic modules from scratch using the MERN stack.",
      "Accelerated site revamp delivery ahead of schedule, boosting feature implementation velocity and reducing repetitive coding tasks by leveraging AI-assisted development tools (GitHub Copilot).",
    ],
    skills: ["React", "Node.js", "Express.js", "MongoDB", "Nginx", "PM2", "GitHub Copilot"],
  },
]

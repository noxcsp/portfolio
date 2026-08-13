export interface EducationItem {
  id: string
  degree: string
  institution: string
  location?: string
  duration: string
  specialization?: string
  honors?: string
  description?: string[]
  skills?: string[]
  logo?: string
}

export const EDUCATION: EducationItem[] = [
  {
    id: "nu-moa",
    degree: "BS Information Technology",
    institution: "National University – Mall of Asia Campus",
    location: "Pasay City, Philippines",
    duration: "Aug 2022 – July 2026",
    specialization: "Specialization in Mobile and Web Applications",
    honors: "Summa Cum Laude",
    description: [
      "Specialized in Mobile and Web Applications development, mastering full-stack web architectures, mobile app development, and cloud databases.",
      "Graduating with Summa Cum Laude honors in recognition of top academic standing and technical excellence.",
    ],
    skills: [
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Java",
      "Python",
    ],
  },
]

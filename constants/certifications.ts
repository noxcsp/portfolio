export interface CertificationItem {
  id: string
  name: string
  issuer: string
  issueDate: string
  level?: string
  image?: string
  imageAlt?: string
  credentialUrl?: string
  /** Local PDF paths served from /public (e.g. "/certificates/topcit/10th TOPCIT.pdf") */
  pdfUrls?: { label: string; url: string }[]
}

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "it-specialist-js",
    name: "IT Specialist — JavaScript",
    issuer: "Certiport, a Pearson VUE business",
    issueDate: "2026",
    credentialUrl: "https://www.credly.com/earner/earned/badge/5f2e7c22-9365-45a2-9ad6-505fb81b5006"
  },
  {
    id: "it-specialist-db",
    name: "IT Specialist — Databases",
    issuer: "Certiport, a Pearson VUE business",
    issueDate: "2026",
    credentialUrl:"https://www.credly.com/earner/earned/badge/81e2cfe8-0396-49ee-8daf-8bd44afa3056"
  },
  {
    id: "tpci-ict",
    name: "Test of Practical Competency in ICT",
    issuer: "Institute for Information & Communications Technology Promotion",
    issueDate: "2023–2026",
    level: "Level 3: Competent · Level 2: Advanced Beginner",
    pdfUrls: [
      { label: "10th (2023)", url: "/certificates/topcit/10th TOPCIT.pdf" },
      { label: "11th (2024)", url: "/certificates/topcit/11th TOPCIT.pdf" },
      { label: "12th (2025)", url: "/certificates/topcit/12th TOPCIT.pdf" },
      { label: "13th (2026)", url: "/certificates/topcit/13th TOPCIT.pdf" },
    ],
  },
]

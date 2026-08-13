<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

<!-- BEGIN:portfolio-agent-rules -->
# Portfolio Agent Rules

These rules govern all code generation, edits, and decisions made within this repository. Follow them strictly and without exception.

---

## 1. File & Folder Naming Conventions

| Scope | Convention | Examples |
| :--- | :--- | :--- |
| **Route folders** (Next.js App Router) | `kebab-case` | `about-me/`, `contact-form/` |
| **App special files** | Fixed lowercase (Next.js mandated) | `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, `route.ts` |
| **Utility files** | `camelCase` | `formatDate.ts`, `cn.ts` |
| **Hook files** | `camelCase` | `useActiveSection.ts`, `useTheme.ts` |
| **Component files — 2 words** | `PascalCase` | `SkillPill.tsx`, `NavDock.tsx`, `ProjectCard.tsx` |
| **Component files — 3+ words** | `kebab-case` | `floating-nav-dock.tsx`, `project-detail-card.tsx`, `section-header-row.tsx` |

> **Note:** The component export name inside the file always uses `PascalCase` regardless of the filename casing.

---

## 2. Design System Rules

> Reference: `.context/design_system-001.md`

### 2.1 Core Principles

- **Monoline Minimalism:** Use clean 1px borders and subtle dividing lines. No unnecessary drop shadows or heavy fill colors.
- **Dark Theme Only:** The sole theme is a deep midnight navy background (`oklch(0.12 0.02 250)` / `#0a0f1b`). Do not design for or implement a light theme.
- **Floating Navigation:** Navigation is a screen-anchored bottom floating dock (MagicUI style). No top navbars.

### 2.2 Color

- **Background:** `oklch(0.12 0.02 250)` / `#0a0f1b` (Deep Navy)
- Use semantic tokens (`bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`)  never hardcode color values unless they are the exact design token values above.

### 2.3 Layout

- **Max content width:** `max-w-3xl` (`48rem` / `768px`), centered with `mx-auto`.
- **Page shell:**
  ```tsx
  <main className="relative z-10 mx-auto flex w-full max-w-3xl min-w-0 flex-col gap-4 p-4 text-sm leading-loose sm:p-6">
    {/* Section components */}
  </main>
  ```
- **Section wrapper:**
  ```tsx
  <section className="w-full py-4 sm:py-6">
    <div className="flex flex-col gap-5 sm:gap-6">
      {/* Section Header / Content */}
    </div>
  </section>
  ```
- **Vertical section spacing:** `space-y-24` or `space-y-32` between sections.

### 2.4 Floating Bottom Dock

- **Position:** Fixed `bottom-6`, centered (`left-1/2 -translate-x-1/2`), `z-50`.
- **Style:** Glassmorphism – `backdrop-blur-md bg-background/70 border border-border/60`.
- **Shape:** Rounded pill (`rounded-full` or `rounded-[0.625rem]`).
- **Items (in order):** Home/Scroll-top (`Home`), GitHub (`Github`), LinkedIn (`Linkedin`), Email (`Mail`), Resume Download (`FileText`/`Download`), Theme switcher (`Sun`/`Moon`).

### 2.5 Timeline / Experience Track

- **Track line:** `border-l border-border/80 ml-4 md:ml-8` (1px continuous vertical border).
- **Node:** Outer ring + inner dot pattern — `absolute top-1.5 -left-1.75 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-foreground bg-transparent` wrapping `<span className="h-1.5 w-1.5 rounded-full bg-foreground" />`.
- **Skill pills:** Use the `<SkillPill>` component (`@/components/SkillPill.tsx`).

### 2.6 Typography

| Role | Size | Weight | Color | Tracking / Leading |
| :--- | :--- | :--- | :--- | :--- |
| Hero Name / H1 | `text-2xl sm:text-3xl md:text-4xl` | `font-normal` | `text-foreground` | `tracking-tight leading-tight` |
| Position / Subtitle (H2/H3) | `text-xl sm:text-3xl` | `font-normal` | `text-muted-foreground` | `tracking-normal leading-snug` |
| Intro / Body Text | `text-sm sm:text-base` | `font-normal` | `text-muted-foreground` | `leading-relaxed` |
| Captions & Meta Tags | `text-xs sm:text-sm` | `font-medium` | `text-muted-foreground/80` | `tracking-wide` |

### 2.7 Spacing Tokens

| Structure | Classes |
| :--- | :--- |
| Viewport main container | `mx-auto flex w-full max-w-2xl min-w-0 flex-col gap-4 p-4 sm:p-6` |
| Section outer wrapper | `w-full py-4 sm:py-6` |
| Section content stack | `flex flex-col gap-5 sm:gap-6` |
| Header / avatar row | `flex items-center gap-4 sm:gap-5` |
| Avatar container | `h-36 w-36 sm:h-40 sm:w-40 rounded-full border border-border shadow-sm` |
| Meta stack (name / info) | `flex flex-col justify-center gap-1` |
| Inline badge / icon gaps | `gap-1.5` |
| Paragraph stack spacing | `space-y-2` |

---

## 3. Content Rules

> Reference: `.context/content-002.md`

- **Do not alter existing content** already present in the codebase. Only apply content from `.context/content-002.md` to new sections, new components, or clearly empty placeholders.
- When using content from the content file, transcribe it faithfully — do not paraphrase, reorder, or summarize unless explicitly instructed.
- Contact details (phone, email, LinkedIn, GitHub) must match exactly as listed in the content file.

### 3.1 Personal Info

| Field | Value |
| :--- | :--- |
| Name | Clark Sean Payabyab |
| Title | Full-Stack Developer |
| Location | Paranaque City |
| Phone | +639762535224 |
| Email | seanpayabyab17@gmail.com |
| LinkedIn | linkedin.com/in/clarkpayabyab/ |
| GitHub | github.com/noxcsp |

### 3.2 Canonical Content Sections

The source of truth for all copy lives in `.context/content-002.md`:

- **Hero / About** — name, title, intro paragraph
- **Education & Credentials** — National University MOA, Summa Cum Laude, certifications
- **Technical Stack & Skills** — three groups: Core/Mobile, Data/Cloud/DevOps, AI/Analytics/Tools
- **Featured Projects** — 01 DataOne Asia, 02 CharacTale, 03 Phase, 04 Outreach & Analytics Automation
- **Professional Experience** — Web Developer Intern (DataOne), Project-Based Programmer (Freelance)
- **Contact & Connect** — all contact fields in §3.1

---

## 4. General Coding Rules

- **No inline styles.** Use Tailwind utility classes exclusively.
- **No hardcoded magic numbers.** Use Tailwind spacing/size tokens.
- **Imports:** Use the `@/` path alias for all local imports.
- **Components must be self-contained.** Do not bleed layout concerns (margins, padding) outside a component's own wrapper — let the parent control outer spacing.
- **TypeScript only.** All files must be `.tsx` (components) or `.ts` (utils/hooks/config). No `.js` or `.jsx`.
- **Accessibility:** All interactive elements must have accessible labels (`aria-label`, `aria-describedby`, or visible text). Images require `alt` attributes.
- **Server vs. Client components:** Default to React Server Components. Only add `"use client"` when the component genuinely requires browser APIs, event handlers, or React state/effects.

<!-- END:portfolio-agent-rules -->

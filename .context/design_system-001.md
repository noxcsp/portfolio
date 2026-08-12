# Portfolio Design System & UI Specifications

This document outlines the visual identity, color tokens, typography scale, component standards, and layout guidelines for Clark Sean Payabyab's single-page developer portfolio.

---

## 1. Core Principles

1. **Monoline Minimalism:** Clean 1px borders, subtle dividing lines, and generous vertical spacing without unnecessary drop shadows or heavy fill colors.
2. **Deep Navy Palette (Dark Theme Only):** A high-contrast, eye-friendly deep midnight navy background (`#0a0f1b`) paired with crisp foreground typography and warm primary accents for an ultra-modern editorial aesthetic.
3. **Floating Navigation & Dynamic Elements:** Screen-anchored bottom floating dock for seamless section transitions, paired with clean vertical monoline timeline tracks.

---

## 2. Color Palette & Token Mapping

### Color System Summary
* **Dark Theme Base:** `oklch(0.12 0.02 250)` / `#0a0f1b` (Deep Navy — mid-point of `#090d16` and `#0b1120`)

## 3. Layout & Structural Specs

### A. Main Content Container

* **Max Width Standard:** Strictly constrained to `max-w-2xl` (`42rem` / `672px`) centered horizontally with auto margins (`mx-auto px-4 sm:px-6`).
* **Vertical Structure:** `space-y-24` or `space-y-32` between sections to maintain high-impact minimalist white space.

### B. Floating Bottom Dock (MagicUI Style)

* **Position:** Fixed at `bottom-6`, horizontally centered (`left-1/2 -translate-x-1/2`), `z-50`.
* **Styling:** Glassmorphism backdrop (`backdrop-blur-md bg-background/70 border border-border/60`).
* **Border Radius:** Rounded pill (`rounded-full` or `rounded-[0.625rem]`).
* **Dock Items:**
1. **Home / Scroll to Top:** `Home` Icon
2. **Social Links:** GitHub (`Github`), LinkedIn (`Linkedin`), Email (`Mail`)
3. **Resume Download:** `FileText` / `Download` Icon
4. **Theme Switcher:** Light/Dark toggle (`Sun` / `Moon`)



### C. Timeline & Experience Track (Bryllim Style)

* **Line Style:** 1px continuous vertical border (`border-l border-border/80 ml-4 md:ml-8`).
* **Node Indicator:** Small monoline outer ring with primary foreground center dot (`w-3 h-3 rounded-full bg-foreground border-4 border-background -left-[6.5px] relative`).
* **Skill Pills:** Small pill with a subtle dashed or solid monoline border, rounded corners (`rounded-[0.625rem]` or `rounded-full`), and minimal internal padding (`px-2.5 py-1 text-xs font-mono bg-muted/40 border border-dashed border-border/80 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors inline-flex items-center gap-1.5`). The icon (e.g., React logo) is rendered on the left at a compact size (`w-3.5 h-3.5 shrink-0`).

---

## 4. Global Typography Hierarchy & Rules

| Role / Element | Font Size | Font Weight | Font Color | Tracking & Leading |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Name / H1** | `text-2xl sm:text-3xl md:text-4xl` | `font-normal` | `text-foreground` | `tracking-tight leading-tight` |
| **Position / Subtitle (H2/H3)** | `text-xl sm:text-3xl` | `font-normal` | `text-muted-foreground` or `text-primary` | `tracking-normal leading-snug` |
| **Intro / Body Text** | `text-sm sm:text-base` | `font-normal` | `text-muted-foreground` | `leading-relaxed` |
| **Captions & Meta Tags** | `text-xs sm:text-sm` | `font-medium` | `text-muted-foreground/80` | `tracking-wide` |

---

## 5. Global Spacing, Margins, and Padding Rules

To maintain visual consistency across all pages and section components, adhere strictly to the layout spacing tokens derived from `app/page.tsx` and `components/sections/hero.tsx`.

### A. Page Container & Layout Padding

| Structure Level | Utility Classes | Description |
| :--- | :--- | :--- |
| **Viewport Main Container** | `mx-auto flex w-full max-w-2xl min-w-0 flex-col gap-4 p-4 sm:p-6` | Main content shell anchored horizontally (`max-w-2xl` / `672px`), with responsive outer padding (`p-4` on mobile, `p-6` on `sm+`). |
| **Section Outer Wrapper** | `w-full py-4 sm:py-6` | Standard vertical padding wrapping each section component (`py-4` on mobile, `py-6` on `sm+`). |

### B. Section Internal Spacing & Element Gaps

| Element Scope | Utility Classes | Applied Pattern & Usage |
| :--- | :--- | :--- |
| **Section Content Stack** | `flex flex-col gap-5 sm:gap-6` | Vertical gap between major sub-blocks inside a section component (e.g., Header row -> Title -> Body). |
| **Header / Avatar Row** | `flex items-center gap-4 sm:gap-5` | Horizontal spacing between circular avatar container and header text details. |
| **Avatar Container Footprint** | `h-36 w-36 sm:h-40 sm:w-40` | Standardized avatar footprint (`144px` mobile, `160px` `sm+`) with `rounded-full border border-border shadow-sm`. |
| **Meta Stack (Name / Info)** | `flex flex-col justify-center gap-1` | Vertical spacing (`gap-1` / `4px`) between user name row and affiliation/institution link. |
| **Inline Badge / Icon Gaps** | `gap-1.5` | Spacing (`6px`) between title text and inline badges/icons (e.g., `BadgeCheck`, `GraduationCap`). |
| **Paragraph Stack Spacing** | `space-y-2` | Vertical space (`8px`) between sibling paragraph `<p>` elements. |

### C. Standardized Template Snippets

#### 1. Page Shell (`app/page.tsx`)
```tsx
<main className="relative z-10 mx-auto flex w-full max-w-2xl min-w-0 flex-col gap-4 p-4 text-sm leading-loose sm:p-6">
  {/* Section components */}
</main>
```

#### 2. Section Component (`components/sections/*.tsx`)
```tsx
<section className="w-full py-4 sm:py-6">
  <div className="flex flex-col gap-5 sm:gap-6">
    {/* Section Header / Content */}
  </div>
</section>
```



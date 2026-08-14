import type { Metadata } from "next"
import { Geist, Geist_Mono, Manrope } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import LightRays from "@/components/reactbits/LightRays"
import { FloatingNavDock } from "@/components/floating-nav-dock"
import { cn } from "@/lib/utils"

const manropeHeading = Manrope({ subsets: ["latin"], variable: "--font-heading" })
const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://clarkpayabyab.com"),
  title: {
    default: "Clark Sean Payabyab — Full-Stack Developer | MERN",
    template: "%s | Clark Sean Payabyab",
  },
  description:
    "Full-stack developer leveraging AI-assisted workflows alongside React, Next.js, React Native, and Node.js to build modern web and mobile applications.",
  authors: [{ name: "Clark Sean Payabyab", url: "https://github.com/noxcsp" }],
  creator: "Clark Sean Payabyab",
  icons: {
    icon: "/profile.png",
    shortcut: "/profile.png",
    apple: "/profile.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Clark Sean Payabyab — Full-Stack Developer | MERN",
    description:
      "Full-stack developer leveraging AI-assisted workflows alongside React, Next.js, React Native, and Node.js to build modern web and mobile applications.",
    siteName: "Clark Sean Payabyab",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 800,
        alt: "Clark Sean Payabyab",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Clark Sean Payabyab — Full-Stack Developer | MERN",
    description:
      "Full-stack developer leveraging AI-assisted workflows alongside React, Next.js, React Native, and Node.js to build modern web and mobile applications.",
    images: ["/profile.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable, manropeHeading.variable)}
    >
      <body>
        <ThemeProvider>
          <div className="relative flex min-h-screen w-full justify-center">
            <LightRays
              raysOrigin="top-left"
              raysColor="var(--foreground)"
              raysSpeed={1}
              lightSpread={1}
              rayLength={2}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0}
              distortion={0}
              pulsating={false}
              fadeDistance={0.5}
              saturation={1}
            />
            <LightRays
              raysOrigin="top-right"
              raysColor="var(--foreground)"
              raysSpeed={1}
              lightSpread={1}
              rayLength={2}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0}
              distortion={0}
              pulsating={false}
              fadeDistance={0.5}
              saturation={1}
            />
            {children}
            <FloatingNavDock />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

"use client"

import React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import {
  Home,
  Mail,
  Phone,
  FileText,
  Sun,
  Moon,
} from "lucide-react"
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6"

import { Dock, DockIcon } from "@/components/ui/dock"
import { Separator } from "@/components/ui/separator"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { useHasMounted } from "@/hooks/useHasMounted"

export function FloatingNavDock() {
  const pathname = usePathname()
  const router = useRouter()
  const { setTheme, resolvedTheme } = useTheme()
  const mounted = useHasMounted()
  const isDesktop = useMediaQuery("(min-width: 1024px)", true)
  const isMobile = useMediaQuery("(max-width: 639px)", false)

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault()
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      router.push("/")
    }
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <div className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] sm:bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <Dock
        iconSize={isMobile ? 32 : 40}
        iconMagnification={isDesktop ? 60 : (isMobile ? 32 : 40)}
        disableMagnification={!isDesktop}
        className="h-11 sm:h-14 px-2 sm:px-3 gap-1 sm:gap-1.5 max-w-[calc(100vw-1.5rem)] border-none bg-background/50 backdrop-blur-md"
      >
        <DockIcon tooltip="Home">
          <Link
            href="/"
            prefetch={true}
            onClick={handleHomeClick}
            aria-label="Home"
            className="flex size-full items-center justify-center rounded-full text-foreground lg:hover:text-foreground/80 [@media(hover:none)]:hover:text-foreground transition-colors"
          >
            <Home className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
          </Link>
        </DockIcon>

        <Separator orientation="vertical" className="shrink-0 h-1/2 sm:h-2/3 m-auto w-px bg-foreground" />

        <DockIcon tooltip="LinkedIn">
          <a
            href="https://linkedin.com/in/clarkpayabyab/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex size-full items-center justify-center rounded-full text-foreground lg:hover:text-foreground/80 [@media(hover:none)]:hover:text-foreground transition-colors"
          >
            <FaLinkedin className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
          </a>
        </DockIcon>

        <DockIcon tooltip="GitHub">
          <a
            href="https://github.com/noxcsp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex size-full items-center justify-center rounded-full text-foreground lg:hover:text-foreground/80 [@media(hover:none)]:hover:text-foreground transition-colors"
          >
            <FaGithub className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
          </a>
        </DockIcon>

        <DockIcon tooltip="Facebook">
          <a
            href="https://www.facebook.com/clark.nox/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex size-full items-center justify-center rounded-full text-foreground lg:hover:text-foreground/80 [@media(hover:none)]:hover:text-foreground transition-colors"
          >
            <FaFacebook className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
          </a>
        </DockIcon>

        <DockIcon tooltip="Email">
          <a
            href="mailto:seanpayabyab17@gmail.com"
            aria-label="Email"
            className="flex size-full items-center justify-center rounded-full text-foreground lg:hover:text-foreground/80 [@media(hover:none)]:hover:text-foreground transition-colors"
          >
            <Mail className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
          </a>
        </DockIcon>

        <DockIcon tooltip="Phone">
          <a
            href="tel:+639762535224"
            aria-label="Phone"
            className="flex size-full items-center justify-center rounded-full text-foreground lg:hover:text-foreground/80 [@media(hover:none)]:hover:text-foreground transition-colors"
          >
            <Phone className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
          </a>
        </DockIcon>


        <DockIcon tooltip="Resume">
          <a
            href="/Clark_Sean_Payabyab-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume Viewer"
            className="flex size-full items-center justify-center rounded-full text-foreground lg:hover:text-foreground/80 [@media(hover:none)]:hover:text-foreground transition-colors"
          >
            <FileText className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
          </a>
        </DockIcon>

        <Separator orientation="vertical" className="shrink-0 h-1/2 sm:h-2/3 m-auto w-px bg-foreground" />
        
        <DockIcon tooltip="Toggle Theme">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="flex size-full items-center justify-center rounded-full text-foreground lg:hover:text-foreground/80 [@media(hover:none)]:hover:text-foreground transition-colors"
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
            ) : (
              <Moon className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
            )}
          </button>
        </DockIcon>
      </Dock>
    </div>
  )
}

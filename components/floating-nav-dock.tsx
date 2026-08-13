"use client"

import React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  Home,
  Mail,
  Phone,
  FileText,
} from "lucide-react"
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6"

import { Dock, DockIcon } from "@/components/ui/dock"
import { Separator } from "@/components/ui/separator"

export function FloatingNavDock() {
  const pathname = usePathname()
  const router = useRouter()

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault()
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      router.push("/")
    }
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <Dock className="h-14 px-3 gap-1.5 border-border/60 bg-background/80 backdrop-blur-md">
        <DockIcon tooltip="Home">
          <Link
            href="/"
            onClick={handleHomeClick}
            aria-label="Home"
            className="flex items-center justify-center text-foreground hover:text-foreground/80 transition-colors"
          >
            <Home className="h-5 w-5" />
          </Link>
        </DockIcon>

        <Separator orientation="vertical" className="bg-foreground" />

        <DockIcon tooltip="LinkedIn">
          <a
            href="https://linkedin.com/in/clarkpayabyab/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center text-foreground hover:text-foreground/80 transition-colors"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
        </DockIcon>

        <DockIcon tooltip="GitHub">
          <a
            href="https://github.com/noxcsp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center text-foreground hover:text-foreground/80 transition-colors"
          >
            <FaGithub className="h-5 w-5" />
          </a>
        </DockIcon>

        <DockIcon tooltip="Facebook">
          <a
            href="https://www.facebook.com/share/1K2hkJR1V6/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex items-center justify-center text-foreground hover:text-foreground/80 transition-colors"
          >
            <FaFacebook className="h-5 w-5" />
          </a>
        </DockIcon>

        <DockIcon tooltip="Email">
          <a
            href="mailto:seanpayabyab17@gmail.com"
            aria-label="Email"
            className="flex items-center justify-center text-foreground hover:text-foreground/80 transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </DockIcon>

        <DockIcon tooltip="Phone">
          <a
            href="tel:+639762535224"
            aria-label="Phone"
            className="flex items-center justify-center text-foreground hover:text-foreground/80 transition-colors"
          >
            <Phone className="h-5 w-5" />
          </a>
        </DockIcon>

        <Separator orientation="vertical" className="bg-foreground" />

        <DockIcon tooltip="Resume">
          <a
            href="/Clark_Sean_Payabyab-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume Viewer"
            className="flex items-center justify-center text-foreground hover:text-foreground/80 transition-colors"
          >
            <FileText className="h-5 w-5" />
          </a>
        </DockIcon>
      </Dock>
    </div>
  )
}

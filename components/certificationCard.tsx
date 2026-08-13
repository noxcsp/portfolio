"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import type { CertificationItem } from "@/constants/certifications"
import { ExternalLink, Maximize2, X, FileText, ChevronLeft, ChevronRight } from "lucide-react"

interface CertificationCardProps {
  certification: CertificationItem
}

export default function CertificationCard({ certification }: CertificationCardProps) {
  const { name, issuer, issueDate, level, image, imageAlt, credentialUrl, pdfUrls } = certification
  const [isOpen, setIsOpen] = useState(false)
  const [activePdfIndex, setActivePdfIndex] = useState(0)

  const hasPdfs = pdfUrls && pdfUrls.length > 0

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
      if (!isOpen || !hasPdfs) return
      if (e.key === "ArrowRight") setActivePdfIndex((i) => Math.min(i + 1, pdfUrls!.length - 1))
      if (e.key === "ArrowLeft") setActivePdfIndex((i) => Math.max(i - 1, 0))
    }
    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, hasPdfs, pdfUrls])

  const openModal = () => {
    setActivePdfIndex(0)
    setIsOpen(true)
  }

  return (
    <>
      <div className="items-start gap-1 text-sm sm:grid sm:grid-cols-[160px_1fr] sm:gap-12">
        {/* Left Column: Issue Date (Fixed column width matching ExperienceCard) */}
        <div className="pt-0.5 text-left text-xs font-medium text-muted-foreground sm:text-sm">
          {issueDate}
        </div>

        {/* Right Column: Details */}
        <div className="flex flex-col gap-2">
          {/* Row 1: Cert Name & Optional Level */}
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold text-foreground leading-snug sm:text-base">
              {name}
            </h3>
            {level && (
              <span className="inline-flex items-center rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[11px] font-medium text-primary">
                {level}
              </span>
            )}
          </div>

          {/* Row 2: Issuer */}
          <p className="font-medium text-muted-foreground text-xs sm:text-sm">
            {issuer}
          </p>

          {/* Row 3: Thumbnail & Credential Action */}
          {(image || credentialUrl || hasPdfs) && (
            <div className="flex items-center gap-3 pt-1">
              {/* Clickable Image Thumbnail */}
              {image && (
                <button
                  type="button"
                  onClick={openModal}
                  className="group relative h-12 w-16 shrink-0 overflow-hidden rounded-md border border-border/80 bg-muted/40 transition-all hover:border-primary/50 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:h-14 sm:w-20"
                  aria-label={`View full image for ${name}`}
                  title="Click to view full image"
                >
                  <Image
                    src={image}
                    alt={imageAlt || name}
                    fill
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                    unoptimized={image.startsWith("http")}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <Maximize2 className="h-3.5 w-3.5 text-white" />
                  </div>
                </button>
              )}

              {/* PDF Preview Button */}
              {hasPdfs && (
                <button
                  type="button"
                  onClick={openModal}
                  className="group/pdf inline-flex items-center gap-1.5 rounded-md border border-border/80 bg-muted/30 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-primary/50 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`View certificates for ${name}`}
                  title="Click to view certificates"
                >
                  <FileText className="h-3 w-3 shrink-0" />
                  <span>View certificates</span>
                  <span className="ml-0.5 rounded bg-primary/15 px-1 py-0.5 font-mono text-[10px] text-primary">
                    {pdfUrls!.length}
                  </span>
                </button>
              )}

              {/* Optional Show Credential Button */}
              {credentialUrl && (
                <a
                  href={credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-1.5 rounded-md border border-border/80 bg-muted/30 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-primary/50 hover:bg-muted hover:text-foreground"
                >
                  <span>Show credential</span>
                  <ExternalLink className="h-3 w-3 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal — Image */}
      {isOpen && image && !hasPdfs && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Full image of ${name}`}
        >
          <div
            className="relative flex max-h-[90vh] max-w-4xl flex-col overflow-hidden rounded-xl border border-border bg-background p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 rounded-full bg-black/60 p-1.5 text-white transition-colors hover:bg-black/90 focus-visible:outline-none"
              aria-label="Close full preview"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative h-[60vh] w-[80vw] max-w-3xl sm:h-[70vh]">
              <Image
                src={image}
                alt={imageAlt || name}
                fill
                className="object-contain"
                unoptimized={image.startsWith("http")}
              />
            </div>
            <div className="p-3 text-center">
              <p className="font-semibold text-foreground text-sm sm:text-base">{name}</p>
              <p className="text-xs text-muted-foreground">{issuer}</p>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal — PDF viewer with tab navigation */}
      {isOpen && hasPdfs && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Certificate viewer for ${name}`}
        >
          <div
            className="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-border bg-background shadow-2xl"
            style={{ height: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-border px-4 py-3">
              <div>
                <p className="font-semibold text-foreground text-sm">{name}</p>
                <p className="text-xs text-muted-foreground">{issuer}</p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Close certificate viewer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Tab Bar */}
            <div className="flex shrink-0 items-center gap-1 border-b border-border bg-muted/30 px-3 py-2">
              {pdfUrls!.map((pdf, i) => (
                <button
                  key={pdf.url}
                  type="button"
                  onClick={() => setActivePdfIndex(i)}
                  className={`rounded-md px-3 py-1 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    i === activePdfIndex
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                  aria-label={`View ${pdf.label}`}
                  aria-selected={i === activePdfIndex}
                >
                  {pdf.label}
                </button>
              ))}

              {/* Arrow navigation (right-aligned) */}
              <div className="ml-auto flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setActivePdfIndex((i) => Math.max(i - 1, 0))}
                  disabled={activePdfIndex === 0}
                  className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Previous certificate"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="text-xs text-muted-foreground tabular-nums">
                  {activePdfIndex + 1} / {pdfUrls!.length}
                </span>
                <button
                  type="button"
                  onClick={() => setActivePdfIndex((i) => Math.min(i + 1, pdfUrls!.length - 1))}
                  disabled={activePdfIndex === pdfUrls!.length - 1}
                  className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Next certificate"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* PDF iframe */}
            <div className="flex-1 overflow-hidden bg-muted/10">
              <iframe
                key={pdfUrls![activePdfIndex].url}
                src={`${pdfUrls![activePdfIndex].url}#toolbar=1&view=FitH`}
                className="h-full w-full border-0"
                title={`${name} — ${pdfUrls![activePdfIndex].label}`}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

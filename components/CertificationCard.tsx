"use client"

import { useState, useEffect, useRef, useId } from "react"
import Image from "next/image"
import type { CertificationItem } from "@/constants/certifications"
import { ExternalLink, Maximize2, X, FileText, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

interface CertificationCardProps {
  certification: CertificationItem
}

export default function CertificationCard({ certification }: CertificationCardProps) {
  const { id, name, issuer, issueDate, level, image, imageAlt, credentialUrl, pdfUrls } = certification
  const [isOpen, setIsOpen] = useState(false)
  const [activePdfIndex, setActivePdfIndex] = useState(0)
  const [isPdfLoading, setIsPdfLoading] = useState(true)

  const generatedId = useId()
  const certId = id || generatedId
  const triggerRef = useRef<HTMLElement | null>(null)
  const modalRef = useRef<HTMLDivElement | null>(null)
  const tabListRef = useRef<HTMLDivElement | null>(null)
  const shouldReduceMotion = useReducedMotion()

  const hasPdfs = Boolean(pdfUrls && pdfUrls.length > 0)

  // Auto-scroll active tab into view when activePdfIndex changes
  useEffect(() => {
    if (!isOpen || !hasPdfs) return
    const activeTabButton = tabListRef.current?.querySelector<HTMLElement>(
      `[id="cert-tab-${certId}-${activePdfIndex}"]`
    )
    if (activeTabButton) {
      activeTabButton.scrollIntoView({
        behavior: shouldReduceMotion ? "auto" : "smooth",
        block: "nearest",
        inline: "center",
      })
    }
  }, [activePdfIndex, isOpen, hasPdfs, certId, shouldReduceMotion])

  // Focus trap, scroll lock, and keyboard navigation
  useEffect(() => {
    if (!isOpen) {
      if (triggerRef.current) {
        triggerRef.current.focus()
        triggerRef.current = null
      }
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    // Focus the modal or first interactive element upon opening
    const focusTimeout = setTimeout(() => {
      if (modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
        if (focusable.length > 0) {
          focusable[0].focus()
        } else {
          modalRef.current.focus()
        }
      }
    }, 50)

    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape closes modal
      if (e.key === "Escape") {
        e.preventDefault()
        setIsOpen(false)
        return
      }

      // Focus trap for Tab and Shift+Tab
      if (e.key === "Tab") {
        if (!modalRef.current) return
        const focusable = Array.from(
          modalRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => el.offsetParent !== null || el.offsetWidth > 0 || el.offsetHeight > 0)

        if (focusable.length === 0) {
          e.preventDefault()
          return
        }

        const firstElement = focusable[0]
        const lastElement = focusable[focusable.length - 1]

        if (e.shiftKey) {
          if (document.activeElement === firstElement || !modalRef.current.contains(document.activeElement)) {
            e.preventDefault()
            lastElement.focus()
          }
        } else {
          if (document.activeElement === lastElement || !modalRef.current.contains(document.activeElement)) {
            e.preventDefault()
            firstElement.focus()
          }
        }
        return
      }

      // Arrow navigation for multi-PDF certifications
      if (hasPdfs && pdfUrls && pdfUrls.length > 1) {
        if (e.key === "ArrowRight") {
          e.preventDefault()
          setActivePdfIndex((prev) => {
            const next = Math.min(prev + 1, pdfUrls.length - 1)
            if (next !== prev) setIsPdfLoading(true)
            return next
          })
        } else if (e.key === "ArrowLeft") {
          e.preventDefault()
          setActivePdfIndex((prev) => {
            const next = Math.max(prev - 1, 0)
            if (next !== prev) setIsPdfLoading(true)
            return next
          })
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      clearTimeout(focusTimeout)
      document.body.style.overflow = previousOverflow || ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, hasPdfs, pdfUrls])

  const openModal = (triggerEl?: HTMLElement | null) => {
    triggerRef.current = triggerEl || (document.activeElement as HTMLElement | null)
    setActivePdfIndex(0)
    setIsPdfLoading(true)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div className="items-start gap-1 text-sm sm:grid sm:grid-cols-[160px_1fr] sm:gap-12">
        {/* Left Column: Issue Date */}
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
                  onClick={(e) => openModal(e.currentTarget)}
                  className="group relative h-12 w-16 shrink-0 overflow-hidden rounded-md border border-border/80 bg-muted/40 transition-all hover:border-primary/50 hover:shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:h-14 sm:w-20"
                  aria-label={`View full preview for ${name}`}
                  title="Click to view full preview"
                >
                  <Image
                    src={image}
                    alt={imageAlt || name}
                    fill
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 64px, 80px"
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
                  onClick={(e) => openModal(e.currentTarget)}
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
                  className="group/btn inline-flex items-center gap-1.5 rounded-md border border-border/80 bg-muted/30 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-primary/50 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
      <AnimatePresence>
        {isOpen && image && !hasPdfs && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 pt-3 pb-[calc(4.75rem+env(safe-area-inset-bottom,0px))] px-3 sm:pt-4 sm:pb-24 sm:px-5 backdrop-blur-xs"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`cert-img-title-${certId}`}
            aria-describedby={`cert-img-desc-${certId}`}
          >
            <motion.div
              ref={modalRef}
              tabIndex={-1}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex w-[96vw] sm:w-[92vw] md:max-w-4xl lg:max-w-5xl h-full max-h-full flex-col overflow-hidden rounded-xl border border-border bg-background shadow-2xl focus:outline-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex shrink-0 items-center justify-between border-b border-border px-3.5 py-2.5 sm:px-5 sm:py-3.5">
                <div className="min-w-0 pr-2">
                  <p
                    id={`cert-img-title-${certId}`}
                    className="truncate font-semibold text-foreground text-sm sm:text-base leading-snug"
                  >
                    {name}
                  </p>
                  <p
                    id={`cert-img-desc-${certId}`}
                    className="truncate text-xs text-muted-foreground"
                  >
                    {issuer}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  <a
                    href={image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-2"
                    aria-label={`Open full image for ${name} in new tab`}
                    title="Open full image in new tab"
                  >
                    <ExternalLink className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                  </a>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-2"
                    aria-label="Close full preview"
                    title="Close preview (Esc)"
                  >
                    <X className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                  </button>
                </div>
              </div>

              {/* Image Content */}
              <div className="relative flex-1 min-h-0 h-full w-full p-2 sm:p-4">
                <Image
                  src={image}
                  alt={imageAlt || name}
                  fill
                  className="object-contain"
                  unoptimized={image.startsWith("http")}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal — PDF viewer with tab navigation */}
      <AnimatePresence>
        {isOpen && hasPdfs && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 pt-3 pb-[calc(4.75rem+env(safe-area-inset-bottom,0px))] px-3 sm:pt-4 sm:pb-24 sm:px-5 backdrop-blur-xs"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`cert-title-${certId}`}
            aria-describedby={`cert-desc-${certId}`}
          >
            <motion.div
              ref={modalRef}
              tabIndex={-1}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex w-[96vw] sm:w-[92vw] md:max-w-4xl lg:max-w-5xl h-full max-h-full flex-col overflow-hidden rounded-xl border border-border bg-background shadow-2xl focus:outline-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex shrink-0 items-center justify-between border-b border-border px-3.5 py-2.5 sm:px-5 sm:py-3.5">
                <div className="min-w-0 pr-2">
                  <p
                    id={`cert-title-${certId}`}
                    className="truncate font-semibold text-foreground text-sm sm:text-base leading-snug"
                  >
                    {name}
                  </p>
                  <p
                    id={`cert-desc-${certId}`}
                    className="truncate text-xs text-muted-foreground"
                  >
                    {issuer}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  <a
                    href={pdfUrls![activePdfIndex].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-2"
                    aria-label={`Open ${pdfUrls![activePdfIndex].label} PDF in new tab`}
                    title="Open / Download PDF in new tab"
                  >
                    <ExternalLink className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                  </a>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-2"
                    aria-label="Close certificate viewer"
                    title="Close preview (Esc)"
                  >
                    <X className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                  </button>
                </div>
              </div>

              {/* Tab Bar */}
              <div className="flex shrink-0 items-center justify-between border-b border-border bg-muted/20 px-3 py-1.5 sm:px-4 sm:py-2 gap-2">
                <div
                  ref={tabListRef}
                  role="tablist"
                  aria-label={`${name} certificate editions`}
                  className="flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto scroll-smooth py-0.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x"
                >
                  {pdfUrls!.map((pdf, i) => {
                    const isSelected = i === activePdfIndex
                    return (
                      <button
                        key={pdf.url}
                        type="button"
                        role="tab"
                        id={`cert-tab-${certId}-${i}`}
                        aria-selected={isSelected}
                        aria-controls={`cert-panel-${certId}-${i}`}
                        tabIndex={isSelected ? 0 : -1}
                        onClick={() => {
                          if (activePdfIndex !== i) {
                            setActivePdfIndex(i)
                            setIsPdfLoading(true)
                          }
                        }}
                        className={cn(
                          "shrink-0 rounded-md px-2.5 py-1 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                          isSelected
                            ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                            : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                        )}
                        aria-label={`View ${pdf.label}`}
                      >
                        {pdf.label}
                      </button>
                    )
                  })}
                </div>

                {/* Arrow navigation */}
                {pdfUrls!.length > 1 && (
                  <div className="flex shrink-0 items-center gap-0.5 border-l border-border/60 pl-2">
                    <button
                      type="button"
                      onClick={() => {
                        if (activePdfIndex > 0) {
                          setActivePdfIndex((i) => i - 1)
                          setIsPdfLoading(true)
                        }
                      }}
                      disabled={activePdfIndex === 0}
                      className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-30 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label="Previous certificate"
                      title="Previous certificate"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <span className="text-[11px] text-muted-foreground tabular-nums px-1 font-mono sm:text-xs">
                      {activePdfIndex + 1}/{pdfUrls!.length}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        if (activePdfIndex < pdfUrls!.length - 1) {
                          setActivePdfIndex((i) => i + 1)
                          setIsPdfLoading(true)
                        }
                      }}
                      disabled={activePdfIndex === pdfUrls!.length - 1}
                      className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-30 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label="Next certificate"
                      title="Next certificate"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* PDF iframe */}
              <div
                id={`cert-panel-${certId}-${activePdfIndex}`}
                role="tabpanel"
                aria-labelledby={`cert-tab-${certId}-${activePdfIndex}`}
                className="relative flex-1 min-h-0 h-full w-full overflow-hidden bg-muted/10"
              >
                {isPdfLoading && (
                  <div
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2.5 bg-background/80 backdrop-blur-xs text-muted-foreground animate-in fade-in duration-150"
                    role="status"
                    aria-live="polite"
                    aria-label="Loading certificate preview"
                  >
                    <div className="h-6 w-6 animate-spin rounded-full border-2 border-border border-t-primary" />
                    <span className="text-xs font-medium">Loading certificate document...</span>
                  </div>
                )}
                <iframe
                  key={pdfUrls![activePdfIndex].url}
                  src={`${pdfUrls![activePdfIndex].url}#toolbar=0&navpanes=0&view=Fit`}
                  className="h-full w-full border-0"
                  title={`${name} — ${pdfUrls![activePdfIndex].label}`}
                  onLoad={() => setIsPdfLoading(false)}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}


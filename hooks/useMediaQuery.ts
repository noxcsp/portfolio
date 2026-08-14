import { useSyncExternalStore } from "react"

/**
 * Custom hook to subscribe to CSS media query matches with SSR hydration safety.
 *
 * @param query - The media query string to match (e.g. "(min-width: 1024px)")
 * @param defaultValue - The default value used during SSR before hydration
 */
export function useMediaQuery(query: string, defaultValue = false): boolean {
  const subscribe = (callback: () => void) => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return () => {}
    }
    const mediaQueryList = window.matchMedia(query)
    mediaQueryList.addEventListener("change", callback)
    return () => mediaQueryList.removeEventListener("change", callback)
  }

  const getSnapshot = () => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const getServerSnapshot = () => defaultValue

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

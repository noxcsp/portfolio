import { useSyncExternalStore } from "react"

const emptySubscribe = () => () => {}
const getSnapshot = () => true
const getServerSnapshot = () => false

/**
 * Custom hook to safely detect client-side mounting without triggering
 * synchronous setState in useEffect (avoiding cascading re-renders in React 19).
 */
export function useHasMounted() {
  return useSyncExternalStore(emptySubscribe, getSnapshot, getServerSnapshot)
}

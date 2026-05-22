import { useCallback } from "react"
import { useState } from "react"

type Theme = "light" | "dark"

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark"
    const stored = localStorage.getItem("theme") as Theme | null
    if (stored) return stored
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  })

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light"
      localStorage.setItem("theme", next)
      if (next === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
      return next
    })
  }, [])

  return { theme, toggleTheme }
}

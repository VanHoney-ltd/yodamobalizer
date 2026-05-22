import { useState, useEffect, useCallback } from "react"
import { Header } from "./components/layout/Header"
import { Sidebar } from "./components/layout/Sidebar"
import { Overview } from "./components/sections/Overview"
import { KeyTypes } from "./components/sections/KeyTypes"
import { RemoteFob } from "./components/sections/RemoteFob"
import { KeyRegistration } from "./components/sections/KeyRegistration"
import { EFIRelayBypass } from "./components/sections/EFIRelayBypass"
import { ImmobilizerRing } from "./components/sections/ImmobilizerRing"
import { Troubleshooting } from "./components/sections/Troubleshooting"
import { useTheme } from "./hooks/useTheme"

const sectionComponents: Record<string, React.FC> = {
  overview: Overview,
  "key-types": KeyTypes,
  fob: RemoteFob,
  "key-registration": KeyRegistration,
  "efi-relay": EFIRelayBypass,
  immobilizer: ImmobilizerRing,
  troubleshooting: Troubleshooting,
}

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState("overview")
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  useEffect(() => {
    document.querySelector(`#${activeSection}`)?.scrollIntoView({ behavior: "smooth" })
  }, [activeSection])

  const handleSectionChange = useCallback((id: string) => {
    setActiveSection(id)
  }, [])

  const ActiveComponent = sectionComponents[activeSection]

  return (
    <div className="flex h-screen overflow-hidden bg-surface dark:bg-dark-surface">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />

      <div className="flex flex-1 flex-col min-w-0">
        <Header
          theme={theme}
          onToggleTheme={toggleTheme}
          onToggleMobileNav={() => setMobileNavOpen((prev) => !prev)}
        />

        <main className="flex-1 overflow-y-auto scrollbar-thin">
          <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 lg:py-8 animate-fade-in">
            <ActiveComponent />
          </div>
        </main>

        <footer className="border-t border-border dark:border-dark-border py-4 px-6">
          <p className="text-xs text-text-muted dark:text-dark-text-muted text-center">
            UZJ100 Interactive Manual &mdash; Diagnostic reference for 1998 Toyota Land Cruiser 100-series
          </p>
        </footer>
      </div>
    </div>
  )
}

import { Menu } from "lucide-react"
import { Button } from "../ui/button"
import { ThemeToggle } from "../ThemeToggle"

interface HeaderProps {
  theme: "light" | "dark"
  onToggleTheme: () => void
  onToggleMobileNav: () => void
}

export function Header({ theme, onToggleTheme, onToggleMobileNav }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b border-border dark:border-dark-border bg-surface/80 dark:bg-dark-surface/80 backdrop-blur-md px-4 lg:px-6">
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={onToggleMobileNav}
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </Button>

      <div className="flex items-center gap-2 flex-1 min-w-0">
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-xs font-medium text-text-muted dark:text-dark-text-muted uppercase tracking-wider">
            UZJ100
          </span>
          <span className="text-text-muted dark:text-dark-text-muted">/</span>
        </div>
        <h1 className="text-sm font-semibold text-text-primary dark:text-dark-text-primary truncate">
          1998 Toyota Land Cruiser 100-Series
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  )
}

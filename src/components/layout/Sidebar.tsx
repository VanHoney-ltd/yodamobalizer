import { cn } from "../../lib/utils"
import { navItems } from "../../data/manualData"
import { ScrollArea } from "../ui/scroll-area"
import { Separator } from "../ui/separator"
import {
  Info,
  Key,
  Radio,
  FilePlus,
  Zap,
  Wifi,
  Search,
  Bug,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  info: Info,
  key: Key,
  radio: Radio,
  "file-plus": FilePlus,
  zap: Zap,
  wifi: Wifi,
  search: Search,
}

interface SidebarProps {
  activeSection: string
  onSectionChange: (id: string) => void
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ activeSection, onSectionChange, isOpen, onClose }: SidebarProps) {
  const handleClick = (id: string) => {
    onSectionChange(id)
    onClose()
  }

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:shrink-0 border-r border-border dark:border-dark-border bg-surface-secondary dark:bg-dark-surface-secondary">
        <div className="flex items-center gap-3 p-5 border-b border-border dark:border-dark-border">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">
            <Bug className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-text-primary dark:text-dark-text-primary">
              Land Cruiser 100
            </span>
            <span className="text-xs text-text-muted dark:text-dark-text-muted">
              Interactive Manual
            </span>
          </div>
        </div>
        <ScrollArea className="flex-1 py-3">
          <nav className="flex flex-col gap-1 px-3">
            {navItems.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                    activeSection === item.id
                      ? "bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-200"
                      : "text-text-secondary hover:bg-surface-tertiary dark:text-dark-text-secondary dark:hover:bg-dark-surface-tertiary"
                  )}
                >
                  {Icon && <Icon className="h-4 w-4 shrink-0" />}
                  <span>{item.label}</span>
                </button>
              )
            })}
          </nav>
        </ScrollArea>
      </aside>

      {/* Mobile drawer overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden animate-fade-in"
          onClick={onClose}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-72 bg-surface dark:bg-dark-surface border-r border-border dark:border-dark-border shadow-xl lg:hidden transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-5 border-b border-border dark:border-dark-border">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">
              <Bug className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-text-primary dark:text-dark-text-primary">
                Land Cruiser 100
              </span>
              <span className="text-xs text-text-muted dark:text-dark-text-muted">
                Interactive Manual
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-text-secondary hover:bg-surface-tertiary dark:text-dark-text-secondary dark:hover:bg-dark-surface-tertiary"
            aria-label="Close menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <Separator />
        <ScrollArea className="flex-1 py-3">
          <nav className="flex flex-col gap-1 px-3">
            {navItems.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 w-full text-left",
                    activeSection === item.id
                      ? "bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-200"
                      : "text-text-secondary hover:bg-surface-tertiary dark:text-dark-text-secondary dark:hover:bg-dark-surface-tertiary"
                  )}
                >
                  {Icon && <Icon className="h-4 w-4 shrink-0" />}
                  <span>{item.label}</span>
                </button>
              )
            })}
          </nav>
        </ScrollArea>
      </aside>
    </>
  )
}

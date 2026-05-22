import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { vehicleData, manualNotes } from "../../data/manualData"
import { Shield, Cpu, CircuitBoard } from "lucide-react"

const systemIcons = [Shield, Cpu, CircuitBoard]

export function Overview() {
  return (
    <section id="overview" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-text-primary dark:text-dark-text-primary">
          Vehicle Overview
        </h2>
        <p className="text-text-secondary dark:text-dark-text-secondary text-sm leading-relaxed">
          Complete reference for the immobilizer, key programming, and EFI systems
          on the 1998 Toyota Land Cruiser 100-series (UZJ100).
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <span className="text-brand-600 dark:text-brand-400">UZJ100</span>
            <Badge variant="secondary">1998</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-1">
              <span className="text-xs font-medium text-text-muted dark:text-dark-text-muted uppercase tracking-wider">
                Model
              </span>
              <p className="text-sm font-medium text-text-primary dark:text-dark-text-primary">
                {vehicleData.model}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-medium text-text-muted dark:text-dark-text-muted uppercase tracking-wider">
                Market
              </span>
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                {vehicleData.market}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-medium text-text-muted dark:text-dark-text-muted uppercase tracking-wider">
              Covered Systems
            </span>
            <div className="grid gap-2 sm:grid-cols-3">
              {vehicleData.systems.map((system, i) => {
                const Icon = systemIcons[i] ?? Shield
                return (
                  <div
                    key={system}
                    className="flex items-start gap-3 rounded-lg border border-border dark:border-dark-border p-3 transition-colors hover:bg-surface-secondary dark:hover:bg-dark-surface-secondary"
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm text-text-secondary dark:text-dark-text-secondary leading-snug">
                      {system}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Important Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {manualNotes.map((note) => (
              <li key={note} className="flex items-start gap-2 text-sm text-text-secondary dark:text-dark-text-secondary">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500 dark:bg-brand-400" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}

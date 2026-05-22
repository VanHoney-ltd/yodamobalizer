import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card"
import { Badge } from "../ui/badge"
import { troubleshootingData } from "../../data/manualData"
import { Search, ArrowRight, AlertCircle, Lightbulb } from "lucide-react"

const conditionColors = [
  { bg: "bg-amber-50 dark:bg-amber-950/30", border: "border-amber-200 dark:border-amber-800", icon: "text-amber-600 dark:text-amber-400", badge: "warning" as const },
  { bg: "bg-red-50 dark:bg-red-950/30", border: "border-red-200 dark:border-red-800", icon: "text-red-600 dark:text-red-400", badge: "destructive" as const },
]

export function Troubleshooting() {
  return (
    <section id="troubleshooting" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-text-primary dark:text-dark-text-primary">
          Troubleshooting
        </h2>
        <p className="text-text-secondary dark:text-dark-text-secondary text-sm leading-relaxed">
          Decision trees for the most common 100-series immobilizer and starting issues.
          Identify your symptom and follow the recommended next step.
        </p>
      </div>

      <div className="space-y-4">
        {troubleshootingData.map((entry, index) => {
          const colors = conditionColors[index] ?? conditionColors[0]
          return (
            <Card key={index} className={`${colors.border} overflow-hidden`}>
              <div className={`h-1.5 w-full ${colors.bg}`} />
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${colors.bg} ${colors.icon} shrink-0`}>
                      <AlertCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Symptom</CardTitle>
                      <CardDescription className="mt-1">
                        <span className="text-sm font-medium text-text-primary dark:text-dark-text-primary">
                          {entry.condition}
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant={colors.badge}>Issue Detected</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-border dark:border-dark-border p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Search className="h-4 w-4 text-text-muted dark:text-dark-text-muted" />
                      <span className="text-xs font-semibold text-text-muted dark:text-dark-text-muted uppercase tracking-wider">
                        Likely Issue
                      </span>
                    </div>
                    <p className="text-sm text-text-primary dark:text-dark-text-primary">
                      {entry.likely_issue}
                    </p>
                  </div>

                  <div className="rounded-lg border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30 p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
                        Next Step
                      </span>
                    </div>
                    <p className="text-sm text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                      <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                      {entry.next_step}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Quick Reference</CardTitle>
          <CardDescription>
            Diagnostic flow summary
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-border dark:border-dark-border overflow-hidden">
            <div className="grid grid-cols-3 gap-px bg-border dark:bg-dark-border">
              <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-3">
                <span className="text-xs font-semibold text-text-muted dark:text-dark-text-muted uppercase tracking-wider">
                  Condition
                </span>
              </div>
              <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-3">
                <span className="text-xs font-semibold text-text-muted dark:text-dark-text-muted uppercase tracking-wider">
                  Likely Issue
                </span>
              </div>
              <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-3">
                <span className="text-xs font-semibold text-text-muted dark:text-dark-text-muted uppercase tracking-wider">
                  Next Step
                </span>
              </div>
              {troubleshootingData.map((entry) => (
                <>
                  <div className="bg-surface dark:bg-dark-surface p-3 text-sm text-text-primary dark:text-dark-text-primary">
                    {entry.condition}
                  </div>
                  <div className="bg-surface dark:bg-dark-surface p-3 text-sm text-text-secondary dark:text-dark-text-secondary">
                    {entry.likely_issue}
                  </div>
                  <div className="bg-surface dark:bg-dark-surface p-3 text-sm font-medium text-brand-600 dark:text-brand-400">
                    {entry.next_step}
                  </div>
                </>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

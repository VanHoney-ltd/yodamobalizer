import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card"
import { Badge } from "../ui/badge"
import { remoteFobProgramming } from "../../data/manualData"
import { Clock, Radio } from "lucide-react"

export function RemoteFob() {
  return (
    <section id="fob" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-text-primary dark:text-dark-text-primary">
          Remote Keyless Entry Programming
        </h2>
        <p className="text-text-secondary dark:text-dark-text-secondary text-sm leading-relaxed">
          {remoteFobProgramming.purpose}
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-400">
              <Radio className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-base">Timed Programming Sequence</CardTitle>
              <CardDescription>
                Complete all steps within 40 seconds
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-3 mb-6">
            <div className="flex items-start gap-2">
              <Clock className="h-4 w-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
              <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                All steps must be completed within a 40-second window from step 2.
                Use a stopwatch — rushing leads to failed programming.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {remoteFobProgramming.timed_sequence.steps.map((step) => (
              <div
                key={step.step}
                className="flex items-start gap-3 rounded-lg border border-border dark:border-dark-border p-3 transition-colors hover:bg-surface-secondary dark:hover:bg-dark-surface-secondary"
              >
                <span className="step-number">{step.step}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-text-primary dark:text-dark-text-primary">
                    {step.action}
                  </p>
                  {step.time !== "N/A" && (
                    <Badge variant="warning" className="mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {step.time}
                    </Badge>
                  )}
                  {step.step === 6 && (
                    <div className="mt-2 flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-soft" />
                      <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                        Success indicator: doors cycle to confirm mode
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

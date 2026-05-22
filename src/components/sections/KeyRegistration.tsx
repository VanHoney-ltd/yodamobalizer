import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card"
import { Badge } from "../ui/badge"
import { keyRegistration } from "../../data/manualData"
import { Clock, AlertTriangle, Plus, Trash2, CheckCircle } from "lucide-react"

function TimedStepList({
  steps,
  preconditions,
  successIndicator,
}: {
  steps: { step: number; action: string; time: string }[]
  preconditions?: string
  successIndicator?: string
}) {
  return (
    <div className="space-y-3">
      {preconditions && (
        <div className="rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30 p-3 mb-4">
          <div className="flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
            <p className="text-xs text-blue-800 dark:text-blue-300 leading-relaxed">
              {preconditions}
            </p>
          </div>
        </div>
      )}

      {steps.map((step) => (
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
          </div>
        </div>
      ))}

      {successIndicator && (
        <div className="mt-4 flex items-start gap-2 rounded-lg border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30 p-3">
          <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
              Success Indicator
            </span>
            <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-1">
              {successIndicator}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export function KeyRegistration() {
  const addNew = keyRegistration.add_new_key_timed_sequence
  const deleteSeq = keyRegistration.delete_all_but_one_master

  return (
    <section id="key-registration" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-text-primary dark:text-dark-text-primary">
          Key Registration &amp; Deletion
        </h2>
        <p className="text-text-secondary dark:text-dark-text-secondary text-sm leading-relaxed">
          Register new transponder keys or delete all but one master key using
          pedal-based timed sequences. No special tools required for these procedures.
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400">
              <Plus className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-base">Add a New Key</CardTitle>
              <CardDescription>
                Requires at least one working master key
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <TimedStepList
            steps={addNew.steps}
            preconditions={addNew.preconditions}
            successIndicator={addNew.success_indicator}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400">
              <Trash2 className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-base">Delete All Keys (Except One Master)</CardTitle>
              <CardDescription>
                Clears all registered keys from immobilizer memory
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <TimedStepList steps={deleteSeq.steps} />

          <div className="mt-4 rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-3">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-amber-800 dark:text-amber-300 uppercase tracking-wider">
                  Caution
                </p>
                <p className="text-xs text-amber-700 dark:text-amber-400 mt-1 leading-relaxed">
                  Security light will flash rapidly during step 5 — this confirms deletion
                  is in progress. Keep the only remaining master key safe. Deleting all keys
                  without a surviving master requires professional equipment (Techstream).
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

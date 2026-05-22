import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card"
import { efiRelayBypass } from "../../data/manualData"
import { AlertTriangle, Wrench, Info, BatteryWarning } from "lucide-react"

export function EFIRelayBypass() {
  return (
    <section id="efi-relay" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-text-primary dark:text-dark-text-primary">
          EFI Relay Bypass
        </h2>
        <p className="text-text-secondary dark:text-dark-text-secondary text-sm leading-relaxed">
          {efiRelayBypass.purpose}
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400">
              <BatteryWarning className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-base">Common Symptoms</CardTitle>
              <CardDescription>
                Indicators that point to EFI relay failure
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 sm:grid-cols-3">
            {efiRelayBypass.common_symptoms.map((symptom) => (
              <div
                key={symptom}
                className="flex items-start gap-2 rounded-lg border border-border dark:border-dark-border p-3"
              >
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                <span className="text-sm text-text-secondary dark:text-dark-text-secondary">
                  {symptom}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-base">Precautions</CardTitle>
              <CardDescription>
                Safety measures before starting work
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {efiRelayBypass.procedure.precautions.map((precaution) => (
              <li key={precaution} className="flex items-start gap-3 text-sm text-text-secondary dark:text-dark-text-secondary">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                <span>{precaution}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-400">
              <Wrench className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-base">Procedure</CardTitle>
              <CardDescription>
                Step-by-step bypass installation
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {efiRelayBypass.procedure.steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-lg border border-border dark:border-dark-border p-3 transition-colors hover:bg-surface-secondary dark:hover:bg-dark-surface-secondary"
              >
                <span className="step-number">{index + 1}</span>
                <p className="text-sm text-text-primary dark:text-dark-text-primary pt-1">
                  {step.replace(/^\d+\.\s*/, "")}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400">
              <Info className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-base">Notes</CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30 p-3">
            <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed">
              {efiRelayBypass.procedure.notes}
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

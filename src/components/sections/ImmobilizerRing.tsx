import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card"
import { Badge } from "../ui/badge"
import { immobilizerRingAntenna } from "../../data/manualData"
import { Wrench, Ruler, Info, AlertTriangle } from "lucide-react"

export function ImmobilizerRing() {
  const ring = immobilizerRingAntenna

  return (
    <section id="immobilizer" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-text-primary dark:text-dark-text-primary">
          Immobilizer Ring Antenna
        </h2>
        <p className="text-text-secondary dark:text-dark-text-secondary text-sm leading-relaxed">
          {ring.purpose}
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400">
              <Ruler className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-base">Resistance Test</CardTitle>
              <CardDescription>
                Diagnose antenna health with a multimeter
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {ring.testing_procedure.tools_needed.map((tool) => (
                <Badge key={tool} variant="secondary" className="flex items-center gap-1">
                  <Wrench className="h-3 w-3" />
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {ring.testing_procedure.resistance_test.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-lg border border-border dark:border-dark-border p-3"
              >
                <span className="step-number">{index + 1}</span>
                <p className="text-sm text-text-primary dark:text-dark-text-primary pt-0.5">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Good Range
            </CardTitle>
            <CardDescription>Expected reading</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              2.5 – 4.5 <span className="text-sm font-normal">Ω</span>
            </p>
            <p className="text-xs text-text-muted dark:text-dark-text-muted mt-1">
              Typical for Toyota 4C transponder systems
            </p>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-3">
          <Card className="border-red-300 dark:border-red-800">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400 shrink-0">
                <AlertTriangle className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-red-700 dark:text-red-400">
                  Infinite (Open)
                </p>
                <p className="text-xs text-red-600 dark:text-red-400/80">
                  Antenna failed — replace
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-300 dark:border-amber-800">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400 shrink-0">
                <AlertTriangle className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">
                  0 Ω (Shorted)
                </p>
                <p className="text-xs text-amber-600 dark:text-amber-400/80">
                  Antenna shorted — replace
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-400">
              <Wrench className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-base">Replacement Procedure</CardTitle>
              <CardDescription>
                OEM part 89783-33100 or equivalent
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {ring.testing_procedure.replacement_steps.map((step, index) => (
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

          <div className="mt-4 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30 p-3">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
              <p className="text-xs text-blue-800 dark:text-blue-300 leading-relaxed">
                {ring.testing_procedure.notes}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card"
import { Badge } from "../ui/badge"
import { vehicleData } from "../../data/manualData"
import { Key, ShieldCheck, ShieldOff } from "lucide-react"

export function KeyTypes() {
  return (
    <section id="key-types" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-text-primary dark:text-dark-text-primary">
          Key Types &amp; Identification
        </h2>
        <p className="text-text-secondary dark:text-dark-text-secondary text-sm leading-relaxed">
          The 100-series uses a 4C Texas Instruments transponder system. Key type
          determines security light behavior and programming capabilities.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-transparent dark:from-brand-950/20" />
          <CardHeader className="relative">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-base">Master Key</CardTitle>
                <CardDescription>Full access</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative">
            <div className="flex items-center gap-2 mb-3">
              <Key className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <Badge variant="success">Security Light: OFF immediately</Badge>
            </div>
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
              {vehicleData.key_types.master}
            </p>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent dark:from-amber-950/20" />
          <CardHeader className="relative">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400">
                <ShieldOff className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-base">Valet Key</CardTitle>
                <CardDescription>Restricted access</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative">
            <div className="flex items-center gap-2 mb-3">
              <Key className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              <Badge variant="warning">Security Light: ON 1–3s then OFF</Badge>
            </div>
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
              {vehicleData.key_types.valet}
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Transponder Chip Identification</CardTitle>
          <CardDescription>
            4C Texas Instruments — verify before programming
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-border dark:border-dark-border bg-surface-secondary dark:bg-dark-surface-secondary p-4">
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
              Always confirm your replacement key has a compatible <strong className="text-text-primary dark:text-dark-text-primary">4C (48-bit) transponder chip</strong>. 
              Incompatible chips will cause the security light to blink continuously and the engine 
              will not start. Aftermarket keys must explicitly state 4C compatibility for Toyota/Lexus 
              vehicles of this era.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

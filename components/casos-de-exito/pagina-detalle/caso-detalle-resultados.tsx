import {
  BarChart3,
  DollarSign,
  MousePointerClick,
  Phone,
  TrendingUp,
} from "lucide-react"
import type { CasoExito } from "@/lib/casos-de-exito-data"
import { Card, CardContent } from "@/components/ui/card"

interface CasoDetalleResultadosProps {
  caso: CasoExito
}

export function CasoDetalleResultados({ caso }: CasoDetalleResultadosProps) {
  const r = caso.resultados_ultimo_mes

  const metrics = [
    { label: "Clicks", value: r.clicks, icon: MousePointerClick },
    { label: "CTR", value: r.CTR, icon: BarChart3 },
    {
      label: "Conversiones",
      value: r.conversiones,
      icon: Phone,
      highlight: true,
    },
    { label: "Tasa de conversión", value: r.tasa_conversion, icon: TrendingUp },
    { label: "CPA promedio", value: r.CPA_promedio, icon: DollarSign },
    { label: "Inversión mensual", value: r.inversion_mensual, icon: DollarSign },
  ]

  return (
    <section className="px-6 py-12 md:py-16">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Resultados del último mes
        </h2>
        <p className="mt-2 text-muted-foreground">
          Métricas de performance tras la implementación.
        </p>
        <div className="mt-8 grid gap-4 grid-cols-2 lg:grid-cols-3">
          {metrics.map(({ label, value, icon: Icon, highlight }) => (
            <Card key={label} className="border-border">
              <CardContent className="my-auto">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon className="h-4 w-4" />
                  <span className="text-sm">{label}</span>
                </div>
                <p
                  className={
                    highlight
                      ? "mt-2 text-2xl font-bold tabular-nums text-primary text-center"
                      : "mt-2 text-2xl font-bold tabular-nums text-center"
                  }
                >
                  {value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

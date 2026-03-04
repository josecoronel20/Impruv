import { CheckCircle2 } from "lucide-react"
import type { CasoExito } from "@/lib/casos-de-exito-data"

interface CasoDetalleImpactoProps {
  caso: CasoExito
}

export function CasoDetalleImpacto({ caso }: CasoDetalleImpactoProps) {
  return (
    <section className="px-6 py-12 md:py-16 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Impacto en el negocio
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {caso.impacto_negocio.map((impacto, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-lg border border-border bg-card px-4 py-3"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-muted-foreground">{impacto}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

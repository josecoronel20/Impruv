import { CheckCircle, CheckCircle2, Lightbulb, List } from "lucide-react"
import type { CasoExito } from "@/lib/casos-de-exito-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CasoDetalleEstrategiaSolucionProps {
  caso: CasoExito
}

export function CasoDetalleEstrategiaSolucion({ caso }: CasoDetalleEstrategiaSolucionProps) {
  return (
    <section className="px-6 py-12 md:py-16 bg-muted/20">
      <div className="container mx-auto max-w-4xl space-y-12">
        <div>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Estrategia y solución
          </h2>
          <p className="mt-2 text-muted-foreground">
            Enfoque aplicado y acciones implementadas.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2"> <List className=" h-5 w-5 shrink-0 text-yellow-500" /> Estrategia</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal space-y-2 pl-4 text-muted-foreground">
                {caso.estrategia.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ol>
            </CardContent>
          </Card>
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2"> <CheckCircle className=" h-5 w-5 shrink-0 text-green-500" /> Solución implementada</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                {caso.solucion.map((s, i) => (
                  <li key={i} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

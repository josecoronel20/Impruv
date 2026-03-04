import { CheckCircle2, Target, Lightbulb } from "lucide-react"
import type { CasoExito } from "@/lib/casos-de-exito-data"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CasoDetalleRetoObjetivosProps {
  caso: CasoExito
}

export function CasoDetalleRetoObjetivos({ caso }: CasoDetalleRetoObjetivosProps) {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="container mx-auto max-w-4xl space-y-12">
      <div>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            El reto y los objetivos
          </h2>
          <p className="mt-2 text-muted-foreground">
            Lo que buscábamos lograr.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-destructive/10">
                  <Target className="h-4 w-4 text-destructive" />
                </span>
                El reto
              </CardTitle>
              <CardDescription>Situación inicial del cliente</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {caso.problemas.map((p, i) => (
                  <li key={i} className="flex gap-2 text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/60" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <Lightbulb className="h-4 w-4 text-primary" />
                </span>
                Objetivos
              </CardTitle>
              <CardDescription>Lo que buscábamos lograr</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {caso.objetivo.map((o, i) => (
                  <li key={i} className="flex gap-2 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{o}</span>
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

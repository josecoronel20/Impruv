import { Quote } from "lucide-react"
import type { CasoExito } from "@/lib/casos-de-exito-data"
import { Card, CardContent } from "@/components/ui/card"

interface CasoDetalleTestimonioProps {
  caso: CasoExito
}

export function CasoDetalleTestimonio({ caso }: CasoDetalleTestimonioProps) {
  const { testimonio } = caso

  return (
    <section className="px-6 py-12 md:py-16">
      <div className="container mx-auto max-w-4xl">
        <Card className="border-primary/20 bg-primary/5 overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <Quote className="h-10 w-10 text-primary/40" />
            <blockquote className="mt-4 text-lg font-medium leading-relaxed text-pretty md:text-xl">
              &ldquo;{testimonio.frase}&rdquo;
            </blockquote>
            <footer className="mt-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                {testimonio.nombre}
              </span>
              <span>—</span>
              <span>{testimonio.cargo}</span>
            </footer>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

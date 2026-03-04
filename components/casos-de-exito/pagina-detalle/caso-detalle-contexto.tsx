import type { CasoExito } from "@/lib/casos-de-exito-data"

interface CasoDetalleContextoProps {
  caso: CasoExito
}

export function CasoDetalleContexto({ caso }: CasoDetalleContextoProps) {
  return (
    <section className="px-6 py-12 md:py-16 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          El contexto
        </h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
          {caso.contexto}
        </p>
      </div>
    </section>
  )
}

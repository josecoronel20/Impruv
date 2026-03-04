import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PrincipalBtn } from "@/components/common/PrincipalBtn"

export function CasoDetalleCta() {
  return (
    <section className="border-t border-border bg-muted/20 px-6 py-16 md:py-24">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          ¿Quieres resultados como estos?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Contamos tu situación, definimos objetivos y armamos una estrategia a
          medida.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <PrincipalBtn href="/contacto" label="Hablar con impruv" size="lg" />
          <Button variant="outline" size="lg" asChild>
            <Link href="/casos-de-exito">Ver más casos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

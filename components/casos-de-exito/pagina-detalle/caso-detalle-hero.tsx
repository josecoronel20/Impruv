import Image from "next/image"
import { ExternalLink } from "lucide-react"
import type { CasoExito } from "@/lib/casos-de-exito-data"

interface CasoDetalleHeroProps {
  caso: CasoExito
  crecimiento: number
}

export function CasoDetalleHero({ caso, crecimiento }: CasoDetalleHeroProps) {
  const r = caso.resultados_ultimo_mes

  return (
    <header className="px-6 pt-12 pb-16 md:pt-16 md:pb-24">
      <div className="container mx-auto max-w-4xl">
        <p className="text-sm font-medium text-primary uppercase tracking-wider">
          Caso de éxito
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-balance md:text-5xl">
          {caso.cliente}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">{caso.industria}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4 rounded-xl border border-primary/20 bg-primary/5 p-4 md:p-6">
          <div>
            <p className="text-sm text-muted-foreground">Crecimiento en leads</p>
            <p className="text-3xl font-extrabold tabular-nums text-primary md:text-4xl">
              +{crecimiento}%
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {caso.leads_promedio_mensual_inicial} → {r.conversiones} llamadas/mes
            </p>
          </div>
        </div>
        {caso.img_sitio_web ? (
          <div className="mt-12 overflow-hidden rounded-xl border border-border shadow-lg">
            <div className="relative aspect-video w-full bg-muted">
              <Image
                src={caso.img_sitio_web}
                alt={`Sitio web de ${caso.cliente}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 896px) 100vw, 896px"
                priority
              />
            </div>
            {caso.url ? (
              <div className="flex justify-end border-t border-border bg-muted/30 px-4 py-2">
                <a
                  href={caso.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Ver sitio en vivo
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </header>
  )
}

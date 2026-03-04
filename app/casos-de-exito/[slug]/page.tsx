import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { casosExito, type CasoExito } from "@/lib/casos-de-exito-data"
import {
  CasoDetalleBreadcrumb,
  CasoDetalleContexto,
  CasoDetalleCta,
  CasoDetalleEstrategiaSolucion,
  CasoDetalleHero,
  CasoDetalleImpacto,
  CasoDetalleResultados,
  CasoDetalleRetoObjetivos,
  CasoDetalleTestimonio,
} from "@/components/casos-de-exito/pagina-detalle"

function getCasoBySlug(slug: string): CasoExito | undefined {
  return casosExito.find((c) => c.slug === slug)
}

export async function generateStaticParams() {
  return casosExito.map((caso) => ({ slug: caso.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const caso = getCasoBySlug(slug)
  if (!caso) return { title: "Caso no encontrado" }
  const title = `Caso ${caso.cliente} | impruv`
  const description =
    caso.contexto.slice(0, 155) + (caso.contexto.length > 155 ? "…" : "")
  return {
    title,
    description,
    alternates: { canonical: `/casos-de-exito/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://impruvagencia.com/casos-de-exito/${slug}`,
      type: "article",
      images: caso.img_sitio_web
        ? [
            {
              url: caso.img_sitio_web,
              width: 1200,
              height: 630,
              alt: caso.cliente,
            },
          ]
        : undefined,
    },
  }
}

export default async function CasoExitoDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const caso = getCasoBySlug(slug)
  if (!caso) notFound()

  const crecimiento =
    caso.leads_promedio_mensual_inicial > 0
      ? Math.round(
          ((caso.resultados_ultimo_mes.conversiones -
            caso.leads_promedio_mensual_inicial) /
            caso.leads_promedio_mensual_inicial) *
            100
        )
      : 0

  return (
    <article className="bg-background pt-16">
      <CasoDetalleBreadcrumb />
      <CasoDetalleHero caso={caso} crecimiento={crecimiento} />
      <CasoDetalleContexto caso={caso} />
      <CasoDetalleRetoObjetivos caso={caso} />
      <CasoDetalleEstrategiaSolucion caso={caso} />
      <CasoDetalleResultados caso={caso} />
      <CasoDetalleImpacto caso={caso} />
      <CasoDetalleTestimonio caso={caso} />
      <CasoDetalleCta />
    </article>
  )
}

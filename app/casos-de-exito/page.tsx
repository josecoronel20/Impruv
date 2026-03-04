import type { Metadata } from "next"
import { casosExito } from "@/lib/casos-de-exito-data"
import { SuccessCaseCard } from "@/components/casos-de-exito/success-case-card"

export const metadata: Metadata = {
  title: "Casos de Éxito | impruv Marketing",
  description:
    "Resultados reales de clientes: más conversiones, mejor ROAS y menor CPA con Google Ads y diseño web orientado a conversión.",
  keywords: [
    "casos de éxito",
    "resultados marketing digital",
    "Google Ads resultados",
    "diseño web conversiones",
    "ROAS",
    "CPA",
  ],
  alternates: { canonical: "/casos-de-exito" },
  openGraph: {
    title: "Casos de Éxito | impruv Marketing",
    description: "Resultados reales de clientes con Google Ads y diseño web.",
    url: "https://impruv.com/casos-de-exito",
    type: "website",
  },
}

export default function CasosDeExitoPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <header className="mb-16 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Casos de Éxito
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
              Resultados reales de clientes con Google Ads y diseño web orientado a conversión.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {casosExito.map((caso) => (
              <SuccessCaseCard key={caso.slug} caso={caso} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

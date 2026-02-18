import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function GoogleAdsIntegration() {

  return (
    <section className="relative py-40 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/images/bgSections/GA-integration.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          filter: "brightness(0.3) blur(0.5px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/90 to-background/75 pointer-events-none" />

      <div className="container relative mx-auto max-w-4xl">
        <div className="bg-card/90 backdrop-blur-sm border border-border rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-6 leading-[1.3]">
            El sitio web es donde la consulta se valida o se pierde
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-[1.75]">
            Los anuncios en google permiten llegar a clientes de calidad pero sin un sitio web que termine de convencerlo, la
            oportunidad se pierde. El sitio es el punto donde la consulta se valida o se cae.
          </p>

<Button
  asChild
  size="default"
  className="rounded-full px-8 py-6 text-base font-medium group whitespace-pre-line text-wrap"
>
  <Link href="/servicios/diseno-web">
    {"Como Trabajamos con\nSitios Web"}
    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
  </Link>
</Button>
        </div>
      </div>
    </section>
    // </CHANGE>
  )
}

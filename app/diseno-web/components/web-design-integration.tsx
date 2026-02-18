import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function WebDesignIntegration() {

  return (
    <section className="relative overflow-hidden bg-background pt-48 pb-40 px-6">
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: "url(/images/bgSections/GA-hero.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        filter: "brightness(0.4) blur(0.5px)",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background pointer-events-none" />
   
      <div className="container relative mx-auto max-w-4xl">
        <div className="bg-card/90 backdrop-blur-sm border border-border rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-6 leading-[1.3]">
            Un sitio sin tráfico calificado es solo una herramienta sin uso
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-[1.75]">
            El diseño web cobra sentido cuando se integra con una estrategia de captación. Google Ads permite atraer
            usuarios con intención real, y el sitio convierte ese interés en oportunidades comerciales.
          </p>

          <Button asChild size="default" className="rounded-full px-8 py-6 text-base font-medium group whitespace-pre-line text-wrap">
            <Link href="/servicios/google-ads">
              Ver cómo trabajamos Google Ads
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
    // </CHANGE>
  )
}

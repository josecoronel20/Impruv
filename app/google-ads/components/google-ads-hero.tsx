import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function GoogleAdsHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-48 pb-40 px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/images/bgSections/GA-hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          filter: "brightness(0.4) blur(0.5px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background pointer-events-none" />

      <div className="container relative mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center gap-16">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-balance max-w-4xl leading-[1.3]">
            Servicio de Google Ads enfocado en{" "}
            <span className="text-primary">consultas de calidad</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl text-pretty leading-[1.75]">
            Diseñamos estrategias para conectarte con tus clientes ideales.{" "}
            <strong className="text-foreground font-semibold">Sin tráfico irrelevante.</strong>
          </p>

          <Link href="/contacto">
            <Button size="default" className="rounded-full px-8 py-6 text-base font-medium mt-2">
              Solicitar diagnóstico
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

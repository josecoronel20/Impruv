import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {

  return (
    <section className="relative overflow-hidden bg-background pt-48 pb-40 px-6">
      {/* Fixed layer (parallax): position:fixed + translateZ(0) so it works on iOS */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url(/images/bgSections/Home-hero.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4) blur(0.5px)",
          WebkitTransform: "translateZ(0)",
          transform: "translateZ(0)",
        }}
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/40 via-background/70 to-background pointer-events-none" />
      {/* </CHANGE> */}
      <div className="container relative z-[1] mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center gap-16">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-balance max-w-4xl leading-[1.3]">
          Agencia de marketing especializada en <span className="text-primary">anuncios en Google</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl text-pretty leading-[1.75]">
            Diseñamos un sistema que combina tu sitio web y Google Ads para{" "}
            <strong className="text-foreground font-semibold">generar oportunidades comerciales reales</strong>, no solo
            visitas.
          </p>

<Link href="/contacto">
          <Button size="default" className="rounded-full px-8 py-6 text-base font-medium mt-2">
            Contáctanos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ParallaxSection } from "../common/ParallaxSection"
import { Logo } from "../common/logo"
import { PrincipalBtn } from "../common/PrincipalBtn"

export function HeroSection() {
  return (
    <ParallaxSection image="/images/bgSections/Home-hero.png" alt="Hero section de impruv Marketing - Agencia de marketing digital especializada en Google Ads">
      <div className="flex flex-col items-center gap-2">
<Logo size="hero" />
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight text-balance max-w-4xl leading-[1.3]">
          Agencia de marketing especializada en <span className="text-primary">anuncios en Google</span>
          </h1></div>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl text-pretty leading-[1.75]">
            Diseñamos un sistema que combina tu sitio web y Google Ads para{" "}
            <strong className="text-foreground font-semibold">generar oportunidades comerciales reales</strong>, no solo
            visitas.
          </p>

<PrincipalBtn size="xl" href="/contacto" label="Contactanos" />
    </ParallaxSection>
  )
}

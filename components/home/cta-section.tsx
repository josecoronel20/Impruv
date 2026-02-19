import { CheckCircle2 } from "lucide-react"
import { ParallaxSection } from "../common/ParallaxSection"
import { PrincipalBtn } from "../common/PrincipalBtn"
import { ScrollReveal } from "../common/ScrollReveal"

export function CtaSection() {

  return (
    <ParallaxSection image="/images/bgSections/Home-cta-section.png" alt="Call to action - Solicitar diagnóstico gratuito de marketing digital">

        <ScrollReveal direction="up" delay={0}>
        <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-12 md:p-16">
          <div className="relative flex flex-col items-center text-center gap-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance leading-[1.3] text-primary">
              Analicemos si este enfoque es viable para tu negocio
            </h2>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl text-pretty leading-[1.75]">
              Analizamos tu situación actual, el tipo de cliente que buscás y si Google Ads puede ayudarte a captar
              oportunidades reales.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground">
              {["Sin compromiso", "Enfoque B2B", "Basado en datos y viabilidad real"].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <PrincipalBtn size="xl" href="/contacto" label="Solicitar diagnóstico" />
          </div>
        </div>
        </ScrollReveal>
    </ParallaxSection>
  )
}

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function CtaSection() {

  return (
    <section className="relative py-40 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/images/bgSections/Home-cta-section.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          filter: "brightness(0.3) blur(0.5px)",
        }}
      />
      <div className="absolute inset-0 bg-background/30 pointer-events-none" />
      {/* </CHANGE> */}
      <div className="container relative mx-auto max-w-4xl">
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

            <Button size="default" className="rounded-full px-8 py-6 text-base font-medium mt-2">
              Solicitar diagnóstico
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

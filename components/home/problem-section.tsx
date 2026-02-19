import { AlertCircle } from "lucide-react"
import { ScrollReveal } from "../common/ScrollReveal"

export function ProblemSection() {
  return (
    <section className="py-40 px-6 bg-muted/30">
           <ScrollReveal direction="up" delay={0}>
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col gap-20">
          <div className="text-center">
             <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-6 leading-[1.3]">
              Muchas empresas invierten en publicidad, pero no consiguen clientes reales
            </h2>
          </div>
            
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Publicidad que atrae visitas, pero no consultas reales.",
              "Sitios web que informan, pero no convencen.",
              "Resultados que no se pueden medir ni optimizar.",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-8 bg-card rounded-3xl border border-border">
                <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-card-foreground leading-[1.75]">{item}</p>
              </div>
            ))}
          </div>


          <div className="text-center max-w-2xl mx-auto">
            
            <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-[1.3]">
              El problema no es la publicidad ni el sitio web.
            </h3>
            <p className="text-lg md:text-xl text-primary font-semibold text-balance leading-[1.6]">
              Es no tener un{" "}
              <strong>
                sistema pensado para atraer a los clientes adecuados y convertirlos en oportunidades reales
              </strong>
              .
            </p>
          </div>


        </div>
      </div>
          </ScrollReveal>
    </section>
  )
}

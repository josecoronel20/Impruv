import { Target, Globe, TrendingUp } from "lucide-react"
import { ParallaxSection } from "../common/ParallaxSection"
import { ScrollReveal } from "../common/ScrollReveal"

const solutions = [
  {
    icon: Target,
    title: "Publicidad con intención",
    description:
      "Google Ads enfocado en atraer personas que ya están buscando una solución, no en generar visibilidad sin impacto.",
  },
  {
    icon: Globe,
    title: "Sitio web preparado para convertir",
    description:
      "Un sitio que presenta tu propuesta de forma clara, responde las principales dudas y acompaña al usuario hasta generar una oportunidad comercial acorde a tu cliente ideal.",
  },
  {
    icon: TrendingUp,
    title: "Medición y optimización continua",
    description:
      "Analizamos el comportamiento de los usuarios, medimos cada acción y optimizamos el sistema de forma constante para generar más y mejores clientes.",
  },
]

export function SolutionSection() {

  return (
    <ParallaxSection image="/images/bgSections/Home-solutions-section.png" alt="Sección de soluciones de marketing digital - Sistema integrado para atraer clientes adecuados">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-6 leading-[1.3] ">
              Un sistema pensado para <span className="text-primary">atraer a los clientes adecuados</span> y <span className="text-primary">medir resultados</span>
            </h2>
            <p className="text-base md:text-lg  text-pretty leading-[1.75]">
              La solución no es invertir más publicidad ni rediseñar el sitio por separado. Es implementar un{" "}
              <strong className="text-primary">sistema integrado</strong>, donde cada parte cumple un rol claro:
              atraer a las personas correctas, transformar visitas en oportunidades de venta y optimizar los resultados
              con datos reales.
            </p>
          </div>

      <ScrollReveal direction="up" delay={0}>
          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group relative p-8 bg-card rounded-3xl border border-border hover:border-primary/20 transition-colors"
              >
                <div className="flex flex-col gap-6">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <solution.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold leading-[1.3]">{solution.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-[1.75]">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>

          </ScrollReveal>
          
    </ParallaxSection>
  )
}

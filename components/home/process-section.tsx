import Link from "next/link"
import { Button } from "../ui/button"

const steps = [
  {
    number: "1",
    title: "Análisis del negocio",
    description: "Definimos objetivos, criterios de calidad del cliente ideal.",
  },
  {
    number: "2",
    title: "Análisis de búsquedas",
    description:
      "Identificamos las búsquedas con intención real y potencial de conversión que más se alinean con el objetivo.",
  },
  {
    number: "3",
    title: "Estructuración de campañas y sitio web",
    description: "Campañas de anuncios y páginas alineadas al objetivo comercial.",
  },
  {
    number: "4",
    title: "Medición y optimización continua",
    description: "Luego de las primeras semanas analizamos datos y aplicamos mejoras basadas en resultados reales.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-40 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col gap-20">
        <h2 className="text-3xl text-center md:text-4xl font-bold tracking-tight text-balance mb-6 leading-[1.3]">
              Proceso de trabajo
            </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold leading-[1.3]">{step.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-[1.75]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm md:text-base text-muted-foreground leading-[1.75] mb-4">
              Profundiza en cada parte del sistema:
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link href="/como-trabajamos/diseno-web" className="text-primary font-medium hover:underline">
                  Sitio web
                </Link>
              </Button>
              <Button asChild>
                <Link href="/como-trabajamos/google-ads" className="text-primary font-medium hover:underline">
                  Google Ads
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

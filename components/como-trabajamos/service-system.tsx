import { Card } from "@/components/ui/card"
import { Target, Monitor, TrendingUp } from "lucide-react"

const pillars = [
  {
    icon: Target,
    number: "1",
    title: "Google Ads con intención real",
    description: "Priorizamos calidad de consulta sobre volumen de clics.",
  },
  {
    icon: Monitor,
    number: "2",
    title: "Sitio web optimizado para conversión",
    description: "Sitio que presenta tu propuesta con claridad y guía al usuario hasta la consulta.",
  },
  {
    icon: TrendingUp,
    number: "3",
    title: "Medición y optimización continua",
    description: "Medimos, analizamos y ajustamos para mejorar calidad y eficiencia.",
  },
]

export function ServiceSystem() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-32">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url(/images/bgSections/metodologia-sitio+GA.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          filter: "brightness(0.35) blur(0.5px)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background/50" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6 text-balance">
          Un sistema integrado, no acciones aisladas
        </h2>
        <p className="text-base md:text-lg text-white mb-12 max-w-3xl mx-auto text-center text-pretty leading-[1.75]">
          La captación B2B no funciona por partes. Trabajamos con un sistema donde cada pieza genera consultas de calidad.
        </p>

        <div className="space-y-8 mb-12">
          {pillars.map((pillar) => (
            <Card
              key={pillar.number}
              className="p-8 md:p-10 rounded-3xl border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm hover:border-neutral-600 transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-800 flex items-center justify-center">
                    <pillar.icon className="w-6 h-6 text-neutral-300" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-medium text-neutral-500">{pillar.number}.</span>
                    <h3 className="text-lg font-medium text-white">{pillar.title}</h3>
                  </div>
                  <p className="text-sm text-neutral-300 text-pretty leading-[1.7]">{pillar.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 md:p-8 rounded-3xl border border-neutral-700 bg-neutral-900/40 backdrop-blur-sm mb-10">
          <h3 className="text-lg font-semibold text-white mb-4">Por qué así</h3>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li>• Sin sitio preparado, el tráfico de Google Ads se pierde.</li>
            <li>• Sin captación, el sitio no escala; con datos, decidimos mejor.</li>
            <li>• En B2B, pocas consultas correctas valen más que mucho volumen.</li>
          </ul>
        </Card>

        <p className="text-base text-neutral-300 max-w-3xl mx-auto text-center text-pretty leading-[1.75]">
          El valor está en cómo trabajan juntas. Medimos lo que importa y construimos sistemas de captación sostenibles.
        </p>
      </div>
    </section>
  )
}

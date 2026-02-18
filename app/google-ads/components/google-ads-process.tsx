import { Target, Megaphone, MousePointerClick, TrendingUp } from "lucide-react"

export function GoogleAdsProcess() {
  const steps = [
    {
      number: "01",
      title: "Definimos a quién atraer",
      description:
        "Analizamos qué tipo de cliente te conviene y qué búsquedas realmente pueden convertirse en una oportunidad.",
      icon: Target,
    },
    {
      number: "02",
      title: "Campañas enfocadas en necesidad real",
      description:
        "Mostramos tus anuncios a personas que están buscando contratar, no solo informarse o comparar sin intención de avanzar.",
      icon: Megaphone,
    },
    {
      number: "03",
      title: "Mensaje claro desde el primer clic",
      description:
        "El anuncio y la página trabajan juntos para que la persona entienda rápido si el servicio es para ella y dé el siguiente paso.",
      icon: MousePointerClick,
    },
    {
      number: "04",
      title: "Seguimiento y mejora constante",
      description:
        "Revisamos qué tipo de contactos llegan y ajustamos la campaña para atraer cada vez mejores oportunidades.",
      icon: TrendingUp,
    },
    
  ]

  return (
    <section className="py-40 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-6 leading-[1.3]">
            Cómo funciona el servicio
          </h2>
        </div>

        <div className="grid gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="bg-card rounded-3xl p-8 border border-border hover:border-primary/20 transition-colors"
              >
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  <div className="flex items-center gap-6">
                    <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                    <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3 leading-[1.3]">{step.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-[1.75]">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
    // </CHANGE>
  )
}

import { FileText, Users, Layout, LineChart } from "lucide-react"

export function WebDesignProcess() {
  const steps = [
    {
      icon: Users,
      title: "Entendemos tu negocio",
      description:
        "Analizamos qué ofrecés, a quién querés atraer y qué dudas debemos resolver para facilitar el contacto.",
    },
    {
      icon: FileText,
      title: "Definimos la estructura",
      description:
        "Organizamos la información para que sea clara y guíe al visitante paso a paso.",
    },
    {
      icon: Layout,
      title: "Diseñamos para que actúen",
      description:
        "Creamos un diseño simple y enfocado en que el usuario avance hacia el contacto.",
    },
    {
      icon: LineChart,
      title: "Medimos y mejoramos",
      description:
        "Instalamos herramientas de seguimiento y ajustamos el sitio para mejorar resultados con el tiempo.",
    },
    
  ]

  return (
    <section className="py-40 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-6 leading-[1.3]">
          Cómo creamos un sitio que genera contactos

          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-[1.75]">
          Cada etapa está pensada para que tu sitio funcione como una herramienta
real para atraer y convertir nuevos clientes.

          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="bg-card border border-border rounded-3xl p-8 flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3 leading-[1.3]">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-[1.75]">{step.description}</p>
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

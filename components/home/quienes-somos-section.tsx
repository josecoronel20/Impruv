import { Target, TrendingUp, Users } from "lucide-react"

export function QuienesSomosSection() {
  return (
    <section className="py-40 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col gap-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-6 leading-[1.3]">
              Quienes somos
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-[1.75]">
              Somos una agencia de performance marketing especializada en generar oportunidades comerciales reales para empresas B2B.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: "Enfoque en resultados",
                description: "No trabajamos con métricas vacías. Medimos lo que importa: consultas calificadas y oportunidades comerciales reales.",
              },
              {
                icon: TrendingUp,
                title: "Optimización continua",
                description: "Analizamos datos, identificamos oportunidades y mejoramos constantemente el rendimiento de cada campaña.",
              },
              {
                icon: Users,
                title: "Experiencia B2B",
                description: "Entendemos los procesos comerciales complejos y diseñamos sistemas de captación alineados a tu tipo de cliente.",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="flex flex-col gap-4 p-8 bg-card rounded-3xl border border-border">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold leading-[1.3]">{item.title}</h3>
                  <p className="text-sm md:text-base text-card-foreground leading-[1.75]">{item.description}</p>
                </div>
              )
            })}
          </div>

          <div className="text-center max-w-2xl mx-auto mt-16">
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-[1.75]">
              Nuestro enfoque combina estrategia, ejecución y medición para construir sistemas de captación sostenibles.
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-[1.3]">
              Trabajamos con empresas que buscan resultados medibles
            </h3>
            <p className="text-lg md:text-xl text-primary font-semibold text-balance leading-[1.6]">
              No solo generamos tráfico. Creamos{" "}
              <strong>
                sistemas integrados que atraen clientes adecuados y los convierten en oportunidades comerciales reales
              </strong>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

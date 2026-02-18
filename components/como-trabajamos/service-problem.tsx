import { Card } from "@/components/ui/card"
import { AlertCircle, Globe, Users } from "lucide-react"

export function ServiceProblem() {
  const problems = [
    {
      icon: AlertCircle,
      title: "Publicidad que genera clics",
      description: "pero no consultas calificadas.",
    },
    {
      icon: Globe,
      title: "Sitios web que informan",
      description: "pero no convierten el interés en contacto.",
    },
    {
      icon: Users,
      title: "Responsabilidad diluida",
      description: "Cada proveedor optimiza su parte, pero nadie optimiza el resultado final: generar clientes.",
    }
  ]

  return (
    <section className="px-6 py-20 md:py-32 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium mb-6 text-center text-neutral-900 leading-[1.4]">
          El principal problema de las empresas que no ven resultados reales es trabajar <span className="text-primary">anuncios y sitio</span> por separado
        </h2>

        <p className="text-base md:text-lg text-neutral-600 mb-16 max-w-3xl text-pretty leading-[1.75]">
          La mayoría de las empresas B2B no falla por falta de inversión, sino por trabajar con piezas sueltas que no
          están pensadas para generar oportunidades comerciales reales.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem) => (
            <Card key={problem.title} className="p-8 rounded-3xl border border-neutral-200 bg-white">
              <problem.icon className="w-8 h-8 text-primary mb-6" />
              <h3 className="text-lg font-medium mb-3 text-neutral-900">{problem.title}</h3>
              <p className="text-sm text-neutral-600 leading-[1.7]">{problem.description}</p>
            </Card>
          ))}
        </div>

        <p className="text-base text-neutral-600 max-w-3xl text-pretty leading-[1.75]">
          Cuando la publicidad y el sitio no trabajan como un sistema, los resultados son difíciles de medir y
          optimizar.
        </p>
      </div>
    </section>
  )
}

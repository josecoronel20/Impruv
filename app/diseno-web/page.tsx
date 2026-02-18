
import { WebDesignHero } from "./components/web-design-hero"
import { WebDesignProblem } from "./components/web-design-problem"
import { WebDesignSolution } from "./components/web-design-solution"
import { WebDesignProcess } from "./components/web-design-process"
import { WebDesignIntegration } from "./components/web-design-integration"

export const metadata = {
  title: "Diseño Web Orientado a Conversión | impruv Marketing",
  description:
    "Sitios web diseñados para convertir visitas en consultas comerciales. No solo se ven bien, guían al usuario hasta la acción.",
}

export default function WebDesignPage() {
  return (
    <main className="min-h-screen">
      <WebDesignHero />
      <WebDesignProblem />
      <WebDesignSolution />
      <WebDesignProcess />
      <WebDesignIntegration />
    </main>
  )
}

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ServiceFinalCta() {
  return (
    <section className="px-6 py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance">Evaluemos tu negocio</h2>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
          Analizamos tu situación actual y definimos si este sistema es adecuado para tu tipo de negocio y objetivos
          comerciales.
        </p>

        <Button size="lg" className="text-lg px-10 py-7 rounded-3xl group">
          Solicitar evaluación
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  )
}

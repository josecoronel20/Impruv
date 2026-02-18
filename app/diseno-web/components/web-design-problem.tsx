import { AlertCircle } from "lucide-react"

export function WebDesignProblem() {
  return (
    <section className="py-40 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col gap-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-6 leading-[1.3]">
            Un sitio web que no genera contactos frena todo el crecimiento

            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-[1.75]">
              Muchas empresas tienen un sitio activo, incluso con tráfico, pero no logra transformar ese interés en
              contacto real. El usuario entra, no entiende rápido la propuesta o no encuentra un motivo claro para
              consultar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Sitios que informan, pero no convencen para avanzar",
              "Mensajes poco claros que no ayudan a decidir",
              "Sitios visualmente atractivos, pero sin estructura que guíe a la acción",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-8 bg-card rounded-3xl border border-border">
                <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-card-foreground leading-[1.75]">{item}</p>
              </div>
            ))}
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-primary font-semibold text-balance leading-[1.6]">
              El sitio web no es una vidriera: es donde se decide si un <strong>usuario se convierte en cliente</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

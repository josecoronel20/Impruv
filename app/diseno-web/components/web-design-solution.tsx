export function WebDesignSolution() {

  return (
    <section className="relative overflow-hidden bg-background pt-48 pb-40 px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/images/bgSections/website-hero.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          filter: "brightness(0.4) blur(0.5px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background pointer-events-none" />
      

      <div className="container relative mx-auto max-w-5xl">
        <div className="flex flex-col gap-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-6 leading-[1.3]">
              Un sitio web pensado como herramienta comercial
            </h2>
            <p className="text-base md:text-lg text-muted-foreground text-pretty leading-[1.75]">
            Creamos sitios pensados para <strong className="text-foreground">convertir visitas en oportunidades reales</strong>.
Cada sección está diseñada para explicar con claridad qué ofrecés,
resolver dudas comunes y guiar a la persona hacia el contacto.

            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

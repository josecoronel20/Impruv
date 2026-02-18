export function GoogleAdsSolution() {

  return (
    <section className="relative py-40 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/images/city-parallax.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          filter: "brightness(0.35) blur(0.5px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background/70 pointer-events-none" />

      <div className="container relative mx-auto max-w-5xl">
        <div className="flex flex-col gap-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-6 leading-[1.3]">
            Google Ads integrado a un sistema que genera oportunidades reales

            </h2>
            <p className="text-base md:text-lg text-muted-foreground text-pretty leading-[1.75]">
            Usamos Google Ads para atraer personas que ya están buscando un servicio como el tuyo.
No se trata solo de mostrar anuncios, sino de lograr que quien haga clic
realmente tenga interés en avanzar.

            </p>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="p-8 bg-card/80 backdrop-blur-sm rounded-3xl border border-border">
              <p className="text-lg md:text-xl text-primary font-semibold text-balance leading-[1.6]">
              Nos enfocamos en que lleguen las personas correctas,
no en sumar clics sin impacto real.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

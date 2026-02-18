import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ServiceHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-48 pb-40 px-6">
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: "url(/images/bgSections/Servicios-hero-section.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        filter: "brightness(0.4) blur(0.5px)",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background pointer-events-none" />
    
      <div className="max-w-4xl mx-auto relative h-full flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-8 text-balance leading-[1.4">
          Sistema de captación con{" "}
          <span className="text-primary">Google Ads</span> y{" "}
          <span className="text-primary">sitio web</span> orientado a generar clientes
        </h1>

        <div className="space-y-6 max-w-3xl text-base md:text-lg text-muted-foreground mb-10 leading-[1.75]">
          <p className="text-pretty">
          Integramos Google Ads y un sitio web optimizado para recibir consultas calificadas. Analizamos los datos, ajustamos la estrategia y mejoramos el rendimiento de manera continua.
          </p>
        </div>

        <Link href="/contacto">
          <Button
            size="default"
            className="rounded-full px-8 py-6 text-base font-medium mt-2"
          >
            Contáctanos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

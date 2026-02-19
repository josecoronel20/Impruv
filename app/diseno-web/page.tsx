import { ServiceHero } from "@/components/services-sections/service-hero"
import { ServiceProblem } from "@/components/services-sections/service-problem"
import { ServiceSolution } from "@/components/services-sections/service-solution"
import { ServiceProcess } from "@/components/services-sections/service-process"
import { ServiceIntegration } from "@/components/services-sections/service-integration"
import { FileText, Users, Layout, LineChart } from "lucide-react"

import type { Metadata } from "next"
import { ProfessionalServiceSchema } from "@/components/common/SchemaMarkup"

export const metadata: Metadata = {
  title: "Diseño Web Orientado a Conversión | impruv Marketing",
  description:
    "Sitios web diseñados para convertir visitas en consultas comerciales. No solo se ven bien, guían al usuario hasta la acción.",
  keywords: [
    "diseño web",
    "diseño web conversión",
    "sitios web",
    "desarrollo web",
    "landing pages",
    "diseño web Argentina",
    "sitio web profesional",
  ],
  alternates: {
    canonical: "/diseno-web",
  },
  openGraph: {
    title: "Diseño Web Orientado a Conversión | impruv Marketing",
    description:
      "Sitios web diseñados para convertir visitas en consultas comerciales. No solo se ven bien, guían al usuario hasta la acción.",
    url: "https://impruv.com/diseno-web",
    siteName: "impruv Marketing",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://impruv.com/images/og-diseno-web.jpg",
        width: 1200,
        height: 630,
        alt: "Diseño Web Orientado a Conversión - impruv Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diseño Web Orientado a Conversión | impruv Marketing",
    description: "Sitios web diseñados para convertir visitas en consultas comerciales.",
    images: ["https://impruv.com/images/og-diseno-web.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function WebDesignPage() {
  return (
    <>
      <ProfessionalServiceSchema
        serviceType="Diseño Web"
        description="Sitios web diseñados para convertir visitas en consultas comerciales. No solo se ven bien, guían al usuario hasta la acción."
      />
      <main className="min-h-screen">
      <ServiceHero
        backgroundImage="/images/bgSections/website-hero.jpg"
        alt="Hero section de diseño web orientado a conversión"
        title={
          <>
            Diseño web orientado a <span className="text-primary">conversión</span>, no solo a estética
          </>
        }
        description="Diseñamos sitios que convierten visitas en consultas comerciales. Cada sección cumple un rol: presentar la propuesta, responder objeciones y guiar al usuario hasta la acción."
      />
      <ServiceProblem
        title="Un sitio web que no genera contactos frena todo el crecimiento"
        description="Muchas empresas tienen un sitio activo, incluso con tráfico, pero no logra transformar ese interés en contacto real. El usuario entra, no entiende rápido la propuesta o no encuentra un motivo claro para consultar."
        problems={[
          "Sitios que informan, pero no convencen para avanzar",
          "Mensajes poco claros que no ayudan a decidir",
          "Sitios visualmente atractivos, pero sin estructura que guíe a la acción",
        ]}
        conclusion={
          <>
            El sitio web no es una vidriera: es donde se decide si un <strong>usuario se convierte en cliente</strong>.
          </>
        }
      />
      <ServiceSolution
        backgroundImage="/images/bgSections/Home-hero.png"
        alt="Solución de diseño web como herramienta comercial"
        title="Un sitio web pensado como herramienta comercial"
        description={
          <>
            Creamos sitios pensados para <strong className="text-primary">convertir visitas en oportunidades reales</strong>.
            Cada sección está diseñada para explicar con claridad qué ofrecés,
            resolver dudas comunes y guiar a la persona hacia el contacto.
          </>
        }
      />
      <ServiceProcess
        title="Cómo creamos un sitio que genera contactos"
        description="Cada etapa está pensada para que tu sitio funcione como una herramienta real para atraer y convertir nuevos clientes."
        steps={[
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
        ]}
      />
      <ServiceIntegration
        backgroundImage="/images/bgSections/Servicios-hero-section.jpg"
        alt="Integración de diseño web con Google Ads"
        title="Un sitio sin tráfico calificado es solo una herramienta sin uso"
        description="El diseño web cobra sentido cuando se integra con una estrategia de captación. Google Ads permite atraer usuarios con intención real, y el sitio convierte ese interés en oportunidades comerciales."
        ctaText="Ver Google Ads"
        ctaHref="/google-ads"
      />
    </main>
    </>
  )
}

import { ServiceHero } from "@/components/services-sections/service-hero"
import { ServiceProblem } from "@/components/services-sections/service-problem"
import { ServiceSolution } from "@/components/services-sections/service-solution"
import { ServiceProcess } from "@/components/services-sections/service-process"
import { ServiceIntegration } from "@/components/services-sections/service-integration"
import { Target, Megaphone, MousePointerClick, TrendingUp } from "lucide-react"

import type { Metadata } from "next"
import { ProfessionalServiceSchema } from "@/components/common/SchemaMarkup"

export const metadata: Metadata = {
  title: "Google Ads Orientado a Calidad | impruv Marketing",
  description:
    "Servicio de Google Ads enfocado en generar consultas de calidad. Diseñamos estrategias para conectarte con tus clientes ideales.",
  keywords: [
    "Google Ads",
    "publicidad Google",
    "anuncios Google",
    "SEM",
    "marketing digital",
    "publicidad online",
    "Google Ads Argentina",
    "gestión Google Ads",
  ],
  alternates: {
    canonical: "/google-ads",
  },
  openGraph: {
    title: "Google Ads Orientado a Calidad | impruv Marketing",
    description:
      "Servicio de Google Ads enfocado en generar consultas de calidad. Diseñamos estrategias para conectarte con tus clientes ideales.",
    url: "https://impruv.com/google-ads",
    siteName: "impruv Marketing",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://impruv.com/images/og-google-ads.jpg",
        width: 1200,
        height: 630,
        alt: "Google Ads Orientado a Calidad - impruv Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Orientado a Calidad | impruv Marketing",
    description: "Servicio de Google Ads enfocado en generar consultas de calidad.",
    images: ["https://impruv.com/images/og-google-ads.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function GoogleAdsPage() {
  return (
    <>
      <ProfessionalServiceSchema
        serviceType="Google Ads"
        description="Servicio de Google Ads enfocado en generar consultas de calidad. Diseñamos estrategias para conectarte con tus clientes ideales."
      />
      <main className="min-h-screen">
      <ServiceHero
        backgroundImage="/images/bgSections/GA-hero.jpg"
        alt="Hero section de Google Ads orientado a calidad"
        title={
          <>
            Google Ads orientado a <span className="text-primary">calidad</span>, no solo a volumen
          </>
        }
        description="Diseñamos campañas que atraen usuarios con intención real de contratar. Cada anuncio y landing page está pensado para generar consultas comerciales calificadas, no solo clicks."
      />
      <ServiceProblem
        title="Campañas que generan tráfico pero no contactos reales"
        description="Muchas empresas invierten en Google Ads y reciben visitas, pero esas visitas no se convierten en consultas comerciales. El problema suele estar en cómo se atraen los usuarios y cómo se los recibe cuando llegan al sitio."
        problems={[
          "Campañas mal organizadas que reparten el presupuesto sin foco, haciendo que el dinero no se aproveche al máximo",
          "Palabras mal elegidas que atraen personas que solo buscan información, en lugar de clientes listos para contratar",
          "Decisiones basadas en clics y visitas en vez de resultados reales, sin medir cuántos contactos o ventas se generan",
        ]}
        conclusion={
          <>
            Google Ads no es solo tráfico: es una herramienta para conectarte con <strong>clientes que realmente necesitan lo que ofrecés</strong>.
          </>
        }
      />
      <ServiceSolution
        backgroundImage="/images/bgSections/Home-hero.png"
        alt="Solución de Google Ads enfocada en generar contactos reales"
        title="Estructura enfocada en generar contactos reales"
  description={
    <>
    Diseñamos campañas con foco en búsquedas de alta intención, evitando tráfico
    que solo investiga. <strong className="text-primary">Organizamos los anuncios por tipo de necesidad</strong> y alineamos
    cada mensaje con una página pensada para llevar al usuario directamente
    al contacto, reduciendo desperdicio y aumentando oportunidades comerciales.
    </>
  }

      />
      <ServiceProcess
        title="Cómo creamos campañas que generan contactos calificados"
        description="Cada etapa está pensada para que tu inversión en Google Ads se traduzca en oportunidades comerciales reales."
        steps={[
          {
            icon: Target,
            title: "Definimos tu cliente ideal",
            description:
              "Identificamos quién es tu cliente objetivo, qué busca y qué palabras usa para encontrarte.",
          },
          {
            icon: Megaphone,
            title: "Creamos anuncios que comunican valor",
            description:
              "Diseñamos mensajes claros que explican qué ofrecés y por qué deberían elegirte.",
          },
          {
            icon: MousePointerClick,
            title: "Optimizamos para calidad, no solo clicks",
            description:
              "Ajustamos las campañas para atraer usuarios con intención real, mejorando la calidad de las consultas.",
          },
          {
            icon: TrendingUp,
            title: "Medimos y mejoramos continuamente",
            description:
              "Seguimos el rendimiento y ajustamos estrategias para mejorar resultados con el tiempo.",
          },
        ]}
      />
      <ServiceIntegration
        backgroundImage="/images/bgSections/metodologia-sitio+GA.jpg"
        alt="Integración de Google Ads con diseño web"
        title="Google Ads sin un sitio que convierta es inversión desperdiciada"
        description="Las campañas de Google Ads cobran sentido cuando llevan a usuarios calificados a un sitio diseñado para convertir. El anuncio atrae, el sitio convence y guía hacia el contacto."
        ctaText="Ver Diseño Web"
        ctaHref="/diseno-web"
      />
    </main>
    </>
  )
}

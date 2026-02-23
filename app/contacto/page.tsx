import type { Metadata } from "next"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "Contacto | impruv - Solicita tu Diagnóstico Gratuito",
  description:
    "Contacta con impruv. Solicita un diagnóstico gratuito para tu negocio y descubre cómo podemos ayudarte a generar más clientes calificados con Google Ads y diseño web.",
  keywords: [
    "contacto marketing digital",
    "consulta marketing",
    "diagnóstico marketing",
    "cotización Google Ads",
    "presupuesto diseño web",
  ],
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto | impruv - Solicita tu Diagnóstico Gratuito",
    description:
      "Solicita un diagnóstico gratuito para tu negocio y descubre cómo podemos ayudarte a generar más clientes calificados con Google Ads y diseño web.",
    url: "https://impruvagencia.com/contacto",
    siteName: "impruv",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://impruvagencia.com/images/og-contacto.jpg",
        width: 1200,
        height: 630,
        alt: "Contacto impruv",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | impruv",
    description: "Solicita tu diagnóstico gratuito de marketing digital.",
    images: ["https://impruvagencia.com/images/og-contacto.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactoPage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <ContactForm />
      </main>
    </>
  )
}

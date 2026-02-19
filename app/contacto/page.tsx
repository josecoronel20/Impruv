import type { Metadata } from "next"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "Contacto | impruv Marketing - Solicita tu Diagnóstico Gratuito",
  description:
    "Contacta con impruv Marketing. Solicita un diagnóstico gratuito para tu negocio y descubre cómo podemos ayudarte a generar más clientes calificados con Google Ads y diseño web.",
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
    title: "Contacto | impruv Marketing - Solicita tu Diagnóstico Gratuito",
    description:
      "Solicita un diagnóstico gratuito para tu negocio y descubre cómo podemos ayudarte a generar más clientes calificados con Google Ads y diseño web.",
    url: "https://impruv.com/contacto",
    siteName: "impruv Marketing",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://impruv.com/images/og-contacto.jpg",
        width: 1200,
        height: 630,
        alt: "Contacto impruv Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | impruv Marketing",
    description: "Solicita tu diagnóstico gratuito de marketing digital.",
    images: ["https://impruv.com/images/og-contacto.jpg"],
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

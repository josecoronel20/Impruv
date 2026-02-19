import type { Metadata } from "next"
import { HeroSection } from "../components/home/hero-section"
import { ProblemSection } from "../components/home/problem-section"
import { SolutionSection } from "../components/home/solution-section"
import { ProcessSection } from "../components/home/process-section"
import { CtaSection } from "../components/home/cta-section"

export const metadata: Metadata = {
  title: "impruv - Agencia de Marketing Digital | Google Ads y Diseño Web",
  description:
    "Agencia de Marketing Digital especializada en Google Ads y diseño web orientado a conversión. Generamos clientes calificados mediante estrategias de performance marketing B2B.",
  keywords: [
    "marketing digital",
    "Google Ads",
    "diseño web",
    "agencia de marketing",
    "performance marketing",
    "marketing B2B",
    "conversión web",
    "publicidad online",
    "marketing en Argentina",
  ],
  authors: [{ name: "impruv Marketing" }],
  creator: "impruv Marketing",
  publisher: "impruv Marketing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://impruv.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "impruv - Agencia de Marketing Digital | Google Ads y Diseño Web",
    description:
      "Agencia de Marketing Digital especializada en Google Ads y diseño web orientado a conversión. Generamos clientes calificados mediante estrategias de performance marketing B2B.",
    url: "https://impruv.com",
    siteName: "impruv Marketing",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://impruv.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "impruv Marketing - Agencia de Marketing Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "impruv - Agencia de Marketing Digital | Google Ads y Diseño Web",
    description:
      "Agencia de Marketing Digital especializada en Google Ads y diseño web orientado a conversión. Generamos clientes calificados mediante estrategias de performance marketing B2B.",
    images: ["https://impruv.com/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <CtaSection />
    </main>
  )
}

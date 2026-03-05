import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/common/header"
import { Footer } from "@/components/common/footer"
import { OrganizationSchema, WebSiteSchema } from "@/components/common/SchemaMarkup"
import { Plus_Jakarta_Sans } from "next/font/google"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://impruvagencia.com"),
  title: {
    default: "impruv - Agencia de Marketing Digital | Google Ads y Diseño Web",
    template: "%s | impruv",
  },
  description:
    "Agencia de Marketing Digital especializada en Google Ads y diseño web orientado a conversión. Generamos clientes calificados mediante estrategias de performance marketing B2B.",
  keywords: [
    "marketing digital",
    "Google Ads",
    "diseño web",
    "agencia de marketing",
    "performance marketing",
    "marketing B2B",
  ],
  authors: [{ name: "impruv" }],
  creator: "impruv",
  publisher: "impruv",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://impruvagencia.com",
    siteName: "impruv",
    title: "impruv - Agencia de Marketing Digital | Google Ads y Diseño Web",
    description:
      "Agencia de Marketing Digital especializada en Google Ads y diseño web orientado a conversión. Generamos clientes calificados mediante estrategias de performance marketing B2B.",
    images: [
      {
        url: "https://impruvagencia.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "impruv - Agencia de Marketing Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "impruv - Agencia de Marketing Digital | Google Ads y Diseño Web",
    description:
      "Agencia de Marketing Digital especializada en Google Ads y diseño web orientado a conversión. Generamos clientes calificados mediante estrategias de performance marketing B2B.",
    images: ["https://impruvagencia.com/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://impruvagencia.com",
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
  verification: {
    // Agregar cuando tengas Google Search Console
    // google: "tu-codigo-de-verificacion",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag (gtag.js) - AW-17992846651 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17992846651"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-17992846651');
            `,
          }}
        />
        {/* End Google Tag */}
      </head>
      <body className={`${plusJakartaSans.className} antialiased`}>
        <OrganizationSchema />
        <WebSiteSchema />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

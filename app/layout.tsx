import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/common/header"
import { Footer } from "@/components/common/footer"
import { Plus_Jakarta_Sans } from "next/font/google"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "impruv - Agencia de Marketing Digital",
  description:
    "Agencia de Marketing especializada en Google Ads orientada a generar clientes calificados.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${plusJakartaSans.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

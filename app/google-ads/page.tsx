
import { GoogleAdsHero } from "./components/google-ads-hero"
import { GoogleAdsProblem } from "./components/google-ads-problem"
import { GoogleAdsSolution } from "./components/google-ads-solution"
import { GoogleAdsProcess } from "./components/google-ads-process"
import { GoogleAdsIntegration } from "./components/google-ads-integration"

export const metadata = {
  title: "Google Ads Orientado a Calidad | impruv Marketing",
  description:
    "Servicio de Google Ads enfocado en generar consultas de calidad. Diseñamos estrategias para conectarte con tus clientes ideales.",
}

export default function GoogleAdsPage() {
  return (
    <main className="min-h-screen">
      <GoogleAdsHero />
      <GoogleAdsProblem />
      <GoogleAdsSolution />
      <GoogleAdsProcess />
      <GoogleAdsIntegration />
    </main>
  )
}

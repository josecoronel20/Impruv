"use client"

import * as React from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"

export function ContactForm() {
  const [state, handleSubmit] = useForm("mojnpnqo")
  const [budget, setBudget] = React.useState<number>(100000)

  React.useEffect(() => {
    if (state.succeeded) {
      window.scrollTo(0, 0)
      // Google Ads conversion: Enviar formulario de clientes potenciales
      const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag
      // Event snippet for Enviar formulario de clientes potenciales (4) conversion page
      if (typeof gtag === "function") {
        gtag("event", "conversion", {
          send_to: "AW-17992846651/PXZXCMC1ooMcELua1IND",
          value: 1.0,
          currency: "ARS",
        });
      }
    }
  }, [state.succeeded])
  
  if (state.succeeded) {
    return (
      <section className="px-6 py-32 md:py-40 bg-gradient-to-b from-primary/10 via-white to-white">
        <div className="max-w-2xl mx-auto flex flex-col items-center rounded-3xl bg-white/90 shadow-lg p-8 md:p-16 border border-neutral-100">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <svg
              width={36}
              height={36}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6.5" />
              <path d="m21 6-8.7 5.8a2 2 0 0 1-2.19 0L3 6" />
              <path d="M17 17v5" />
              <path d="M21 21v-5" />
              <rect x="15" y="17" width="6" height="4" rx="1" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-neutral-900 text-balance">
            ¡Gracias por tu mensaje!
          </h1>
          <p className="text-base md:text-lg text-neutral-700 text-pretty leading-relaxed mb-6">
            Recibimos tu consulta, te vamos a contactar a la brevedad para darte una respuesta personalizada.
          </p>
          <Link href="/" className="inline-block text-blue-700 font-medium rounded-full px-6 py-2 bg-primary/10 hover:bg-primary/20 transition">
            Volver al inicio
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="px-6 py-32 md:py-40">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-3xl md:text-4xl font-medium mb-6 text-neutral-900 text-balance leading-[1.4]">
            Contanos sobre tu negocio
          </h1>

          <p className="text-base text-neutral-600 mb-8 text-pretty leading-[1.75]">
            Este formulario breve nos permite entender tu situación y evaluar si nuestro enfoque de performance es
            adecuado para tu empresa.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Nombre completo */}
          <div className="space-y-3">
            <Label htmlFor="nombre" className="text-sm font-medium text-primary">
              Nombre completo <span className="text-red-500">*</span>
            </Label>
            <Input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Tu nombre"
              autoComplete="name"
              required
              className="h-12 rounded-2xl border-neutral-300 focus:border-neutral-400 focus:ring-neutral-400"
            />
          </div>

          {/* Email */}
          <div className="space-y-3">
            <Label htmlFor="email" className="text-sm font-medium text-primary">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email de trabajo"
              autoComplete="email"
              required
              className="h-12 rounded-2xl border-neutral-300 focus:border-neutral-400 focus:ring-neutral-400"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          {/* Teléfono */}
          <div className="space-y-3">
            <Label htmlFor="telefono" className="text-sm font-medium text-primary">
              Teléfono <span className="text-red-500">*</span>
            </Label>
            <Input
              id="telefono"
              name="telefono"
              type="tel"
              placeholder="Teléfono de contacto"
              autoComplete="tel"
              required
              className="h-12 rounded-2xl border-neutral-300 focus:border-neutral-400 focus:ring-neutral-400"
            />
          </div>

          {/* Empresa */}
          <div className="space-y-3">
            <Label htmlFor="empresa" className="text-sm font-medium text-primary">
              Empresa / Proyecto <span className="text-red-500">*</span>
            </Label>
            <Input
              id="empresa"
              name="empresa"
              type="text"
              placeholder="Nombre de la empresa o proyecto"
              required
              autoComplete="organization"
              className="h-12 rounded-2xl border-neutral-300 focus:border-neutral-400 focus:ring-neutral-400"
            />
          </div>

          {/* Sitio web */}
          <div className="space-y-3">
            <Label htmlFor="sitio" className="text-sm font-medium text-primary">
              Sitio web
            </Label>
            <Input
              id="sitio"
              name="sitio"
              type="text"
              placeholder="https://tusitio.com"
              autoComplete="url"
              className="h-12 rounded-2xl border-neutral-300 focus:border-neutral-400 focus:ring-neutral-400"
            />
            <p className="text-xs text-neutral-500 leading-relaxed">
              Si todavía no tenés sitio, podés dejarlo en blanco.
            </p>
          </div>

          {/* Presupuesto */}
          <div className="space-y-3">
            <Label htmlFor="presupuesto" className="text-sm font-medium text-primary">
              Presupuesto mensual estimado <span className="text-red-500">*</span>
            </Label>
            <input
              type="range"
              id="presupuesto"
              name="presupuesto"
              min={100000}
              max={1500000}
              step={10000}
              value={budget}
              onChange={e => setBudget(Number(e.target.value))}
              required
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-xs text-neutral-500 mt-1">
              <span>$100.000 ARS</span>
              <span>$1.500.000 ARS</span>
            </div>
            <div className="mt-1 text-base text-primary font-medium">
              Seleccionado: <span className="font-bold">${Number(budget).toLocaleString("es-AR")} ARS</span>
            </div>
            {/* Campo oculto para enviar el valor seleccionado */}
            <input type="hidden" name="presupuesto" value={budget} readOnly />
          </div>

          {/* Contexto adicional */}
          <div className="space-y-3">
            <Label htmlFor="contexto" className="text-sm font-medium text-primary">
              Contexto adicional
            </Label>
            <Textarea
              id="contexto"
              name="contexto"
              placeholder="Contanos sobre tu negocio, qué servicios ofrecés, qué problemas tenés, quien es tu cliente ideal, etc."
              rows={5}
              className="rounded-2xl border-neutral-300 focus:border-neutral-400 focus:ring-neutral-400 resize-none"
            />
            <ValidationError prefix="Contexto" field="contexto" errors={state.errors} />
          </div>

          {/* Submit button */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={state.submitting}
              className="w-full h-12 rounded-full bg-gradient-to-r from-[#2B2B2B] to-[#1E73BE] hover:opacity-90 text-white text-sm font-medium"
            >
              {state.submitting ? "Enviando..." : "Solicitar diagnóstico"}
            </Button>
          </div>

          {state.errors && (
            <p className="text-sm text-red-700" role="alert">
              No se pudo enviar. Revisá los datos e intentá de nuevo.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

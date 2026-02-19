"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactForm() {
  const [budget, setBudget] = React.useState<string | undefined>(undefined)
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = React.useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (status === "loading") return

    setStatus("loading")
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch("https://formspree.io/f/mrealarl", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      })

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { errors?: Array<{ message?: string }> }
          | null

        const msg = data?.errors?.[0]?.message ?? "No se pudo enviar el formulario. Probá de nuevo en unos minutos."
        setError(msg)
        setStatus("error")
        return
      }

      form.reset()
      setBudget(undefined)
      setStatus("success")
    } catch {
      setError("No se pudo enviar el formulario. Revisá tu conexión e intentá nuevamente.")
      setStatus("error")
    }
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
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email de trabajo"
              autoComplete="email"
              className="h-12 rounded-2xl border-neutral-300 focus:border-neutral-400 focus:ring-neutral-400"
            />
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
              autoComplete="website"
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
            <input type="hidden" name="presupuesto" value={budget ?? ""} />
            <Select value={budget} onValueChange={setBudget} required>
              <SelectTrigger
                id="presupuesto"
                className="h-12 rounded-2xl border-neutral-300 focus:border-neutral-400 focus:ring-neutral-400"
              >
                <SelectValue placeholder="Seleccioná una opción" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bajo">Menos de $200USD</SelectItem>
                <SelectItem value="medio">$200USD – $500USD</SelectItem>
                <SelectItem value="alto">$500USD – $1000USD</SelectItem>
                <SelectItem value="definir">A definir</SelectItem>
              </SelectContent>
            </Select>
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
          </div>

          {/* Submit button */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={status === "loading"}
              className="w-full h-12 rounded-full bg-gradient-to-r from-[#2B2B2B] to-[#1E73BE] hover:bg-primary/90 text-white text-sm font-medium"
            >
              {status === "loading" ? "Enviando..." : "Solicitar diagnóstico"}
            </Button>
          </div>

          {status === "success" && (
            <p className="text-sm text-green-700" role="status" aria-live="polite">
              ¡Listo! Recibimos tu mensaje. Te vamos a contactar a la brevedad.
            </p>
          )}

          {status === "error" && (
            <p className="text-sm text-red-700" role="alert">
              {error}
            </p>
          )}
         
        </form>
      </div>
    </section>
  )
}

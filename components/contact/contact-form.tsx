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

export function ContactForm() {
  const [state, handleSubmit] = useForm("mrealarl")
  const [budget, setBudget] = React.useState<string>("")

  if (state.succeeded) {
    return (
      <section className="px-6 py-32 md:py-40">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-medium mb-6 text-neutral-900 text-balance">
            Gracias por tu mensaje
          </h1>
          <p className="text-base text-neutral-600 text-pretty leading-[1.75]">
            Te vamos a contactar a la brevedad.
          </p>
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
            <input type="hidden" name="presupuesto" value={budget} readOnly />
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

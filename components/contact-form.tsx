"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactForm() {
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
        <form className="space-y-8">
          {/* Nombre completo */}
          <div className="space-y-3">
            <Label htmlFor="nombre" className="text-sm font-medium text-neutral-700">
              Nombre completo
            </Label>
            <Input
              id="nombre"
              type="text"
              placeholder="Tu nombre"
              className="h-12 rounded-2xl border-neutral-300 focus:border-neutral-400 focus:ring-neutral-400"
            />
          </div>

          {/* Email */}
          <div className="space-y-3">
            <Label htmlFor="email" className="text-sm font-medium text-neutral-700">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email de trabajo"
              className="h-12 rounded-2xl border-neutral-300 focus:border-neutral-400 focus:ring-neutral-400"
            />
          </div>

          {/* Empresa */}
          <div className="space-y-3">
            <Label htmlFor="empresa" className="text-sm font-medium text-neutral-700">
              Empresa / Proyecto
            </Label>
            <Input
              id="empresa"
              type="text"
              placeholder="Nombre de la empresa o proyecto"
              className="h-12 rounded-2xl border-neutral-300 focus:border-neutral-400 focus:ring-neutral-400"
            />
          </div>

          {/* Sitio web */}
          <div className="space-y-3">
            <Label htmlFor="sitio" className="text-sm font-medium text-neutral-700">
              Sitio web
            </Label>
            <Input
              id="sitio"
              type="url"
              placeholder="https://tusitio.com"
              className="h-12 rounded-2xl border-neutral-300 focus:border-neutral-400 focus:ring-neutral-400"
            />
            <p className="text-xs text-neutral-500 leading-relaxed">
              Si todavía no tenés sitio, podés dejarlo en blanco.
            </p>
          </div>

          

          

          {/* Presupuesto */}
          <div className="space-y-3">
            <Label htmlFor="presupuesto" className="text-sm font-medium text-neutral-700">
              Presupuesto mensual estimado
            </Label>
            <Select>
              <SelectTrigger className="h-12 rounded-2xl border-neutral-300 focus:border-neutral-400 focus:ring-neutral-400">
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
            <Label htmlFor="contexto" className="text-sm font-medium text-neutral-700">
              Contexto adicional
            </Label>
            <Textarea
              id="contexto"
              placeholder="Contanos sobre tu negocio, qué servicios ofrecés, qué problemas tenés, quien es tu cliente ideal, etc."
              rows={5}
              className="rounded-2xl border-neutral-300 focus:border-neutral-400 focus:ring-neutral-400 resize-none"
            />
          </div>

          {/* Submit button */}
          <div className="pt-4">
            <Button
              type="submit"
              className="w-full h-12 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium"
            >
              Solicitar diagnóstico
            </Button>
          </div>

         
        </form>
      </div>
    </section>
  )
}

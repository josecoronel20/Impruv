"use client"

import { useEffect, useState } from "react"

export function WebDesignApproach() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 px-6">
      <div
        className="absolute inset-0 -z-10"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          willChange: "transform",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 to-neutral-900/50" />
        <img
          src="/images/city-parallax.jpg"
          alt=""
          className="w-full h-full object-cover"
          style={{
            filter: "brightness(0.35) blur(2px)",
          }}
        />
      </div>

      <div className="container mx-auto max-w-4xl relative">
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center text-balance leading-tight text-white">
            Un sitio web pensado como <span className="text-neutral-300">herramienta comercial</span>, no como diseño
            aislado
          </h2>

          <div className="bg-neutral-900/50 backdrop-blur-sm rounded-3xl p-10 border border-neutral-700">
            <p className="text-lg lg:text-xl text-neutral-300 mb-6 leading-relaxed">
              Nuestro servicio de diseño web no se centra en estética ni en &quot;tener presencia online&quot;. Diseñamos{" "}
              <strong className="text-white">sitios web orientados a conversión</strong>, pensados para acompañar la
              captación de tráfico con intención y{" "}
              <strong className="text-white">transformar visitas en consultas comerciales reales</strong>.
            </p>

            <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed">
              Cada sección del sitio cumple un rol: explicar la propuesta, responder objeciones clave y guiar al usuario
              hacia una acción concreta, alineada a tu proceso de venta.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

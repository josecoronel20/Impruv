"use client"

import { useEffect, useState } from "react"

export function GoogleAdsApproach() {
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center text-balance mb-12 leading-tight text-white">
          Cómo funciona el servicio
        </h2>
      </div>
    </section>
  )
}

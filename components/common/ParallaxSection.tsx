import type React from "react"

export function ParallaxSection({
  image,
  children,
}: {
  image: string
  children: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-background pt-48 pb-40 px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          filter: "brightness(0.4) blur(0.5px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background pointer-events-none" />
      <div className="container relative mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center gap-16">
          {children}

          
        </div>
      </div>
    </section>
  )
}

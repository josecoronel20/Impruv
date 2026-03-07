import { ParallaxSection } from "@/components/common/ParallaxSection"
import { ContactBtn } from "../common/ContactBtn"

interface ServiceHeroProps {
  backgroundImage: string
  title: React.ReactNode
  description: string
  ctaText?: string
  ctaHref?: string
  alt?: string
}

export function ServiceHero({
  backgroundImage,
  title,
  description,
  ctaText = "Solicitar diagnóstico",
  ctaHref = "/contacto",
  alt,
}: ServiceHeroProps) {
  return (
    <ParallaxSection image={backgroundImage} alt={alt}>
      <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-balance max-w-4xl leading-[1.3]">
        {title}
      </h1>

      <p className="text-base md:text-lg text-muted-foreground max-w-2xl text-pretty leading-[1.75]">
        {description}
      </p>

      <ContactBtn />
        
    </ParallaxSection>
  )
}

import { ParallaxSection } from "@/components/common/ParallaxSection"
import { PrincipalBtn } from "../common/PrincipalBtn"
import { ScrollReveal } from "../common/ScrollReveal"

interface ServiceIntegrationProps {
  backgroundImage: string
  title: string
  description: string
  ctaText: string
  ctaHref: string
  alt?: string
}

export function ServiceIntegration({
  backgroundImage,
  title,
  description,
  ctaText,
  ctaHref,
  alt,
}: ServiceIntegrationProps) {
  return (
    <ParallaxSection image={backgroundImage} alt={alt}>
     
      
      <div className="container relative mx-auto max-w-4xl">
        <ScrollReveal direction="up" delay={0}>
        
          <div className="bg-card/90 backdrop-blur-sm border border-border rounded-3xl p-12 text-center">
            
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-6 leading-[1.3]">
                {title}
              </h2>


              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-[1.75]">
                {description}
              </p>

              <PrincipalBtn size="xl" href={ctaHref} label={ctaText} />
          </div>
          </ScrollReveal>
      </div>
      
    </ParallaxSection>
  )
}

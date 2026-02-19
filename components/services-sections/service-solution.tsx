import { ParallaxSection } from "@/components/common/ParallaxSection"
import { ScrollReveal } from "../common/ScrollReveal"

interface ServiceSolutionProps {
  backgroundImage: string
  title: string
  description: React.ReactNode
  alt?: string
}

export function ServiceSolution({
  backgroundImage,
  title,
  description,
  alt,
}: ServiceSolutionProps) {
  return (
    <ParallaxSection image={backgroundImage} alt={alt}>
      <ScrollReveal direction="up" delay={0}>
      <div className="flex flex-col gap-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-6 leading-[1.3]">
            {title}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground text-pretty leading-[1.75]">
            {description}
          </p>
        </div>
      </div>
      </ScrollReveal>
    </ParallaxSection>
  )
}


import { HeroSection } from "../components/home/hero-section"
import { ProblemSection } from "../components/home/problem-section"
import { SolutionSection } from "../components/home/solution-section"
import { ProcessSection } from "../components/home/process-section"
import { CtaSection } from "../components/home/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <CtaSection />
    </main>
  )
}

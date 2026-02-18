import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ServiceDeepen() {
  const links = [
    {label:"Cómo trabajamos con Google Ads", href:"/como-trabajamos/google-ads"},
    {label:"Cómo trabajamos con Sitios Web", href:"/como-trabajamos/diseno-web"}
    
  ]
  return (
    <section className="px-6 py-20 md:py-28 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Profundizá en cada parte del sistema</h2>

        <div className="grid md:grid-cols-2 gap-6">
         { links.map((link) => (
          <Button asChild key={link.href} className="h-auto py-8 px-6 rounded-3xl border-2 text-md  text-muted-foreground font-semibold hover:border-primary hover:bg-primary/5 transition-colors group bg-transparent">
            <Link href={link.href}>
              {link.label}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
         ))}
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function CasoDetalleBreadcrumb() {
  return (
    <div className="border-b border-border bg-muted/30">
      <div className="container mx-auto max-w-4xl px-6 py-3">
        <Link
          href="/casos-de-exito"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a Casos de Éxito
        </Link>
      </div>
    </div>
  )
}

import Link from "next/link"
import { Logo } from "@/components/common/logo"

export function Footer() {
  const links = [
    {label: "Inicio", href: "/"},
    {label: "Google Ads", href: "/google-ads"},
    {label: "Diseño Web", href: "/diseno-web"},
    {label: "Contacto", href: "/contacto"},
  ]

  return (
    <footer className="border-t border-border/40 bg-muted/20 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs">
              Agencia de Marketing especializada en Google Ads.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-sm">Navegación</h4>
             <ul> {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</Link>
              </li>
             ))} </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-sm">Legal</h4>
              <Link href="/privacidad" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacidad
              </Link>
              <Link href="terminos-y-condiciones" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Términos y condiciones
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} impruv Marketing. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

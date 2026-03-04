import Link from "next/link"
import Image from "next/image"
import { ChevronRight, TrendingUp, Phone } from "lucide-react"
import type { CasoExito } from "@/lib/casos-de-exito-data"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PrincipalBtn } from "../common/PrincipalBtn"

interface SuccessCaseCardProps {
  caso: CasoExito
}

export function SuccessCaseCard({ caso }: SuccessCaseCardProps) {
  const { conversiones } = caso.resultados_ultimo_mes
  const inicial = caso.leads_promedio_mensual_inicial
  const crecimiento =
    inicial > 0 ? Math.round(((conversiones - inicial) / inicial) * 100) : 0

  return (
    <Card className="flex flex-col overflow-hidden p-0 gap-0 transition-shadow hover:shadow-md">
      {caso.img_sitio_web ? (
        <div className="relative w-full aspect-video overflow-hidden bg-muted">
          <Image
            src={caso.img_sitio_web}
            alt=""
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ) : null}
      <CardHeader className="pb-2">
        <CardTitle className="text-lg truncate">{caso.cliente}</CardTitle>
        <CardDescription className="line-clamp-2">{caso.industria}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 space-y-4 pb-4">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-lg border bg-muted/50 px-3 py-2">
            <p className="flex items-center gap-1.5 text-muted-foreground">
              <Phone className="h-3.5 w-3.5" />
              Antes
            </p>
            <p className="mt-0.5 font-semibold tabular-nums">
              {inicial} llamadas/mes
            </p>
          </div>
          <div className="rounded-lg border bg-muted/50 px-3 py-2">
            <p className="flex items-center gap-1.5 text-muted-foreground">
              <Phone className="h-3.5 w-3.5" />
              Actual
            </p>
            <p className="mt-0.5 font-semibold tabular-nums text-primary">
              {conversiones} llamadas/mes
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-primary/20 bg-primary/5 px-3 py-2">
          <span className="text-sm text-muted-foreground">Crecimiento</span>
          <span className="flex items-center gap-1 font-semibold text-primary tabular-nums">
            <TrendingUp className="h-4 w-4" />
            +{crecimiento}%
          </span>
        </div>
      </CardContent>
      <CardFooter className="border-t flex justify-center pb-4">
        <PrincipalBtn size="sm" href={`/casos-de-exito/${caso.slug}`} label="Ver caso completo" />
      </CardFooter>
    </Card>
  )
}

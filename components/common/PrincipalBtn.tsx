import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function PrincipalBtn({size = "default", href, label}: {size: "default" | "sm" | "lg" | "xl", href: string, label: string}) {
  return (
    <Link href={href}>
      <Button size={size} className="group relative hover:scale-105 transition-all duration-300 ease-out shadow-md">
        <span className="inline-block translate-x-3 group-hover:translate-x-1 transition-transform duration-300 ease-out">
          {label}
        </span>
        <ChevronRight className="ml-2 h-4 w-4 opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out" />
      </Button>
    </Link>
  )
}
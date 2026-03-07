"use client"
import { PrincipalBtn } from "./PrincipalBtn";
import React, { useRef } from "react";

export function ContactBtn({ size = "xl" }: { size?: "xl" | "lg" }) {
  const wpLinkPart1 = "https://wa.me/549116800";
  const wpLinkPart2 = "1863";
  const wpLink = `${wpLinkPart1}${wpLinkPart2}`;
  const clickedRef = useRef(false);

  function handleClick(e: React.MouseEvent) {
    if (clickedRef.current) {
      // Ya se hizo click, se previene nueva ejecución
      e.preventDefault();
      return;
    }
    clickedRef.current = true;

    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-17992846651/XpR9CMKKqYQcELua1IND",
        value: 1.0,
        currency: "ARS",
      });
    }

    // Permitimos que el evento siga y el href redireccione normalmente
    // Opcional: Si quieres, podrías reiniciar clickedRef después de un timeout si el usuario cancela la navegación, pero no es esencial.
  }

  return (
    <span>
      <PrincipalBtn
        size={size}
        href={wpLink}
        label="Contactanos"
        // @ts-ignore Si PrincipalBtn no soporta onClick directo, habría que modificarlo.
        onClick={handleClick}
        blank={true}
      />
    </span>
  );
}
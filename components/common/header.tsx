"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";

// Centralizar datos de navegación
type NavItem = {
  href: string;
  label: string;
};

const navigationItems: NavItem[] = [{ href: "/", label: "Inicio" },{ href: "/diseno-web", label: "Diseño Web" },
  { href: "/google-ads", label: "Google Ads" }];


export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Cerrar menús cuando cambia la ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-2 left-2 right-2 z-50">
      <div className="relative bg-neutral-50/75 backdrop-blur-md rounded-full">
        <div className="container mx-auto px-6">
          {/* Desktop Navigation */}
          <DesktopNav
            navigationItems={navigationItems}
          />

          {/* Mobile Navigation */}
          <MobileNav
            navigationItems={navigationItems}
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </div>
      </div>
    </header>
  );
}

// Componente Desktop Navigation
function DesktopNav({
  navigationItems,
}: {
  navigationItems: NavItem[];
}) {
  return (
    <div className="hidden md:flex h-16 items-center justify-between">
      <Link href="/">
        <Logo />
      </Link>

      <nav className="flex justify-end gap-8 items-center">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm text-neutral-600 hover:text-primary transition-colors"
          >
            {item.label}
          </Link>
        ))}


        <Link href="/contacto">
          <Button className="rounded-full h-9 px-5 text-sm bg-primary hover:bg-primary/90 text-white">
            Contacto
          </Button>
        </Link>
      </nav>
    </div>
  );
}

// Componente Mobile Navigation (Sheet solo se monta cuando está abierto)
function MobileNav({
  navigationItems,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: {
  navigationItems: NavItem[];
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}) {
  const handleOpenChange = (open: boolean) => {
    setIsMobileMenuOpen(open);
  };

  const handleLinkClick = () => {
    handleOpenChange(false);
  };

  return (
    <div className="flex md:hidden">
      <div className="flex h-16 items-center justify-between w-full">
        <Link href="/" onClick={() => handleOpenChange(false)}>
          <Logo />
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-neutral-600 hover:text-primary transition-colors"
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      <Sheet open={isMobileMenuOpen} onOpenChange={handleOpenChange}>
        <SheetContent
          side="right"
          showCloseButton
          title="Menú de navegación"
          className="w-[min(100vw-2rem,320px)] border-neutral-200/60 bg-neutral-50/95 backdrop-blur-md rounded-l-3xl p-0 gap-0 [&>button]:top-4 [&>button]:right-4 [&>button]:size-8 [&>button]:text-neutral-600 [&>button]:hover:text-primary"
        >
          <nav className="flex flex-col pt-14 pb-6 px-0">
            {navigationItems.map((item: NavItem) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="px-6 py-3 text-sm text-neutral-600 hover:text-primary hover:bg-neutral-100/50 transition-colors"
              >
                {item.label}
              </Link>
            ))}

            

            <Link
              href="/contacto"
              onClick={handleLinkClick}
              className="mx-4 mt-4"
            >
              <Button className="w-full rounded-full h-9 px-5 text-sm bg-primary hover:bg-primary/90 text-white">
                Contacto
              </Button>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

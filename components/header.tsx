"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getWhatsAppUrl } from "@/lib/constants"

const WHATSAPP_RESERVA = "Olá! Gostaria de fazer uma reserva na Estância Monte Horebe."

const navItems = [
  { href: "/#inicio", label: "Início" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#acomodacoes", label: "Acomodações" },
  { href: "/#comodidades", label: "Comodidades" },
  { href: "/#galeria", label: "Galeria" },
  { href: "/#agenda-cultural", label: "Agenda Cultural" },
  { href: "/#localizacao", label: "Localização" },
  { href: "/#politicas", label: "Políticas" },
  { href: "/dicas", label: "Dicas" },
  { href: "/contato", label: "Contato" },
]

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isContatoPage = pathname === "/contato"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navTextClass = isContatoPage
    ? "text-foreground hover:text-primary"
    : isScrolled
      ? "text-foreground hover:text-primary"
      : "text-white hover:text-primary"

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full min-w-0 z-50 transition-all duration-300 ${
        isContatoPage || isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-20monte-20horebe.png"
              alt="Estância Monte Horebe"
              width={140}
              height={70}
              className="h-14 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === "/contato" && item.href === "/contato"
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium tracking-wide transition-colors ${navTextClass} ${
                    isActive ? "text-primary" : ""
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden lg:block">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a
                href={getWhatsAppUrl(WHATSAPP_RESERVA)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                Reservar
              </a>
            </Button>
          </div>

          <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isContatoPage || isScrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isContatoPage || isScrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground py-2 border-b border-border"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-primary hover:bg-primary/90">
              <a
                href={getWhatsAppUrl(WHATSAPP_RESERVA)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsMobileMenuOpen(false)
                }}
              >
                Reservar
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
                href="https://www.booking.com/hotel/br/estancia-monte-horebe.pt-br.html?label=estancia-monte-horebe-uYNjynFmZO8Bv6ZjUtddJQS704512921388%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1835805265912%3Alp9222782%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YbC4OlOULAnvcrFmvh1xnqM&sid=7be39d76465260ab76f140f6b428dba9&gclid=CjwKCAiA55rJBhByEiwAFkY1QNXwecpnSh3OLR8HcYEhdUA_PXaU9Sw_Qfim3AIbrPBC3lO-yZW34BoCZgUQAvD_BwE&aid=1726433&ucfs=1&arphpl=1&dest_id=-656419&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=popularity&srpvid=76f593f33f4d076b&srepoch=1764190961&from=searchresults"
                target="_blank"
                rel="noopener noreferrer"
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
                href="https://www.booking.com/hotel/br/estancia-monte-horebe.pt-br.html?label=estancia-monte-horebe-uYNjynFmZO8Bv6ZjUtddJQS704512921388%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1835805265912%3Alp9222782%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YbC4OlOULAnvcrFmvh1xnqM&sid=7be39d76465260ab76f140f6b428dba9&gclid=CjwKCAiA55rJBhByEiwAFkY1QNXwecpnSh3OLR8HcYEhdUA_PXaU9Sw_Qfim3AIbrPBC3lO-yZW34BoCZgUQAvD_BwE&aid=1726433&ucfs=1&arphpl=1&dest_id=-656419&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=popularity&srpvid=76f593f33f4d076b&srepoch=1764190961&from=searchresults"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
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

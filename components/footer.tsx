import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"

const navLinks = [
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

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Image
              src="/images/logo-mono.png"
              alt="Estância Monte Horebe - Mulungu, CE"
              width={200}
              height={100}
              className="h-20 w-auto mb-4 object-contain"
            />
            <p className="text-background/70 text-sm">
              Seu refúgio na serra cearense. Natureza, conforto e tranquilidade em Mulungu-CE.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Navegação</h3>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-background/70 hover:text-background transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2 text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Mulungu, Ceará - Brasil
              </p>
              <a
                href="https://wa.me/5585988662996"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                (85) 98866-2996
              </a>
              <a
                href="mailto:estanciamontehorebemulungu@gmail.com"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                estanciamontehorebemulungu@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/estancia_montehorebe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1KRc7nm3Je"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Estância Monte Horebe. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-background transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

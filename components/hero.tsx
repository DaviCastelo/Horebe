import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/beautiful-mountain-landscape-with-green-hills-and-.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-4 opacity-90">Bem-vindo à</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-balance">
          Estância Monte Horebe
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
          Natureza, conforto e tranquilidade em Mulungu-CE
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8">
            <Link href="/contato">Fazer Reserva</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 text-base px-8 bg-transparent"
          >
            <Link href="#sobre">Conhecer Mais</Link>
          </Button>
        </div>
      </div>

      <Link
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="w-8 h-8" />
      </Link>
    </section>
  )
}

import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  equipamentosRotaVerdeCafe,
  rotaVerdeCafeLogo,
  mapaRotaVerdeCafeImage,
  mapaRotaVerdeCafeEmbed,
} from "@/lib/rota-verde-cafe"

export default function RotaVerdeCafeContent() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Ênfase: Estância Monte Horebe faz parte da Rota */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">Rota Verde do Café</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-2 mb-6 text-foreground">
            A Estância Monte Horebe faz parte da Rota
          </h1>
          <p className="text-muted-foreground text-lg">
            Somos um dos equipamentos da Rota Verde do Café, um circuito que conecta tradição, café, natureza e
            hospitalidade no Maciço de Baturité. Venha viver essa experiência conosco.
          </p>
        </div>

        {/* Logomarca da Rota Verde do Café */}
        <div className="flex justify-center mb-16">
          {rotaVerdeCafeLogo ? (
            <div className="relative h-20 w-56">
              <Image
                src={rotaVerdeCafeLogo}
                alt="Rota Verde do Café"
                fill
                className="object-contain object-center"
              />
            </div>
          ) : (
            <div className="flex items-center gap-3 text-primary">
              <Coffee className="w-12 h-12" />
              <span className="text-2xl font-serif font-bold">Rota Verde do Café</span>
            </div>
          )}
        </div>

        {/* Equipamentos da Rota (com destaque para Monte Horebe) */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-foreground text-center mb-10">
            Equipamentos da Rota
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipamentosRotaVerdeCafe.map((item) => {
              const isMonteHorebe = item.name.toLowerCase().includes("monte horebe")
              return (
                <Card
                  key={item.name}
                  className={`border hover:shadow-lg transition-shadow overflow-hidden ${
                    isMonteHorebe ? "ring-2 ring-primary" : "border-border"
                  }`}
                >
                  {item.image && (
                    <div className="aspect-video relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      {isMonteHorebe && (
                        <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                          Nossa pousada
                        </div>
                      )}
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.mapsLink && (
                        <Button asChild size="sm" variant="outline" className="flex-1 min-w-[120px]">
                          <a href={item.mapsLink} target="_blank" rel="noopener noreferrer">
                            <MapPin className="w-4 h-4 mr-1" />
                            Localização
                          </a>
                        </Button>
                      )}
                      {item.whatsapp && (
                        <Button asChild size="sm" variant="outline" className="flex-1 min-w-[120px]">
                          <a href={item.whatsapp} target="_blank" rel="noopener noreferrer">
                            <Phone className="w-4 h-4 mr-1" />
                            Contato
                          </a>
                        </Button>
                      )}
                      {item.contact && !item.whatsapp && (
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          {item.contact}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Mapa */}
        <div className="rounded-lg overflow-hidden border border-border">
          <h4 className="text-lg font-semibold text-foreground p-4 bg-muted">
            Mapa – Localização dos equipamentos
          </h4>
          <div className="relative w-full min-h-[300px] bg-muted">
            {mapaRotaVerdeCafeImage ? (
              <div className="relative w-full aspect-[4/3] max-h-[500px]">
                <Image
                  src={mapaRotaVerdeCafeImage}
                  alt="Mapa da Rota Verde do Café – Localização dos equipamentos"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 100vw, 900px"
                />
              </div>
            ) : (
              <div className="aspect-video w-full">
                <iframe
                  src={mapaRotaVerdeCafeEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Rota Verde do Café"
                  className="min-h-[300px]"
                />
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/#acomodacoes">Conhecer a Estância Monte Horebe</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

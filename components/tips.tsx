"use client"

import Image from "next/image"
import { Utensils, MapPin, Coffee, Mountain, Camera, TreePine, Clock, Phone, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  equipamentosRotaVerdeCafe,
  rotaVerdeCafeLogo,
  mapaRotaVerdeCafeImage,
  mapaRotaVerdeCafeEmbed,
} from "@/lib/rota-verde-cafe"

// O que fazer - Atrações
const attractions = [
  {
    name: "Centrinho de Guaramiranga",
    description: "O requintado centrinho de Guaramiranga é sempre bem frequentado nas noites frias da serra e com várias opções gastronômicas.",
    icon: MapPin,
    mapsLink: "https://maps.app.goo.gl/LXu3fWcZtqWc1WN56",
  },
  {
    name: "Parque das Trilhas",
    description: "Uma experiência única em meio à natureza com trilhas ecológicas, atividades de aventura e momentos revigorantes de banho de piscina natural!",
    icon: TreePine,
    mapsLink: "https://maps.app.goo.gl/cKp2uoTvdJ2PDEgJ8",
    whatsapp: "https://wa.me/5585992707581",
  },
  {
    name: "Chalé Nosso Sítio",
    description: "Equipamento com diversão para toda família, conta com restaurante e vários brinquedos para criançada.",
    icon: Mountain,
    mapsLink: "https://maps.app.goo.gl/Fbd8xij1UNWnJPre7",
    whatsapp: "https://wa.me/5585999275917",
  },
  {
    name: "Guaramiranga Park",
    description: "Complexo Turístico em Guaramiranga com Lazer, Gastronomia, e Hospedagem",
    icon: Mountain,
    mapsLink: "https://maps.app.goo.gl/vrDw7C71mFQK4Dm38",
    whatsapp: "https://wa.me/5585981169841",
  },
  {
    name: "Ice Bar Guaramiranga",
    description: "Viva a experiência de um bar gelado a -15ºC no centro de Guaramiranga. Aberto de sexta a domingo.",
    icon: Coffee,
    mapsLink: "https://maps.app.goo.gl/H3LDsAXV5mnVvvBR7",
  },
  {
    name: "Museu Epcar",
    description: "O Museu Epcar é aberto para visitação de 8h às 16:30h, de sexta a quarta-feira, o equipamento conta com exposição de aviões de guerra, vale a pena conferir.",
    icon: Camera,
    mapsLink: "https://maps.app.goo.gl/vFmX2hTgZmSiCm657",
    contact: "(85) 4042-1800",
  },
  {
    name: "Cachoeira do Perigo",
    description: "Localizada em Baturité, a Cachoeira do Perigo é a maior do Maciço de Baturité, com 84 metros de queda d'água.",
    icon: Mountain,
    mapsLink: "https://maps.app.goo.gl/fL5DjjucA8oioyDM8",
  },
  {
    name: "Cachoeira do Cipó",
    description: "Localizada em Baturité, a Cachoeira do Cipó tem um visual de tirar o fôlego, vale a pena, o banho gelado é revigorante.",
    icon: Mountain,
    mapsLink: "https://maps.app.goo.gl/JwVyRMC2XjoxbFZM8",
    whatsapp: "https://wa.me/5585999704395",
  },
  {
    name: "Recanto das Cachoeiras",
    description: "O local possui restaurante com comidas típicas e uma linda piscina natural para banho.",
    icon: Mountain,
    mapsLink: "https://maps.app.goo.gl/UxAjACFrQcSt8nZZ8",
  },
  {
    name: "Mosteiro dos Jesuítas",
    description: "Com sua arquitetura imponente o castelo de pedra tosca se exibe imponente, encravado na generosa mata da Serra de Baturité.",
    icon: Camera,
    mapsLink: "https://maps.app.goo.gl/HJ8sk97Rv1oqRHCCA",
  },
  {
    name: "Sítio São Luiz",
    description: "Tradicional sítio com produção de café especial. Aberto para visitas aos sábados e domingos de 9h às 17h.",
    icon: Coffee,
    mapsLink: "https://maps.app.goo.gl/Pv16dB1EQg2oLxCi9",
    whatsapp: "https://wa.me/5585996865700",
  },
  {
    name: "Mirante 360",
    description: "Local ideal para apreciar o visual da serra e registrar momentos únicos. Aberto de sexta a domingo.",
    icon: Camera,
    mapsLink: "https://maps.app.goo.gl/A3f2FjdVVkZWxPMu9",
  },
  {
    name: "Pesque e Pague",
    description: "Diversão garantida no pesqueiro e restaurante Manjericão em Guaramiranga.",
    icon: Mountain,
    mapsLink: "https://maps.app.goo.gl/Y2chG7yDGB2DqXJW8",
    whatsapp: "https://wa.me/5585999810586",
  },
  {
    name: "Boulevard Guaramiranga",
    description: "1º Open Mall de Guaramiranga com Música, gastronomia, serviços, espaço Kids e Pet Friendly - Quinta a Domingo de 9h às 22h.",
    icon: MapPin,
    mapsLink: "https://maps.app.goo.gl/286r6SUMa9oHhf367",
  },
]

export default function Tips() {
  return (
    <section id="dicas" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">Dicas</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-2 mb-4 text-foreground">
            Descubra a Região
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Durante sua estadia na Estância Monte Horebe, aproveite para conhecer as belezas e atrações que cercam nossa
            pousada. A poucos minutos, você encontrará trilhas em meio à natureza, mirantes com vistas incríveis, o charme
            das praças de Mulungu e Guaramiranga, além de restaurantes e cafés que valorizam a gastronomia local.
          </p>
        </div>

        {/* Gastronomia */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Utensils className="w-8 h-8 text-primary" />
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Nossa Gastronomia</h3>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estamos passando por alguns ajustes em nosso cardápio, favor certificar-se com o atendente na recepção o que
              está saindo no momento.
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="flex items-center gap-2 text-primary">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Horários: De 7h às 22h</span>
              </div>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a href="https://estanciabistro.menudino.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver Cardápio
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* O que fazer */}
        <div className="mb-20 bg-muted py-16 px-4 rounded-lg">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mountain className="w-8 h-8 text-primary" />
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">O Que Fazer na Serra</h3>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Você está em uma região que reserva experiências incríveis para todos os estilos. Trilhas em meio à natureza,
              mirantes com vistas de tirar o fôlego, eventos culturais, gastronomia regional e clima sempre agradável fazem
              deste destino um convite para se desconectar da rotina e viver momentos especiais.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction) => {
              const IconComponent = attraction.icon
              return (
                <Card key={attraction.name} className="border border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-lg mb-2 text-foreground">{attraction.name}</h5>
                        <p className="text-sm text-muted-foreground mb-3">{attraction.description}</p>
                        {attraction.contact && (
                          <div className="flex items-center gap-2 text-sm text-primary mb-2">
                            <Phone className="w-4 h-4" />
                            <span>{attraction.contact}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {attraction.mapsLink && (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="flex-1 min-w-[120px]"
                        >
                          <a href={attraction.mapsLink} target="_blank" rel="noopener noreferrer">
                            <MapPin className="w-4 h-4 mr-1" />
                            Localização
                          </a>
                        </Button>
                      )}
                      {attraction.whatsapp && (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="flex-1 min-w-[120px]"
                        >
                          <a href={attraction.whatsapp} target="_blank" rel="noopener noreferrer">
                            <Phone className="w-4 h-4 mr-1" />
                            WhatsApp
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Rota Verde do Café */}
        <div>
          <div className="text-center mb-12">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
              {rotaVerdeCafeLogo ? (
                <div className="relative h-14 w-40">
                  <Image
                    src={rotaVerdeCafeLogo}
                    alt="Rota Verde do Café"
                    fill
                    className="object-contain object-center"
                  />
                </div>
              ) : (
                <Coffee className="w-8 h-8 text-primary" />
              )}
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Rota Verde do Café</h3>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Venha descobrir os encantos da Rota Verde Do Café e viver experiências únicas que conectam tradição,
              sustentabilidade e hospitalidade.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {equipamentosRotaVerdeCafe.map((item) => (
              <Card key={item.name} className="border border-border hover:shadow-lg transition-shadow overflow-hidden">
                {item.image && (
                  <div className="aspect-video relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <h5 className="font-semibold text-lg mb-2 text-foreground">{item.name}</h5>
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
            ))}
          </div>

          <div className="rounded-lg overflow-hidden border border-border">
            <h4 className="text-lg font-semibold text-foreground p-4 bg-muted">Mapa – Localização dos equipamentos</h4>
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
        </div>
      </div>
    </section>
  )
}


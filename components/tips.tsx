"use client"

import { Utensils, MapPin, Coffee, Mountain, Camera, TreePine, Clock, Phone, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Gastronomia - Deliveries
const deliveries = [
  { name: "Akonxegu da Serra", type: "Self service e pizzaria", whatsapp: "https://wa.me/5585992622209" },
  { name: "Empório Sabores da Natureza", type: "Lanchonete", whatsapp: "https://wa.me/5585985015607" },
  { name: "JJ Pizzaria", type: "Pizzas e calzones", whatsapp: "https://wa.me/5585996039488" },
  { name: "Mega Lanches", type: "Pizzas e sanduíches", whatsapp: "https://wa.me/5585986024337" },
  { name: "Petiscaria da Serra", type: "Espetinhos, massas e petiscos", whatsapp: "https://wa.me/5585996011711" },
  { name: "Pizzaria Paulista", type: "Self service e pizzaria", whatsapp: "https://wa.me/5585997748780" },
  { name: "Pizzaria dos Gordinhos", type: "Self service e pizzaria", whatsapp: "https://wa.me/5585997519197" },
  { name: "Sabor da Casa", type: "Restaurante comida caseira", whatsapp: "https://wa.me/5585996852895" },
  { name: "Star Burguer", type: "Sanduiches e salgados" },
  { name: "Sushi Bar", type: "Sushi", whatsapp: "https://wa.me/5585992394919" },
  { name: "Tenda do Refúgio", type: "Sanduíches e pasteis", whatsapp: "https://wa.me/5585996230250" },
]

// Gastronomia - Restaurantes Indicados
const restaurants = [
  {
    name: "Alpendre do Chefe",
    location: "Mulungu, cerca de 4,5Km da pousada",
    description: "Com cardápio variado, o Alpendre do Chefe também é um ponto turístico devido a vista privilegiada da cidade de Mulungu, um verdadeiro cartão postal.",
    mapsLink: "https://maps.app.goo.gl/fG44xyHgBreNGC7PA",
    whatsapp: "https://wa.me/5585997881235",
  },
  {
    name: "Casa de Taipa",
    location: "Mulungu, cerca de 2,8km da pousada",
    description: "Com cardápio regional típico do nordestino, o restaurante Casa de Taipa é uma excelente opção para quem gosta da boa comida sertaneja.",
    mapsLink: "https://maps.app.goo.gl/BwTzreFPojn9wAox7",
    whatsapp: "https://wa.me/5585996845306",
  },
  {
    name: "Le Rêve",
    location: "Mulungu, cerca de 1,0km da pousada",
    description: "Excelentes pratos com um toque de requinte e assinados.",
    mapsLink: "https://maps.app.goo.gl/2Whw4kERDjayhaXAA",
    whatsapp: "https://wa.me/5585988581205",
  },
  {
    name: "La Dolce Vita",
    location: "Mulungu, cerca de 8,7m da pousada",
    description: "Com cardápio de excelente bom gosto e ambiente acolhedor.",
    mapsLink: "https://maps.app.goo.gl/CXfY9SACt6qLqHLW9",
    whatsapp: "https://wa.me/5585987414624",
  },
  {
    name: "Petiscaria da Serra",
    location: "Mulungu, cerca de 3,5km da pousada",
    description: "Com petiscos de dar água na boca, ótimo custo/benefício.",
    mapsLink: "https://maps.app.goo.gl/p2nmu79xqYSXVr3BA",
    whatsapp: "https://wa.me/5585998559816",
  },
  {
    name: "Riach Restaurante",
    location: "Baturité, cerca de 9,6km da pousada",
    description: "Com ambiente encantador e um cardápio elaborado com muito esmero, Riach Restaurante é uma excelente opção para se comer bem.",
    mapsLink: "https://maps.app.goo.gl/kGmG8dKW7cBwFVDa8",
    whatsapp: "https://wa.me/5585982347876",
  },
  {
    name: "Vale das Nuvens",
    location: "Guaramiranga, cerca de 8,8km da pousada",
    description: "Localizado dentro do Hotel Vale das Nuvens, o Mango se destaca pelos pratos bem elaborados com a supervisão de um dos melhores chefes da região.",
    mapsLink: "https://maps.app.goo.gl/5BmF9aamJVcMF5p4A",
    whatsapp: "https://wa.me/5585996907044",
  },
  {
    name: "Peon Mexicano",
    location: "Guaramiranga, cerca de 8,5km da pousada",
    description: "Restaurante mexicano bem no centrinho de Guaramiranga.",
    mapsLink: "https://maps.app.goo.gl/DqcefevJTxQUa2F88",
    whatsapp: "https://wa.me/5585988189999",
  },
  {
    name: "Manjericão",
    location: "Guaramiranga, cerca de 8,8km da pousada",
    description: "Requintado restaurante com um cardápio vasto de coisas boas.",
    mapsLink: "https://maps.app.goo.gl/SheuwSLdfwferZr59",
    whatsapp: "https://wa.me/5585999810586",
  },
  {
    name: "Confraria",
    location: "Guaramiranga, cerca de 8,0km da pousada",
    description: "Uma das mais tradicionais cozinhas de Guaramiranga.",
    mapsLink: "https://maps.app.goo.gl/Rd2bcii6RZH8qoeg6",
    whatsapp: "https://wa.me/5585999255767",
  },
]

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
    name: "K-labar",
    description: "Tradicional sítio com produção de café especial. Aberto para visitas aos sábados e domingos de 9h às 17h.",
    icon: Coffee,
    mapsLink: "https://maps.app.goo.gl/XJ9h5cwny1HV8qGz8",
    contact: "(85) 3325.2000",
  },
  {
    name: "Boulevard Guaramiranga",
    description: "1º Open Mall de Guaramiranga com Música, gastronomia, serviços, espaço Kids e Pet Friendly - Quinta a Domingo de 9h às 22h.",
    icon: MapPin,
    mapsLink: "https://maps.app.goo.gl/286r6SUMa9oHhf367",
  },
]

// Rota Verde do Café
const coffeeRoute = [
  { name: "Museu Ferroviário de Baturité", status: "Em desenvolvimento..." },
  { name: "Mosteiro dos Jesuítas", status: "Em desenvolvimento..." },
  { name: "Estância Monte Horebe", status: "Em desenvolvimento..." },
  { name: "Sítio São Roque", status: "Em desenvolvimento..." },
  { name: "Sítio Veredas do Humaitá", status: "Em desenvolvimento..." },
  { name: "Sítio Águas Finas", status: "Em desenvolvimento..." },
  { name: "Parque das Trilhas", status: "Em desenvolvimento..." },
  { name: "Chalé Nosso Sítio", status: "Em desenvolvimento..." },
  { name: "Sítio São Luis", status: "Em desenvolvimento..." },
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

          {/* Deliveries */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold mb-6 text-foreground">Deliveries em Mulungu</h4>
            <p className="text-muted-foreground mb-6">
              Separamos algumas opções de bares, restaurantes e lanchonetes que fazem entrega na Estância Monte Horebe.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {deliveries.map((delivery) => (
                <Card key={delivery.name} className="border border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h5 className="font-semibold text-sm mb-1 text-foreground">{delivery.name}</h5>
                    <p className="text-xs text-muted-foreground mb-3">{delivery.type}</p>
                    {delivery.whatsapp && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="w-full text-xs h-8"
                      >
                        <a href={delivery.whatsapp} target="_blank" rel="noopener noreferrer">
                          <Phone className="w-3 h-3 mr-1" />
                          WhatsApp
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Restaurantes Indicados */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-foreground">Restaurantes Indicados</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurants.map((restaurant) => (
                <Card key={restaurant.name} className="border border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h5 className="font-semibold text-lg text-foreground">{restaurant.name}</h5>
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    </div>
                    <p className="text-sm text-primary mb-3 font-medium">{restaurant.location}</p>
                    <p className="text-sm text-muted-foreground mb-4">{restaurant.description}</p>
                    <div className="flex gap-2">
                      {restaurant.mapsLink && (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="flex-1"
                        >
                          <a href={restaurant.mapsLink} target="_blank" rel="noopener noreferrer">
                            <MapPin className="w-4 h-4 mr-1" />
                            Localização
                          </a>
                        </Button>
                      )}
                      {restaurant.whatsapp && (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="flex-1"
                        >
                          <a href={restaurant.whatsapp} target="_blank" rel="noopener noreferrer">
                            <Phone className="w-4 h-4 mr-1" />
                            WhatsApp
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
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
            <div className="flex items-center justify-center gap-3 mb-4">
              <Coffee className="w-8 h-8 text-primary" />
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Rota Verde do Café</h3>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Venha descobrir os encantos da Rota Verde Do Café e viver experiências únicas que conectam tradição,
              sustentabilidade e hospitalidade.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {coffeeRoute.map((item, index) => (
              <Card key={item.name} className="border border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-lg mb-2 text-foreground">{item.name}</h5>
                      <p className="text-sm text-muted-foreground italic">{item.status}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


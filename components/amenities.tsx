import { Coffee, Wifi, Car, TreePine, Sun, Utensils, MapPin, Users } from "lucide-react"

const amenities = [
  {
    icon: Coffee,
    title: "Café da Manhã",
    description: "Café da manhã completo incluso na diária, com produtos regionais e caseiros.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi Gratuito",
    description: "Internet sem fio de alta velocidade em todas as áreas da pousada.",
  },
  {
    icon: Car,
    title: "Estacionamento",
    description: "Estacionamento privativo e gratuito para hóspedes.",
  },
  {
    icon: TreePine,
    title: "Área Verde",
    description: "Jardins arborizados para relaxar e apreciar a natureza.",
  },
  {
    icon: Sun,
    title: "Área Externa",
    description: "Espaços ao ar livre para contemplação e descanso.",
  },
  {
    icon: Utensils,
    title: "Cozinha Regional",
    description: "Sabores autênticos da culinária cearense.",
  },
  {
    icon: MapPin,
    title: "Trilhas Próximas",
    description: "Acesso fácil a trilhas e pontos turísticos da região.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Equipe dedicada para tornar sua estadia especial.",
  },
]

export default function Amenities() {
  return (
    <section id="comodidades" className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary-foreground/70 text-sm tracking-[0.2em] uppercase font-medium">Comodidades</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-2 mb-4">Tudo Para o Seu Conforto</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Oferecemos uma estrutura completa para que você aproveite ao máximo sua estadia na serra cearense.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity) => (
            <div
              key={amenity.title}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="w-14 h-14 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <amenity.icon className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{amenity.title}</h3>
              <p className="text-sm text-primary-foreground/80">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { CheckCircle2, Heart, Baby, CreditCard, Calendar, Shirt, UtensilsCrossed, Volume2, Cigarette } from "lucide-react"

const policies = [
  {
    icon: Heart,
    title: "Pet Friendly",
    description: "Somos um equipamento pet friendly, favor consultar o manual de boas práticas dos pet's",
  },
  {
    icon: Baby,
    title: "Crianças Bem-Vindas",
    description: "Crianças de qualquer idade são bem vindas",
  },
  {
    icon: CreditCard,
    title: "Reservas",
    description: "Reservas diretas com 50% de entrada e o restante no check-in",
  },
  {
    icon: Calendar,
    title: "Cancelamentos",
    description: "Cancelamentos reembolsáveis até 14 dias da reserva",
  },
  {
    icon: Shirt,
    title: "Vestimenta",
    description: "Proibido transitar sem camisa nas áreas comuns",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurante",
    description: "No restaurante, não aceitamos o consumo de produtos adquiridos fora do mesmo",
  },
  {
    icon: Volume2,
    title: "Áreas Comuns",
    description: "Não aceitamos caixas de som ligadas nas áreas comuns",
  },
  {
    icon: Cigarette,
    title: "Fumo",
    description: "Proibido fumar nas dependências das suítes",
  },
]

export default function Policies() {
  return (
    <section id="politicas" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">Políticas</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-2 mb-4 text-foreground">
            Políticas Essenciais
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Para garantir uma estadia agradável para todos, seguimos algumas políticas importantes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {policies.map((policy) => (
            <div
              key={policy.title}
              className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <policy.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">{policy.title}</h3>
              <p className="text-sm text-muted-foreground">{policy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


import Image from "next/image"
import { Coffee, Mountain, Heart, Car } from "lucide-react"

const features = [
  {
    icon: Coffee,
    title: "Café da Manhã Incluso",
    description: "Eleito pelos clientes como um dos melhores entre as pousadas de Mulungu. Produtos locais e caseiros.",
  },
  {
    icon: Mountain,
    title: "Clima de Serra",
    description: "Temperaturas amenas durante todo o ano",
  },
  {
    icon: Heart,
    title: "Ambiente Familiar",
    description: "Acolhimento e hospitalidade para toda a família",
  },
  {
    icon: Car,
    title: "Estacionamento",
    description: "Estacionamento gratuito para hóspedes",
  },
]

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/424902850.jpg"
                alt="Interior acolhedor da Estância Monte Horebe"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-end justify-center p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-2xl md:text-3xl font-serif font-bold text-white tracking-wide text-center">
                  Quem Conhece Não Esquece
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-lg -z-10" />
          </div>

          <div>
            <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">Nossa História</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-2 mb-6 text-foreground">
              Um Refúgio na Serra Cearense
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Nossa história começa em um momento de grandes transformações. Durante o período pandêmico, o que antes era apenas uma casa de veraneio da família se transformou, em um refúgio de hospitalidade, afeto e sustentabilidade.
              </p>
              <p>
                Os anfitriões, mesmo sem experiência prévia como proprietários de pousada, trouxeram consigo vivências como hóspedes, conhecimento administrativo e, principalmente, muita dedicação. Assim nasceu a Estância Monte Horebe: um lugar pensado para que cada pessoa se sinta acolhida como em casa.
              </p>
              <p>
                Localizados em uma área privilegiada em meio à Mata Atlântica do Maciço de Baturité, nossa missão é oferecer uma experiência de conforto, natureza exuberante e um atendimento próximo e humanizado.
              </p>
              <p className="rounded-lg bg-primary/10 border border-primary/20 p-4 text-foreground font-medium">
                Nosso café da manhã é um dos nossos maiores orgulhos: eleito pelos clientes como um dos melhores entre as pousadas de Mulungu, com produtos locais e caseiros para começar o dia com energia.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

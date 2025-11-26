import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Maria Silva",
    location: "Fortaleza, CE",
    rating: 5,
    text: "Lugar maravilhoso! O café da manhã é impecável, com produtos frescos e caseiros. A vista para a serra é de tirar o fôlego. Voltaremos com certeza!",
  },
  {
    name: "João Santos",
    location: "São Paulo, SP",
    rating: 5,
    text: "Um verdadeiro refúgio. A tranquilidade e o contato com a natureza nos fizeram renovar as energias. Atendimento excepcional!",
  },
  {
    name: "Ana Costa",
    location: "Recife, PE",
    rating: 5,
    text: "Melhor escolha para quem busca descanso. Os quartos são confortáveis, a equipe muito atenciosa e a localização perfeita para explorar a região.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-2 mb-4 text-foreground">
            O Que Nossos Hóspedes Dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos hóspedes é nossa maior recompensa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

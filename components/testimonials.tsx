"use client"

import * as React from "react"
import { useEffect, useCallback } from "react"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

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
  {
    name: "Davi Castelo",
    location: "Fortaleza, CE",
    rating: 5,
    text: "Foi uma experiência incrível! Paz, natureza e um acolhimento que faz toda a diferença. Já estou ansioso para voltar.",
  },
  {
    name: "Giuliana Pompeu",
    location: "Fortaleza, CE",
    rating: 5,
    text: "Experiência maravilhosa do início ao fim. O lugar transmite uma energia única e o atendimento é impecável. Com certeza voltaremos!",
  },
]

const AUTOPLAY_INTERVAL_MS = 7000 // 7 segundos

export default function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>(null)

  const scrollNext = useCallback(() => {
    if (!api) return
    api.scrollNext()
    if (api.canScrollNext() === false) {
      api.scrollTo(0)
    }
  }, [api])

  useEffect(() => {
    if (!api) return
    const interval = setInterval(scrollNext, AUTOPLAY_INTERVAL_MS)
    return () => clearInterval(interval)
  }, [api, scrollNext])

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

        <Carousel
          setApi={setApi}
          opts={{ loop: true, align: "start" }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={`${testimonial.name}-${testimonial.location}`}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <Quote className="w-10 h-10 text-primary/20 mb-4" />
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
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
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}

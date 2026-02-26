"use client"

import { useState, useEffect } from "react"
import { Calendar, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getWhatsAppUrl } from "@/lib/constants"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface PacoteEspecial {
  id: string
  titulo: string
  datas: string
  descricao: string
  ativo: boolean
  ordem: number
  imagens?: string[]
}

function PacoteImagens({ imagens, titulo }: Readonly<{ imagens: string[]; titulo: string }>) {
  if (imagens.length === 0) return null
  const imgClass = "block w-full h-full min-w-0 object-cover object-[55%_50%]"
  if (imagens.length === 1) {
    return (
      <div className="relative w-full max-w-full aspect-[4/3] -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-lg bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imagens[0]}
          alt={titulo}
          className={imgClass}
        />
      </div>
    )
  }
  return (
    <Carousel opts={{ loop: true }} className="w-full max-w-full -mx-6 -mt-6 mb-4 rounded-t-lg overflow-hidden">
      <CarouselContent className="ml-0">
        {imagens.map((src) => (
          <CarouselItem key={src} className="pl-0 basis-full min-w-full">
            <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={titulo}
                className={imgClass}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 opacity-80" />
      <CarouselNext className="right-2 opacity-80" />
    </Carousel>
  )
}

export default function DatasEspeciais() {
  const [pacotes, setPacotes] = useState<PacoteEspecial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/pacotes-especiais")
      .then((res) => res.json())
      .then((data) => {
        setPacotes(Array.isArray(data) ? data : [])
      })
      .catch(() => setPacotes([]))
      .finally(() => setLoading(false))
  }, [])

  if (loading || pacotes.length === 0) return null

  return (
    <section id="datas-especiais" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">
            Datas Especiais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-2 mb-4 text-foreground">
            Pacotes e Ofertas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira nossos pacotes para Réveillon, Carnaval, Semana Santa e feriados prolongados.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pacotes.map((p) => (
            <Card key={p.id} className="border border-border hover:shadow-lg transition-shadow overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <PacoteImagens imagens={p.imagens ?? []} titulo={p.titulo} />
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-lg text-foreground">{p.titulo}</h3>
                    <p className="text-sm font-medium text-primary mt-0.5">{p.datas}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{p.descricao}</p>
                <Button asChild size="sm" className="w-full sm:w-auto mx-auto">
                  <Link
                    href={getWhatsAppUrl(
                      `Olá! Gostaria de saber mais sobre o pacote ${p.titulo} na Estância Monte Horebe.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consultar
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

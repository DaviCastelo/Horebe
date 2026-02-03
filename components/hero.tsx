"use client"

import * as React from "react"
import { useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

// Mesmas imagens da seção "Momentos na Monte Horebe" (Galeria) – deslizando no carrossel
const bannerImages = [
  "/images/424902850.jpg",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/424906724.jpg?k=02d747ed01c6057c93650026d8fb443e86be6ee22cbfad9aaadec15ed160bdef&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/424905319.jpg?k=42472e8afd5b275c0563a641272a68c97f0939ba0e4969fb2c4df8e52f1245ae&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/424944026.jpg?k=afb5b392123e4e47c2657bebc8b3486b33493686f7f53ded909a620a7a0f33cb&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/425976750.jpg?k=38c05586ba24210a047504701ba9a9b7cc3e2413ae21db4ee15f08afdd03f8f8&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/424902860.jpg?k=2827b0c1080e96cf9f7d58a0ec9eacd0997a6b63f728d41bbcc8421ec72a0ab1&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/425976419.jpg?k=2070ccf548c283e8e64b543a4ecf89f3074c5c886c991ce00d7082a360f988bc&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/424902877.jpg?k=f4f595db82937f2670d0964d8d69c154bd1b7b3a9f351b60c10c1a788bbd66b3&o=",
]

export default function Hero() {
  return (
    <section id="inicio" className="relative w-full min-w-0 h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <HeroCarousel images={bannerImages} />
      <div className="absolute inset-0 bg-black/40 z-[1]" aria-hidden />
      <div className="relative z-10 w-full max-w-full text-center text-white px-4 max-w-4xl mx-auto box-border">
        <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-4 opacity-90">Bem-vindo à</p>
        <h1 className="mb-6 flex justify-center">
          <Image
            src="/images/logo-mono.png"
            alt="Estância Monte Horebe - Mulungu, CE"
            width={400}
            height={160}
            className="h-20 w-auto md:h-28 lg:h-32 object-contain"
            priority
          />
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce z-10"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="w-8 h-8" />
      </Link>
    </section>
  )
}

function HeroCarousel({ images }: { images: readonly string[] }) {
  const [api, setApi] = React.useState<CarouselApi>(null)

  const scrollNext = useCallback(() => {
    api?.scrollNext()
    if (api?.canScrollNext() === false) {
      api?.scrollTo(0)
    }
  }, [api])

  useEffect(() => {
    if (!api) return
    const interval = setInterval(scrollNext, 5000)
    return () => clearInterval(interval)
  }, [api, scrollNext])

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: true, align: "start" }}
      className="absolute inset-0 w-full h-full"
    >
      <CarouselContent className="h-full">
        {images.map((src) => (
          <CarouselItem key={src} className="h-full pl-0">
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${src}')` }}
              aria-hidden
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

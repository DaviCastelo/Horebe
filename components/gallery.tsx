"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  { 
    src: "/images/424902850.jpg", 
    alt: "Área de estar da Estância Monte Horebe" 
  },
  { 
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/424906724.jpg?k=02d747ed01c6057c93650026d8fb443e86be6ee22cbfad9aaadec15ed160bdef&o=", 
    alt: "Jardim da Estância Monte Horebe" 
  },
  { 
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/424905319.jpg?k=42472e8afd5b275c0563a641272a68c97f0939ba0e4969fb2c4df8e52f1245ae&o=", 
    alt: "Galeria da Estância Monte Horebe" 
  },
  { 
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/424944026.jpg?k=afb5b392123e4e47c2657bebc8b3486b33493686f7f53ded909a620a7a0f33cb&o=", 
    alt: "Varanda ou terraço da Estância Monte Horebe" 
  },
  { 
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/425976750.jpg?k=38c05586ba24210a047504701ba9a9b7cc3e2413ae21db4ee15f08afdd03f8f8&o=", 
    alt: "Quarto da Estância Monte Horebe" 
  },
  { 
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/424902860.jpg?k=2827b0c1080e96cf9f7d58a0ec9eacd0997a6b63f728d41bbcc8421ec72a0ab1&o=", 
    alt: "Interior da Estância Monte Horebe" 
  },
  { 
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/425976419.jpg?k=2070ccf548c283e8e64b543a4ecf89f3074c5c886c991ce00d7082a360f988bc&o=", 
    alt: "Quarto da Estância Monte Horebe" 
  },
  { 
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/424902877.jpg?k=f4f595db82937f2670d0964d8d69c154bd1b7b3a9f351b60c10c1a788bbd66b3&o=", 
    alt: "Edifício da Estância Monte Horebe" 
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)
  const prevImage = () => setSelectedImage((prev) => (prev === 0 ? images.length - 1 : (prev ?? 0) - 1))
  const nextImage = () => setSelectedImage((prev) => (prev === images.length - 1 ? 0 : (prev ?? 0) + 1))

  return (
    <section id="galeria" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">Galeria</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-2 mb-4 text-foreground">
            Momentos na Monte Horebe
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça um pouco da nossa estrutura e das paisagens deslumbrantes que você encontrará aqui.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="aspect-square relative overflow-hidden rounded-lg group cursor-pointer"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">Ver</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Próxima"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <div className="relative max-w-4xl max-h-[80vh] w-full h-full">
            <Image
              src={images[selectedImage].src || "/placeholder.svg"}
              alt={images[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}

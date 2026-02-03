import Image from "next/image"
import { Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BOOKING_URL } from "@/lib/constants"

const rooms = [
  {
    name: "Suíte Dupla Standard",
    description: "Suíte aconchegante com 1 cama de casal, ideal para casais. Ambiente confortável com banheiro privativo, Wi-Fi gratuito e frigobar.",
    image: "/quarto-duplo.jpg",
    capacity: "2 pessoas",
    beds: "1 cama de casal",
    amenities: ["Wi-Fi gratuito", "Frigobar", "Banheiro privativo"],
    bookingLink: BOOKING_URL,
  },
  {
    name: "Quarto Triplo",
    description: "Quarto espaçoso com 1 cama de solteiro e 1 cama de casal, perfeito para famílias pequenas ou grupos de amigos.",
    image: "/quarto-triplo.jpg",
    capacity: "3 pessoas",
    beds: "1 cama de solteiro e 1 cama de casal",
    amenities: ["Wi-Fi gratuito", "Frigobar", "Banheiro privativo"],
    bookingLink: BOOKING_URL,
  },
  {
    name: "Quarto Quádruplo",
    description: "Acomodação ampla com 2 camas de solteiro e 1 cama de casal grande, ideal para famílias maiores ou grupos.",
    image: "/quarto-quadruplo.jpg",
    capacity: "4 pessoas",
    beds: "2 camas de solteiro e 1 cama de casal grande",
    amenities: ["Wi-Fi gratuito", "Frigobar", "Banheiro privativo", "Varanda privativa"],
    bookingLink: BOOKING_URL,
  },
]

export default function Accommodations() {
  return (
    <section id="acomodacoes" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">Acomodações</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-2 mb-4 text-foreground">
            Conforto em Meio à Natureza
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nossas acomodações foram pensadas para proporcionar o máximo conforto enquanto você aprecia a beleza natural
            da serra cearense.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card key={room.name} className="overflow-hidden group border-0 shadow-lg">
              <div className="aspect-[3/2] relative overflow-hidden">
                <Image
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2 text-foreground">{room.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{room.description}</p>

                <div className="flex gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {room.capacity}
                  </span>
                  {room.beds && (
                    <span className="text-xs">
                      {room.beds}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {room.amenities.map((amenity) => (
                    <span key={amenity} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                      {amenity}
                    </span>
                  ))}
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <a
                    href={room.bookingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reservar
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

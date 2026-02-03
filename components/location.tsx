import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getWhatsAppUrl } from "@/lib/constants"

export default function Location() {
  return (
    <section id="localizacao" className="py-20 lg:py-32 bg-muted overflow-x-hidden">
      <div className="container mx-auto px-4 w-full min-w-0">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">Localização</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-2 mb-4 text-foreground">
            Como Chegar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos localizados em Mulungu, a cerca de 100km de Fortaleza, próximo à famosa Guaramiranga.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="w-full min-w-0">
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg bg-muted">
              {/* Responsive map: 4/3 on mobile (more vertical space), 16/9 on desktop; iframe forced to fill box */}
              <div className="relative w-full aspect-[4/3] sm:aspect-video lg:min-h-[400px] lg:aspect-auto lg:h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15925.374566855745!2d-38.9638578!3d-4.2900735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7bf3d2d58282381%3A0x8a235d788993801e!2sEst%C3%A2ncia%20Monte%20Horebe!5e0!3m2!1spt-BR!2sbr!4v1735056000000!5m2!1spt-BR!2sbr"
                  className="absolute inset-0 h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Estância Monte Horebe"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a
                  href="https://www.google.com/maps/place/Est%C3%A2ncia+Monte+Horebe/@-4.2900735,-38.9687287,17z/data=!3m1!4b1!4m9!3m8!1s0x7bf3d2d58282381:0x8a235d788993801e!5m2!4m1!1i2!8m2!3d-4.2900735!4d-38.9638578!16s%2Fg%2F11n06k8cky?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Ver no Google Maps
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a
                  href="https://waze.com/ul/h7phr97593"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Abrir no Waze
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4 text-foreground">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Endereço</p>
                    <p className="text-muted-foreground">Estância Monte Horebe</p>
                    <p className="text-muted-foreground">Mulungu, Ceará - Brasil</p>
                    <p className="text-sm text-muted-foreground">Próximo a Guaramiranga</p>
                    <Button
                      asChild
                      variant="link"
                      className="p-0 h-auto mt-2 text-primary"
                    >
                      <a
                        href="https://www.google.com/maps/place/Est%C3%A2ncia+Monte+Horebe/@-4.2900735,-38.9687287,17z/data=!3m1!4b1!4m9!3m8!1s0x7bf3d2d58282381:0x8a235d788993801e!5m2!4m1!1i2!8m2!3d-4.2900735!4d-38.9638578!16s%2Fg%2F11n06k8cky?entry=ttu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm"
                      >
                        <MapPin className="w-3 h-3 mr-1 inline" />
                        Ver localização no mapa
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Telefone / WhatsApp</p>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      (85) 98866-2996
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">E-mail</p>
                    <a
                      href="mailto:estanciamontehorebemulungu@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      estanciamontehorebemulungu@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Horários</p>
                    <p className="text-muted-foreground">Check-in: das 12h às 22h</p>
                    <p className="text-muted-foreground">Check-out: até 11h</p>
                    <p className="text-sm text-muted-foreground">Café da Manhã: das 8h às 10h</p>
                    <p className="text-sm text-muted-foreground">Recepção: das 8h às 22h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-foreground mb-2">Como Chegar</h4>
              <p className="text-sm text-muted-foreground">
                Saindo de Fortaleza, siga pela CE-060 em direção a Baturité. Continue até Mulungu, seguindo as placas
                indicativas. O trajeto dura aproximadamente 1h30. A pousada fica a poucos minutos do centro de Mulungu,
                em área de fácil acesso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

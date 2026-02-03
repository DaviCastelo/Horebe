import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { agendaCultural } from "@/lib/agenda-cultural"

export default function AgendaCultural() {
  if (agendaCultural.length === 0) return null

  return (
    <section id="agenda-cultural" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">Agenda Cultural</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-2 mb-4 text-foreground">
            Agenda Cultural Regional
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira os eventos e programações da região durante sua estadia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {agendaCultural.map((evento) => (
            <Card key={`${evento.titulo}-${evento.data}`} className="border border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-foreground">{evento.titulo}</h3>
                    <p className="text-sm font-medium text-primary mt-1">{evento.data}</p>
                  </div>
                </div>
                {evento.local && (
                  <p className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    {evento.local}
                  </p>
                )}
                {evento.descricao && (
                  <p className="text-sm text-muted-foreground mb-4">{evento.descricao}</p>
                )}
                {evento.link && (
                  <a
                    href={evento.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    Saiba mais
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

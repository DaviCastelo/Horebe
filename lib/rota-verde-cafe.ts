/**
 * Rota Verde do Café
 * Edite os equipamentos abaixo. Coloque as imagens em public/images/rota-verde-cafe/
 * e use o caminho /images/rota-verde-cafe/nome-do-arquivo.jpg
 * Logo da Rota: coloque em public/images/rota-verde-cafe-logo.png (ou .svg)
 */
export interface EquipamentoRota {
  name: string
  description: string
  image?: string
  mapsLink?: string
  whatsapp?: string
  contact?: string
}

/** Coloque a logo em public/images/rota-verde-cafe-logo.png e defina: export const rotaVerdeCafeLogo = "/images/rota-verde-cafe-logo.png" */
export const rotaVerdeCafeLogo: string | null = null

export const equipamentosRotaVerdeCafe: EquipamentoRota[] = [
  {
    name: "Museu Ferroviário de Baturité",
    description: "Museu que preserva a história da ferrovia na região do Maciço de Baturité.",
    mapsLink: "https://maps.app.goo.gl/search/Baturité+Museu+Ferroviário",
    contact: "(85) 3347-1234",
  },
  {
    name: "Mosteiro dos Jesuítas",
    description: "Arquitetura imponente em pedra tosca encravada na mata da Serra de Baturité.",
    mapsLink: "https://maps.app.goo.gl/HJ8sk97Rv1oqRHCCA",
  },
  {
    name: "Estância Monte Horebe",
    description: "Pousada em meio à Mata Atlântica com hospitalidade e café da manhã incluso.",
    mapsLink: "https://maps.app.goo.gl/search/Estância+Monte+Horebe+Mulungu",
    whatsapp: "https://wa.me/5585988662996",
  },
  {
    name: "Sítio São Roque",
    description: "Produção de café e experiências rurais na Rota Verde do Café.",
    mapsLink: "https://maps.app.goo.gl/search/Sítio+São+Roque+Baturité",
  },
  {
    name: "Sítio Veredas do Humaitá",
    description: "Café especial e trilhas em ambiente de serra.",
    mapsLink: "https://maps.app.goo.gl/search/Veredas+Humaitá",
  },
  {
    name: "Parque das Trilhas",
    description: "Trilhas ecológicas, aventura e piscina natural.",
    mapsLink: "https://maps.app.goo.gl/cKp2uoTvdJ2PDEgJ8",
    whatsapp: "https://wa.me/5585992707581",
  },
  {
    name: "Chalé Nosso Sítio",
    description: "Lazer para a família, restaurante e área kids.",
    mapsLink: "https://maps.app.goo.gl/Fbd8xij1UNWnJPre7",
    whatsapp: "https://wa.me/5585999275917",
  },
  {
    name: "Sítio São Luiz",
    description: "Produção de café especial. Visitas sábados e domingos, 9h às 17h.",
    mapsLink: "https://maps.app.goo.gl/Pv16dB1EQg2oLxCi9",
    whatsapp: "https://wa.me/5585996865700",
  },
]

/** Imagem do mapa da Rota Verde do Café (FOTOS/Mapa RVC_page-0001.jpg copiada para public/images/mapa-rota-verde-cafe.jpg) */
export const mapaRotaVerdeCafeImage = "/images/mapa-rota-verde-cafe.jpg"

// URL do mapa (embed) – usado apenas se mapaRotaVerdeCafeImage não for exibido
export const mapaRotaVerdeCafeEmbed =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.817876323!2d-38.88!3d-4.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMTUnMDAwIlMgMzhIMDUzJzAwMCJX!5e0!3m2!1spt-BR!2sbr!4v1"

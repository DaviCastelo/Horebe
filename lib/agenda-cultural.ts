/**
 * Agenda Cultural Regional
 * Edite os itens abaixo para atualizar a agenda exibida no site.
 * Adicione ou remova eventos conforme necessário.
 */
export interface EventoAgenda {
  titulo: string
  data: string
  local?: string
  descricao?: string
  link?: string
}

export const agendaCultural: EventoAgenda[] = [
  {
    titulo: "Exemplo: Festival de Inverno de Guaramiranga",
    data: "Julho 2025",
    local: "Guaramiranga, CE",
    descricao: "Festival de música e cultura na serra.",
    link: "https://www.instagram.com/guaramiranga",
  },
  {
    titulo: "Exemplo: Feira de Artesanato",
    data: "Sábados e Domingos",
    local: "Centro de Mulungu",
    descricao: "Feira com artesanato local e comidas típicas.",
  },
  // Adicione mais eventos abaixo. Para remover, apague o bloco correspondente.
]

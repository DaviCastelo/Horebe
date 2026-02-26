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
  imagem?: string
}

export const agendaCultural: EventoAgenda[] = [
  {
    titulo: "Festival de Inverno de Guaramiranga",
    data: "Julho 2025",
    local: "Guaramiranga, CE",
    descricao: "Festival de música e cultura na serra.",
    link: "https://www.instagram.com/guaramiranga",
  },
  {
    titulo: "Chorinho na Praça",
    data: "Todo 1º sábado de cada mês",
    local: "Praça do Centro Cultural de Mulungu",
    descricao: "Música ao vivo com chorinho na praça.",
  },
  {
    titulo: "Samba na Praça",
    data: "Todo 3º sábado de cada mês",
    local: "Praça do Centro Cultural de Mulungu",
    descricao: "Samba na praça do Centro Cultural de Mulungu.",
  },
  {
    titulo: "Festival de Jazz e Blues",
    data: "No Carnaval",
    local: "Guaramiranga, CE",
    descricao: "Festival de jazz e blues durante o Carnaval em Guaramiranga.",
  },
  {
    titulo: "Feira da Agricultura Familiar",
    data: "Todo domingo",
    local: "Calçadão de Mulungu",
    descricao: "Feira com produtos da agricultura familiar e artesanato local.",
  },
]

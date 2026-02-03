"use client"

import { MessageCircle } from "lucide-react"
import { getWhatsAppUrl } from "@/lib/constants"

const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre a Estância Monte Horebe."

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open(getWhatsAppUrl(WHATSAPP_MESSAGE), "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  )
}

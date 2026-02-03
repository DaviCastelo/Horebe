"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Coffee, Send } from "lucide-react"
import { getWhatsAppUrl } from "@/lib/constants"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - could integrate with WhatsApp or email
    const whatsappMessage = `Olá! Gostaria de fazer uma reserva:\n\nNome: ${formData.name}\nE-mail: ${formData.email}\nTelefone: ${formData.phone}\nCheck-in: ${formData.checkin}\nCheck-out: ${formData.checkout}\nHóspedes: ${formData.guests}\nMensagem: ${formData.message}`
    window.open(getWhatsAppUrl(whatsappMessage), "_blank")
  }

  return (
    <section id="contato" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">Reservas</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-2 mb-4 text-foreground">
              Faça Sua Reserva
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Preencha o formulário abaixo ou entre em contato diretamente pelo WhatsApp. Responderemos o mais breve
              possível.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-primary">
              <Coffee className="w-5 h-5" />
              <span className="text-sm font-medium">Café da manhã incluso em todas as diárias!</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefone / WhatsApp *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests">Número de Hóspedes *</Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  required
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  placeholder="2"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="checkin">Data de Check-in *</Label>
                <Input
                  id="checkin"
                  type="date"
                  required
                  value={formData.checkin}
                  onChange={(e) => setFormData({ ...formData, checkin: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="checkout">Data de Check-out *</Label>
                <Input
                  id="checkout"
                  type="date"
                  required
                  value={formData.checkout}
                  onChange={(e) => setFormData({ ...formData, checkout: e.target.value })}
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="message">Mensagem Adicional</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Alguma solicitação especial ou dúvida?"
                  rows={4}
                />
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full mt-8 bg-primary hover:bg-primary/90">
              <Send className="w-5 h-5 mr-2" />
              Enviar Solicitação via WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

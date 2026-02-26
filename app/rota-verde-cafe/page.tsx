import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import RotaVerdeCafeContent from "@/components/rota-verde-cafe-content"

export default function RotaVerdeCafePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <RotaVerdeCafeContent />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

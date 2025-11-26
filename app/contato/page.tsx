import Header from "@/components/header"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function ContatoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}


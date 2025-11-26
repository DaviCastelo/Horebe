import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Accommodations from "@/components/accommodations"
import Amenities from "@/components/amenities"
import Gallery from "@/components/gallery"
import Location from "@/components/location"
import Testimonials from "@/components/testimonials"
import Policies from "@/components/policies"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Accommodations />
      <Amenities />
      <Gallery />
      <Testimonials />
      <Location />
      <Policies />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

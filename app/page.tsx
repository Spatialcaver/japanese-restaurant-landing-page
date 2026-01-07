import { Hero } from "@/components/hero"
import { FeaturedDishes } from "@/components/featured-dishes"
import { AboutSection } from "@/components/about-section"
import { MenuHighlights } from "@/components/menu-highlights"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedDishes />
      <AboutSection />
      <MenuHighlights />
      <ContactCTA />
      <Footer />
    </main>
  )
}

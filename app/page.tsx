import { Header } from "@/components/header"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { HeroSection } from "@/components/hero-section"
import { SocietyServicesSection } from "@/components/society-services-section"
import { LatestSection } from "@/components/latest-section"
import { UpcomingEventsSection } from "@/components/upcoming-events-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AnnouncementBanner />
      <HeroSection />
      <SocietyServicesSection />
      <LatestSection />
      <UpcomingEventsSection />
      <Footer />
    </main>
  )
}

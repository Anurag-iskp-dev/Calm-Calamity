import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WelcomeSection } from "@/components/welcome-section"
import { ServicesSection } from "@/components/services-section"
import { TeamSection } from "@/components/team-section"
import { RulesSection } from "@/components/rules-section"
import { MomentsSection } from "@/components/moments-section"
import { DiscordSection } from "@/components/discord-section"
import { Footer } from "@/components/footer"
import { BackgroundBeams } from "@/components/ui/background-beams"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundBeams />
      <Header />
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <TeamSection />
      <RulesSection />
      <MomentsSection />
      <DiscordSection />
      <Footer />
    </div>
  )
}

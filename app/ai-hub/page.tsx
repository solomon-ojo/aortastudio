import AiHeroSection from "@/components/sections/ai-hub/hero-section"
import AiLeverageSection from "@/components/sections/ai-hub/ai-leverage-section"
import AiServicesAccordion from "@/components/sections/ai-hub/ai-services-accordion"
import GeneralCapabilitiesSection from "@/components/sections/ai-hub/general-capabilities-section"
import ClientStoriesSection from "@/components/sections/client-stories-section"
import OurProcessSection from "@/components/sections/our-process-section"
import HowWeWorkSection from "@/components/sections/how-we-work-section"
import ContactFormSection from "@/components/sections/contact-form-section"

export default function AiHubPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <AiHeroSection />
      <AiLeverageSection />
      <AiServicesAccordion />
      <GeneralCapabilitiesSection />
      <ClientStoriesSection />
      <OurProcessSection />
      <HowWeWorkSection />
      <ContactFormSection />
    </main>
  )
}

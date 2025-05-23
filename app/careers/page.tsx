import HeroSection from "@/components/sections/careers/hero-section"
import HeroBlurOverlay from "@/components/sections/careers/hero-blur-overlay"
import CoreValuesSection from "@/components/sections/careers/core-values-section"
import ValuesCarouselSection from "@/components/sections/careers/values-carousel-section"
import BenefitsSection from "@/components/sections/careers/benefits-section"
import OpenPositionsSection from "@/components/sections/careers/open-positions-section"
import LeadershipSection from "@/components/sections/careers/leadership-section"
import ContactFormSection from "@/components/sections/contact-form-section"

export default function CareersPage() {
  return (
    <main>
      <HeroSection />
      <HeroBlurOverlay />
      <CoreValuesSection />
      <ValuesCarouselSection />
      <BenefitsSection />
      <OpenPositionsSection />
      <LeadershipSection />
      <ContactFormSection />
    </main>
  )
}

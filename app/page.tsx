import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import HeroSection from "@/components/sections/hero-section"
import ClientsSection from "@/components/sections/clients-section"
import ClientStoriesSection from "@/components/sections/client-stories-section"
import ItekakoNumbersSection from "@/components/sections/itekako-numbers-section"
import WhatWeDoSection from "@/components/sections/what-we-do-section"
import IndustriesSection from "@/components/sections/industries-section"
import HowWeWorkSection from "@/components/sections/how-we-work-section"
import OurProcessSection from "@/components/sections/our-process-section"
import JoinUsSection from "@/components/sections/join-us-section"
import ContactFormSection from "@/components/sections/contact-form-section"

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      {/* Navbar */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="bg-black">
        <HeroSection />
      </div>

      {/* Client Stories Section */}
      <div className="bg-black">
        <ClientStoriesSection />
      </div>

      {/* Itekako Numbers Section */}
      <div className="bg-black">
        <ItekakoNumbersSection />
      </div>

      {/* What We Do Section */}
      <div className="bg-black">
        <WhatWeDoSection />
      </div>

      {/* Industries Section */}
      <div className="bg-black">
        <IndustriesSection />
      </div>

      {/* How We Work Section */}
      <div className="bg-black">
        <HowWeWorkSection />
      </div>

      {/* Our Process Section */}
      <div className="bg-black">
        <OurProcessSection />
      </div>

      {/* Join Us Section */}
      <JoinUsSection />

      {/* Contact Form Section */}
      <div className="bg-black">
        <ContactFormSection />
      </div>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </main>
  )
}

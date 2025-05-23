import Navbar from "@/components/layout/navbar"
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
import SpotifyButton from "@/components/ui/spotify-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Spotify Button */}
      <SpotifyButton />

      {/* Hero Section */}
      <HeroSection />

      {/* Clients Section */}
      <ClientsSection />

      {/* Client Stories Section */}
      <ClientStoriesSection />

      {/* Itekako Numbers Section */}
      <ItekakoNumbersSection />

      {/* What We Do Section */}
      <WhatWeDoSection />

      {/* Industries Section */}
      <IndustriesSection />

      {/* How We Work Section */}
      <HowWeWorkSection />

      {/* Our Process Section */}
      <OurProcessSection />

      {/* Join Us Section */}
      <JoinUsSection />

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* Footer */}
      
    </main>
  )
}

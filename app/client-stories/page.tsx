"use client"
import { useState } from "react"
import HeroSection from "@/components/sections/client-stories/hero-section"
import FeaturedStorySection from "@/components/sections/client-stories/featured-story-section"
import FilterSection from "@/components/sections/client-stories/filter-section"
import GridSection from "@/components/sections/client-stories/grid-section"
import ContactFormSection from "@/components/sections/contact-form-section"

export default function ClientStoriesPage() {
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const handleFilterChange = (filters: string[]) => {
    setActiveFilters(filters)
  }

  return (
    <main>
      <HeroSection />
      <div className="bg-black">
        <div className="container mx-auto px-4">
          <FeaturedStorySection />
          <FilterSection onFilterChange={handleFilterChange} />
          <GridSection filters={activeFilters} />
        </div>
      </div>
      <ContactFormSection />
    </main>
  )
}

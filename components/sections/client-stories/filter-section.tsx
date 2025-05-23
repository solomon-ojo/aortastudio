"use client"
import { useState } from "react"

interface FilterSectionProps {
  onFilterChange: (filters: string[]) => void
}

export default function FilterSection({ onFilterChange }: FilterSectionProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const serviceFilters = [
    "Custom software development",
    "DevOps and Migrations",
    "Software testing and QA",
    "Consulting",
    "Building digital products end-to-end",
  ]

  const industryFilters = ["Media", "Automotive", "eCommerce", "Technology", "Manufacturing", "Healthcare", "Fintech"]

  const toggleFilter = (filter: string) => {
    let newFilters: string[]
    if (activeFilters.includes(filter)) {
      newFilters = activeFilters.filter((item) => item !== filter)
    } else {
      newFilters = [...activeFilters, filter]
    }
    setActiveFilters(newFilters)
    onFilterChange(newFilters)
  }

  const resetFilters = () => {
    setActiveFilters([])
    onFilterChange([])
  }

  return (
    <div className="py-8 border-b border-white/10">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg uppercase text-white">FILTER BY SERVICES</h3>
        <button onClick={resetFilters} className="flex items-center text-gray-400 hover:text-white transition-colors">
          <span className="mr-2">RESET FILTERS</span>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.38518 10.0914L0.192383 19.2842L0.89949 19.9913L10.0923 10.7985L19.2847 19.9909L19.9913 19.2843L10.7989 10.0919L19.9914 0.899402L19.2843 0.192295L10.0918 9.38476L0.899414 0.192383L0.1928 0.898997L9.38518 10.0914Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        {serviceFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => toggleFilter(filter)}
            className={`px-4 py-2 rounded-full border ${
              activeFilters.includes(filter)
                ? "border-[#00ffcc] text-[#00ffcc]"
                : "border-white/20 text-white/70 hover:border-white/40"
            } transition-colors`}
          >
            {filter}
          </button>
        ))}
      </div>

      <h3 className="text-lg uppercase text-white mb-6">FILTER BY INDUSTRIES</h3>
      <div className="flex flex-wrap gap-3">
        {industryFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => toggleFilter(filter)}
            className={`px-4 py-2 rounded-full border ${
              activeFilters.includes(filter)
                ? "border-[#00ffcc] text-[#00ffcc]"
                : "border-white/20 text-white/70 hover:border-white/40"
            } transition-colors`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  )
}

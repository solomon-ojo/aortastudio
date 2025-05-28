"use client"
import { useState } from "react"
import type React from "react"

import { Plus } from "lucide-react"

interface WorkMethod {
  id: string
  title: string
  description: string
  benefits: string[]
  icon: React.ReactNode
}

export default function HowWeWorkSection() {
  const [hoveredMethod, setHoveredMethod] = useState<string | null>(null)

  const workMethods: WorkMethod[] = [
    {
      id: "augmentation",
      title: "Team augmentation",
      description:
        "You get the best technical talents with zero hiring hassle. We can extend your technical teams quickly with our smartest tech talents who will operate as a part of your in-house team and adapt to your business culture and routines to ensure successful project delivery.",
      benefits: [
        "Fast ramp-up of your technical team",
        "Easy rightsizing",
        "Expert services and knowledge transfer",
        "Keeps your full-time staffing lean",
      ],
      icon: (
        <div className="grid grid-cols-3 gap-1">
          {Array(9)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                {i % 2 === 0 ? (
                  <div className="w-3 h-3 transform rotate-45 bg-[#00ffcc]"></div>
                ) : (
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                )}
              </div>
            ))}
        </div>
      ),
    },
    {
      id: "dedicated",
      title: "Dedicated teams",
      description:
        "Our dedicated team of skilled technology experts will help you build digital products end-to-end on time, on scope, and in line with the highest standards of quality.",
      benefits: [
        "Best tech talents available in the long run",
        "Lower maintenance costs",
        "You manage the team but we guarantee delivery",
      ],
      icon: (
        <div className="grid grid-cols-3 gap-1">
          {Array(9)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                {i % 2 === 0 ? (
                  <div className="w-3 h-3 transform rotate-45 bg-[#00ffcc]"></div>
                ) : (
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                )}
              </div>
            ))}
        </div>
      ),
    },
    {
      id: "project",
      title: "Project based",
      description:
        "You own the product vision and we take full responsibility for every stage of product development - from ideation, design, to development and delivery. Also, we're responsible to optimize time, scope of work and cost along with team's performance.",
      benefits: [
        "No management overhead",
        "Lower cost in the long run",
        "Shared risk",
        "You manage the team but we guarantee delivery",
      ],
      icon: (
        <div className="grid grid-cols-3 gap-1">
          {Array(9)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                {i % 2 === 0 ? (
                  <div className="w-3 h-3 transform rotate-45 bg-[#00ffcc]"></div>
                ) : (
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                )}
              </div>
            ))}
        </div>
      ),
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="text-sm text-white/70 uppercase mb-4">HOW WE WORK</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white">
            Discover how we engineer
            <br />
            technological wonders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {workMethods.map((method) => (
            <div
              key={method.id}
              className={`border-t border-white/10 transition-all duration-500 ease-in-out ${
                hoveredMethod === method.id ? "bg-[#4d5a59]" : ""
              }`}
              onMouseEnter={() => setHoveredMethod(method.id)}
              onMouseLeave={() => setHoveredMethod(null)}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl md:text-3xl font-light text-white">{method.title}</h3>
                  <div
                    className={`w-8 h-8 flex items-center justify-center transition-transform duration-300 ${
                      hoveredMethod === method.id ? "rotate-45" : ""
                    }`}
                  >
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    hoveredMethod === method.id 
                      ? "max-h-96 opacity-100 mb-6" 
                      : "max-h-0 opacity-0 mb-0"
                  }`}
                >
                  <p className="text-white/80 mb-6">{method.description}</p>

                  <div>
                    <h4 className="text-white/70 text-sm uppercase mb-4">BENEFITS:</h4>
                    <ul className="space-y-2">
                      {method.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-white mr-2">•</span>
                          <span className="text-white/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="w-24 h-24">{method.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
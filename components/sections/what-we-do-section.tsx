"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function WhatWeDoSection() {
  const [activeTab, setActiveTab] = useState(0)

  const services = [
    {
      title: "Custom software development",
      href: "/custom-software-development",
      icon: "/icons/custom-software.svg",
      items: [
        { name: "Front-end and back-end development", icon: "/placeholder.svg?height=24&width=24" },
        { name: "AI and Machine learning", icon: "/placeholder.svg?height=24&width=24" },
        { name: "IoT and Embedded software", icon: "/placeholder.svg?height=24&width=24" },
        { name: "Real-time communication", icon: "/placeholder.svg?height=24&width=24" },
        { name: "Video-streaming solutions", icon: "/placeholder.svg?height=24&width=24" },
        { name: "Product management", icon: "/placeholder.svg?height=24&width=24" },
      ],
    },
    {
      title: "DevOps and Migrations",
      href: "/devops-and-migrations",
      icon: "/icons/devops.svg",
      items: [
        { name: "Assessment", icon: "/placeholder.svg?height=24&width=24" },
        { name: "Automation", icon: "/placeholder.svg?height=24&width=24" },
        { name: "Management", icon: "/placeholder.svg?height=24&width=24" },
        { name: "Migrations", icon: "/placeholder.svg?height=24&width=24" },
        { name: "Managed services", icon: "/placeholder.svg?height=24&width=24" },
        { name: "Cyber security, penetration testing", icon: "/placeholder.svg?height=24&width=24" },
      ],
    },
    {
      title: "Software testing and QA",
      href: "/software-testing-and-qa",
      icon: "/icons/testing.svg",
      items: [
        { name: "Automated testing", icon: "/placeholder.svg?height=24&width=24" },
        { name: "Manual testing", icon: "/placeholder.svg?height=24&width=24" },
        { name: "Performance testing", icon: "/placeholder.svg?height=24&width=24" },
      ],
    },
    {
      title: "Consulting",
      href: "/consulting",
      icon: "/icons/consulting.svg",
      items: [
        { name: "Project specification development", icon: "/placeholder.svg?height=24&width=24" },
        { name: "Digital transformation", icon: "/placeholder.svg?height=24&width=24" },
        { name: "Technical due diligence", icon: "/placeholder.svg?height=24&width=24" },
      ],
    },
    {
      title: "Building digital products end-to-end",
      href: "/building-digital-products-end-to-end",
      icon: "/icons/digital-products.svg",
      items: [
        { name: "Conceptualization & Prototyping", icon: "/placeholder.svg?height=24&width=24" },
        { name: "Product & Solution design", icon: "/placeholder.svg?height=24&width=24" },
        { name: "MVP development", icon: "/placeholder.svg?height=24&width=24" },
        { name: "Software development", icon: "/placeholder.svg?height=24&width=24" },
        { name: "Software deployment", icon: "/placeholder.svg?height=24&width=24" },
        { name: "Maintenance", icon: "/placeholder.svg?height=24&width=24" },
      ],
    },
  ]

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="mb-4">
            <span className="text-sm text-gray-600 uppercase tracking-wider">What we do</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black max-w-4xl">
            We've taken products from napkins to definition to implementation to deployment to scaling to maintenance,
            and every step in between.
          </h2>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:block">
          <div className="flex border-b border-gray-200 mb-8">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === index
                    ? "border-yellow-300 text-black"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <img src={service.icon || "/placeholder.svg"} alt="" className="w-6 h-6 mr-3" />
                {service.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">{services[activeTab].title}</h3>
              <a
                href={services[activeTab].href}
                className="inline-flex items-center bg-yellow-300 text-black px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors mb-8"
              >
                <span className="text-sm font-medium mr-2">MORE</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="space-y-4">
                {services[activeTab].items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-black">{item.name}</span>
                    <img src={item.icon || "/placeholder.svg"} alt="" className="w-6 h-6" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-64 h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <img src={services[activeTab].icon || "/placeholder.svg"} alt="" className="w-32 h-32" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-4">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => setActiveTab(activeTab === index ? -1 : index)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <div className="flex items-center">
                  <img src={service.icon || "/placeholder.svg"} alt="" className="w-6 h-6 mr-3" />
                  <span className="font-medium text-black">{service.title}</span>
                </div>
                <div className={`transform transition-transform ${activeTab === index ? "rotate-45" : ""}`}>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div className="w-4 h-0.5 bg-black"></div>
                    <div className="w-0.5 h-4 bg-black absolute"></div>
                  </div>
                </div>
              </button>

              {activeTab === index && (
                <div className="p-4 border-t border-gray-200">
                  <div className="space-y-3 mb-6">
                    {service.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between">
                        <span className="text-black">{item.name}</span>
                        <img src={item.icon || "/placeholder.svg"} alt="" className="w-5 h-5" />
                      </div>
                    ))}
                  </div>

                  <a
                    href={service.href}
                    className="inline-flex items-center bg-yellow-300 text-black px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors"
                  >
                    <span className="text-sm font-medium mr-2">MORE</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

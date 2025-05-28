"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

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

export default function WhatWeDoSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="bg-[#f5f5f5] py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="mb-4">
            <span className="text-sm text-gray-600 uppercase tracking-wider">What we do</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-7xl font-light text-black max-w-7xl">
            We've taken products from napkins to definition to implementation to deployment to scaling to maintenance,
            and every step in between.
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-[400px,1fr] gap-8">
          {/* Left Navigation */}
          <div className="space-y-1">
            {services.map((service, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full flex items-center space-x-4 p-6 rounded-lg text-left transition-colors ${
                  activeTab === index 
                    ? "bg-white shadow-sm" 
                    : "hover:bg-white/50"
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img src={service.icon} alt="" className="w-8 h-8" />
                <span className={`text-xl ${activeTab === index ? "text-black" : "text-gray-600"}`}>
                  {service.title}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Right Content */}
          <div className="bg-white rounded-2xl p-12">
            <div className="mb-8">
              <h3 className="text-3xl font-light mb-6">{services[activeTab].title}</h3>
              <motion.a
                href={services[activeTab].href}
                className="inline-flex items-center bg-yellow-300 text-black px-6 py-3 rounded-full"
                whileHover={{ scale: 1.05, backgroundColor: "#fcd34d" }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-sm font-medium mr-2">MORE</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Content with listings first, then icon */}
            <div className="flex gap-8">
              {/* Left side - Grid of items */}
              <div className="flex-grow grid grid-cols-2 gap-4">
                {services[activeTab].items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg border border-gray-100"
                    whileHover={{ backgroundColor: "#f9fafb" }}
                  >
                    <span className="text-black">{item.name}</span>
                    <img src={item.icon} alt="" className="w-6 h-6" />
                  </motion.div>
                ))}
              </div>

              {/* Right side - Icon */}
              <div className="flex-shrink-0">
                <motion.div
                  className="w-48 h-48 bg-yellow-300 rounded-2xl flex items-center justify-center p-8"
                  animate={{ rotate: activeTab * 90 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={services[activeTab].icon} 
                    alt="" 
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              initial={false}
            >
              <motion.button
                onClick={() => setActiveTab(activeTab === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6"
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4">
                  <img src={service.icon} alt="" className="w-6 h-6" />
                  <span className="font-medium text-black">{service.title}</span>
                </div>
                <motion.div
                  animate={{ rotate: activeTab === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div className="w-4 h-0.5 bg-black absolute" />
                    <div className="w-0.5 h-4 bg-black absolute" />
                  </div>
                </motion.div>
              </motion.button>

              <motion.div
                animate={{ height: activeTab === index ? "auto" : 0 }}
                initial={false}
                className="overflow-hidden"
              >
                <div className="p-6 border-t border-gray-200">
                  <div className="space-y-4 mb-6">
                    {service.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex} 
                        className="flex items-center justify-between p-4 rounded-lg border border-gray-100"
                      >
                        <span className="text-black">{item.name}</span>
                        <img src={item.icon} alt="" className="w-5 h-5" />
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href={service.href}
                    className="inline-flex items-center bg-yellow-300 text-black px-6 py-3 rounded-full"
                    whileHover={{ scale: 1.05, backgroundColor: "#fcd34d" }}
                  >
                    <span className="text-sm font-medium mr-2">MORE</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
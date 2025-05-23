"use client"
import { useState } from "react"
import type React from "react"

import { Plus } from "lucide-react"

interface AccordionItem {
  id: string
  title: string
  icon: React.ReactNode
  content: string
}

export default function AiServicesAccordion() {
  const [openItem, setOpenItem] = useState<string | null>("consulting")

  const accordionItems: AccordionItem[] = [
    {
      id: "consulting",
      title: "AI Consulting & Workshop",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      content:
        "Finding the best way to include AI in your business can be tricky. We can help you analyze your business, explore AI applications, and get personalized insights and an adoption roadmap. We're not just experienced in building AI-powered solutions; we've observed how they work in practice. Thanks to this, we won't provide you only with our technical expertise—we will help you build an AI-powered system aligned with your business goals and needs. Don't invest in solutions that you're unsure of. Opt for our AI consulting services to unlock the full potential of artificial intelligence in your business.",
    },
    {
      id: "engineering",
      title: "AI & Data Engineering",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      content:
        "Data engineering—Don't let your data just sit unused. Creating data lakes, restructuring data, and harnessing their power provide a competitive edge. No matter what your use case is, especially in the times of machine learning and artificial intelligence. Engineering—Whether it's NLP, computer vision, or recommendation engines, we can help you create custom solutions or use bleeding-edge pre-trained models, fine-tune them, and optimize them for your solution. Your data has undiscovered power and the potential to revolutionize your teams. We will help you unleash this power with AI and turn all your data into insights. Empower your business with our AI hub.",
    },
    {
      id: "mlops",
      title: "MLOps and AI integrations",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 3v18M3 12h18M5.636 5.636l12.728 12.728M18.364 5.636L5.636 18.364"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      content:
        "From MLOps to helping you choose between custom ML models or 3rd party services like GPT, we provide expert guidance. We will help you with stages of this process, from strategy development to implementation and optimization, providing you with full machine learning development and consulting services. What if you already have an ML solution? We can help you scale, track model metrics, automate the models' training and deployment, and create automatic workflows to optimize the process. We won't just make your ML systems better—we'll help you achieve operational excellence via automation, productivity enhancement, and a personalized approach. Our DevOps and MLOps services are characterized by one feature—we don't apply the same solutions repeatedly. Instead, we go the extra mile to think outside the box and create a bespoke solution that is perfect for your business.",
    },
  ]

  const toggleAccordion = (id: string) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section className="py-10 bg-black">
      <div className="container mx-auto px-4">
        {accordionItems.map((item) => (
          <div key={item.id} className={`border-b border-white/10 ${item.id === "mlops" ? "bg-[#4d5a59]" : ""}`}>
            <button
              className="w-full flex items-center justify-between py-8 px-4 text-left focus:outline-none"
              onClick={() => toggleAccordion(item.id)}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 mr-6 text-[#00ffcc]">{item.icon}</div>
                <span className="text-2xl md:text-3xl font-light">{item.title}</span>
              </div>
              <div
                className={`w-8 h-8 flex items-center justify-center transition-transform ${openItem === item.id ? "rotate-45" : ""}`}
              >
                <Plus className="w-6 h-6" />
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openItem === item.id ? "max-h-96 pb-8" : "max-h-0"
              }`}
            >
              <div className="px-20 pr-12">
                <p className="text-white/80 leading-relaxed">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

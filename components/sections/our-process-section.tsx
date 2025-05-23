"use client"
import { useState } from "react"

interface ProcessPhase {
  number: string
  title: string
  description: string
}

export default function OurProcessSection() {
  const [activePhase, setActivePhase] = useState(0)

  const phases: ProcessPhase[] = [
    {
      number: "1",
      title: "Discovery",
      description:
        "Every project starts with a roundtable with key stakeholders to understand your company's vision and business goals. We analyze value propositions to form the right team of experts that will bring your solutions to life.",
    },
    {
      number: "2",
      title: "Advisory",
      description:
        "Whether you are planning to automate business processes or improve performance, we help you define the right business strategy to build human-centric solutions that will exceed your customers' expectations.",
    },
    {
      number: "3",
      title: "Design",
      description:
        "Leveraging the synergy of our creativity and deep engineering capabilities, our multidisciplinary teams work closely with you to design the right game-changing products that meet evolving customer demand.",
    },
    {
      number: "4",
      title: "Dev & QA",
      description:
        "Implementing all the necessary insights and requirements our developer teams have gathered in the previous phases, we deliver disruptive, intuitive and captivating solutions that drive your digital transformation.",
    },
    {
      number: "5",
      title: "Support",
      description:
        "We support your enterprise with scalable solutions every step of the way by providing maintenance plans and enhancing your customers' ability to stay agile and scale at all times.",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-16">
          A look into our methodical process
        </h2>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            {phases.map((phase, index) => (
              <button
                key={index}
                onClick={() => setActivePhase(index)}
                className={`w-full flex items-center py-4 px-6 text-left border-b border-white/10 ${
                  activePhase === index ? "text-[#00ffcc]" : "text-white/70"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full mr-4 ${
                    activePhase === index ? "bg-[#00ffcc] text-black" : "bg-white/10 text-white/60"
                  }`}
                >
                  {phase.number}
                </div>
                <span className="text-xl">{phase.title}</span>
              </button>
            ))}
          </div>

          <div className="w-full md:w-2/3 md:pl-12">
            <div className="text-[#00ffcc] text-xl mb-4">Phase {phases[activePhase].number}</div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{phases[activePhase].title}</h3>
            <p className="text-white/80 text-lg leading-relaxed">{phases[activePhase].description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

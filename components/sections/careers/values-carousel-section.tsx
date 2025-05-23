"use client"
import { useRef, useEffect } from "react"

interface ValueCard {
  title: string
  description: string
  image: string
}

export default function ValuesCarouselSection() {
  const sliderRef = useRef<HTMLDivElement>(null)

  const valueCards: ValueCard[] = [
    {
      title: "Be curious",
      description: "Search for how things are done, and how they can be done better. Challenge status quo.",
      image: "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/652ceb4ea649f747375589a1_Curious.webp",
    },
    {
      title: "Grow",
      description:
        "Grow knowledge and skills and lift others along the way. Personal and business growth go hand in hand.",
      image: "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/652ceb504be5f658cddeaa60_Grow.webp",
    },
    {
      title: "Be accountable",
      description: "Own the s**t when it's good, and when it's not. Stay behind your decisions, gut and knowledge.",
      image: "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/652ceb4f22cb0848674268f1_Accountable.webp",
    },
    {
      title: "Act long run",
      description: "Work in sprints, but think like a marathoner. Long term results matter.",
      image: "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/652ceb4f6a7788d4a2c68a6a_Long%20Run.webp",
    },
    {
      title: "Teamplay",
      description: "Toughest problems won't be solved alone. Work and play as team members.",
      image: "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/652ceb5029f6f7d9d234ef08_Team%20Play.webp",
    },
    {
      title: "Diversity",
      description: "Equal respect, empathy and opportunities to show your true colors and bring authentic selves.",
      image: "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/652ceb4f7fcdc98e723d1e8a_Diversity.webp",
    },
    {
      title: "Open communication",
      description: "Constructive feedback and transparent communication create positive change.",
      image: "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/65380e316fbc3b749d9572cf_Communiction.webp",
    },
    {
      title: "Raise the bar",
      description:
        'Don\'t accept "good enough" when you know it can be better. Exceed clients and colleagues expectations.',
      image:
        "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/65380dd5c88d3805d7b9d06e_Raise%20the%20bar.webp",
    },
  ]

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let isDown = false
    let startX: number
    let scrollLeft: number

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true
      slider.classList.add("active")
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    }

    const handleMouseLeave = () => {
      isDown = false
      slider.classList.remove("active")
    }

    const handleMouseUp = () => {
      isDown = false
      slider.classList.remove("active")
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = (x - startX) * 2 // Scroll speed multiplier
      slider.scrollLeft = scrollLeft - walk
    }

    slider.addEventListener("mousedown", handleMouseDown)
    slider.addEventListener("mouseleave", handleMouseLeave)
    slider.addEventListener("mouseup", handleMouseUp)
    slider.addEventListener("mousemove", handleMouseMove)

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown)
      slider.removeEventListener("mouseleave", handleMouseLeave)
      slider.removeEventListener("mouseup", handleMouseUp)
      slider.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-light text-black mb-12">Our values</h2>

        <div
          ref={sliderRef}
          className="flex overflow-x-auto pb-8 hide-scrollbar cursor-grab"
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="flex space-x-6">
            {valueCards.map((card, index) => (
              <div key={index} className="flex-none w-80 border border-gray-200 rounded-lg overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={card.image || "/placeholder.svg"}
                    alt={`Image representing ${card.title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-black mb-3">{card.title}</h3>
                  <p className="text-gray-700">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center text-gray-500 mt-4">
          <p>← Drag to scroll →</p>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .active {
          cursor: grabbing;
        }
      `}</style>
    </section>
  )
}

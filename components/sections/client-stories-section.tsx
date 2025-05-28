"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

export default function ClientStoriesSection() {
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeftState, setScrollLeftState] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)

  const clientStories = [
    {
      id: "unity",
      title: "Internal software tools for support of internal development process",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f17af86fbbf271ff8a74b_Unity.jpg",
      href: "#",
    },
    {
      id: "coinbase",
      title: "Ensuring Security and Reliability Across Cryptocurrency Applications",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f18081018f7cc675e8e12_Coinbase.jpg",
      href: "#",
    },
    {
      id: "stats-perform",
      title: "Who needs excitement that sport brings when you can turn it into numbers",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f18571018f7cc675eb8ed_Stats_Perform.jpg",
      href: "#",
    },
    {
      id: "atlas-copco",
      title: "Heavy duty software for heavy duty industrial equipment for reliable and safe manufacturing",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f18a6878c50e34216250a_Atlas_Copco.jpg",
      href: "#",
    },
    {
      id: "burda-style",
      title: "Transforming a Legacy Platform for a Seamless Fashion Community Experience",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f18f4e1f5554d59c763a1_Burda.jpg",
      href: "#",
    },
    {
      id: "better-collective",
      title: "Developing Web and Mobile Applications for Global Sports Media",
      image:
        "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f190b1fa3bef0fb285a37_Better_Collective.jpg",
      href: "#",
    },
    {
      id: "mifcom-gmbh",
      title: "Building a Scalable eCommerce Platform for Custom PC Solutions",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f0b60deb5e80fbfc44267_Mifcom.jpg",
      href: "#",
    },
    {
      id: "ltse",
      title: "Building a Successful B2B Platform from Scratch to Support Rapid Growth",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f0c2d769318df75d0f64b_LTSE.jpg",
      href: "#",
    },
    {
      id: "infront-finance",
      title:
        "Centralizing and Enhancing Real-Time Data Systems for one of Europe's leading providers of market data and software",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f0cdb4734e78e7bb39019_Infront.jpg",
      href: "#",
    },
    {
      id: "fairlo",
      title: "Development for an automated and easy to use finance platform",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f1a85552843810a4dec42_Fairlo.jpg",
      href: "#",
    },
    {
      id: "smart-planner",
      title: "Developing a recommendation system for suggesting the most suitable recipes",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f1b76682626fb96541dda_Smart_Planner.jpg",
      href: "#",
    },
    {
      id: "navdy",
      title:
        "Software development of user interface components and wireless Android-iOS platform integration for Android system",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f1d267bc5fd1d7cdce143_Navdy.jpg",
      href: "#",
    },
  ]

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - sliderRef.current.offsetLeft)
    setScrollLeftState(sliderRef.current.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (cursorRef.current) {
      cursorRef.current.classList.remove("active")
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return
    e.preventDefault()
    const x = e.pageX - sliderRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier
    sliderRef.current.scrollLeft = scrollLeftState - walk

    if (cursorRef.current) {
      cursorRef.current.classList.add("active")
    }
  }

  const handleMouseEnter = () => {
    if (cursorRef.current) {
      cursorRef.current.classList.add("show")
    }
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    if (cursorRef.current) {
      cursorRef.current.classList.remove("show")
      cursorRef.current.classList.remove("active")
    }
  }

  const handleCursorMove = (e: React.MouseEvent) => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
    }
  }

  const handleScrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: "smooth" })
    }
  }

  const handleScrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: "smooth" })
    }
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      slider.scrollLeft += e.deltaY
    }

    slider.addEventListener("wheel", handleWheel, { passive: false })
    return () => {
      slider.removeEventListener("wheel", handleWheel)
    }
  }, [])

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="mb-4">
            <span className="text-md text-white/70 uppercase tracking-wider">CLIENT STORIES</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-7xl font-light text-white mb-8 max-w-4xl">
            We architect, build and test IT solutions for Fortune 500, SMEs and startups of all sizes.
          </h2>
        </div>

        <div className="flex items-center justify-between mb-12">
          <h3 className="text-xl md:text-2xl text-white">Check out all client stories</h3>
          <a
            href="#"
            className="inline-flex items-center bg-yellow-300 text-black px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors"
          >
            <span className="text-sm font-medium mr-2">MORE</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Custom Cursor */}
        <div
          ref={cursorRef}
          className="cursor fixed top-0 left-0 w-0 h-0 pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="cursor-dot bg-black/50 backdrop-blur-sm rounded-full w-24 h-24 flex flex-col items-center justify-center transition-all duration-200">
            <div className="flex items-center text-white">
              <ChevronLeft className="w-4 h-4" />
              <span className="text-xs font-medium mx-1">DRAG</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Desktop Slider */}
        <div className="relative">
          <div
            className="hidden md:block overflow-x-auto scrollbar-hide"
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseMove={(e) => {
              handleMouseMove(e)
              handleCursorMove(e)
            }}
            onMouseEnter={handleMouseEnter}
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
          >
            <div className="flex space-x-6 pb-4" style={{ minWidth: "max-content" }}>
              {clientStories.map((story) => (
                <div key={story.id} className="flex-none w-80">
                  <a href={story.href} className="block group">
                    <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                      <img
                        src={story.image || "/placeholder.svg"}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex items-start justify-between">
                      <h4 className="text-white text-lg font-medium leading-tight flex-1 mr-4">{story.title}</h4>
                      <ArrowRight className="w-5 h-5 text-white flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <button
            onClick={handleScrollLeft}
            className="hidden md:flex absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full items-center justify-center text-white hover:bg-black/70 transition-colors"
            aria-label="Previous stories"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleScrollRight}
            className="hidden md:flex absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full items-center justify-center text-white hover:bg-black/70 transition-colors"
            aria-label="Next stories"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {clientStories.slice(0, 4).map((story) => (
            <div key={story.id}>
              <a href={story.href} className="block group">
                <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-start justify-between">
                  <h4 className="text-white text-lg font-medium leading-tight flex-1 mr-4">{story.title}</h4>
                  <ArrowRight className="w-5 h-5 text-white flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .cursor-dot {
          opacity: 0;
          transform: scale(0.5);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        .cursor-dot.show {
          opacity: 1;
          transform: scale(1);
        }
        
        .cursor-dot.active {
          transform: scale(1.2);
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
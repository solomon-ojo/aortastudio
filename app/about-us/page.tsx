"use client"
import PageWrapper from "@/components/ui/page-wrapper"
import ContactFormSection from "@/components/sections/contact-form-section"
import { useState } from "react"

export default function AboutPage() {
  const [currentValueIndex, setCurrentValueIndex] = useState(0)

  const teamMembers = [
    {
      name: "Ognjen Šami",
      position: "Co-Founder",
      image:
        "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f3e70374d11abfd2b5d7a_Ognjen%20S%CC%8Cami.jpg",
    },
    {
      name: "Jelena Šami",
      position: "Co-Founder",
      image:
        "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f3e441fe9c468c12c93af_Jelena%20S%CC%8Cami.jpg",
    },
    {
      name: "Tatjana Andrejić",
      position: "CEO",
      image:
        "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f3e23fbc42ce03f720be8_Tatjana%20Andrejic%CC%81.jpg",
    },
    {
      name: "Ana Simić",
      position: "CFO",
      image:
        "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f3e01398998ef2bfdeb81_Ana%20Simic%CC%81.jpg",
    },
    {
      name: "Marija Čajetinac Martinović",
      position: "Delivery Director",
      image:
        "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f3dd8f4519751c8a1bd8a_Marija%20C%CC%8Cajetinac%20Martinovic%CC%81.jpg",
    },
    {
      name: "Gorica Božić",
      position: "Delivery Manager",
      image:
        "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f3d82fd8627eb2eda69c2_Gorica%20Boz%CC%8Cic%CC%81.jpg",
    },
    {
      name: "Sanja Žuržul",
      position: "Head of DevOps Department",
      image:
        "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f3d588569b18db24ad570_Sanja%20Z%CC%8Curz%CC%8Culj.jpg",
    },
    {
      name: "Miloš Jankucić",
      position: "Delivery Manager",
      image:
        "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f3d37b5da4b0ed3c181d3_Milos%CC%8C%20Jankucic%CC%81.jpg",
    },
    {
      name: "Jovana Dinić",
      position: "HR Specialist",
      image:
        "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f3ce09252735a84d82a84_Jovana%20Dinic%CC%81.jpg",
    },
    {
      name: "Natalija Šerović",
      position: "Senior QA Team lead & QA Sales Engineer",
      image:
        "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f3cbe5634d1907e76365b_Natalija%20S%CC%8Cerovic%CC%81.jpg",
    },
    {
      name: "Velimir Šuša",
      position: "Delivery Manager",
      image:
        "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f3c8b67441fe8d4b9d618_Velimir%20S%CC%8Cus%CC%8Ca.jpg",
    },
    {
      name: "Jovana Milićević",
      position: "Growth Director",
      image:
        "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f3c16c21d2a9b13dffba3_Jovana%20Milic%CC%81evic%CC%81.jpg",
    },
  ]

  const values = [
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

  const clientLogos = [
    "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/651c58c3b7da49297dd2dcc6_Coinbase%20-%20g.svg",
    "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/651c58c3b450f47ea9d35e48_burda-style%20-%20g.svg",
    "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/651c58c7f38f6611424bced9_Unity%20-%20g.svg",
    "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/651c58c3ace01df8cc232d66_atlas%20copco%20-%20g.svg",
    "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/651c58c37458aad4b8511c2f_forsta%20-%20g.svg",
    "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/651c58c3b7da49297dd2dcc3_better-collective%20-%20g.svg",
    "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/651c58c7a65a40d9d8f45318_Stats%20Perform%20-%20g.svg",
    "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/651c58c54f7799c1efb549dc_Piper%20-%20g.svg",
    "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/651c58c57825c94b01c6247d_leybold%20-%20g.svg",
  ]

  const clientLogosRow2 = [
    "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/651c58c79d0686b51b5cc016_toolchain%20-%20g.svg",
    "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/651c58c7268670ad5ce527f8_Supstat%20-%20g.svg",
    "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/651c58c5430465fc13b93892_LTSE%20-%20g.svg",
    "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/651c58c4d983bb351a6ebdc4_fairlo%20-%20g.svg",
    "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/651c58c53691161660cb2097_infront%20-%20g.svg",
    "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/651c58c65cbd775ec533f08a_Sarens%20-%20g.svg",
    "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/651c58c517fcf512ecca4cd1_Navdy%20Logo%20-%20g.svg",
    "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/651c58c521041eda31de3d06_One%20Drop%20-%20g.svg",
    "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/651c58c3c204c1d49fd81cba_block%20party%20-%20g.svg",
    "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/651c58c3c204c1d49fd81cef_banovo%20-%20g.svg",
  ]

  const nextValue = () => {
    setCurrentValueIndex((prev) => (prev + 1) % values.length)
  }

  const prevValue = () => {
    setCurrentValueIndex((prev) => (prev - 1 + values.length) % values.length)
  }

  const getVisibleValues = () => {
    const visibleCount = 4
    const result = []
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentValueIndex + i) % values.length
      result.push(values[index])
    }
    return result
  }

  return (
    <PageWrapper>
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl text-center">
              <h1 className="text-4xl md:text-6xl items-center justify-center lg:text-7xl ml-22 font-light text-white leading-tight">
                Itekako: Real People,
                <br />
                Real Stories, Real Success
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source
              src="https://cdn.jsdelivr.net/gh/MarkoGole/Itekako-Cover-Video-New/Itekako_Office_2.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      {/* Our Story + Client Logos Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
              <div>
                <h2 className="text-4xl md:text-5xl font-light mb-8 text-black">Our Story</h2>
              </div>
              <div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Itekako is an IT software development company founded more than 15 years ago with the idea to create a
                  friendly and enthusiastic work environment where work-life balance and innovative projects make people
                  happy to come on Mondays. That enthusiasm, a sense of accountability, and a pursuit for excellence in
                  delivery enabled us to grow to 150+ people, 200+ successful projects in 11+ industries, so far.
                </p>
              </div>
            </div>

            {/* Client Logos Infinite Marquee */}
            <div className="space-y-8 mb-16 w-full">
            {/* First row - moving right */}
            <div className="relative overflow-hidden">
              <div className="flex w-full animate-scroll space-x-12">
                {/* First set */}
                <div className="flex space-x-12">
                  {clientLogos.map((logo, index) => (
                    <div key={`first-${index}`} className="flex-shrink-0">
                      <img
                        src={logo || "/placeholder.svg"}
                        alt={`Client logo ${index + 1}`}
                        className="h-10 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                      />
                    </div>
                  ))}
                </div>
                {/* Duplicate set for seamless loop */}
                {/* <div className="flex space-x-12">
                  {clientLogos.map((logo, index) => (
                    <div key={`second-${index}`} className="flex-shrink-0">
                      <img
                        src={logo || "/placeholder.svg"}
                        alt={`Client logo ${index + 1}`}
                        className="h-10 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                      />
                    </div>
                  ))}
                </div> */}
              </div>
            </div>

            {/* Second row - moving left */}
            <div className="relative overflow-hidden">
              <div className="flex w-[200%] animate-scroll-reverse space-x-12">
                {/* First set */}
                <div className="flex space-x-12">
                  {clientLogosRow2.map((logo, index) => (
                    <div key={`first-row2-${index}`} className="flex-shrink-0">
                      <img
                        src={logo || "/placeholder.svg"}
                        alt={`Client logo ${index + 10}`}
                        className="h-10 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                      />
                    </div>
                  ))}
                </div>
                {/* Duplicate set for seamless loop */}
                {/* <div className="flex space-x-12">
                  {clientLogosRow2.map((logo, index) => (
                    <div key={`second-row2-${index}`} className="flex-shrink-0">
                      <img
                        src={logo || "/placeholder.svg"}
                        alt={`Client logo ${index + 10}`}
                        className="h-10 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                      />
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          </div>

            <div className="text-center">
              <h3 className="text-2xl font-medium mb-4">Check out our clients stories</h3>
              <a
                href="#"
                className="inline-flex items-center px-8 py-3 bg-yellow-400 text-black font-medium rounded-full hover:bg-yellow-500 transition-colors"
              >
                client stories
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How We Do Things Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-light mb-8">How we do things</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  At Itekako, we're all about mixing tech smarts with a dash of 'Itekako magic' to deliver the best
                  possible digital products for our clients.
                  <br />
                  <br />
                  We run in sprints (agile, usually), but essentially we are marathoners - the people we work with and
                  the clients we work for have been with us for a long time.
                  <br />
                  <br />
                  We're all about IT (that's information tech) and 'kako' (that's Serbian for 'how')—which means we're
                  crazy curious about everything we do.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-5 gap-4">
                  {Array.from({ length: 25 }, (_, i) => (
                    <div key={i} className="w-8 h-8 flex items-center justify-center">
                      {i % 5 === 0 || i % 5 === 4 ? (
                        <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-white"></div>
                      ) : i % 3 === 0 ? (
                        <div className="w-4 h-4 bg-yellow-400 transform rotate-45"></div>
                      ) : i % 4 === 0 ? (
                        <div className="w-4 h-4 bg-yellow-400"></div>
                      ) : (
                        <div className="w-4 h-4 rounded-full bg-white"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-light mb-8">Our Mission</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  At Itekako, our mission is to ignite businesses worldwide with cutting-edge software solutions. We
                  create, build, and scale all things digital, serving startups, scale-ups, and big players. Through
                  teamwork, our tech wizardry, and a relentless pursuit of awesomeness, we help our clients conquer
                  their tech dreams and stay ahead in an ever-evolving digital universe.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-5 gap-4">
                  {Array.from({ length: 25 }, (_, i) => (
                    <div key={i} className="w-8 h-8 flex items-center justify-center">
                      {i % 6 === 0 || i % 6 === 4 ? (
                        <div className="w-4 h-4 bg-cyan-400 grid grid-cols-2 gap-0.5">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                      ) : i % 4 === 0 ? (
                        <div className="w-4 h-4 bg-cyan-400"></div>
                      ) : i % 3 === 0 ? (
                        <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-cyan-400"></div>
                      ) : (
                        <div className="w-4 h-4 rounded-full bg-white"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-light mb-8 text-black">Our values</h2>
            </div>

            {/* Values Slider with Arrows */}
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {getVisibleValues().map((value, index) => (
                  <div
                    key={`${currentValueIndex}-${index}`}
                    className="bg-white rounded-lg shadow-sm border border-gray-100"
                  >
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img
                        src={value.image || "/placeholder.svg"}
                        alt={value.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium mb-3 text-black">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevValue}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextValue}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-light mb-4 text-black">
                  Curious to explore how we can grow together?
                </h2>
                <p className="text-xl mb-8 text-gray-600">Check our open positions.</p>
                <a
                  href="#"
                  className="inline-flex items-center px-8 py-3 bg-yellow-400 text-black font-medium rounded-full hover:bg-yellow-500 transition-colors"
                >
                  JOIN US
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/650002419c1d7e87b816e868_Itekako_15_Years.gif"
                    alt="Team collaboration"
                    className="rounded-lg"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/650002473f676cb651d756f7_Itekako_150_Employees.gif"
                    alt="Office environment"
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/6501718ad0ce6a54144a6aa6_fist-bump-img-1.webp"
                    alt="Team meeting"
                    className="rounded-lg"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/650002461d7831d93c5900c9_Itekako_200_Projects.gif"
                    alt="Workspace"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm text-gray-400 mb-2">OUR TEAM</p>
              <h2 className="text-3xl md:text-4xl font-light">Meet some of the faces behind Itekako</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative h-80 mb-4 rounded-lg overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <p className="text-gray-400">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactFormSection />
      </main>
    </PageWrapper>
  )
}

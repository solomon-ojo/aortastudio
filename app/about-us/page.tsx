import ContactFormSection from "@/components/sections/contact-form-section"

export default function AboutUsPage() {
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
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="section is-about-us-hero">
        <div className="relative h-screen">
          <div className="absolute inset-0 bg-black/50 z-10 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-light text-white">
                  Itekako: Real People, Real Stories, Real Success
                </h1>
              </div>
            </div>
          </div>
          <video
            src="https://cdn.jsdelivr.net/gh/MarkoGole/Itekako-Cover-Video-New/Itekako_Office_2.mp4"
            autoPlay
            muted
            playsInline
            loop
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="section is-about-us-intro py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-light mb-8">Our Story</h2>
              </div>
              <div>
                <p className="text-lg text-gray-300">
                  Itekako is an IT software development company founded more than 15 years ago with the idea to create a
                  friendly and enthusiastic work environment where work-life balance and innovative projects make people
                  happy to come on Mondays. That enthusiasm, a sense of accountability, and a pursuit for excellence in
                  delivery enabled us to grow to 150+ people, 200+ successful projects in 11+ industries, so far.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-clients-marque py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              <img
                src="https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/651c58c3ace01df8cc232d66_atlas%20copco%20-%20g.svg"
                alt="Atlas Copco logo"
                className="h-12 opacity-70"
              />
              <img
                src="https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/651c58c3b450f47ea9d35e48_burda-style%20-%20g.svg"
                alt="Burda Style logo"
                className="h-12 opacity-70"
              />
              <img
                src="https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/651c58c7f38f6611424bced9_Unity%20-%20g.svg"
                alt="Unity logo"
                className="h-12 opacity-70"
              />
              <img
                src="https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/651c58c3b7da49297dd2dcc6_Coinbase%20-%20g.svg"
                alt="Coinbase logo"
                className="h-12 opacity-70"
              />
              <img
                src="https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/651c58c37458aad4b8511c2f_forsta%20-%20g.svg"
                alt="Forsta logo"
                className="h-12 opacity-70"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section is-about-mission py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-light mb-8">How we do things</h2>
                <p className="text-lg text-gray-300">
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
                <div className="grid grid-cols-5 grid-rows-5 gap-4">
                  {Array(25)
                    .fill(0)
                    .map((_, i) => {
                      const shapes = ["circle", "square", "triangle", "diamond"]
                      const shape = shapes[Math.floor(Math.random() * shapes.length)]
                      const colors = ["bg-[#00ffcc]", "bg-white", "transparent"]
                      const color = colors[Math.floor(Math.random() * colors.length)]

                      return (
                        <div key={i} className={`w-8 h-8 flex items-center justify-center ${color}`}>
                          {shape === "circle" && <div className="w-6 h-6 rounded-full bg-white"></div>}
                          {shape === "square" && <div className="w-6 h-6 bg-[#00ffcc]"></div>}
                          {shape === "triangle" && (
                            <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-[#00ffcc]"></div>
                          )}
                          {shape === "diamond" && <div className="w-6 h-6 bg-[#00ffcc] transform rotate-45"></div>}
                        </div>
                      )
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-about-mission py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-light mb-8">Our Mission</h2>
                <p className="text-lg text-gray-300">
                  At Itekako, our mission is to ignite businesses worldwide with cutting-edge software solutions. We
                  create, build, and scale all things digital, serving startups, scale-ups, and big players. Through
                  teamwork, our tech wizardry, and a relentless pursuit of awesomeness, we help our clients conquer
                  their tech dreams and stay ahead in an ever-evolving digital universe.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-5 grid-rows-5 gap-4">
                  {Array(25)
                    .fill(0)
                    .map((_, i) => {
                      const shapes = ["circle", "square", "triangle", "diamond"]
                      const shape = shapes[Math.floor(Math.random() * shapes.length)]
                      const colors = ["bg-[#00ffcc]", "bg-white", "transparent"]
                      const color = colors[Math.floor(Math.random() * colors.length)]

                      return (
                        <div key={i} className={`w-8 h-8 flex items-center justify-center ${color}`}>
                          {shape === "circle" && <div className="w-6 h-6 rounded-full bg-white"></div>}
                          {shape === "square" && <div className="w-6 h-6 bg-[#00ffcc]"></div>}
                          {shape === "triangle" && (
                            <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-[#00ffcc]"></div>
                          )}
                          {shape === "diamond" && <div className="w-6 h-6 bg-[#00ffcc] transform rotate-45"></div>}
                        </div>
                      )
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-values py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light mb-12">Our values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white/5 rounded-lg overflow-hidden">
                  <div className="relative h-64">
                    <img
                      src={value.image || "/placeholder.svg"}
                      alt={`Image representing ${value.title.toLowerCase()}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/30 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-medium mb-3">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section is-team py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light mb-4">Meet some of the faces behind Itekako</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative h-80 mb-4 rounded-lg overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="text-gray-400">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section is-cta py-20 bg-[#e8f1f1] text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-light mb-4">Curious to explore how we can grow together?</h2>
              <p className="text-xl mb-8">Check our open positions.</p>
              <a
                href="/careers"
                className="inline-block px-8 py-3 bg-[#00ffcc] text-black font-medium rounded-full hover:bg-[#00d6b0] transition-colors"
              >
                JOIN US
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactFormSection />
    </main>
  )
}

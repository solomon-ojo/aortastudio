"use client"

export default function ItekakoNumbersSection() {
  const stats = [
    {
      number: "15+ Years",
      image:
        "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/650002473f676cb651d756f7_Itekako_150_Employees.gif",
      alt: "Gif of hands typing on the keyboard.",
    },
    {
      number: "150+ Employees",
      image:
        "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/650002419c1d7e87b816e868_Itekako_15_Years.gif",
      alt: "Gif of a man putting tucking glasses back on his nose",
    },
    {
      number: "200+ Projects",
      image:
        "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/650002461d7831d93c5900c9_Itekako_200_Projects.gif",
      alt: "Gif of a man that that circling his index fingers",
    },
    {
      number: "90+ Clients",
      image:
        "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/65000246b3cac0e307d2068f_Itekako_90_Clients.gif",
      alt: "Gif of the hands fist bumping.",
    },
  ]

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">Itekako in numbers</h2>
        </div>

        {/* Marquee Animation */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee space-x-16">
            {/* First set */}
            {stats.map((stat, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden">
                  <img src={stat.image || "/placeholder.svg"} alt={stat.alt} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{stat.number}</h3>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {stats.map((stat, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden">
                  <img src={stat.image || "/placeholder.svg"} alt={stat.alt} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{stat.number}</h3>
              </div>
            ))}

            {/* Third set for seamless loop */}
            {stats.map((stat, index) => (
              <div key={`third-${index}`} className="flex-shrink-0 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden">
                  <img src={stat.image || "/placeholder.svg"} alt={stat.alt} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{stat.number}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  )
}

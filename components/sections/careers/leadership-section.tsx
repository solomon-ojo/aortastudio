interface LeadershipMember {
  name: string
  position: string
  image: string
}

export default function LeadershipSection() {
  const leadershipTeam: LeadershipMember[] = [
    {
      name: "Ognjen Šami",
      position: "Co-Founder",
      image: "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/65a8f8a0a0fb6cc3d3a5c9a3_Milos%20Zikic.jpg",
    },
    {
      name: "Jelena Šami",
      position: "Co-Founder",
      image:
        "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/65a8f8a0a0fb6cc3d3a5c9a4_Marko%20Golubovic.jpg",
    },
    {
      name: "Tatjana Andrejić",
      position: "CEO",
      image:
        "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/65a8f8a0a0fb6cc3d3a5c9a5_Milos%20Milovanovic.jpg",
    },
    {
      name: "Ana Simić",
      position: "CFO",
      image:
        "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/65a8f8a0a0fb6cc3d3a5c9a6_Marko%20Stankovic.jpg",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <div className="uppercase text-sm text-white/70 mb-4">OUR TEAM</div>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-16">
          Meet some of the faces behind "kako" in Itekako
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipTeam.map((member, index) => (
            <div key={index} className="border-t border-white/10 pt-6">
              <div className="aspect-square bg-[#e1eeec] rounded-lg overflow-hidden mb-6">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-white mb-1">{member.name}</h3>
              <p className="text-white/70">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

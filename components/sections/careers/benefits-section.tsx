interface BenefitItem {
  title: string
  icon: string
}

export default function BenefitsSection() {
  const benefits: BenefitItem[] = [
    {
      title: "Private healthcare",
      icon: "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/652c1ac9222a1e9f8be2f0c6_healtcare%20icon.svg",
    },
    {
      title: "Paid sick leave",
      icon: "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/652c1ac929f6f7d9d248acd3_Sick%20Leave%20icon.svg",
    },
    {
      title: "20 days off",
      icon: "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/652c1ac9f9121f403b5eab55_Holiday%20Icon.svg",
    },
    {
      title: "Parental leave",
      icon: "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/652c1ac9fd19962a333765fe_Parent%20Leave%20Icon.svg",
    },
    {
      title: "Travel opportunities",
      icon: "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/652c1ac97568770d04f49408_Travel%20icon.svg",
    },
    {
      title: "Events",
      icon: "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/652c1ac8e212bf1bb17413d9_Events%20icon.svg",
    },
    {
      title: "Referral bonuses",
      icon: "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/652c1ac915aba6506b1bcd6e_Referal%20icon.svg",
    },
    {
      title: "Knowledge transfer",
      icon: "https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/6560a06ed1aa3c702486c3b6_Knowledge_Transfer.svg",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black">Benefits & perks</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 flex flex-col items-center">
              <div className="w-16 h-16 mb-4">
                <img src={benefit.icon || "/placeholder.svg"} alt={`${benefit.title} icon`} className="w-full h-full" />
              </div>
              <h3 className="text-xl font-medium text-black text-center">{benefit.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

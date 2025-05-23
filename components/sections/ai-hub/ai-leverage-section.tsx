export default function AiLeverageSection() {
  return (
    <section className="py-20 bg-[#7a8d8c]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8">
              Leverage AI to accelerate your app development and more.
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Navigating AI landscape is hard. Especially finding the right purpose and use case aligned with your
              business goals. Utilize insights from data scientists, product experts, and business leaders to make
              well-informed decisions about integrating AI-powered solutions into your organization.
            </p>
          </div>
          <div className="relative">
            <div className="grid grid-cols-3 gap-4">
              {Array(9)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square ${i % 3 === 1 ? "bg-yellow-300" : "bg-[#a8d3d1]/70"} rounded-md`}
                  ></div>
                ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#7a8d8c]/50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

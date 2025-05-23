export default function HeroSection() {
  return (
    <section className="py-20 bg-[#e1eeec]">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="uppercase text-sm text-gray-600 mb-4">CLIENT STORIES</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-black leading-tight mb-8">
              Journey with our Clients: Real stories, Real success.
            </h1>
          </div>
          <div>
            <p className="text-gray-700 text-lg">
              Harnessing the power of emerging and integrated technologies for over 15 years, we have delivered more
              than 200 high-end projects across 11 different industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

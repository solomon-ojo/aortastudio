export default function HeroSection() {
  return (
    <section className="relative h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="https://cdn.jsdelivr.net/gh/MarkoGole/Itekako-Cover-Video-New/Itekako_Office_2.mp4"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-4">
          <div className="text-yellow-300 mb-2">House of Engineers.</div>
          <div className="mb-2">Big enough to deliver,</div>
          <div>small enough to care.</div>
        </h1>
      </div>
    </section>
  )
}

export default function HeroSection() {
  return (
    <section className="py-20 bg-yellow-300">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <div className="uppercase text-sm text-black mb-4">CAREERS</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-black leading-tight">
              A journey.
              <br />
              Not just a job.
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/650002461d7831d93c5900c9_Itekako_200_Projects.gif"
                alt="Gif of a man that that circling his index fingers"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/650002473f676cb651d756f7_Itekako_150_Employees.gif"
                alt="Gif of hands typing on the keyboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

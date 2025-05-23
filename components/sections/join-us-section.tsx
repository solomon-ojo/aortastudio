import { ArrowRight } from "lucide-react"

export default function JoinUsSection() {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white max-w-4xl">
            Join our passionate team, unleash your potential, and be part of something truly awesome.
          </h2>
        </div>

        <div className="relative">
          {/* Background Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/6500465c40b421cbf9fc0c73_Itekako_Call.gif"
                alt="Gif of a man with thick black framed glasses pointing his index finger to camera"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/650046853b3cb15970b1b68c_Itekako_Wrighting.gif"
                alt="Gif of a woman hand that writes in small notebook."
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/650046a61a2cfcc2880362ba_Itekako_Developer-2.gif"
                alt="Gif of a man working on a lap top."
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/6539261bf0aa229f2e876da3_Mouse%20and%20keyboard.gif"
                alt="Gif of woman hand typing and moving mouse looping"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Overlay */}
          <div className="bg-black/80 backdrop-blur-sm rounded-lg p-8 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl">
            <div className="text-center">
              <p className="text-white text-lg md:text-xl leading-relaxed mb-8">
                Our dynamic work environment fosters creativity, empowers you to make an impact, and offers endless
                learning opportunities. Together, let's shape the future of technology and create extraordinary
                solutions that inspire.
              </p>

              <a
                href="/careers"
                className="inline-flex items-center bg-yellow-300 text-black px-8 py-4 rounded-full hover:bg-yellow-400 transition-colors text-lg font-medium"
              >
                <span className="mr-2">JOIN US</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function CoreValuesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black mb-12">We hear you</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src="https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/65a8f815ff230bd1f7b1b661_332A3596%20(1).jpg"
              alt="Team collaboration in office"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-gray-700 text-lg leading-relaxed">
              We are always aspiring to be a true people-centric company - to our employees and to our clients. This
              means that when deciding between process fulfilment and people needs, we always try to put people first.
              We firmly believe in openness and constructive feedback, and our organization is structured in a way that
              your voice is always heard.
              <br />
              <br />
              Besides your voices, we like to listen to great music 😁 Check out our Spotify list.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

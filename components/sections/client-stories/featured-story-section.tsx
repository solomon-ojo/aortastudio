export default function FeaturedStorySection() {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-block px-4 py-2 border border-[#00ffcc] rounded-full text-[#00ffcc] text-sm mb-6">
              FEATURED STORY
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Internal software tools for support of internal development process
            </h2>

            <div className="mb-6">
              <div className="text-gray-400 text-sm mb-2">SERVICES:</div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-4 py-2 bg-black border border-white/20 rounded-full text-white text-sm">
                  Building digital products end-to-end
                </span>
                <span className="inline-block px-4 py-2 bg-black border border-white/20 rounded-full text-white text-sm">
                  DevOps and Migrations
                </span>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-gray-400 text-sm mb-2">INDUSTRY:</div>
              <span className="inline-block px-4 py-2 bg-black border border-white/20 rounded-full text-white text-sm">
                Technology
              </span>
            </div>

            <div className="text-white">
              <svg width="24" height="24" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.61892 0.905477L6.32162 1.20277L11.9107 6.79188H0.49468L0.49468 7.20809L11.9107 7.20809L6.32162 12.7972L6.61892 13.0945L12.7134 6.99998L6.61892 0.905477Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <div>
            <img
              src="https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f17af86fbbf271ff8a74b_Unity.jpg"
              alt="Unity case study"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HeroBlurOverlay() {
  return (
    <section className="py-12 bg-yellow-300/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-light text-black mb-6 md:mb-0 md:mr-8 max-w-2xl">
            Curious to explore how we can grow together? Check our open positions.
          </h2>
          <a
            href="#open-positions"
            className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full hover:bg-black/80 transition-colors"
          >
            <span className="mr-2">LOOKING FOR A JOB?</span>
            <svg width="16" height="16" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.61892 0.905477L6.32162 1.20277L11.9107 6.79188H0.49468L0.49468 7.20809L11.9107 7.20809L6.32162 12.7972L6.61892 13.0945L12.7134 6.99998L6.61892 0.905477Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

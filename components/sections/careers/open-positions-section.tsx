interface JobPosition {
  title: string
  link: string
}

export default function OpenPositionsSection() {
  const positions: JobPosition[] = [
    {
      title: "HR Specialist",
      link: "/job-positions/hr-specialist",
    },
    {
      title: "General Application",
      link: "/job-positions/general-application",
    },
    {
      title: "IT Administrator",
      link: "/job-positions/it-administrator",
    },
  ]

  return (
    <section id="open-positions" className="py-20 bg-[#e1eeec]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black mb-16">Open positions</h2>

        <div className="space-y-4">
          {positions.map((position, index) => (
            <div key={index} className="flex items-center justify-between py-6 border-b border-gray-300">
              <h3 className="text-2xl font-medium text-black">{position.title}</h3>
              <a
                href={position.link}
                className="inline-flex items-center bg-transparent border border-black text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-colors"
              >
                <span className="mr-2">APPLY NOW</span>
                <svg width="16" height="16" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.61892 0.905477L6.32162 1.20277L11.9107 6.79188H0.49468L0.49468 7.20809L11.9107 7.20809L6.32162 12.7972L6.61892 13.0945L12.7134 6.99998L6.61892 0.905477Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-light text-black mb-4">Looking for a job?</h2>
          <p className="text-xl text-gray-700 mb-8">Let us know, we'd love to hear from you.</p>
          <a
            href="/general-job-application-form"
            className="inline-flex items-center bg-transparent border border-black text-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition-colors"
          >
            <span className="mr-2">APPLY NOW</span>
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

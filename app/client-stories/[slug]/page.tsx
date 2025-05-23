import ContactFormSection from "@/components/sections/contact-form-section"
import Link from "next/link"

interface ClientStoryDetailProps {
  params: {
    slug: string
  }
}

export default function ClientStoryDetail({ params }: ClientStoryDetailProps) {
  // In a real implementation, you would fetch the client story data based on the slug
  // For now, we'll use a mock data structure based on the slug
  const clientStories = {
    "stats-perform": {
      title: "Who needs excitement that sport brings when you can turn it into numbers",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f18571018f7cc675eb8ed_Stats_Perform.jpg",
      services: ["Custom software development", "Software testing and QA"],
      industry: "Media",
      techStack: "C#, C++, ASP.NET MVC, MSSQL, JavaScript, Jira",
      aboutProject:
        "We built various tools for live sport players tracking for business applications and analytics used by Analysts, Clubs and the Media. We handled the entire development cycle, from design and architecture to implementation and maintenance.",
      aboutClient:
        "Stats Perform is a sports data collection and analytics company with 3,000+ employees. They acquired Prozone, also one of our clients, which performed athlete tracking and analytics for world-leading sports clubs and leagues.",
    },
    unity: {
      title: "Internal software tools for support of internal development process",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f1a85552843810a4dec43_Unity.jpg",
      services: ["Building digital products end-to-end", "DevOps and Migrations"],
      industry: "Technology",
      techStack: "React, Node.js, MongoDB, AWS, Docker",
      aboutProject:
        "We developed internal tools to streamline Unity's development process, improving efficiency and collaboration across teams. Our solutions included automated testing frameworks, deployment pipelines, and developer dashboards.",
      aboutClient:
        "Unity is a leading platform for creating and operating interactive, real-time 3D content. The company's platform provides a comprehensive set of software solutions to create, run, and monetize interactive, real-time 2D and 3D content for mobile phones, tablets, PCs, consoles, and augmented and virtual reality devices.",
    },
    // Add more client stories as needed
  }

  const clientStory = clientStories[params.slug] || clientStories["stats-perform"]

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="section is-template-hero">
        <div className="container mx-auto px-4">
          <div className="py-16">
            <div className="template-hero-img relative h-[60vh] rounded-lg overflow-hidden mb-12">
              <img
                src={clientStory.image || "/placeholder.svg"}
                alt={clientStory.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="template-hero-headline max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-light mb-8">{clientStory.title}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-template-content py-16">
        <div className="container mx-auto px-4">
          <div className="template-story-content grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="temp-tech-info-item">
              <div className="tech-label mb-2">
                <div className="text-sm uppercase text-gray-400">Services</div>
              </div>
              <div className="tech-info-wrap">
                <div className="collection-list">
                  {clientStory.services.map((service, index) => (
                    <div key={index} className="collection-item mb-1">
                      <div className="text-white">{service}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="temp-tech-info-item">
              <div className="tech-label mb-2">
                <div className="text-sm uppercase text-gray-400">Industries</div>
              </div>
              <div className="collection-item">
                <div className="text-white">{clientStory.industry}</div>
              </div>
            </div>
            <div className="temp-tech-info-item">
              <div className="tech-label mb-2">
                <div className="text-sm uppercase text-gray-400">Tech Stack</div>
              </div>
              <div className="tech-info-wrap">
                <div className="text-white">{clientStory.techStack}</div>
              </div>
            </div>
          </div>

          <div className="template-story-content max-w-4xl">
            <div className="template-rich-txt prose prose-lg prose-invert">
              <h2>About Project</h2>
              <p>{clientStory.aboutProject}</p>
              <h2>About Client</h2>
              <p>{clientStory.aboutClient}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-temp-refe-col py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            {clientStory.services.map((service, index) => {
              const slug = service.toLowerCase().replace(/ and /g, "-and-").replace(/\s+/g, "-")
              return (
                <Link
                  key={index}
                  href={`/services/${slug}`}
                  className="px-4 py-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
                >
                  {service}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <ContactFormSection />
    </main>
  )
}

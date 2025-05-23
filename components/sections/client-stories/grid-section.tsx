"use client"
import { useState, useEffect } from "react"

interface ClientStory {
  id: string
  title: string
  image: string
  services: string[]
  industry: string
}

interface GridSectionProps {
  filters?: string[]
}

export default function GridSection({ filters = [] }: GridSectionProps) {
  const [filteredStories, setFilteredStories] = useState<ClientStory[]>([])

  const clientStories: ClientStory[] = [
    {
      id: "coinbase",
      title: "Ensuring Security and Reliability Across Cryptocurrency Applications",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f18081018f7cc675e8e12_Coinbase.jpg",
      services: ["Software testing and QA"],
      industry: "Fintech",
    },
    {
      id: "stats-perform",
      title: "Who needs excitement that sport brings when you can turn it into numbers",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f18571018f7cc675eb8ed_Stats_Perform.jpg",
      services: ["Custom software development", "Software testing and QA"],
      industry: "Media",
    },
    {
      id: "atlas-copco",
      title: "Heavy duty software for heavy duty industrial equipment for reliable and safe manufacturing",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f18a6878c50e34216250a_Atlas_Copco.jpg",
      services: ["Custom software development", "Consulting"],
      industry: "Manufacturing",
    },
    {
      id: "burda",
      title: "Transforming a Legacy Platform for a Seamless Fashion Community Experience",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f18f4e1f5554d59c763a1_Burda.jpg",
      services: ["Building digital products end-to-end"],
      industry: "eCommerce",
    },
    {
      id: "better-collective",
      title: "Developing Web and Mobile Applications for Global Sports Media",
      image:
        "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f190b1fa3bef0fb285a37_Better_Collective.jpg",
      services: ["Custom software development", "Software testing and QA"],
      industry: "Media",
    },
    {
      id: "mifcom",
      title: "Building a Scalable eCommerce Platform for Custom PC Solutions",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f0b60deb5e80fbfc44267_Mifcom.jpg",
      services: ["Custom software development", "DevOps and Migrations"],
      industry: "eCommerce",
    },
    {
      id: "ltse",
      title: "Building a Successful B2B Platform from Scratch to Support Rapid Growth",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f0c2d769318df75d0f64b_LTSE.jpg",
      services: ["Building digital products end-to-end"],
      industry: "Fintech",
    },
    {
      id: "infront",
      title:
        "Centralizing and Enhancing Real-Time Data Systems for one of Europe's leading providers of market data and software",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f0cdb4734e78e7bb39019_Infront.jpg",
      services: ["Custom software development", "DevOps and Migrations"],
      industry: "Fintech",
    },
    {
      id: "fairlo",
      title: "Development for an automated and easy to use finance platform",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f1a85552843810a4dec42_Fairlo.jpg",
      services: ["Building digital products end-to-end"],
      industry: "Fintech",
    },
    {
      id: "unity",
      title: "Internal software tools for support of internal development process",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f1a85552843810a4dec43_Unity.jpg",
      services: ["Building digital products end-to-end", "DevOps and Migrations"],
      industry: "Technology",
    },
    {
      id: "forsta",
      title: "Enhancing Customer Experience Through Advanced Survey Analytics",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f1a85552843810a4dec44_Forsta.jpg",
      services: ["Custom software development", "Software testing and QA"],
      industry: "Technology",
    },
    {
      id: "big-health",
      title: "Developing Digital Therapeutics for Mental Health Conditions",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f1a85552843810a4dec45_BigHealth.jpg",
      services: ["Custom software development", "Software testing and QA"],
      industry: "Healthcare",
    },
    {
      id: "leybold",
      title: "Modernizing Industrial Equipment Monitoring Systems",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f1a85552843810a4dec46_Leybold.jpg",
      services: ["Custom software development", "DevOps and Migrations"],
      industry: "Manufacturing",
    },
    {
      id: "piper",
      title: "Building a Secure Financial Trading Platform",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f1a85552843810a4dec47_Piper.jpg",
      services: ["Custom software development", "Software testing and QA"],
      industry: "Fintech",
    },
    {
      id: "supstat",
      title: "Developing Advanced Analytics Solutions for Data Scientists",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f1a85552843810a4dec48_Supstat.jpg",
      services: ["Custom software development", "Consulting"],
      industry: "Technology",
    },
    {
      id: "toolchain",
      title: "Streamlining Development Workflows with Integrated Tools",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f1a85552843810a4dec49_Toolchain.jpg",
      services: ["DevOps and Migrations", "Consulting"],
      industry: "Technology",
    },
    {
      id: "sarens",
      title: "Optimizing Heavy Lifting Operations with Custom Software",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f1a85552843810a4dec50_Sarens.jpg",
      services: ["Custom software development"],
      industry: "Manufacturing",
    },
    {
      id: "navdy",
      title: "Creating an Innovative Heads-Up Display for Automotive",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f1a85552843810a4dec51_Navdy.jpg",
      services: ["Custom software development", "Building digital products end-to-end"],
      industry: "Automotive",
    },
    {
      id: "one-drop",
      title: "Developing a Comprehensive Diabetes Management Platform",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f1a85552843810a4dec52_OneDrop.jpg",
      services: ["Custom software development", "Building digital products end-to-end"],
      industry: "Healthcare",
    },
    {
      id: "block-party",
      title: "Building Social Media Safety Tools to Combat Online Harassment",
      image: "https://cdn.prod.website-files.com/64fc70dc7492160ad5cb067b/655f1a85552843810a4dec53_BlockParty.jpg",
      services: ["Custom software development", "Building digital products end-to-end"],
      industry: "Technology",
    },
  ]

  useEffect(() => {
    if (filters.length === 0) {
      setFilteredStories(clientStories)
    } else {
      const filtered = clientStories.filter((story) => {
        const matchesService = story.services.some((service) => filters.includes(service))
        const matchesIndustry = filters.includes(story.industry)
        return matchesService || matchesIndustry
      })
      setFilteredStories(filtered)
    }
  }, [filters])

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStories.map((story) => (
          <a key={story.id} href={`/client-stories/${story.id}`} className="block group">
            <div className="aspect-video mb-4 overflow-hidden rounded-lg">
              <img
                src={story.image || "/placeholder.svg"}
                alt={story.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex items-start justify-between">
              <h3 className="text-white text-xl font-medium leading-tight flex-1 mr-4 group-hover:text-[#00ffcc] transition-colors">
                {story.title}
              </h3>
              <svg
                width="24"
                height="24"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 text-white group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M6.61892 0.905477L6.32162 1.20277L11.9107 6.79188H0.49468L0.49468 7.20809L11.9107 7.20809L6.32162 12.7972L6.61892 13.0945L12.7134 6.99998L6.61892 0.905477Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

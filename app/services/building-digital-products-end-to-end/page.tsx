"use client"
import HowWeWorkSection from "@/components/sections/how-we-work-section"
import OurProcessSection from "@/components/sections/our-process-section"
import ClientStoriesSection from "@/components/sections/client-stories-section"

import { useState } from "react"
import {
  Plus,
  Settings,
  Code,
  Database,
  Monitor,
  Cloud,
  GitBranch,
  Play,
  MessageSquare,
  Zap,
  Globe,
  Brain,
  Cpu,
  MessageCircle,
  Video,
  Users,
} from "lucide-react"
import PageWrapper from "@/components/ui/page-wrapper"
import ContactFormSection from "@/components/sections/contact-form-section"

export default function CustomSoftwareDevelopmentPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)
  const [isWhySectionExpanded, setIsWhySectionExpanded] = useState(false)

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  const services = [
    {
      title: "Conceptualization & Prototyping",
      icon: Globe,
      description:
        "We kick off with conceptualisation as a creative phase, aligning ideas with your needs and project goals. Then, we dive into prototyping, bringing these concepts to life with visual and interactive models, offering a sneak peek of the final product. Finally, we identify the optimal product plan, ensuring we deliver real value at launch.",
    },
    {
      title: "Product & Solution Design",
      icon: Brain,
      description:
        "Our team helps you by integrating  years of expertise and a proven processes to materialise tangible products. Key decisions, including architecture and user experience (UX), are based by your users' tasks, roles, functions, technology requirements, demographics, and other crucial factors.",
    },
    {
      title: "MVP Development",
      icon: Cpu,
      description:
        "From concept to the first prototype, we provides guidance, helping identify business needs by uncovering the problems your product addresses and establishing long-term goals through market research. Utilising effective prototyping techniques, we optimise your business processes, paving the way for the development and launch of your MVP, fast.",
    },
    {
      title: "Agile Software Development",
      icon: MessageCircle,
      description:
        "We think beyond the boundaries of ordinary requirements to help you create highly configurable and optimised software solutions, no matter where you are on your development  journey. By building industry-specific custom software solutions, we will help you enhance your business competency and bring customer satisfaction to a higher level.",
    },
    {
      title: "Software Deployment",
      icon: Video,
      description:
        "From the planning stage to the actual rollout, we've got you covered. Using straightforward and effective methods, we make sure your software is up and running smoothly. With our deployment services, it's not just about launching software – it's about making the entire process easy and efficient for you.",
    },
    {
      title: "Maintenance",
      icon: Users,
      description:
        "Whether it's updates, bug fixes, or optimizations, we handle the nitty-gritty details so you can focus on what you do best. Using straightforward and effective methods, we ensure your software remains reliable and up-to-date.",
    },
  ]

  return (
    <PageWrapper>
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="bg-black h-[500px] relative overflow-hidden">
      <div className="container mx-auto px-6 pt-20 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Services label */}
          <div className="text-sm uppercase tracking-widest mb-8 text-white/60 font-medium">
            SERVICES
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative">
            {/* Left column - Title */}
            <div className="relative z-10">
              <h1 className="text-6xl lg:text-7xl font-light leading-[0.85] text-white font-serif">
              Building digital
              products end-to-end
              </h1>
            </div>
            
            {/* Right column - Description and Yellow Design */}
            <div className="relative">
              <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-lg relative z-10 bg-black/50 p-4">
              Creating digital products from start to finish is like bringing ideas to life! We kick off by understanding your needs, 
              then use advanced tech to build a user-friendly product. 
              Testing and refining are our secrets for making sure it's top-notch. 
              The end result? A fantastic digital product ready to shine in the market!
              </p>
              
              {/* Yellow geometric pattern - exactly as shown in images */}
              <div className="absolute top-70 right-0 w-[500px] h-[200px]">
                {/* Main yellow background with precise rectangular pattern */}
                <div className="w-full h-full bg-yellow-400 relative">
                  
                  {/* Top row - alternating black rectangles creating house-like shapes */}
                  <div className="absolute top-0 left-0 w-24 h-16 bg-black"></div>
                  <div className="absolute top-0 left-32 w-24 h-16 bg-black"></div>
                  <div className="absolute top-0 right-32 w-24 h-16 bg-black"></div>
                  <div className="absolute top-0 right-0 w-24 h-16 bg-black"></div>
                  
                  {/* Bottom row - matching pattern */}
                  <div className="absolute bottom-0 left-0 w-24 h-16 bg-black"></div>
                  <div className="absolute bottom-0 left-32 w-24 h-16 bg-black"></div>
                  <div className="absolute bottom-0 right-32 w-24 h-16 bg-black"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-16 bg-black"></div>
                  
                  {/* Center colored rectangles overlaying the pattern */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-6">
                    <div className="w-20 h-12 bg-gray-500"></div>
                    <div className="w-20 h-12 bg-teal-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

        {/* Services List Section */}
        <section className="section py-16 bg-white text-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-6xl font-light mb-4">
                Your digital dream: From idea to reality
                </h2>
              </div>

              <div className="space-y-6">
                {services.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div
                        className="p-6 flex justify-between items-center cursor-pointer"
                        onClick={() => toggleAccordion(index)}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-gray-700" />
                          <h3 className="text-xl font-medium">{service.title}</h3>
                        </div>
                        <Plus
                          className={`w-5 h-5 transition-transform ${openAccordion === index ? "rotate-45" : ""}`}
                        />
                      </div>
                      {openAccordion === index && (
                        <div className="p-6 pt-0 border-t border-gray-100">
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* General Capabilities Section */}
        <section className="section py-16 bg-white text-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-6xl font-light mb-4">General Capabilities</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* General */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <Settings className="w-4 h-4 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-medium">General</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Web applications</li>
                    <li>• Real-time communication systems</li>
                    <li>• Video streaming</li>
                    <li>• Legacy systems reengineering</li>
                    <li>• IoT/embedded development</li>
                    <li>• Mobile applications</li>
                    <li>• Machine learning</li>
                    <li>• CMS customization</li>
                  </ul>
                </div>

                {/* Programming Languages */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <Code className="w-4 h-4 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-medium">Programming Languages</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• JavaScript (Node, React, Angular, Vue)</li>
                    <li>• TypeScript</li>
                    <li>• C#</li>
                    <li>• Java (Spring, Hibernate), Kotlin</li>
                    <li>• C/C++</li>
                    <li>• PHP (Laravel, Symphony)</li>
                    <li>• Python (Django, Flask)</li>
                    <li>• Ruby</li>
                    <li>• Swift/Objective-C</li>
                  </ul>
                </div>

                {/* Databases */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <Database className="w-4 h-4 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-medium">Databases</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• PostgreSQL</li>
                    <li>• MariaDB/MySQL</li>
                    <li>• Microsoft SQL Server</li>
                    <li>• Elasticsearch</li>
                    <li>• MongoDB</li>
                    <li>• Redis</li>
                  </ul>
                </div>

                {/* Operating Systems */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <Monitor className="w-4 h-4 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-medium">Operating Systems</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• GNU/Linux</li>
                    <li>• Microsoft Windows</li>
                    <li>• iOS</li>
                    <li>• Android</li>
                  </ul>
                </div>

                {/* Cloud */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <Cloud className="w-4 h-4 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-medium">Cloud</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• AWS</li>
                    <li>• Azure</li>
                    <li>• GCP</li>
                    <li>• Heroku</li>
                  </ul>
                </div>

                {/* DevOps */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <GitBranch className="w-4 h-4 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-medium">DevOps</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Ansible</li>
                    <li>• Docker</li>
                    <li>• Kubernetes</li>
                    <li>• Terraform</li>
                    <li>• Jenkins</li>
                  </ul>
                </div>

                {/* Streaming */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <Play className="w-4 h-4 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-medium">Streaming</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Wowza</li>
                    <li>• Nginx</li>
                    <li>• Janus</li>
                    <li>• FFmpeg</li>
                  </ul>
                </div>

                {/* Messaging */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-medium">Messaging</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• AMQP (RabbitMQ)</li>
                    <li>• MQTT</li>
                  </ul>
                </div>

                {/* Methodologies */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <Zap className="w-4 h-4 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-medium">Methodologies</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Agile</li>
                    <li>• Scrum</li>
                    <li>• Continuous Integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Our Services Section */}
        <section className="section py-16 bg-gray-50 text-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-light mb-6">Why Our MVP Development Services?</h2>
              <div className="prose prose-lg">
                <p className="text-3xl">
                At Itekako, we specialize in delivering end-to-end digital product development that transforms your ideas into real, functional products.
                </p>
                
                {/* Read More / Close Toggle */}
                <div className="mt-6">
                  <button 
                    onClick={() => setIsWhySectionExpanded(!isWhySectionExpanded)}
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                  >
                    {isWhySectionExpanded ? 'Close' : 'Read More'}
                  </button>
                </div>

                {/* Expandable Content */}
                {isWhySectionExpanded && (
                  <div className="mt-6 transition-all duration-300 ease-in-out">
                    <p className="text-xl">
                    We're ready to build a minimum viable product (MVP) for you, which will let you test the idea and adjust the app to the expectations of the end users. Don't overinvest in projects you're not 100% sure of; instead, test them with our MVP development services.

We're focused on delivering a minimum viable product that's designed to solve your users' pain points while also providing enough value to attract early adopters. We understand the importance of getting your product to market quickly and efficiently. This is why we prepare MVPs that arescalable, adaptable, and built for future growth. But, we're not just your developers—we share our experience with you, providing you with our knowledge and helping you choose the best direction for the development of your software.

From conceptualization and prototyping to deployment and beyond, we provide comprehensive support throughout the entire product lifecycle. We understand that consistency is key to building digital products that resonate with your target audience, so we provide you with comprehensive services that can ensure it.

With Itekako, you don't just get a service provider—you get a partner who is dedicated to bringing your product vision to life. Let's work together to build a product that delivers real value and sets the stage for long-term success. Explore our MVP development services today and take the first step toward your digital product's success!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <ClientStoriesSection />

         {/* How We Work Section */}
        <HowWeWorkSection />

        {/* Our Process Section */}
        <OurProcessSection />

        <ContactFormSection />
      </main>
    </PageWrapper>
  )
}
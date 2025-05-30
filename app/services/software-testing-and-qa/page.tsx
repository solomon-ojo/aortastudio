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
      title: "Automated Testing",
      icon: Globe,
      description:
        "Our test automation knowledge and the use of next-gen automation technologies will significantly reduce testing time and help you accelerate the delivery of your product of first-class quality.",
    },
    {
      title: "Manual Testing",
      icon: Brain,
      description:
        "With our extensive experience in delivering top-notch testing solutions across industries, our human touch in software testing will help us detect existing defects, find solutions and provide a high level of product quality before end-users experience them.",
    },
    {
      title: "Performance Testing",
      icon: Cpu,
      description:
        "We can help you find performance issues, deliver practical recommendations on how to improve performance of your app and determine its scalability, stability and performance under load. This way we ensure high responsiveness and scalability of your software.",
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
              Software testing and QA
              </h1>
            </div>
            
            {/* Right column - Description and Yellow Design */}
            <div className="relative">
              <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-lg relative z-10 bg-black/50 p-4">
              We think beyond the boundaries of ordinary requirements to help you create highly configurable and optimised software solutions, 
              no matter where you are on your digital transformation journey.
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
                Let your software live its best life. Bug-free
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
              <h2 className="text-5xl font-light mb-6">Why Our QA and Software Testing Services?</h2>
              <div className="prose prose-lg">
                <p className="text-3xl">
                Flawless software doesn’t happen by chance. It’s the result of rigorous testing and expert attention to detail.
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
                    Our QA software testing services are designed to ensure your product is stable, scalable, and ready for real-world challenges. Whether you’re launching a web app, mobile app, or enterprise solution, we’re here to make sure it performs exactly as intended.

We know how to deliver comprehensive software testing and QA solutions that cover every stage of the development lifecycle. From functional testing to usability and security checks, our end-to-end testing services leave no stone unturned. We combine advanced automation tools with hands-on expertise to catch issues early, saving you time, money, and headaches down the line.

Our web application performance testing services are perfect for apps that need to handle high traffic and demanding workloads. We’ll identify performance bottlenecks, evaluate scalability, and provide practical recommendations to ensure your software remains responsive, even under heavy load. With our thorough software testing QA process, you can confidently deliver a product that meets and exceeds user expectations.

At Itekako, we believe in making the testing process as smooth and transparent as possible. We work closely with you to understand your unique requirements and tailor our solutions to fit your goals. With years of experience across industries, our team is equipped to handle the most complex projects with ease and precision.

Explore our QA software testing and performance optimization services today. Together, we’ll turn your software into a powerful, reliable product that stands out in a competitive market. Let’s make quality your competitive edge.</p>
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
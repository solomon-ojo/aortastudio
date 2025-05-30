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
      title: "Software Requirements Specification",
      icon: Globe,
      description:
        "We get it—starting a new software project can feel overwhelming. That’s where our software consulting company steps in! With our years of experience in software development consulting services, we’ll help you create a solid Software Requirements Specification (SRS) from the ground up. Think of it as the blueprint for your software. It outlines what it should do, how it should perform, and the features it needs to meet your goals. SRS is the perfect starting point to keep everyone aligned and set your project up for success.",
    },
    {
      title: "Digital Transformation with Expert Software Consultants",
      icon: Brain,
      description:
        "Navigating the digital world can be tricky. Luckily, we’ve got your back. Our software consulting services focus on helping you modernize and streamline your processes, operations, and customer experiences using the latest technologies.We will guide you through the maze of digital transformation and ensure your business stays competitive and ready for the future. Together, we’ll turn your vision into real, sustainable growth.",
    },
    {
      title: "Technical Due Diligence By Top Software Consulting Experts",
      icon: Cpu,
      description:
        "When it comes to your software, you need to know it’s rock solid. That’s why our software development consulting services focus on assessing your architecture, code quality, infrastructure, and security. You’ll be provided with clear, actionable insights that will help you make smart decisions and ensure your technology aligns with your business goals. Whether you’re mitigating risks or exploring opportunities, we’re here to help you build a strong foundation for long-term success.",
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
              Expert IT Consulting
              </h1>
            </div>
            
            {/* Right column - Description and Yellow Design */}
            <div className="relative">
              <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-lg relative z-10 bg-black/50 p-4">
              From requirement analysis, code review, and quality insurance, to implementation support and best practices - we've got you covered. 
              Our seasoned team of technology consultants can help you to enhance the efficiency, effectiveness, and success of your software project.
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
                No matter how big or small your project is, we've got you covered along the way.
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
              <h2 className="text-5xl font-light mb-6">Why Our IT Consulting Services?</h2>
              <div className="prose prose-lg">
                <p className="text-3xl">
                At Itekako, we specialize in providing IT consulting services tailored to meet your unique business needs.
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
                    As an experienced software consulting company, we understand that every project is different, and we are here to help you navigate the complexities of technology with confidence. From startups to established enterprises, our team of seasoned software consultants is dedicated to delivering innovative solutions that drive success.

Our consulting services are designed to address every stage of your project’s lifecycle. Whether you’re just starting out or looking to optimize an existing system, we offer a comprehensive range of software development consulting services to ensure your goals are met with precision. We’ll work with you to identify challenges, develop strategies, and implement technologies that align perfectly with your vision.

What sets us apart is our hands-on, collaborative approach. At Itekako, we believe that successful projects are built on clear communication and a deep understanding of your needs. Our consultants will assess your current infrastructure, provide actionable insights, and help you create a roadmap to achieve sustainable growth. Whether you’re building new software, improving your processes, or embracing digital transformation, we’re here to guide you every step of the way.

Explore how our software consulting services can transform your business. Together, let’s turn challenges into opportunities and build the future you envision.

Let us know how we can help—your success story starts here.</p>
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
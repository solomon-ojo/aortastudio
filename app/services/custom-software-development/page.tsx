"use client"

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
  

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  const services = [
    {
      title: "Front-end and back-end development",
      icon: Globe,
      description:
        "We provide comprehensive web development services, covering both frontend and backend. Our skilled teams leverages popular frontend frameworks like React.js, Vue.js, and Angular to craft the user interface of your product. On the backend, we employ server-side technologies such as Python, Ruby on Rails, and Node.js, ensuring the development of fast and scalable solutions.",
    },
    {
      title: "AI and Machine learning",
      icon: Brain,
      description:
        "Unlock the power of artificial intelligence solutions to address business challenges, automate tasks, and enhance customer service. These AI-driven solutions are flexible and scalable, aligning with the needs of businesses, whether small or large, in the ever-changing digital landscape.",
    },
    {
      title: "IoT and Embedded software",
      icon: Cpu,
      description:
        "Using state-of-the-art tools and standards, we launch IoT firmware for various platforms and embedded apps for IoT devices. We keep your IoT devices up-to-date, scalable and secure by offering regular updates and OTA (over-the-air) development.",
    },
    {
      title: "Real-time communication",
      icon: MessageCircle,
      description:
        "We develop innovative real-time communication applications that make file-sharing, analytics, video calls and long-distance conferences easy, more efficient, secure and accessible.",
    },
    {
      title: "Video-streaming solutions",
      icon: Video,
      description:
        "Our team of highly skilled experts help media companies build premium video streaming apps to power digital video businesses from content management to end-user experience and enable a completely new experience of having video streaming support multiple live events for a large number of users.",
    },
    {
      title: "Product management",
      icon: Users,
      description:
        "Our dedicated product managers are the driving force behind our software development projects. They excel in communication and are adept at bringing together the diverse goals of various stakeholders, whether we're crafting a simple app or embarking on a major enterprise initiative.",
    },
  ]

  return (
    <PageWrapper>
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="bg-black h-[600px] relative overflow-hidden">
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
                Custom software development
              </h1>
            </div>
            
            {/* Right column - Description and Yellow Design */}
            <div className="relative">
              <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-lg relative z-10 bg-black/50 p-4">
                It all begins with an idea to tackle a business problem and ends with a fully 
                functional solution that adds real value to your operations. From Fortune 500 to 
                startups, companies trust our teams to create custom software solutions and 
                the infrastructure that powers them.
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
                  Navigating the Software Development Journey: From Idea to Implementation
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
              <h2 className="text-3xl font-light mb-6">Why Our Custom Software Development Services?</h2>
              <div className="prose prose-lg">
                <p>
                  At Itekako, we believe that great software starts with understanding your unique business needs.
                  That's why our core is communication—we focus on understanding you, the role of your software from a
                  broader perspective, and your expectations before we get down to development work.
                </p>
                <p>
                  This way, we are capable of providing you with truly customized software development services, where
                  each element of your app is carefully thought through based on your organization's goals and your
                  clients' expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactFormSection />
      </main>
    </PageWrapper>
  )
}

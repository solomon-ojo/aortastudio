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
      title: "Assessment",
      icon: Globe,
      description:
        "We analyze the current state of DevOps processes, application lifecycle capabilities and IT infrastructure to develop a roadmap for integrating stronger security mechanisms, revamping processes and automating deployment lifecycle across your delivery infrastructure.",
    },
    {
      title: "Automation",
      icon: Brain,
      description:
        "We automate end to end delivery cycles to minimize human intervention and reduce the number of steps and ensure that your deployments and rollbacks are performed efficiently while increasing productivity and mitigating risks.",
    },
    {
      title: "Security Management",
      icon: Cpu,
      description:
        "Itekako focuses on integrating strong security practices and principles at the earliest stages of software development. By carrying out compliance processes and automated security testing through tools, we ensure seamless process integration, better security and compliance.",
    },
    {
      title: "Migrations to Cloud",
      icon: MessageCircle,
      description:
        "Our DevOps team of experts will learn all the requirements of the applications that are migrating from one form to another and set up orchestration and monitoring so that scaling is successful. This way we will help make your apps more cloud-aware and resilient.",
    },
    {
      title: "Managed Services",
      icon: Video,
      description:
        "We assist your core team in eliminating many critical problems and maintaining a healthy workflow. By implementing and running the tools necessary for supporting continuous delivery and DevOps and enhancing processes we help you improve your operations."
    },
    {
      title: "Penetration Testing",
      icon: Users,
      description:
        "Penetration testing is an essential aspect of ensuring the security of your software. Incorporated in DevOps, it catches vulnerabilities early on, when they're easier and cheaper to fix.",
    },
  ]

  return (
    <PageWrapper>
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="bg-black h-[600px] relative overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://cdn.jsdelivr.net/gh/MarkoGole/itekako-ai/AI-01.1.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
      
      {/* Content positioned at bottom with glassmorphism */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <div className="container mx-auto px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            {/* Glassmorphism container */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
              {/* Services label */}
              <div className="text-sm uppercase tracking-widest mb-6 text-white/80 font-medium">
                SERVICES
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Left column - Title */}
                <div>
                  <h1 className="text-5xl lg:text-6xl font-light leading-[0.9] text-white font-serif">
                  DevOps and
                  Migrations
                  </h1>
                </div>
                
                {/* Right column - Description */}
                <div>
                  <p className="text-lg text-white/90 leading-relaxed max-w-lg">
                  We think beyond the boundaries of ordinary requirements to help you create highly configurable and optimized software solutions, 
                  no matter where you are on your digital transformation journey.
                  </p>
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
                From assessments and consulting to actual implementations, we architect the infrastructure in the most robust way.
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
              <h2 className="text-5xl font-light mb-6">Why Our DevOps Automation Services?</h2>
              <div className="prose prose-lg">
                <p className="text-3xl">
                Want to simplify and optimize the way your software is built, deployed, and managed?
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
                    As an experienced DevOps services company, we specialize in helping businesses like yours transform their operations with expert DevOps consulting services and tailored solutions. Whether you’re looking to automate processes, enhance security, or migrate applications, Itekako has you covered.

Our DevOps automation services focus on streamlining your delivery cycles to minimize manual intervention and eliminate inefficiencies. By automating deployments and rollbacks, we help your team move faster while maintaining top-tier reliability and security. With our support, you’ll experience fewer bottlenecks, improved workflows, and a more productive team.

Scaling and migrating applications can be complex, but we can help you simplify it. With our advanced cloud optimization services, you’ll make your applications more resilient, scalable, and ready for the demands of modern infrastructure. From orchestration to monitoring, we’ll ensure every aspect of your migration runs smoothly so your apps perform at their best in any environment.

Security is another cornerstone of our DevOps service offerings. We integrate effective and proven security practices from day one, incorporating compliance processes and automated testing tools to catch vulnerabilities early. This proactive approach keeps your systems secure while minimizing costly delays.

At Itekako, we also provide ongoing DevOps support services to ensure your systems run smoothly even after implementation. We’re not just a service provider. We are a partner dedicated to helping you achieve operational excellence.

Explore our full range of DevOps consulting and migration services and discover how we can empower your business. Let’s work together to build a more efficient, scalable, and secure future for your software.
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
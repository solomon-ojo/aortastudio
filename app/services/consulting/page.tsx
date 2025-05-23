import PageWrapper from "@/components/ui/page-wrapper"
import ContactFormSection from "@/components/sections/contact-form-section"

export default function ConsultingPage() {
  return (
    <PageWrapper>
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="section is-services-hero pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto py-16">
              <div className="mb-8">
                <div className="text-sm uppercase mb-4 text-white/70">SERVICES</div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h1 className="text-5xl md:text-6xl font-light mb-6 text-white">Expert IT Consulting</h1>
                  </div>
                  <div>
                    <p className="text-lg text-white/80">
                      From requirement analysis, code review, and quality insurance, to implementation support and best
                      practices - we've got you covered. Our seasoned team of technology consultants can help you to
                      enhance the efficiency, effectiveness, and success of your software project.
                    </p>
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
                <h2 className="text-4xl font-light mb-4">
                  No matter how big or small your project is, we've got you covered along the way.
                </h2>
              </div>

              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3">Software Requirements Specification</h3>
                  <p className="text-gray-600">
                    We get it—starting a new software project can feel overwhelming. That's where our software
                    consulting company steps in! With our years of experience in software development consulting
                    services, we'll help you create a solid Software Requirements Specification (SRS) from the ground
                    up.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3">Digital Transformation with Expert Software Consultants</h3>
                  <p className="text-gray-600">
                    Navigating the digital world can be tricky. Luckily, we've got your back. Our software consulting
                    services focus on helping you modernize and streamline your processes, operations, and customer
                    experiences using the latest technologies.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3">
                    Technical Due Diligence by Top Software Consulting Experts
                  </h3>
                  <p className="text-gray-600">
                    When it comes to your software, you need to know it's rock solid. That's why our software
                    development consulting services focus on assessing your architecture, code quality, infrastructure,
                    and security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Our Services Section */}
        <section className="section py-16 bg-gray-50 text-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-light mb-6">Why Our IT Consulting Services?</h2>
              <div className="prose prose-lg">
                <p>
                  At Itekako, we specialize in providing IT consulting services tailored to meet your unique business
                  needs. As an experienced software consulting company, we understand that every project is different,
                  and we are here to help you navigate the complexities of technology with confidence.
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

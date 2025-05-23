import PageWrapper from "@/components/ui/page-wrapper"
import ContactFormSection from "@/components/sections/contact-form-section"

export default function SoftwareTestingPage() {
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
                    <h1 className="text-5xl md:text-6xl font-light mb-6 text-white">
                      Software testing
                      <br />
                      and QA
                    </h1>
                  </div>
                  <div>
                    <p className="text-lg text-white/80">
                      We think beyond the boundaries of ordinary requirements to help you create highly configurable and
                      optimised software solutions, no matter where you are on your digital transformation journey.
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
                <h2 className="text-4xl font-light mb-4">Let your software live its best life. Bug-free</h2>
              </div>

              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3">Automated Testing</h3>
                  <p className="text-gray-600">
                    Our test automation knowledge and the use of next-gen automation technologies will significantly
                    reduce testing time and help you accelerate the delivery of your product of first-class quality.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3">Manual Testing</h3>
                  <p className="text-gray-600">
                    With our extensive experience in delivering top-notch testing solutions across industries, our human
                    touch in software testing will help us detect existing defects, find solutions and provide a high
                    level of product quality.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3">Performance Testing</h3>
                  <p className="text-gray-600">
                    We can help you find performance issues, deliver practical recommendations on how to improve
                    performance of your app and determine its scalability, stability and performance under load.
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
              <h2 className="text-3xl font-light mb-6">Why Our QA and Software Testing Services?</h2>
              <div className="prose prose-lg">
                <p>
                  Flawless software doesn't happen by chance. It's the result of rigorous testing and expert attention
                  to detail. Our QA software testing services are designed to ensure your product is stable, scalable,
                  and ready for real-world challenges.
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

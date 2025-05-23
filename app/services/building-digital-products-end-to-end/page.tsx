import PageWrapper from "@/components/ui/page-wrapper"
import ContactFormSection from "@/components/sections/contact-form-section"

export default function DigitalProductsPage() {
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
                      Building digital
                      <br />
                      products end-to-end
                    </h1>
                  </div>
                  <div>
                    <p className="text-lg text-white/80">
                      Creating digital products from start to finish is like bringing ideas to life! We kick off by
                      understanding your needs, then use advanced tech to build a user-friendly product. Testing and
                      refining are our secrets for making sure it's top-notch.
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
                <h2 className="text-4xl font-light mb-4">Your digital dream: From idea to reality</h2>
              </div>

              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3">Conceptualization & Prototyping</h3>
                  <p className="text-gray-600">
                    We kick off with conceptualisation as a creative phase, aligning ideas with your needs and project
                    goals. Then, we dive into prototyping, bringing these concepts to life with visual and interactive
                    models.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3">Product & Solution design</h3>
                  <p className="text-gray-600">
                    Our team helps you by integrating years of expertise and a proven processes to materialise tangible
                    products. Key decisions, including architecture and user experience (UX), are based by your users'
                    tasks, roles, functions, and technology requirements.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3">MVP development</h3>
                  <p className="text-gray-600">
                    From concept to the first prototype, we provides guidance, helping identify business needs by
                    uncovering the problems your product addresses and establishing long-term goals through market
                    research.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3">Agile Software development</h3>
                  <p className="text-gray-600">
                    We think beyond the boundaries of ordinary requirements to help you create highly configurable and
                    optimised software solutions, no matter where you are on your development journey.
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
              <h2 className="text-3xl font-light mb-6">Why Our MVP Development Services?</h2>
              <div className="prose prose-lg">
                <p>
                  At Itekako, we specialize in delivering end-to-end digital product development that transforms your
                  ideas into real, functional products. We're ready to build a minimum viable product (MVP) for you,
                  which will let you test the idea and adjust the app to the expectations of the end users.
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

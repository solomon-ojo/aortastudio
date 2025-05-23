import PageWrapper from "@/components/ui/page-wrapper"
import ContactFormSection from "@/components/sections/contact-form-section"

export default function DevOpsPage() {
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
                      DevOps and
                      <br />
                      Migrations
                    </h1>
                  </div>
                  <div>
                    <p className="text-lg text-white/80">
                      We think beyond the boundaries of ordinary requirements to help you create highly configurable and
                      optimized software solutions, no matter where you are on your digital transformation journey.
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
                  From assessments and consulting to actual implementations, we architect the infrastructure in the most
                  robust way.
                </h2>
              </div>

              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3">Assessment</h3>
                  <p className="text-gray-600">
                    We analyze the current state of DevOps processes, application lifecycle capabilities and IT
                    infrastructure to develop a roadmap for integrating stronger security mechanisms, revamping
                    processes and automating deployment lifecycle.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3">Automation</h3>
                  <p className="text-gray-600">
                    We automate end to end delivery cycles to minimize human intervention and reduce the number of steps
                    and ensure that your deployments and rollbacks are performed efficiently while increasing
                    productivity.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3">Security Management</h3>
                  <p className="text-gray-600">
                    Itekako focuses on integrating strong security practices and principles at the earliest stages of
                    software development. By carrying out compliance processes and automated security testing through
                    tools, we ensure seamless process integration.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3">Migrations to Cloud</h3>
                  <p className="text-gray-600">
                    Our DevOps team of experts will learn all the requirements of the applications that are migrating
                    from one form to another and set up orchestration and monitoring so that scaling is successful.
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
              <h2 className="text-3xl font-light mb-6">Why Our DevOps Automation Services?</h2>
              <div className="prose prose-lg">
                <p>
                  Want to simplify and optimize the way your software is built, deployed, and managed? As an experienced
                  DevOps services company, we specialize in helping businesses like yours transform their operations
                  with expert DevOps consulting services and tailored solutions.
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

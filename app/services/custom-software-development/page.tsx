import PageWrapper from "@/components/ui/page-wrapper"
import ContactFormSection from "@/components/sections/contact-form-section"

export default function CustomSoftwareDevelopmentPage() {
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
                      Custom software
                      <br />
                      development
                    </h1>
                  </div>
                  <div>
                    <p className="text-lg text-white/80">
                      It all begins with an idea to tackle a business problem and ends with a fully functional solution
                      that adds real value to your operations. From Fortune 500 to startups, companies trust our teams
                      to create custom software solutions and the infrastructure that powers them.
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
                  Navigating the Software Development Journey: From Idea to Implementation
                </h2>
              </div>

              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3">Front-end and back-end development</h3>
                  <p className="text-gray-600">
                    We provide comprehensive web development services, covering both frontend and backend. Our skilled
                    teams leverages popular frontend frameworks like React.js, Vue.js, and Angular to craft the user
                    interface of your product. On the backend, we employ server-side technologies such as Python, Ruby
                    on Rails, and Node.js, ensuring the development of fast and scalable solutions.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3">AI and Machine learning</h3>
                  <p className="text-gray-600">
                    Unlock the power of artificial intelligence solutions to address business challenges, automate
                    tasks, and enhance customer service. These AI-driven solutions are flexible and scalable, aligning
                    with the needs of businesses, whether small or large, in the ever-changing digital landscape.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3">IoT and Embedded software</h3>
                  <p className="text-gray-600">
                    Using state-of-the-art tools and standards, we launch IoT firmware for various platforms and
                    embedded apps for IoT devices. We keep your IoT devices up-to-date, scalable and secure by offering
                    regular updates and OTA (over-the-air) development.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3">Real-time communication</h3>
                  <p className="text-gray-600">
                    We develop innovative real-time communication applications that make file-sharing, analytics, video
                    calls and long-distance conferences easy, more efficient, secure and accessible.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3">Video-streaming solutions</h3>
                  <p className="text-gray-600">
                    Our team of highly skilled experts help media companies build premium video streaming apps to power
                    digital video businesses from content management to end-user experience and enable a completely new
                    experience of having video streaming support multiple live events for a large number of users.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3">Product management</h3>
                  <p className="text-gray-600">
                    Our dedicated product managers are the driving force behind our software development projects. They
                    excel in communication and are adept at bringing together the diverse goals of various stakeholders,
                    whether we're crafting a simple app or embarking on a major enterprise initiative.
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

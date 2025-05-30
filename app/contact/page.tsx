import PageWrapper from "@/components/ui/page-wrapper"

export default function ContactPage() {
  return (
    <PageWrapper>
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section with Content and Images */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Text */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                  Want to build a cool product?
                  <br />
                  Let us help!
                </h1>
              </div>

              {/* Right side - Image Gallery */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="aspect-[3/4] rounded-lg overflow-hidden">
                      <img
                        src="https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/6582d20716fd30ad8a417fd3_Contact%20Image%201.jpg"
                        alt="Girl looking from the terrace on the city"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="aspect-[3/4] rounded-lg overflow-hidden">
                      <img
                        src="https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/6582d2071cb4ac0fb273dc9d_Contact%20Image%202.jpg"
                        alt="View on hotel Moscow in Belgrade"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src="https://cdn.prod.website-files.com/64f1d2353c80a2c0780949bc/6582d207c8e2a3122f7994f5_Contact%20Grpahic.svg"
                        alt="Contact graphic"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-light mb-8">Get in touch:</h2>
              </div>

              <div className="lg:col-span-2">
                <form className="space-y-8">
                  <div>
                    <label htmlFor="name" className="block text-sm text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-0 py-3 border-0 border-b border-gray-600 bg-transparent text-white focus:border-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm text-white mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-0 py-3 border-0 border-b border-gray-600 bg-transparent text-white focus:border-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-0 py-3 border-0 border-b border-gray-600 bg-transparent text-white focus:border-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-0 py-3 border-0 border-b border-gray-600 bg-transparent text-white focus:border-white focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-start space-x-3 py-4">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      className="mt-1 w-4 h-4 text-white border-gray-600 bg-transparent rounded focus:ring-white"
                    />
                    <label htmlFor="privacy" className="text-sm text-white leading-relaxed">
                      By clicking, you are confirming that you have read, understood and agree to Itekako{" "}
                      <a href="/privacy-policy" className="text-yellow-400 hover:underline">
                        Privacy policy
                      </a>
                    </label>
                  </div>


                  <div className="pt-4">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-transparent border border-white text-white rounded hover:bg-yellow-300 hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </PageWrapper>
  )
}

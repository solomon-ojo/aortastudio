import ContactFormSection from "@/components/sections/contact-form-section"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="section is-contact-hero">
        <div className="container">
          <div className="container-padding-global">
            <div className="section-wrap is-contact-hero">
              <div className="header-component is-central-light">
                <div className="label in-view">
                  <div className="p-size-s">Contact</div>
                </div>
                <h1 className="ch-40 in-view">Get in touch</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactFormSection />
    </main>
  )
}

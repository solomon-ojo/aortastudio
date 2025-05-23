import WhatWeDoSection from "@/components/sections/what-we-do-section"
import IndustriesSection from "@/components/sections/industries-section"
import HowWeWorkSection from "@/components/sections/how-we-work-section"
import OurProcessSection from "@/components/sections/our-process-section"
import ContactFormSection from "@/components/sections/contact-form-section"

export default function ServicesPage() {
  return (
    <main>
      <section className="section is-services-hero">
        <div className="container">
          <div className="container-padding-global">
            <div className="section-wrap is-services-hero">
              <div className="header-component is-central-light">
                <div className="label in-view">
                  <div className="p-size-s">Services</div>
                </div>
                <h1 className="ch-40 in-view">Our Services</h1>
                <p className="p-size txt-light ch-60 in-view-100ms">
                  We've taken products from napkins to definition to implementation to deployment to scaling to
                  maintenance, and every step in between.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatWeDoSection />
      <IndustriesSection />
      <HowWeWorkSection />
      <OurProcessSection />
      <ContactFormSection />
    </main>
  )
}

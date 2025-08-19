import React from "react";
import Container from "./Container";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="w-full min-h-screen flex py-20 border-b border-gray-300 bg-black relative z-40">
      <Container>
        <div className="w-full h-full lg:h-screen  flex flex-col lg:flex-row items-center gap-4 ">
          <div className="h-full flex-1  pt-10 w-full">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-semibold">
              Get in touch:
            </p>
          </div>
          <div className="h-full flex-[4] pt-10 w-full">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;

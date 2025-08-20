import React from "react";
import Container from "./Container";
import ContactItem from "./ContactItem";

const ContactSection = () => {
  return (
    <section className="w-full min-h-screen flex py-20 border-b border-gray-300 bg-black relative z-40">
      <Container>
        <ContactItem />
      </Container>
    </section>
  );
};

export default ContactSection;

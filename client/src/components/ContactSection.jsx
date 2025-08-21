import React from "react";
import Container from "./Container";
import ContactItem from "./ContactItem";

const ContactSection = ({className}) => {
  return (
    <section className={className}>
      <Container>
        <ContactItem />
      </Container>
    </section>
  );
};

export default ContactSection;

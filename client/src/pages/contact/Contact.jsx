import React from "react";
import Container from "../../components/Container";
import ContactItem from "../../components/ContactItem";
import ContactSection from "../../components/ContactSection";
import ContactHero from "../../components/ContactHero";

const Contact = () => {
  return (
    <main className="min-h-screen w-full  pt-20 z-40 ">
      <ContactHero />
      <ContactSection
        className={
          "w-full min-h-screen flex py-20 border-b border-gray-300 bg-black relative z-40"
        }
      />
    </main>
  );
};

export default Contact;

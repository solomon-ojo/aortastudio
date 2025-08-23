import React from "react";
import Container from "./Container";
import ServiceButtons from "./ServiceButtons";
import { clientServices } from "../utils/activity";
import ClientCard from "./ClientCard";
import ContactSection from "./ContactSection";

const ClientServices = () => {
  return (
    <section className="min-h-screen w-full bg-black mt-10">
      <Container>
        <div className="w-full h-full pt-5">
          <div className="w-[80%]  flex items-center flex-wrap gap-5">
            {clientServices.map((item, index) => (
              <ServiceButtons key={index} text={item} />
            ))}
          </div>

          <ClientCard />

          <ContactSection
            className={
              "w-full min-h-screen flex py-20 border-b border-gray-300 bg-black relative z-40"
            }
          />
        </div>
      </Container>
    </section>
  );
};

export default ClientServices;

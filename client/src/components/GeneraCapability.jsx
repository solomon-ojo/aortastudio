import React from "react";
import Container from "./Container";
import GeneralCapabilityCard from "./GeneralCapabilitiesCards";

const GeneraCapability = () => {
  return (
    <section className="w-full min-h-screen flex pt-20 bg-white relative">
      <Container>
        <div className="w-full h-full">
            <h1 className="w-full text-xl md:text-3xl lg:text-6xl text-center py-6">
                General Capabilities
            </h1>
          <GeneralCapabilityCard />
        </div>
      </Container>
    </section>
  );
};

export default GeneraCapability;

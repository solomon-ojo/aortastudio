import React from "react";
import SoftwareDevelopmentAccordion from "./SoftwareDevelopmentAccordion";
import Container from "./Container";

const SoftwareDevelopments = () => {
  return (
    <section className="w-full min-h-screen flex pt-20 bg-sky-100 relative z-40   mt-[80vh]  ">
      <Container>
        <div className="w-full h-full">
          <div className="flex flex-col items-center justify-center my-5 py-8">
            <h1 className="text-lg md:text-2xl lg:text-6xl text-center">
              Navigating the Software Development
            </h1>
            <h1 className="text-lg md:text-2xl lg:text-6xl text-center">
              Journey: From Idea to Implementation
            </h1>
          </div>
          <SoftwareDevelopmentAccordion />
        </div>
      </Container>{" "}
    </section>
  );
};

export default SoftwareDevelopments;

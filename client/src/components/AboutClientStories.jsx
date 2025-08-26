import React from "react";
import Container from "./Container";
import AnimatedButton from "./AnimatedButton";

const AboutClientStories = () => {
  return (
    <section className="relative z-40  h-[400px] w-full bg-white">
      <Container>
        <div className="h-full w-full flex">
          {/* left */}
          <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-3 h-full ">
            <p className="lg:hidden">Check out our clients stories</p>
            <AnimatedButton
              bg="relative  bg-lime-300 overflow-hidden px-4 py-1 rounded-full group/button hover:cursor-pointer lg:hidden"
              iconClass="text-black z-20"
              textClass="text-[12px] capitalize text-black relative z-10 whitespace-nowrap"
              text="Client Stories"
            />
          </div>
          {/* right */}
          <div className="flex-1 h-full hidden lg:block">
            <p className="text-xl md:text-3xl lg:text-4xl my-3">Check out our clients stories</p>
            <AnimatedButton
              bg="relative  bg-lime-300 overflow-hidden px-4 py-1 rounded-full group/button hover:cursor-pointer mt-6"
              iconClass="text-black z-20"
              textClass="text-[12px] capitalize text-black relative z-10 whitespace-nowrap"
              text="Client Stories"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutClientStories;

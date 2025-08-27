import React from "react";
import Container from "./Container";

const AboutMethodology = () => {
  return (
    <section className="lg:sticky lg:top-0 lg:h-screen w-full bg-white z-10 ">
      <Container>
        <div className="w-full h-full flex flex-col lg:flex-row">
          {/* left */}
          <div className="h-full flex-1 pt-20 ">
            <div className="text-sm md:text-base">
              <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-8xl py-5">
                How we do things
              </h1>
              <p className="py-2">
                At Itekako, our mission is to ignite businesses worldwide with
                cutting-edge software solutions. We create, build, and scale all
                things digital, serving startups, scale-ups, and big players.
              </p>
              <p className="py-2">
                At Itekako, our mission is to ignite businesses worldwide with
                cutting-edge software solutions. We create, build, and scale all
                things digital, serving startups, scale-ups, and big players.
              </p>
            </div>
          </div>
          <div className="h-full flex-1 bg-black flex items-center justify-center pt-20">
            <div className="  flex items-center justify-center ">
              <img
                src="/color_white.svg"
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMethodology;

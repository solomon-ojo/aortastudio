import React from "react";
import Container from "./Container";

const OurMission = () => {
  return (
    <section className="relative z-40 h-screen w-full bg-white">
      <Container>
        <div className="w-full h-full  flex flex-col lg:flex-row">
          {/* left */}
          <div className="flex-1 h-full flex items-center pt-20">
            <div className="text-sm md:text-base">
              <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-8xl py-5">
                Our Mission{" "}
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
          {/* right */}
          <div className="bg-black flex-1 flex items-center justify-center h-full">
            <div className="flex items-center justify-center">
              <img
                src="/color_2.svg"
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

export default OurMission;

import React from "react";
import Container from "./Container";

const AboutMethodology = () => {
  return (
    <section className="relative z-20 w-full bg-white">
      <div className="hidden lg:block sticky top-0 h-screen">
        <Container>
          <div className="w-full h-full flex">
            {/* left */}
            <div className="h-full flex-1 pt-20 ">
              <div className="">
                <h1 className="text-8xl py-5">How we do things</h1>
                <p className="py-2">
                  At Itekako, our mission is to ignite businesses worldwide with
                  cutting-edge software solutions. We create, build, and scale
                  all things digital, serving startups, scale-ups, and big
                  players.
                </p>
                <p className="py-2">
                  At Itekako, our mission is to ignite businesses worldwide with
                  cutting-edge software solutions. We create, build, and scale
                  all things digital, serving startups, scale-ups, and big
                  players.
                </p>
              </div>
            </div>
            {/* right */}
            <div className="h-full bg-black flex-1">
              <div className="flex pt-20">
                <img
                  src="/img3.jpg"
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* For screens smaller than lg, render normally */}
      <div className="lg:hidden z-40 h-screen">
        <Container>
          <div className="w-full h-full flex">
            <div className="h-full flex-1">left</div>
            <div className="h-full bg-black flex-1">right</div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default AboutMethodology;

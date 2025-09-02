import React from "react";
import Video from "./Video";

const Hero = () => {
  return (
    <section className="fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] lg:top-0 lg:h-screen z-0 overflow-hidden">
      {/* Live video background */}
      <Video
        className={
          "absolute hidden md:block top-0 left-0 w-full h-full object-cover"
        }
      />
      <div className="absolute block md:hidden top-0 left-0 w-full h-full object-cover">
        <img
          src="/hero.webp"
          alt="hero_image"
          className=" w-full h-full object-cover "
        />
      </div>
      {/* Overlay text */}
      <div className="relative capitalize z-10 flex flex-col items-center justify-center h-full font-semibold  text-white text-center px-4">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl md:mb-4 text-white md:text-yellow-500">
          Build your startup.
        </h1>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl md:mb-4">
          You bring the vision,
        </h1>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl mb-4">
          we bring the team.
        </h1>
      </div>
    </section>
  );
};

export default Hero;

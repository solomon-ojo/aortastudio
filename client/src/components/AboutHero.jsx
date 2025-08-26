import React from "react";

const AboutHero = () => {
  return (
    <section className="fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] lg:top-0 lg:h-screen z-0 overflow-hidden">
      {/* Live video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://www.w3schools.com/howto/rain.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay text */}
      <div className="relative capitalize z-10 flex flex-col items-center justify-between  h-full text-white text-center ">
        {/* upper div */}
        <div className="h-2/3">up</div>
        {/* lower div */}
        <div className=" w-full h-1/3 bg-gray-400/60 backdrop-blur-md flex flex-col justify-center ">
          <h1 className=" text-xl md:text-4xl lg:text-6xl">
            Itekako: Real People,
          </h1>
          <h1 className="text-xl md:text-4xl lg:text-6xl pt-1">
            Real Stories, Real Success
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

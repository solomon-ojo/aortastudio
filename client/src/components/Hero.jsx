import React from "react";

const Hero = () => {
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
      <div className="relative capitalize z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 text-yellow-500">
          House of engineers.
        </h1>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl mb-4">
          Big enough to deliver,
        </h1>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl mb-4">
          small enough to care.
        </h1>
      </div>
    </section>
  );
};

export default Hero;

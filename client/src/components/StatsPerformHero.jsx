import React from "react";

const StatsPerformHero = () => {
  return (
    <section className="h-[600px] lg:h-[500px] w-full bg-sky-100 text-gray-800">
      <div className="flex flex-col lg:flex-row items-center h-full w-full pt-20">
        {/* left */}
        <div className="flex-1 h-3/5 lg:h-full w-full bg-red-600">
          <img
            src="/img1.jpg"
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
        {/* right */}
        <div className="flex-1 h-full w-full bg-black text-white">
          <p className="text-lg sm:text-2xl md:text-4xl lg:text-5xl pt-10 px-3 lg:px-5">
            Who needs excitement that sport brings when you can turn it into
            numbers
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsPerformHero;

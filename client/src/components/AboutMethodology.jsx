import React from "react";


const AboutMethodology = () => {
  return (
    <section className="lg:sticky lg:top-0 lg:h-screen w-full bg-white z-10 border-t border-t-gray-300">
      <div className="w-full h-full flex flex-col lg:space-x-6 lg:flex-row ">
        {/* left */}
        <div className="h-full flex-1 pt-5 lg:pt-20 px-3 lg:px-10 ">
          <div className="text-sm md:text-base">
            <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-8xl py-5">
              How we do things
            </h1>
            <p className="py-3">
              We focus on one market, one problem, and one growth
              channel—keeping execution lean and disciplined. With agile teams
              and $50K budgets, we build MVPs that hit $20K–$30K MRR within 24
              months, then connect them to capital for scaling.
              <p className="py-3">
                Our structured approach de-risks early-stage ventures and
                creates a reliable pipeline of investment-ready startups. For
                investors, this means higher-quality deal flow. For founders, it
                means a real chance at building a fundable company
              </p>
            </p>
          </div>
        </div>
        <div className="h-full flex-1 bg-black flex items-center justify-center px-3 lg:px-10 pt-20">
          <div className="  flex items-center justify-center ">
            <img
              src="/color_white.svg"
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMethodology;

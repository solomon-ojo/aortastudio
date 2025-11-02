import React from "react";


const OurMission = () => {
  return (
    <section className="relative z-40 h-[800px] lg:h-screen  w-full  bg-white border-t border-t-gray-200">
      
        <div className="w-full h-full  flex flex-col lg:space-x-6 lg:flex-row border-b border-b-gray-300">
          {/* left */}
          <div className="flex-1 h-full flex items-center pt-10 px-3 lg:px-10 ">
            <div className="text-sm md:text-base">
              <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-8xl py-5 lg:mb-8">
                Our Mission{" "}
              </h1>
              <p className="py-2">
                Our mission is to transform high-potential ideas from non-technical professionals into scalable, 
                revenue-generating startups. By combining lean execution with disciplined validation, we create a 
                steady pipeline of fundable companies—de-risking early-stage ventures for founders and delivering 
                higher-quality deal flow for investors.
              </p>
              <p className="py-2">
                We believe brilliant ideas shouldn’t die just because the founder can’t code. 
                Our mission is to stand beside non-technical professionals as their technical 
                co-founder, turning concepts into real businesses with traction, revenue, and a 
                clear path to investment
              </p>
            </div>
          </div>
          {/* right */}
          <div className="bg-black flex-1 flex items-center justify-center h-full px-3 lg:px-10">
            <div className="flex items-center justify-center">
              <img
                src="/color_2.svg"
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default OurMission;

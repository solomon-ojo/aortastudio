import React from "react";
import Container from "./Container";
import CardMarquee from "./CardMarquee";

const OurStory = () => {
  return (
    <section className="relative z-40 h-[460px]  lg:h-screen w-full bg-white text-black mt-[100vh]  ">
      <Container>
        <div className="w-full h-full flex flex-col justify-between">
          {/* upper div */}
          <div className="w-full flex-1 flex flex-col lg:flex-row  ">
            {/* left */}
            <div className=" w-full h-full flex items-center">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl py-2 font-semibold">
                Our Story
              </h1>
            </div>
            {/* right */}
            <div className=" w-full h-full flex items-center">
              <p className="">
                Itekako is an IT software development company founded more than
                15 years ago with the idea to create a friendly and enthusiastic
                work environment where work-life balance and innovative projects
                make people happy to come on Mondays. That enthusiasm, a sense
                of accountability, and a pursuit for excellence in delivery
                enabled us to grow to 150+ people, 200+ successful projects in
                11+ industries, so far.
              </p>
            </div>
            {/* lower div */}
          </div>
          <div className=" w-full flex-1 py-2  flex items-center ">
            <CardMarquee />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurStory;

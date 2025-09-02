import React from "react";
import Container from "./Container";
import AnimatedButton from "./AnimatedButton";
const headingStyle =
  "text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl text-white md:py-2";

const OurServices = ({ className }) => {
  return (
    <section className={className}>
      <Container>
        <div className="w-full ">
          <div className="w-full mb-6">
            <h1 className={headingStyle}>We transform Founders' visions</h1>
            <h1 className={headingStyle}> into real products — architecting,</h1>
            <h1 className={headingStyle}>building, and launching startups that grow.</h1>
          </div>
          <div className="flex flex-col lg:flex-row justify-start lg:items-center  gap-8 lg:gap- relative  ">
            <p className="font-semibold">Check out all client stories</p>
            <AnimatedButton
              bg="relative  bg-lime-300 overflow-hidden px-4 py-1 rounded-full group/button hover:cursor-pointer"
              iconClass="text-black z-20"
              textClass="text-[12px] capitalize text-black relative z-10"
              text="more"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurServices;

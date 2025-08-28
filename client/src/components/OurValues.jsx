import React from "react";
import Container from "./Container";
import OurValuesCarousel from "./OurValuesCarousel";
import HowWeGrow from "./HowWeGrow";

const OurValues = () => {
  return (
    <section className="min-h-screen w-full relative z-40 bg-white pt-10">
      <Container>
        <div className="w-full">
          <div className="w-full h-[700px] flex flex-col lg:flex-row  ">
            <div className="w-full  flex-1 flex flex-col justify-end lg:flex-row lg:justify-start">
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl py-5">
                Our values
              </h1>
            </div>
            <div className="flex-[4] w-full  ">
              <OurValuesCarousel
                className={
                  "relative overflow-hidden w-full h-[500px] bg-white z-40"
                }
              />
            </div>
          </div>
        </div>
      </Container>
      <HowWeGrow />
    </section>
  );
};

export default OurValues;

import React from "react";
import Container from "./Container";
import OurActivities from "./OurActivities";
const headingStyle = "text-lg md:text-3xl lg:text-6xl text-gray-700 lg:py-1";

const WhatWeDo = () => {
  return (
    <section className="w-full min-h-screen flex pt-20 bg-emerald-50 relative z-40  ">
      <Container>
        <div className="w-full h-full">
          <div className=" w-full h-full pt-5 pb-10">
            <h1 className="text-sm md:text-lg text-gray-700 font-semibold pb-5 uppercase">
              What we do
            </h1>
            <h2 className={headingStyle}>
              We’ve taken products from napkins to
            </h2>
            <h2 className={headingStyle}>definition to implementation to</h2>
            <h2 className={headingStyle}>
              deployment to scaling to maintenance,
            </h2>
            <h2 className={headingStyle}>and every step in between.</h2>
          </div>
          <OurActivities />
        </div>
      </Container>
    </section>
  );
};

export default WhatWeDo;

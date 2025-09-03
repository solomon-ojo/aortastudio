import React from "react";
import Container from "./Container";

const partnerLogos = [
  "SQAN App",
  "Ezzra",
  "MindMap",
  "Work Fit",
  "IconPass",
  "Papperboy",
  "BuildArch",
  "Wasabi",
];

// desktop partner view
const Partners = () => {
  return (
    <section className="relative z-40  pt-20 h-[450px] w-full bg-black mt-[100vh] border-b border-b-gray-800 hidden md:flex justify-center items-center  ">
      <Container>
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-12 ">
          {partnerLogos.map((item, index) => (
            <div key={index} className=" uppercase ">
              <span className="text-white text-lg md:text-3xl font-bold p-2 md:p-4 ">
                {item}
              </span>
            </div>
          ))}
        </div>
        {/* <div className="h-[200vh]" /> Just to test long scroll */}
      </Container>
    </section>
  );
};

export default Partners;

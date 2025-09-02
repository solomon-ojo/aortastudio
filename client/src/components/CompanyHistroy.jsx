import React from "react";
import HistoryMarquee from "./HistoryMarquee";

const CompanyHistroy = () => {
  return (
    <section className="w-full h-[500px] flex flex-col items-center  justify-center gap-12 bg-black relative z-40  text-white ">
      <div className="flex justify-center items-center w-full mb-10">
        <h1 className="text-2xl md:text-4xl lg:text-7xl text-center">
          Our studio in numbers
        </h1>
      </div>

      <HistoryMarquee />
    </section>
  );
};

export default CompanyHistroy;

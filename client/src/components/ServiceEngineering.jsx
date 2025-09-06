import React from "react";
import cardData from "../utils/animatedData";
import Card from "./AnimatedCard";
import ServiceCard from "./ServiceAnimatedCard";

const ServiceEngineering = () => {
  return (
    <div className="w-full flex-col h-full flex justify-center items-center mt-20 ">
      <div className=" text-xl md:text-2xl  lg:text-6xl text-white py-8">
        <h1 className="text-center">We build solutions and grow</h1>
        <h1 className="text-center">partnerships</h1>
      </div>
      <div className="h-full pt-5 w-full flex flex-col  items-center justify-start lg:grid lg:grid-cols-3">
        {cardData.map((card) => (
          <ServiceCard
            key={card.id}
            title={card.title}
            description={card.description}
            benefits={card.benefits}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceEngineering;

import React from "react";
import { SiMarketo } from "react-icons/si";
import IndustryCard from "./IndustryCard";
import cardData from "../utils/animatedData";
import Card from "./AnimatedCard";

const Industries = () => {
  return (
    <section className="w-full min-h-screen flex pt-20 bg-sky-100 relative z-40  pb-10">
      <div className="w-full h-full">
        <div className="w-full flex-col h-full flex justify-center items-center">
          <h3 className="text-center text-xs lg:text-base uppercase font-semibold text-gray-700">
            Industries
          </h3>
          <div className="hidden lg:block text-6xl font-semibold text-gray-700 pt-5">
            <h1 className="text-center">The wide spectrum of</h1>
            <h1 className="text-center">industries we serve</h1>
          </div>
          <div className="lg:hidden text-xl font-semibold text-gray-700  flex items-center">
            <h1 className="text-center">
              The wide spectrum of industries we serve
            </h1>
          </div>
        </div>
        {/* desktop card */}
        <div className="w-full h-full lg:flex items-center pt-10 hidden">
          <IndustryCard text={"Fintech"} icon={<SiMarketo size={30} />} />{" "}
          <IndustryCard text={"Healthcare "} icon={<SiMarketo size={30} />} />{" "}
          <IndustryCard text={"manufacturing"} icon={<SiMarketo size={30} />} />{" "}
          <IndustryCard text={"technology"} icon={<SiMarketo size={30} />} />{" "}
          <IndustryCard text={"ecommerrce"} icon={<SiMarketo size={30} />} />{" "}
          <IndustryCard text={"automotive"} icon={<SiMarketo size={30} />} />
        </div>
        {/* small to medium card */}
        <div className="w-full h-full grid grid-cols-2 pt-10 lg:hidden">
          <IndustryCard text={"Fintech"} icon={<SiMarketo size={30} />} />{" "}
          <IndustryCard text={"Healthcare "} icon={<SiMarketo size={30} />} />{" "}
          <IndustryCard text={"manufacturing"} icon={<SiMarketo size={30} />} />{" "}
          <IndustryCard text={"technology"} icon={<SiMarketo size={30} />} />{" "}
          <IndustryCard text={"ecommerrce"} icon={<SiMarketo size={30} />} />{" "}
          <IndustryCard text={"automotive"} icon={<SiMarketo size={30} />} />
        </div>

        <div className="w-full flex-col h-full flex justify-center items-center mt-20">
          <h3 className="text-center text-xs  lg:text-base uppercase font-semibold text-gray-700">
            how we work
          </h3>
          <div className=" text-xl md:text-2xl  lg:text-6xl font-semibold text-gray-700 pt-5">
            <h1 className="text-center">We build solutions and grow</h1>
            <h1 className="text-center">partnerships</h1>
          </div>
          <div className="min-h-screen w-full  hidden lg:flex items-center justify-center  ">
            {cardData.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;

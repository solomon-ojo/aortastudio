import React from "react";
import { SiMarketo } from "react-icons/si";
import { MdTempleHindu } from "react-icons/md";
import { SiZedindustries } from "react-icons/si";
import { PiCornersInDuotone } from "react-icons/pi";
import { SiInductiveautomation } from "react-icons/si";
import { PiTrainDuotone } from "react-icons/pi";

import IndustryCard from "./IndustryCard";
import Card from "./AnimatedCard";
import EngineeringProcess from "./EngineeringProcess";

const Industries = () => {
  return (
    <section className="w-full min-h-screen flex pt-20 bg-sky-100 relative z-40 ">
      <div className="w-full h-full">
        <div className="w-full flex-col h-full flex justify-center items-center">
          <h3 className="text-center text-xs lg:text-base uppercase font-bold text-gray-800">
            Industries
          </h3>
          <div className="hidden lg:block  font-semibold text-gray-700 pt-5">
            <h1 className="text-center ">The wide spectrum of</h1>
            <h1 className="text-center">industries we serve</h1>
          </div>
          <div className="lg:hidden  text-gray-700  flex items-center">
            <h1 className="text-center text-2xl px-3 pt-2">
              The wide spectrum of industries we serve
            </h1>
          </div>
        </div>
        {/* desktop card */}
        <div className="w-full h-full lg:flex items-center pt-10 hidden">
          <IndustryCard text={"Fintech"} icon={<SiMarketo size={30} />} />{" "}
          <IndustryCard
            text={"Healthcare "}
            icon={<MdTempleHindu size={30} />}
          />{" "}
          <IndustryCard
            text={"manufacturing"}
            icon={<SiZedindustries size={30} />}
          />{" "}
          <IndustryCard
            text={"technology"}
            icon={<PiCornersInDuotone size={30} />}
          />{" "}
          <IndustryCard
            text={"ecommerrce"}
            icon={<SiInductiveautomation size={30} />}
          />{" "}
          <IndustryCard
            text={"automotive"}
            icon={<PiTrainDuotone size={30} />}
          />
        </div>
        {/* small to medium card */}
        <div className="w-full h-full grid grid-cols-2 pt-10 lg:hidden">
          <IndustryCard text={"Fintech"} icon={<SiMarketo size={30} />} />{" "}
          <IndustryCard
            text={"Healthcare "}
            icon={<MdTempleHindu size={30} />}
          />{" "}
          <IndustryCard
            text={"manufacturing"}
            icon={<SiZedindustries size={30} />}
          />{" "}
          <IndustryCard
            text={"technology"}
            icon={<PiCornersInDuotone size={30} />}
          />{" "}
          <IndustryCard
            text={"ecommerrce"}
            icon={<SiInductiveautomation size={30} />}
          />{" "}
          <IndustryCard
            text={"automotive"}
            icon={<PiTrainDuotone size={30} />}
          />
        </div>

        <EngineeringProcess />
      </div>
    </section>
  );
};

export default Industries;

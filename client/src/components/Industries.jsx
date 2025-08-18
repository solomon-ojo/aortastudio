import React from "react";
import { SiMarketo } from "react-icons/si";
import IndustryCard from "./IndustryCard";

const Industries = () => {
  return (
    <section className="w-full min-h-screen flex pt-20 bg-teal-100 relative z-40 ">
      <div className="w-full h-full">
        <div className="w-full flex-col h-full flex justify-center items-center">
          <h3 className="text-center text-xs lg:text-base uppercase font-semibold text-gray-700">
            Industries
          </h3>
          <div className="hidden lg:block text-6xl font-semibold text-gray-700">
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
      </div>
    </section>
  );
};

export default Industries;

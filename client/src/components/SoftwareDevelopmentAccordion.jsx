import { useState } from "react";
import { FiX } from "react-icons/fi";
import { accordionData } from "../utils/card";

const SoftwareDevelopmentAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto  ">
      {accordionData.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`${
              openIndex === index ? "hover:bg-emerald-100 bg-emerald-100" : ""
            } hover:bg-emerald-100 border-t-2 border-t-white py-6  overflow-hidden`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full px-4 py-3 transition "
            >
              <span
                className={`${
                  openIndex === index ? "bg-yellow-200" : ""
                } text-xl text-black p-3 `}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-3 w-3 lg:h-8 lg:w-8"
                />
              </span>
              <span className="flex-1 w-full text-start pl-5 lg:pl-0 lg:text-center text-sm md:text-lg lg:text-3xl  text-gray-800">
                {item.title}
              </span>
              <span className=" text-gray-600 ">
                <FiX
                  className={` ${
                    isOpen && openIndex === index ? "rotate-0" : " -rotate-45"
                  } text-xl md:text-2xl lg:text-4xl xl:text-5xl`}
                />
              </span>
            </button>
            {isOpen && (
              <div className="flex justify-center items-center px-4 py-3 text-sm md:text-base  text-gray-700 transition-all duration-700 ease-in-out">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default SoftwareDevelopmentAccordion;

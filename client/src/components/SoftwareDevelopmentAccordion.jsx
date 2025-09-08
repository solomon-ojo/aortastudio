import { useState } from "react";
import { FiX } from "react-icons/fi";
import { accordionData } from "../utils/card";

const SoftwareDevelopmentAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full h-full flex  bg-emerald-50 relative">
      <div className="w-full mx-auto  ">
        {accordionData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`${
                openIndex === index ? "hover:bg-emerald-100 bg-emerald-100" : ""
              } hover:bg-emerald-100 border-t-2 border-t-white py-6  px-4 overflow-hidden`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full lg:px-4 py-3 transition  "
              >
                <span
                  className={`${
                    openIndex === index ? "bg-yellow-200" : ""
                  } text-xl text-black p-3 hidden sm:block `}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-3 w-3 lg:h-8 lg:w-8"
                  />
                </span>
                <span className="flex-1 w-full text-start lg:text-center text-sm md:text-lg lg:text-3xl   text-gray-800">
                  {item.title}
                </span>
                <span className=" text-gray-600 ">
                  <FiX
                    className={` ${
                      isOpen && openIndex === index ? "rotate-0" : " -rotate-45"
                    } text-xl md:text-2xl lg:text-4xl xl:text-5xl transition-all duration-500 ease-in-out`}
                  />
                </span>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"
                }`}
              >
                <div className="flex flex-col justify-center px-4 text-sm md:text-base text-gray-700">
                  <span className="sm:hidden flex  justify-center h-12 w-12 p-3 bg-yellow-200  mb-2 ">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="h-full w-full"
                    />
                  </span>
                  {item.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default SoftwareDevelopmentAccordion;

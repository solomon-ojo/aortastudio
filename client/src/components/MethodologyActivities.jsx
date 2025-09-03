import React, { useEffect, useState } from "react";
import { SiPaloaltosoftware, SiCoinmarketcap } from "react-icons/si";
import { RxCross2 } from "react-icons/rx";
import AnimatedButton from "./AnimatedButton";
import { methodologyActivityArr } from "../utils/activity";

const divStyle =
  "w-full flex items-center justify-between gap-4  border-b border-b-gray-200 py-8 hover:cursor-pointer";

const MethodologyActivities = () => {
  const [activity, setActivity] = useState(methodologyActivityArr[0]);
  const [activeId, setActiveId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleActivity = (id) => {
    const selected = methodologyActivityArr.find((item) => item.id === id);
    setActivity(selected);
    setActiveId((prev) => (prev === id ? null : id));
    setCurrentIndex(methodologyActivityArr.findIndex((item) => item.id === id));
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % methodologyActivityArr.length;
      const nextActivity = methodologyActivityArr[nextIndex];
      setActivity(nextActivity);
      setCurrentIndex(nextIndex);
      setActiveId(nextActivity.id); // ✅ Add this line
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-full h-full bg-black">
      <div className="flex md:flex-col lg:flex-row w-full h-full">
        {/* Left Panel */}
        <div className="flex-1 h-full">
          {methodologyActivityArr.map((item) => (
            <div key={item.id}>
              <div onClick={() => handleActivity(item.id)} className={divStyle}>
                <div className="flex items-center gap-4">
                  <span className="h-10 w-10  rounded-full border border-gray-700 flex justify-center items-center">
                    <span className="">{item.id}</span>
                  </span>
                  <span
                    className={`text-sm lg:text-2xl font-semibold ${
                      activity.id === item.id ? "text-green-600" : "text-white"
                    }`}
                  >
                    {item.name}
                  </span>
                </div>
                <RxCross2
                  className={`text-2xl transition-transform duration-300 sm:block md:hidden ${
                    activeId === item.id ? "rotate-0" : "-rotate-45"
                  }`}
                />
              </div>

              {/* Animated scale bar for lg and up */}
              <div className="hidden lg:block relative w-full h-0">
                <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-gray-200 overflow-hidden">
                  <div
                    className={`h-full bg-green-800 transition-all duration-[7000ms] ${
                      activity.id === item.id ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              </div>

              {/* Accordion content for sm and below */}
              <div
                className={`sm:block md:hidden transition-all duration-300 overflow-hidden ${
                  activeId === item.id ? "max-h-[600px] py-4 px-6" : "max-h-0"
                }`}
              >
                {/* <h2
                  className={`text-sm font-semibold mb-4 ${
                    activity.id === item.id ? "text-green-700" : "text-white"
                  }`}
                >
                  {item.title}
                  
                </h2> */}

                <div className="flex flex-col gap-4">
                  {item.subtitle.map((sub, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-white text-sm lg:text-lg border-b border-b-black"
                    >
                      <span>{sub.title2}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Panel for lg and up */}
        <div className="pl-8 hidden md:flex bg-black flex-[2] items-center w-full h-[508px] px-6 pt-14 overflow-y-auto pb-5 lg:pb-0">
          <div className="w-full h-full pt-5">
            <h2
              className={`text-lg font-semibold mb-4 pb-5 ${
                activity.id === activeId ? "lg:text-green-600" : "text-white"
              }`}
            >
              {activity.title}
            </h2>

            <div className="flex justify-between items-start gap-6 pt-14">
              <div className="flex flex-col gap-4 flex-1">
                {activity.subtitle.map((sub, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between text-white text-lg border-b border-b-black"
                  >
                    <p
                      className={`${
                        index === 0 ? "text-6xl pb-3 " : "text-lg"
                      }`}
                    >
                      {sub.title}
                    </p>
                    <p className="">{sub.title2}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologyActivities;

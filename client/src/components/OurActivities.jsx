import React, { useEffect, useState } from "react";
import { SiPaloaltosoftware, SiCoinmarketcap } from "react-icons/si";
import { RxCross2 } from "react-icons/rx";
import AnimatedButton from "./AnimatedButton";
import Video from "./Video";

const divStyle =
  "w-full flex items-center justify-between gap-4 border-t border-t-gray-200 border-b border-b-gray-200 py-8 hover:cursor-pointer";
const spanStyle = "text-sm md:text-lg lg:text-2xl font-semibold text-gray-500";

const activityArr = [
  {
    id: 1,
    title: "Custom software development",
    sideIcon: "/we_1.svg",
    subtitle: [
      { title: "Front-end and back-end development", icon: "/icon_1.svg" },
      { title: "UI/UX Design", icon: "/icon_3.svg" },
      { title: "API Integration", icon: "/icon_6.svg" },
    ],
  },
  {
    id: 2,
    title: "Devops and migrations",
    sideIcon: "/we_2.svg",

    subtitle: [
      { title: "Assessment", icon: "/icon_5.svg" },
      { title: "Automation", icon: "/icon_1.svg" },
      { title: "Migrations", icon: "/icon_2.svg" },
    ],
  },
  {
    id: 3,
    title: "Software testing and QA",
    sideIcon: "/we_3.svg",

    subtitle: [
      { title: "Automated testing", icon: "/icon_3.svg" },
      { title: "Manual testing", icon: "/icon_1.svg" },
      { title: "Performance testing", icon: "/icon_8.svg" },
    ],
  },
  {
    id: 4,
    title: "Consulting",
    sideIcon: "/we_4.svg",

    subtitle: [
      { title: "Project specification development", icon: "/icon_1.svg" },
      { title: "Digital transformation", icon: "/icon_2.svg" },
      { title: "Technical due diligence", icon: "/icon_7.svg" },
    ],
  },
  {
    id: 5,
    title: "Building digital products end-to-end",
    sideIcon: "/we_5.svg",

    subtitle: [
      { title: "Conceptualization & Prototyping", icon: "/icon_2.svg" },
      { title: "Product & Solution design", icon: "/icon_1.svg" },
      { title: "MVP development", icon: "/icon_3.svg" },
    ],
  },
];

const OurActivities = () => {
  const [activity, setActivity] = useState(activityArr[0]);
  const [activeId, setActiveId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleActivity = (id) => {
    const selected = activityArr.find((item) => item.id === id);
    setActivity(selected);
    setActiveId((prev) => (prev === id ? null : id));
    setCurrentIndex(activityArr.findIndex((item) => item.id === id));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % activityArr.length;
      setActivity(activityArr[nextIndex]);
      setCurrentIndex(nextIndex);
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col lg:flex-row items-start w-full h-full">
        {/* Left Panel */}
        <div className="flex-1 self-stretch">
          {activityArr.map((item) => (
            <div key={item.id}>
              <div onClick={() => handleActivity(item.id)} className={divStyle}>
                <div className="flex items-center gap-4">
                  {
                    <img
                      src={item.sideIcon}
                      alt="icosn"
                      className="w-5 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                    />
                  }
                  {/* <SiPaloaltosoftware className="text-2xl lg:text-4xl" /> */}
                  <span className={spanStyle}>{item.title}</span>
                </div>
                <RxCross2
                  className={`text-2xl transition-transform duration-300 sm:block md:hidden ${
                    activeId === item.id ? "rotate-0" : "-rotate-45"
                  }`}
                />
              </div>

              {/* Animated scale bar for lg and up */}
              <div className="hidden lg:block relative w-full h-0">
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-200 overflow-hidden">
                  <div
                    className={`h-full bg-gray-600 transition-all duration-[7000ms] ${
                      activity.id === item.id ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              </div>

              {/* Accordion content for sm and below */}
              <div
                className={`sm:block md:hidden bg-sky-200 transition-all duration-300 overflow-hidden ${
                  activeId === item.id ? "max-h-[600px] py-4 px-6" : "max-h-0"
                }`}
              >
                <h2 className="text-black text-2xl font-semibold mb-4">
                  {item.title}
                </h2>
                <AnimatedButton
                  bg="relative bg-lime-300 overflow-hidden px-5 py-2 mb-5 rounded-full group/activity hover:cursor-pointer"
                  iconClass="text-black z-20"
                  textClass="text-[12px] capitalize text-black relative z-10"
                  text="more"
                />
                <hr className="pb-6" />
                <div className="flex flex-col gap-4">
                  {item.subtitle.map((sub, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-black text-lg border-b border-b-black"
                    >
                      <span>{sub.title}</span>
                      <span>
                        <img src={sub.icon} alt="icon" className="" />
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Video
                    className={"w-[100px] h-[100px] object-cover rounded-md"}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Panel */}
        <div className="hidden md:flex flex-[2] self-stretch w-full px-6 pt-14 overflow-y-auto pb-5 lg:pb-0 bg-green-300 md:bg-white">
          <div className="w-full h-full pt-5">
            <h2 className="text-black text-4xl font-semibold mb-4 pb-5">
              {activity.title}
            </h2>
            <AnimatedButton
              bg="relative bg-lime-300 overflow-hidden px-5 py-2 mb-5 rounded-full group/activity hover:cursor-pointer"
              iconClass="text-black z-20"
              textClass="text-[12px] capitalize text-black relative z-10"
              text="more"
            />
            <hr className="pb-10" />
            <div className="flex justify-between items-start gap-6">
              <div className="flex flex-col gap-4 flex-1">
                {activity.subtitle.map((sub, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between text-black text-lg border-b border-b-black"
                  >
                    <span>{sub.title}</span>
                    <span>
                      <img src={sub.icon} alt="icon" className="" />
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex-1 flex-shrink-0 relative">
                <div className="flex justify-end">
                  <Video
                    className={
                      "absolute top-0 right-10 w-[100px] h-[100px] object-cover"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurActivities;

import { useState } from "react";
import {
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaDatabase,
  FaRobot,
  FaTools,
} from "react-icons/fa";
import { FiX } from "react-icons/fi";

const accordionData = [
  {
    title: "Frontend and Backend  Development",
    icon: <FaCode />,
    content:
      "We provide comprehensive web development services, covering both frontend and backend. Our skilled teams leverages popular frontend frameworks like React.js, Vue.js, and Angular to craft the user interface of your product. On the backend, we employ server-side technologies such as Python, Ruby on Rails, and Node.js, ensuring the development of fast and scalable solutions. With full-stack development, we provide end-to-end solutions that integrate frontend and backend components, along with the necessary technologies to ensure your product's success.",
  },
  {
    title: "AI and machine learning",
    icon: <FaMobileAlt />,
    content:
      "Unlock the power of artificial intelligence solutions to address business challenges, automate tasks, and enhance customer service. These AI-driven solutions are flexible and scalable, aligning with the needs of businesses, whether small or large, in the ever-changing digital landscape",
  },
  {
    title: "IoT and Embedded software",
    icon: <FaCloud />,
    content:
      "Using state-of-the-art tools and standards, we launch IoT firmware for various platforms and embedded apps for IoT devices. We keep your IoT devices up-to-date, scalable and secure by offering regular updates and OTA (over-the-air) development.",
  },
  {
    title: "Real-time communication",
    icon: <FaDatabase />,
    content:
      "We develop innovative real-time communication applications that make file-sharing, analytics, video calls and long-distance conferences easy, more efficient, secure and accessible.",
  },
  {
    title: "Video streaming solutions",
    icon: <FaRobot />,
    content:
      "Our team of highly skilled experts help media companies build premium video streaming apps to power digital video businesses from content management to end-user experience and enable a completely new experience of having video streaming support multiple live events for a large number of users.",
  },
  {
    title: "Product management",
    icon: <FaTools />,
    content:
      "Our dedicated product managers are the driving force behind our software development projects. They excel in communication and are adept at bringing together the diverse goals of various stakeholders, whether we're crafting a simple app or embarking on a major enterprise initiative. Your project is in good hands with our team!",
  },
];

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
              openIndex === index ? "hover:bg-emerald-50" : "hover:bg-emerald-100"
            } hover:bg-emerald-100 border-t-2 border-t-gray-200 py-6  overflow-hidden`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full px-4 py-3 transition "
            >
              <span
                className={`${
                  openIndex === index ? "bg-yellow-500" : ""
                } text-xl text-black p-3`}
              >
                {item.icon}
              </span>
              <span className="flex-1 w-full text-start pl-5 lg:pl-0 lg:text-center text-lg lg:text-3xl  text-gray-800">
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
              <div className="flex justify-center items-center px-4 py-3  text-gray-700 transition-all duration-700 ease-in-out">
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

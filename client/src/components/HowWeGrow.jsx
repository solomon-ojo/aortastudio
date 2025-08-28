import React from "react";
import Container from "./Container";
import AnimatedButton from "./AnimatedButton";
import { motion } from "framer-motion";

const HowWeGrow = () => {
  return (
    <motion.section
      initial={{ backgroundColor: "#365314", color: "white" }} // lime-300
      whileInView={{ backgroundColor: "#bae6fd", color: "black" }} // yellow-200
      exit={{ backgroundColor: "#365314" }} // fade back to lime-300
      transition={{ duration: 3 }}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full min-h-screen flex pb-10 relative z-40  "
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
        className="w-full h-full px-10 pt-5"
      >
        <div className="relative w-full h-full mt-10 pt-10 flex justify-center items-center">
          {/* Left Image */}
          <div className="hidden md:block absolute z-10 h-[200px] lg:h-[250px] w-[150px] lg:w-[250px] left-0 top-1/4 lg:top-1/3">
            <video
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dc6iqn3mn/video/upload/v1756398683/itekako_dzt2yr.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* Center Div with translucent background */}
          <div className="center-div relative z-40 w-full md:w-[80%] lg:w-[67%] h-[500px] flex items-center justify-center border-[0.5px] border-gray-500 bg-sky-200/20 backdrop-blur-md">
            <div className="w-full md:w-[84%] h-[75%] px-4 md:px-0 flex flex-col md:flex-row justify-between items-center gap-5">
              <div className="flex-1 h-full w-full">
                <p className="text-xl md:text-3xl lg:text-5xl xl:text-6xl text-center  py-2">
                  Curious to explore how we
                </p>
                <p className="text-xl md:text-3xl lg:text-5xl xl:text-6xl text-center  py-2">
                  can grow together?
                </p>
                <p className="text-lg md:text-xl text-center py-2 ">
                  Check our open positions.
                </p>
                <div className="flex justify-center items-center pt-10">
                  <AnimatedButton
                    bg="relative bg-lime-800 overflow-hidden px-8 py-2 mb-5 rounded-full group/join hover:cursor-pointer"
                    iconClass="text-white z-20"
                    textClass="text-sm capitalize font-semibold text-yellow-400 relative z-10 whitespace-nowrap"
                    text="Join Us"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="absolute z-10 h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] right-0 top-[-10px] lg:top-[-40px]">
            <video
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dc6iqn3mn/video/upload/v1756398683/itekako_dzt2yr.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

        <div className="w-full flex justify-center mt-20 pt-10">
          <div className="flex justify-end sm:justify-center items-center w-[120px] lg:w-[200px] h-[100px] lg:h-[150px]">
            <video
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dc6iqn3mn/video/upload/v1756398683/itekako_dzt2yr.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HowWeGrow;

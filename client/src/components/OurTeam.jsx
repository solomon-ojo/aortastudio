import React from "react";
import Container from "./Container";
import AnimatedButton from "./AnimatedButton";
import { motion } from "framer-motion";
import Video from "./Video";

const headingStyle = "text-xl md:text-3xl lg:text-6xl";

const OurTeam = () => {
  return (
    <motion.section
      initial={{ backgroundColor: "#365314", color: "white" }} // lime-300
      whileInView={{ backgroundColor: "#FEF08A", color: "black" }} // yellow-200
      exit={{ backgroundColor: "#365314" }} // fade back to lime-300
      transition={{ duration: 3 }}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full min-h-screen flex pt-20 pb-10 relative z-40 "
    >
      <Container>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
          className="w-full h-full"
        >
          <div>
            <h1 className={headingStyle}>Join our passionate team, unleash</h1>
            <h1 className={headingStyle}>your potential, and be part of</h1>
            <h1 className={headingStyle}>something truly awesome.</h1>
          </div>

          <div className="relative w-full h-full mt-10 pt-10 flex justify-center items-center">
            {/* Left Image */}
            <div className="  absolute z-10 h-[100px]  md:h-[200px] lg:h-[250px] w-[150px] lg:w-[250px] left-0 top-10 md:top-1/4 lg:top-1/3">
              <Video className={"w-full h-full object-cover"} />
            </div>

            {/* Center Div with translucent background */}
            <div className="center-div relative z-40 w-[70%] md:w-[80%] lg:w-[67%] h-[500px] flex items-center justify-center border-[0.5px] border-yellow-400/30 bg-yellow-200/70 backdrop-blur-md">
              <div className="w-full md:w-[84%] h-[75%] px-4 md:px-0 flex flex-col md:flex-row justify-between items-center gap-5">
                <div className="flex items-center justify-center h-full flex-1">
                  <Video className={"w-full h-full object-cover"} />
                </div>
                <div className="flex-1 h-full w-full">
                  <p className="text-sm md:text-base lg:text-lg font-semibold">
                    Our dynamic work environment fosters creativity, empowers
                    you to make an impact, and offers endless learning
                    opportunities. Together, let's shape the future of
                    technology and create extraordinary solutions that inspire.
                  </p>
                  <div className="lg:mt-20 pt-4 lg:pt-20">
                    <AnimatedButton
                      bg="relative bg-black overflow-hidden px-8 py-2 mb-5 rounded-full group/join hover:cursor-pointer"
                      iconClass="text-white z-20"
                      textClass="text-sm capitalize font-semibold text-yellow-400 relative z-10"
                      text="more"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="absolute z-10 h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] right-0 top-[-10px] lg:top-[-40px]">
              <Video className={"w-full h-full object-cover"} />
            </div>
            
          </div>

          <div className="w-full flex justify-center mt-20 pt-10">
            <div className="flex justify-end sm:justify-center items-center w-[120px] lg:w-[200px] h-[100px] lg:h-[150px]">
              <Video className={"w-full h-full object-cover"} />
            </div>
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default OurTeam;

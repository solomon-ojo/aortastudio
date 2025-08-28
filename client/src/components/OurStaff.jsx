import React from "react";
import Container from "./Container";
import AnimatedButton from "./AnimatedButton";
import { motion } from "framer-motion";
import TeamCard from "./TeamCard";

const OurStaff = () => {
  return (
    <motion.section
      initial={{ backgroundColor: "#6B7280", color: "white" }} // gray-500
      whileInView={{ backgroundColor: "#000000", color: "black" }} // black
      exit={{ backgroundColor: "#6B7280" }} // fade back gray-500
      transition={{ duration: 3 }}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full min-h-screen flex pb-10 relative z-40 about-team "
    >
      <Container>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
          className="w-full h-full"
        >
          <div className="w-full h-full pt-20">
            <h1 className="text-center text-white pb-3">OUR TEAM</h1>
            <TeamCard />
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default OurStaff;

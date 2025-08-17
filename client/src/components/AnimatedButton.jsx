import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const AnimatedButton = ({ bg, text, textClass, iconClass }) => {
  return (
    <div className={`${bg} flex items-center justify-center w-24 `}>
      <span className={textClass}>{text}</span>{" "}
      <span className={iconClass}>
        <IoIosArrowRoundForward size={30} className="hover:scale-95" />
      </span>
    </div>
  );
};

export default AnimatedButton;

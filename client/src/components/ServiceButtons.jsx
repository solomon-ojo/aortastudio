import React from "react";
import { FaRegCircle } from "react-icons/fa";
const ServiceButtons = ({ text }) => {
  return (
    <button className="flex items-center justify-center gap-3 border border-gray-500  rounded-2xl bg-inherit px-3 py-1">
      <FaRegCircle className="text-base  text-gray-500" />
      <span className=" text-xs lg:text-sm  text-gray-200 hover:text-white ">
        {text}
      </span>
    </button>
  );
};

export default ServiceButtons;

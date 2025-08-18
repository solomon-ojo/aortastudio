import React from "react";

const IndustryCard = ({ icon, text }) => {
  return (
    <div className="w-full h-full bg-inherit border border-white p-4 flex items-center">
      <div className="w-full h-[200px] flex flex-row lg:flex-col items-end lg:items-start lg:justify-center gap-3 lg:gap-6">
        <div className="lg:pb-5 flex items-center ">{icon}</div>
        <div className="capitalize text-sm lg:text-xl text-gray-700 flex items-center  ">
          {text}
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;

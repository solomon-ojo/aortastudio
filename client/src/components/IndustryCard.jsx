import React from "react";

const IndustryCard = ({ icon, text }) => {
  return (
    <div className="w-full h-full bg-inherit border border-white p-4 flex items-center">
      <div className="w-full h-[200px] flex flex-col items-center lg:items-start justify-center gap-3 lg:gap-6">
        <div className="lg:pb-5 flex items-center ">{icon}</div>
        <div className="capitalize text-base lg:text-xl text-black font-bold flex items-center  ">
          {text}
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;

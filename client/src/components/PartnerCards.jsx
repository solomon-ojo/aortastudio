import React from "react";

const PartnersCard = ({ text }) => {
  return (
    <div
      className={` w-full h-full bg-inherit border-r border-r-gray-800 border-t border-t-gray-800 border-b border-b-gray-800   p-4 flex items-center`}
    >
      <div className="w-full  flex justify-center gap-3 ">
        <div className="capitalize text-xl text-white flex items-center py-6 ">
          {text}
        </div>
      </div>
    </div>
  );
};

export default PartnersCard;

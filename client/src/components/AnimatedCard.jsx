import React from "react";
import { BsPlusLg } from "react-icons/bs";

const Card = ({ title, description }) => {
  return (
    <div className="relative w-full h-[500px]  hover:bg-white overflow-hidden group cursor-pointer p-4 border border-white">
      {/* Header - always visible */}
      <div className="absolute top-0 left-0 w-full flex justify-evenly  gap-6 px-4 py-2 pt-8">
        <span className="text-gray-700  text-4xl font-semibold">{title}</span>
        <span className="">
          <BsPlusLg size={40} className=" text-gray-700" />
        </span>
      </div>

      {/* Description - fades in on hover */}
      <div className="absolute inset-0 flex items-center justify-center px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-black text-sm">{description}</p>
      </div>

      {/* Blue Stars */}
      <div className="absolute bottom-0 left-0 w-full h-2/3 overflow-hidden pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
        {[...Array(40)].map((_, i) => {
          const size = Math.random() * 6 + 10;
          const left = Math.random() * 100;
          const bottom = Math.random() * 100;
          const delay = Math.random() * 2;

          return (
            <div
              key={i}
              className="absolute bg-green-500 rounded-full shadow-white shadow-md animate-particle"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                bottom: `${bottom}%`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Card;

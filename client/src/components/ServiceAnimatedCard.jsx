import React from "react";
import { BsPlusLg } from "react-icons/bs";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden  border border-gray-800   text-white">
      {/* Large screens: hover layout */}
      <div className="hidden lg:block group relative w-full h-full hover:bg-gray-600 cursor-pointer">
        {/* Header */}
        <div className="absolute top-0 left-0 w-full flex justify-evenly gap-6 px-4 py-2 pt-8">
          <span className="text-white text-4xl font-semibold">{title}</span>
          <BsPlusLg size={40} className="text-white" />
        </div>

        {/* Hover Description */}
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className=" text-lg font-semibold text-white">{description}</p>
        </div>

        {/* Animation */}
        <div className="absolute bottom-0 left-0 w-full h-2/3 overflow-hidden pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
          {[...Array(40)].map((_, i) => {
            const size = Math.random() * 6 + 10;
            const left = Math.random() * 100;
            const bottom = Math.random() * 100;
            const delay = Math.random() * 2;

            return (
              <div
                key={i}
                className="absolute bg-white rounded-full shadow-white shadow-md animate-particle"
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

      {/* Medium screens: split layout */}
      <div className="hidden md:flex lg:hidden w-full h-full flex-row">
        {/* Left: title + animation */}
        <div className="w-1/2 flex flex-col justify-between items-center p-4 pt-10">
          <h2 className="text-2xl font-semibold text-white ">{title}</h2>
          <div className="relative w-full h-2/3 overflow-hidden">
            {[...Array(40)].map((_, i) => {
              const size = Math.random() * 6 + 10;
              const left = Math.random() * 100;
              const bottom = Math.random() * 100;
              const delay = Math.random() * 2;

              return (
                <div
                  key={i}
                  className="absolute bg-white rounded-full shadow-white shadow-md animate-particle"
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

        {/* Right: description */}
        <div className="w-1/2 flex items-center justify-center p-4">
          <p className=" text-white text-xl font-semibold text-center">
            {description}
          </p>
        </div>
      </div>

      {/* Small screens: stacked layout */}
      <div className="flex flex-col md:hidden w-full h-full">
        {/* Text on top */}
        <div className="p- h-1/2 text-center pt-10">
          <h2 className="text-2xl font-semibold mb-4 text-white py-3">
            {title}
          </h2>
          <p className="text-sm text-white">{description}</p>
        </div>

        {/* Animation below */}
        <div className="relative w-full h-1/2 overflow-hidden">
          {[...Array(40)].map((_, i) => {
            const size = Math.random() * 6 + 10;
            const left = Math.random() * 100;
            const bottom = Math.random() * 100;
            const delay = Math.random() * 2;

            return (
              <div
                key={i}
                className="absolute bg-white rounded-full shadow-white shadow-md animate-particle"
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
    </div>
  );
};

export default ServiceCard;

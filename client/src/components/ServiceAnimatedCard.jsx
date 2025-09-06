import React from "react";
import { BsPlusLg } from "react-icons/bs";

const ServiceCard = ({ title, description, benefits }) => {
  return (
    <div className="relative w-full h-[700px] md:h-[500px] overflow-hidden border border-gray-800 text-white px-3 lg:px-0">
      {/* Large screens: hover layout */}
      <div className="hidden lg:flex group relative w-full h-full hover:bg-gray-600 cursor-pointer flex-col px-4">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 h-[50px] mt-3">
          <span className="text-white text-4xl font-semibold">{title}</span>
          <BsPlusLg size={40} className="text-white" />
        </div>

        {/* Hover Description + Benefits */}
        <div className="flex-grow flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4 text-white text-sm xl:text-base">
          <p className="text-start font-semibold mb-4">{description}</p>
          <div>
            <p className="font-bold text-start text-black">
              {benefits?.heading}
            </p>
            <ul className="mt-2 pl-4 list-disc">
              {benefits?.text?.map((item, index) => (
                <li
                  key={index}
                  className="text-start border-b border-gray-400 py-2 font-bold"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
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
        <div className="w-1/2 flex flex-col justify-between p-4 pt-10">
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
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

        {/* Right: description + benefits */}
        <div className="w-1/2 flex flex-col pt-10 mt-10 pl-4 text-center">
          <p className="text-white text-base text-start font-semibold mb-4">
            {description}
          </p>
          <div className="font-bold">
            {/* Hid this to conform with the original design */}
            <p className="text-white text-sm font-medium text-start hidden">
              {benefits?.heading}
            </p>
            <ul className="mt-2 text-start pl-4 list-disc">
              {benefits?.text?.map((item, index) => (
                <li
                  key={index}
                  className="text-white text-sm border-b border-gray-400 py-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Small screens: stacked layout */}
      <div className="flex flex-col md:hidden w-full h-full">
        {/* Text on top */}
        <div className="h-1/2 text-center pt-10 px-4 font-semibold">
          <h2 className="text-2xl font-semibold mb-4 text-white py-3">
            {title}
          </h2>
          <p className="text-sm text-white mb-4">{description}</p>
          <div>
            {/* Hid this to conform with the original design */}
            <p className="text-white text-start font-semibold hidden">
              {benefits?.heading}
            </p>
            <ul className="mt-2 text-left pl-4 list-disc">
              {benefits?.text?.map((item, index) => (
                <li
                  key={index}
                  className="text-white text-sm border-b border-gray-500 py-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Animation below */}
        <div className="relative w-full h-1/2 overflow-hidden mt-24">
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

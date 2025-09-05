import React from "react";
import { BsPlusLg } from "react-icons/bs";

const Card = ({ title, description, benefits }) => {
  return (
    <div className="relative w-full h-[700px] md:h-[500px] overflow-hidden border border-white text-white px-3 lg:px-0">
      {/* Large screens: hover layout */}
      <div className="hidden lg:flex group relative w-full h-full hover:bg-white cursor-pointer flex-col px-4">
        {/* Fixed Title Section */}
        <div className="flex justify-center items-center gap-4 h-[50px] mt-3 ">
          <span className="text-gray-700 text-2xl xl:text-4xl font-semibold">{title}</span>
          <BsPlusLg size={40} className="text-gray-700" />
        </div>

        {/* Content Section */}
        <div className="flex-grow flex flex-col  justify-center opacity-0 group-hover:opacity-100  text-sm xl:text-base transition-opacity duration-300 text-center">
          <p className=" flex text-start font-semibold text-gray-700 mb-4">
            {description}
          </p>
          <div>
            <p className="text-gray-700 font-bold text-start">
              {benefits.heading}:
            </p>
            <ul className="mt-2 pl-4 list-disc">
              {benefits.text.map((text, index) => (
                <li
                  key={index}
                  className="text-gray-700 text-start  border-b border-b-gray-400 py-2 font-bold "
                >
                  {text}
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

      {/* Medium screens: split layout */}
      <div className="hidden md:flex lg:hidden w-full h-full flex-row">
        {/* Left: title + animation */}
        <div className="w-1/2 flex flex-col justify-between  p-4 pt-10">
          <h2 className="text-2xl font-semibold text-black">{title}</h2>
          <div className="relative w-full h-2/3 overflow-hidden">
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

        {/* Right: description + benefits */}
        <div className="w-1/2 flex flex-col  pt-10 mt-10 pl-4  text-center">
          <p className="text-black text-base text-start font-semibold mb-4">{description}</p>
          <div className="font-bold">
            <p className="text-black text-sm font-medium text-start">{benefits.heading}</p>
            <ul className="mt-2 text-start list-disc">
              {benefits.text.map((text, index) => (
                <li key={index} className="text-black text-sm border-b border-b-gray-400 py-2">
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Small screens: stacked layout */}
      <div className="flex flex-col md:hidden w-full h-full">
        {/* Text on top */}
        <div className="h-1/2 text-center mb-10 pt-10 px-4 font-semibold">
          <h2 className="text-xl text-start font-semibold mb-4 text-black py-3">
            {title}
          </h2>
          <p className="text-sm text-start text-black mb-4">{description}</p>
          <div>
            <p className="text-black text-start font-semibold">{benefits.heading}</p>
            <ul className="mt-2 text-start list-disc">
              {benefits.text.map((text, index) => (
                <li key={index} className="text-black text-sm border-b border-b-gray-500 py-2">
                  {text}
                </li>
              ))}
            </ul>
          </div>
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
    </div>
  );
};

export default Card;

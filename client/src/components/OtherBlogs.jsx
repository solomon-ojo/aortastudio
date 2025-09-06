import React, { useState } from "react";
import { VscArrowRight } from "react-icons/vsc";
import { clientCards } from "../utils/card";
import { Link } from "react-router-dom";

const OtherBlogs = () => {
  const [hoveredCardId, setHoveredCardId] = useState(null);

  return (
    <section className="w-full text-gray-900 bg-white lg:bg-emerald-50 ">
      <h1 className="py-2 text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl bg-white">
        You may also read:
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   cursor-pointer">
        {clientCards.slice(0, 3).map((card) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            to={"/blog/blog-details"}
            key={card.id}
            onMouseEnter={() => setHoveredCardId(card.id)}
            onMouseLeave={() => setHoveredCardId(null)}
            className="flex flex-col items-center justify-between h-[450px] px-6 hover:bg-gray-200 border-b border-r lg:border-r-0 border-r-gray-200  lg:border-b-0  lg:border lg:border-gray-800"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-2/3 object-cover p-4"
              draggable={false}
            />
            <div className="p-2  text-gray-400 text-xl font-semibold">
              {card.title}
            </div>
            <div className="w-full pl-5 mb-4">
              <VscArrowRight
                size={30}
                className={`transition-all duration-300 ease-in-out ${
                  hoveredCardId === card.id
                    ? "text-green-700 -rotate-45"
                    : "text-gray-600"
                }`}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OtherBlogs;

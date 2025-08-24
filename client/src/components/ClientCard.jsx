import React, { useState } from "react";
import { VscArrowRight } from "react-icons/vsc";
import { cards } from "../utils/card";
import { Link } from "react-router-dom";

const ClientCard = () => {
  const [hoveredCardId, setHoveredCardId] = useState(null);

  return (
    <section className="w-full text-white py-8 pt-12">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   cursor-pointer">
        {cards.map((card) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            to={"/client-stories/stats-perform"}
            key={card.id}
            onMouseEnter={() => setHoveredCardId(card.id)}
            onMouseLeave={() => setHoveredCardId(null)}
            className="flex flex-col items-center justify-between h-[450px] bg-black hover:bg-orange-900/20 shadow-md border border-gray-800"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-2/3 object-cover p-4"
              draggable={false}
            />
            <div className="p-2 text-center text-gray-400 text-xl font-semibold">
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

export default ClientCard;

import React, { useState } from "react";
import { VscArrowRight } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { cardDetails } from "../utils/projectDetails";

const ClientCard = () => {
  const [hoveredCardId, setHoveredCardId] = useState(null);

  return (
    <section className="w-full text-white py-8 pt-12">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   cursor-pointer">
        {cardDetails?.map((project) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            to={`/projects/${project.param}`}
            key={project.param}
            onMouseEnter={() => setHoveredCardId(project.param)}
            onMouseLeave={() => setHoveredCardId(null)}
            className="flex flex-col items-center justify-between p-4 h-[500px]  bg-black hover:bg-orange-900/20 shadow-md border border-gray-800"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-3/5 lg:h-1/2 object-cover mt-5 "
              draggable={false}
            />
            <div className="h-full lg:h-auto flex lg:flex-auto flex-col  pt-5  ">
              <div className=" flex-1 text-start text-gray-400 text-xl  font-semibold">
                {project.title}
              </div>
              <div className="w-full flex-1 flex items-end lg:items-center  pb-8 lg:pb-0 pl-5 mb-4">
                <VscArrowRight
                  size={30}
                  className={`transition-all duration-300 ease-in-out ${
                    hoveredCardId === project.param
                      ? "text-green-700 -rotate-45"
                      : "text-gray-600"
                  }`}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ClientCard;

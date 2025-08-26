import React, { useState } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import { VscArrowRight } from "react-icons/vsc";

const FeaturedBlog = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className=" h-[500px] sm:h-[800px] lg:h-[500px] hover:cursor-pointer  w-full bg-sky-100  text-gray-800 ">
      <Container>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="flex flex-col lg:flex-row w-full h-full pt-10"
        >
          {/* left */}
          <div className=" flex-1 h-full">
            <div className="mt-5">
              <Link
                to={"#"}
                className="text-sm md:text-lg lg:text-xl font-semibold px-4 py-2 border border-gray-800 rounded-full"
              >
                Featured Blog
              </Link>
            </div>
            <h1 className=" text-xl md:text-4xl lg:text-6xl mt-5">
              Outsourced Development vs. In-House Teams: Making the Right Choice
              for Your Business
            </h1>
            <p className="text-sm mt-5">
              Author: <span>Jova Milicech</span>
            </p>
            <div className="mt-5 hidden sm:block">
              <VscArrowRight
                className={` text-4xl lg:text-5xl transition-all duration-300 ease-in-out ${
                  hovered ? " -rotate-45" : "text-gray-600"
                }`}
              />
            </div>
          </div>
          {/* right */}
          <div className=" flex-1 h-full">
            <img
              src="/img1.jpg"
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedBlog;

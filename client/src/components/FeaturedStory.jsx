import React from "react";
import Container from "./Container";
import UnityLink from "./UnityLink";
import { GoArrowRight } from "react-icons/go";

const FeaturedStory = () => {
  return (
    <section className="min-h-screen w-full bg-black pt-10 border-b  border-b-gray-800 ">
      <Container>
        <div className="w-full  text-white flex flex-col lg:flex-row items-stretch lg:pt-10">
          {/* left */}
          <div className="flex-1 ">
            <UnityLink
              text={"featured story"}
              className={
                "px-3 py-1 text-sm uppercase text-green-400 font-semibold border border-gray-300 rounded-2xl"
              }
            />
            <div className="pt-7">
              <p className="text-xl sm:text-2xl md:text-4xl lg:text-6xl">
                Internal software tools for support of internal development
                process
              </p>
            </div>
            <div className="pt-10">
              <h2 className="uppercase">services:</h2>
              <div className="flex flex-col gap-3 pt-2">
                <UnityLink
                  text={"Building digital products end-to-end"}
                  className={
                    "px-3 py-1 text-sm capitalize text-white font-semibold border border-gray-300 rounded-2xl"
                  }
                />
                <UnityLink
                  text={"Devops and Migrations"}
                  className={
                    "px-3 py-1 text-sm capitalize text-white font-semibold border border-gray-300 rounded-2xl"
                  }
                />
              </div>
            </div>
            <div className="pt-4">
              <h2 className="uppercase">industry:</h2>
              <div className="pt-2">
                <UnityLink
                  text={"Technology"}
                  className={
                    "px-3 py-1 text-sm capitalize text-white font-semibold border border-gray-300 rounded-2xl"
                  }
                />
              </div>
            </div>
            <div className="py-5 hidden sm:block">
              <GoArrowRight className="text-5xl text-gray-300 font-light" />
            </div>
          </div>
          {/* right */}
          <div className="flex-1  ">
            <img
              src="/img3.jpg"
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedStory;

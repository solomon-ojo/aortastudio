import React from "react";
import Container from "../../components/Container";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import UnityLink from "../../components/UnityLink";

const Unity = () => {
  return (
    <main className="w-full min-h-screen pt-28 px-5  bg-[#C4D6D466] overflow-hidden ">
      
        <div className="w-full h-full lg:rounded-tr-xl lg:rounded-tl-xl bg-white text-black  overflow-hidden">
          <div className="fixed right-10 lg:right-16 top-30 lg:top-40 z-20">
            <Link to={"/projects"} onClick={() => scrollTo(0, 0)}>
              <IoMdClose
                size={35}
                className="cursor-pointer text-gray-200 bg-gray-600 h-[40px] w-[40px]  rounded-full"
              />
            </Link>{" "}
          </div>
          {/* Scrollable content inside fixed height */}
          <div className="w-full h-full flex flex-col overflow-y-auto">
            {/* Upper Section */}
            <div className="flex-1 w-full flex flex-col lg:flex-row bg-red-300 ">
              {/* Left */}
              <div className="flex-1 ">
                <img
                  src="/project_hero.jpg"
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Right */}
              <div className="flex-1 bg-black flex justify-center p-4 pt-5 overflow-auto">
                <h1 className="text-white text-xl md:text-4xl lg:text-5xl py-5 ">
                  Internal software tools for support of internal development
                  process
                </h1>
              </div>
            </div>

            {/* Lower Section */}
            <div className="flex-1 w-full flex flex-col lg:flex-row bg-white ">
              {/* Left */}
              <div className="flex-1 flex flex-col justify-center p-4">
                {/* service */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-3 border-b pb-4 ">
                  <h2 className="uppercase text-sm lg:text-base ">services:</h2>
                  <div className="flex flex-col lg:flex-row gap-3 ">
                    <UnityLink
                      text={"Building digital products end-to-end"}
                      className={
                        "px-3 py-1 text-xs lg:text-sm capitalize text-black font-semibold border border-gray-300 rounded-2xl"
                      }
                    />
                    <UnityLink
                      text={"Devops and Migrations"}
                      className={
                        "px-3 py-1 text-xs lg:text-sm capitalize text-black font-semibold border border-gray-300 rounded-2xl"
                      }
                    />
                  </div>
                </div>
                {/* industry */}
                <div className="flex flex-col md:flex-row md:items-center gap-3 py-4 border-b">
                  <h2 className="uppercase text-sm lg:text-base">industry:</h2>
                  <div className="">
                    <UnityLink
                      text={"Technology"}
                      className={
                        "px-3 py-1 text-sm capitalize text-black font-semibold border border-gray-300 rounded-2xl"
                      }
                    />
                  </div>
                </div>
                {/* tech stack */}
                <div className="flex flex-col md:flex-row md:items-center gap-3 py-4 border-b">
                  <h2 className="uppercase text-sm lg:text-base whitespace-nowrap">
                    Tech stack:
                  </h2>
                  <div className="">
                    <p className="text-sm">
                      Node.js, React, C#, Angular, PostgreSQL, Redis, BigQuery,
                      MSSQL, Docker, GCP, Active Directory, Kubernetes, Okta,
                      Jira, Confluence, WordPress
                    </p>
                  </div>
                </div>
              </div>
              {/* Right */}
              <div className="flex-1 flex flex-col lg:items-center justify-center bg-white gap-y-4 px-4 py-5 overflow-auto ">
                <div className="">
                  <h1 className="text-xl font-semibold  py-2 mb-2 text-gray-500">
                    About Project
                  </h1>
                  <p className="text-black text-sm md:text-base">
                    We built various internal tools for this gaming company to
                    support their development process. We handled the entire
                    development cycle, from mockup, design and architecture to
                    implementation and maintenance.
                  </p>
                </div>
                <div className="">
                  <h1 className="text-xl font-semibold mb-2 py-2 text-gray-500">
                    About Client
                  </h1>
                  <p className="text-black  text-sm md:text-base">
                    Unity is a cross-platform 2D and 3D game engine that powers
                    50% of all mobile games and is run on more than 1.5 billion
                    devices. It is also an engine for building games on desktop,
                    consoles, virtual reality and many other platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </main>
  );
};

export default Unity;

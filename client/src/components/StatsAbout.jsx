import React from "react";
import StatPerformButtons from "./StatPerformButtons";
import Container from "./Container";

const StatsAbout = () => {
  return (
    <section className="h-[600px] lg:h-[500px] w-full bg-white text-gray-800">
      <Container>
        <div className="h-full w-full flex flex-col lg:flex-row items-center gap-4">
          {/* left */}
          <div className="flex-1 flex flex-col gap-2 h-2/3 lg:h-full w-full px-4 ">
            {/* upper */}
            <div className="h-full w-full flex flex-col lg:flex-row items-start lg:items-center gap-4 border-b">
              <div className="">
                <h2 className="uppercase font-semibold pt-4">services</h2>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-start gap-4">
                <StatPerformButtons text={"Custom software development"} />
                <StatPerformButtons text={"Software testing"} />
              </div>
            </div>
            {/* middle */}
            <div className="h-full w-full flex flex-col lg:flex-row items-start lg:items-center gap-4 border-b">
              <div className="">
                <h2 className="uppercase font-semibold">industries</h2>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-4">
                <StatPerformButtons text={"Fintech"} />
              </div>
            </div>
            {/* bottom */}
            <div className="h-full w-full flex flex-col lg:flex-row items-start lg:items-center gap-4 border-b">
              <div className="">
                <h2 className="uppercase font-semibold">Tech stack</h2>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-4">
                <p className="">
                  C#, C++, ASP.NET MVC, MSSQL, JavaScript, Jira
                </p>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="flex-1 h-full w-full  flex flex-col justify-between px-4">
            <div className="w-full h-1/2 pt-6 ">
              <h1 className="text-gray-500 text-xl md:text-2xl  py-2">
                About Project
              </h1>
              <p className="">
                We built various tools for live sport players tracking for
                business applications and analytics used by Analysts, Clubs and
                the Media. We handled the entire development cycle, from design
                and architecture to implementation and maintena
              </p>
            </div>
            <div className="w-full h-1/2 pt-4">
              <h1 className="text-gray-500 text-xl md:text-2xl  py-2 ">
                About Client
              </h1>
              <p className="">
                Stats Perform is a sports data collection and analytics company
                with 3,000+ employees. They acquired Prozone, also one of our
                clients, which performed athlete tracking and analytics for
                world-leading sports clubs and leagues.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StatsAbout;

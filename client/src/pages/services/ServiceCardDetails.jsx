import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import UnityLink from "../../components/UnityLink";
import { cardDetails } from "../../utils/projectDetails";

const ServiceCardDetails = () => {
  const { param } = useParams();
    const [details, setDetails] = useState(null);
    const fetchDetails = () => {
      const targetDetail = cardDetails.filter((d) => d.param === param);
      setDetails(targetDetail);
    };
    useEffect(() => {
      fetchDetails();
    }, [param]);

  return (
    <main className="w-full min-h-screen pt-28 px-3 lg:px-5  bg-[#C4D6D466] overflow-hidden ">
      {details?.map((detail) => (
        <div
          key={detail.param}
          className="w-full h-full lg:rounded-tr-xl lg:rounded-tl-xl bg-white text-black  overflow-hidden"
        >
          <div className="fixed right-3 lg:right-8 top-28 lg:top-32 z-20">
            <Link to={"/custom-software-development"} onClick={() => scrollTo(0, 0)}>
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
                  src={detail.img}
                  alt={detail.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Right */}
              <div className="flex-1 bg-black flex justify-center p-4 pt-5 overflow-auto">
                <h1 className="text-white text-xl md:text-4xl lg:text-5xl py-5 ">
                  {detail.heading}
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
                    {detail.service.map((item) => (
                      <UnityLink
                        text={item}
                        className={
                          "px-3 py-1 text-xs lg:text-sm capitalize text-black font-semibold border border-gray-300 rounded-2xl"
                        }
                      />
                    ))}
                  </div>
                </div>
                {/* industry */}
                <div className="flex flex-col md:flex-row md:items-center gap-3 py-4 border-b">
                  <h2 className="uppercase text-sm lg:text-base">industry:</h2>
                  <div className="">
                    {detail.industry.map((item) => (
                      <UnityLink
                        text={item}
                        className={
                          "px-3 py-1 text-xs lg:text-sm capitalize text-black font-semibold border border-gray-300 rounded-2xl"
                        }
                      />
                    ))}
                  </div>
                </div>
                {/* tech stack */}
                <div className="flex flex-col md:flex-row md:items-center gap-3 py-4 border-b">
                  <h2 className="uppercase text-sm lg:text-base whitespace-nowrap">
                    Tech stack:
                  </h2>
                  <div className="w-full flex items-center gap-2">
                    {detail.techStack.map((item) => (
                      <p className="text-sm  w-full">
                        <span className="">{item}</span>
                      </p>
                    ))}
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
                    {detail.aboutProject}
                  </p>
                </div>
                <div className="">
                  <h1 className="text-xl font-semibold mb-2 py-2 text-gray-500">
                    About Client
                  </h1>
                  <p className="text-black  text-sm md:text-base">
                    {detail.aboutClient}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default ServiceCardDetails;

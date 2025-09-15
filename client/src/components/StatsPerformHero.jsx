import React, { useEffect, useState } from "react";
import Container from "./Container";
import StatPerformButtons from "./StatPerformButtons";
import { cardDetails } from "../utils/projectDetails";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const StatsPerformHero = ({ param }) => {
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();
  const fetchDetails = () => {
    const targetDetail = cardDetails.filter((d) => d.param === param);
    setDetails(targetDetail);
  };
  useEffect(() => {
    fetchDetails();
  }, [param]);
  return (
    <section className="min-h-screen w-full">
      {details?.map((detail) => (
        <div key={detail.param} className="w-full h-full">
          <div className="fixed right-2 lg:right-3 top-20 z-20">
            <IoMdClose
              onClick={() => navigate(-1)}
              size={35}
              className="cursor-pointer text-gray-200 bg-gray-600 h-[40px] w-[40px]  rounded-full"
            />
          </div>
          {/* upper part */}
          <div className="h-[600px] lg:h-[500px] w-full bg-sky-100 text-gray-800">
            <div className="flex flex-col lg:flex-row items-center h-full w-full pt-20">
              {/* left */}
              <div className="flex-1 h-3/5 lg:h-full w-full bg-red-600">
                <img
                  src={detail.img}
                  alt={detail.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* right */}
              <div className="flex-1 h-full w-full bg-black text-white">
                <p className="text-lg sm:text-2xl md:text-4xl lg:text-5xl pt-10 px-3 lg:px-5">
                  {detail.heading}
                </p>
              </div>
            </div>
          </div>
          {/* lower part */}

          <div className=" h-[1000px] md:h-[600px] lg:h-[500px] w-full bg-white text-gray-800">
            <Container>
              <div className="h-full w-full flex flex-col lg:flex-row items-center gap-4">
                {/* left */}
                <div className="flex-1 flex flex-col gap-2 h-2/3 lg:h-full w-full  ">
                  {/* upper */}
                  <div className="h-full w-full flex flex-col lg:flex-row items-start lg:items-center gap-4 border-b">
                    <div className="">
                      <h2 className="uppercase font-semibold pt-4 lg:pt-0">
                        services
                      </h2>
                    </div>
                    <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-start gap-4">
                      {detail?.service?.map((item, index) => (
                        <StatPerformButtons key={index} text={item} />
                      ))}
                    </div>
                  </div>
                  {/* middle */}
                  <div className="h-full w-full flex flex-col lg:flex-row items-start lg:items-center gap-4 border-b">
                    <div className="">
                      <h2 className="uppercase font-semibold">industries</h2>
                    </div>
                    <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-4">
                      {detail?.industry?.map((item, index) => (
                        <StatPerformButtons key={index} text={item} />
                      ))}
                    </div>
                  </div>
                  {/* bottom */}
                  <div className="h-full w-full flex flex-col lg:flex-row items-start lg:items-center gap-4 border-b">
                    <div className="">
                      <h2 className="uppercase font-semibold">Tech stack</h2>
                    </div>
                    <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-4">
                      {detail?.techStack?.map((item, index) => (
                        <p key={index} className="">
                          <span className="">{item}</span>{" "}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                {/* right */}
                <div className="flex-1 h-full w-full  flex flex-col justify-between lg:px-4">
                  <div className="w-full h-1/2 pt-6 ">
                    <h1 className="text-gray-500 text-xl md:text-2xl  py-2">
                      About Project
                    </h1>
                    <p className="">{detail.aboutProject}</p>{" "}
                  </div>
                  <div className="w-full h-1/2 pt-4">
                    <h1 className="text-gray-500 text-xl md:text-2xl  py-2 ">
                      About Client
                    </h1>
                    <p className="">{detail.aboutClient}</p>{" "}
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      ))}
    </section>
  );
};

export default StatsPerformHero;

import React from "react";
import Container from "./Container";
import { quickLinks, services } from "../utils/navLinks";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <section className="w-full min-h-[600px] lg:h-[600px] flex py-20 border-b border-gray-300 bg-black relative z-40">
      <Container>
        <div className="text-white w-full h-full flex flex-col lg:flex-row  items-center gap-6">
          {/* first */}
          <div className=" flex-1 w-full h-full flex flex-col  sm:flex-row lg:flex-col justify-between gap-4  py-10">
            <div className="flex-1">
              <Link onClick={() => scrollTo(0, 0)} to={"/"}>
                <span className="text-4xl font-semibold">Aorta Studios</span>
              </Link>{" "}
            </div>
            <div className="flex-1">
              <span className=" text-sm lg:text-[15px] ">
                &apos;2025 Aorta Studios, All Rights Reserved. Berlin, Germany,
                Antwerpener Str 5; +491622403451
              </span>
            </div>
          </div>
          {/* second */}
          <div className=" flex-[2] w-full h-full pt-10 flex  flex-col sm:flex-row justify-start gap-8 lg:gap-0 lg:justify-between">
            <div className="">
              <h1 className="text-2xl text-gray-500">Services</h1>
              <div className="">
                <ul className="">
                  {services.map((service) => (
                    <li
                      key={service.path}
                      className=" text-sm lg:text-[15px] py-3"
                    >
                      <Link onClick={() => scrollTo(0, 0)} to={service.path}>
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <ul className="">
                {quickLinks.map((link) => (
                  <li
                    key={link.path}
                    className=" text-sm lg:text-[15px] py-2 lg:py-3"
                  >
                    <Link onClick={() => scrollTo(0, 0)} to={link.path}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* third */}
          <div className=" flex-1 w-full h-full flex flex-col justify-between pt-10">
            <div className="flex-1 h-full"></div>
            <div className="flex-1 h-full flex lg:justify-end lg:pb-10">
              {/* social media links */}
              <SocialLinks className={"flex items-center gap-6"} />
            </div>
          </div>
        </div>
      </Container>{" "}
    </section>
  );
};

export default Footer;

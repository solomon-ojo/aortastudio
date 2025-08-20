import React from "react";
import Container from "./Container";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { quickLinks, services } from "../utils/navLinks";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="w-full min-h-[600px] lg:h-[600px] flex py-20 border-b border-gray-300 bg-black relative z-40">
      <Container>
        <div className="text-white w-full h-full flex flex-col lg:flex-row  items-center gap-6">
          {/* first */}
          <div className=" flex-1 w-full h-full flex flex-col  sm:flex-row lg:flex-col justify-between gap-4  py-10">
            <div className="flex-1">
              <span className="text-4xl font-semibold">Itekako</span>
            </div>
            <div className="flex-1">
              <span className=" text-sm lg:text-[15px] ">
                &apos;2025 Itekako, All Rights Reserved. Belgrade, Serbia,
                Masarikova 5; +381114078146
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
                      <Link to={service.path}>{service.name}</Link>
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
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* third */}
          <div className=" flex-1 w-full h-full flex flex-col justify-between pt-10">
            <div className="flex-1 h-full"></div>
            <div className="flex-1 h-full flex lg:justify-end lg:pb-10">
              <div className="flex items-center gap-6">
                <FaLinkedin className="text-4xl text-white" />
                <FaInstagramSquare className="text-4xl text-white" />
                <BiLogoFacebookCircle className="text-4xl text-white" />
              </div>
            </div>
          </div>
        </div>
      </Container>{" "}
    </section>
  );
};

export default Footer;

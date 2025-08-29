import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
import { VscArrowRight } from "react-icons/vsc";
import { Link } from "react-router-dom";

import Container from "./Container";
import { quickLinks, services, servicesLinks } from "../utils/navLinks";
import SocialLinks from "./SocialLinks";

const desktopLinkStyle =
  " relative text-[13px]   px-2 font-semibold text-white nav-link uppercase flex flex-nowrap whitespace-nowrap";

const Navbar = () => {
  const [hover, setHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const match = useMatch()

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <header className="bg-black h-[80px] w-full flex flex-col items-center z-50 lg:z-10 fixed top-0 left-0">
      <Container>
        <div className="w-full flex justify-between items-center text-white h-full relative">
          {/* left */}
          <div className="flex-1 flex items-center">
            <Link onClick={() => scrollTo(0, 0)} to={"/"}>
              <span className="text-white font-bold text-xl capitalize">
                itekako
              </span>
            </Link>
          </div>

          {/* right */}
          <div className="flex-1 flex items-center ">
            <nav className="hidden lg:block">
              <ul className="flex items-center justify-center gap-6 h-full">
                {/* Services trigger */}
                <li
                  // onMouseLeave={handleMouseLeave}
                  // onMouseEnter={handleMouseEnter}
                  className={`${desktopLinkStyle} flex items-center gap-2 cursor-pointer group`}
                >
                  <Link to={"/custom-software-development"}>Services</Link>
                  <FaChevronDown
                    color="gray"
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </li>
                {/* Desktop links */}
                {quickLinks.slice(0, quickLinks.length - 1).map((link) => (
                  <li key={link.path} className={desktopLinkStyle}>
                    <Link onClick={() => scrollTo(0, 0)} to={link.path}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className=" flex  justify-end lg:hidden  h-full w-full">
              <div
                onClick={handleToggle}
                className=" h-9 w-9 z-50 rounded-full flex items-center justify-center border border-gray-200 hover:cursor-pointer"
              >
                <LuPlus
                  size={30}
                  color="white"
                  className={`${isOpen && "rotate-[-45deg]"}`}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* mobile nav */}

      <nav
        onClick={handleToggle}
        className={`${isOpen ? "top-[80px]  " : "top-[-150%]"}
    fixed left-0 w-full  h-screen bg-black text-white lg:hidden  transition-all duration-700 ease-in-out pb-10`}
      >
        <div className=" w-full  h-full flex mt-2">
          <div className="w-full">
            <div className="w-full">
              {/* <h2 className="pl-14 border-b border-gray-800 text-xl sm:text-3xl font-semibold pb-2">
                Services
              </h2> */}

              {/* commneted this out for future use */}
              {/* <ul className=" py-2 bg-stone-800/60">
                {services.map((service) => (
                  <li
                    key={service.path}
                    className=" text-sm sm:text-lg border-b-[0.25px] border-gray-800"
                  >
                    <Link
                      onClick={() => scrollTo(0, 0)}
                      className="pl-14"
                      to={service.path}
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul> */}
            </div>
            <ul className="">
              {servicesLinks.map((service) => (
                <li
                  key={service.path}
                  className="pl-14 border-b border-gray-800 text-lg sm:text-2xl font-semibold  py-4 my-1"
                >
                  <Link onClick={() => scrollTo(0, 0)} to={service.path}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* SOCIAL MEDIA LINKS */}
            <SocialLinks className={"flex items-center gap-6 pl-14 pt-5"} />
          </div>
        </div>
      </nav>

      {/* Full-width dropdown */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`absolute top-[70px] left-0 w-full bg-black text-white shadow-lg 
              transition-all duration-700 ease-in-out 
              ${
                hover
                  ? "opacity-100 translate-y-0 visible border-t border-t-gray-800"
                  : "opacity-0 -translate-y-5 invisible"
              }`}
        style={{
          height: "250px", // Adjust height as needed
        }}
      >
        <Container>
          <div
            onClick={handleMouseLeave}
            className="flex justify-center items-center gap-6 h-full w-full overflow-y-hidden overflow-x-hidden mx-auto "
          >
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className={`h-full flex flex-col justify-between  ${
                  index === services.length - 1
                    ? ""
                    : "border-r border-r-gray-800 px-4"
                }  hover:bg-black transition-colors group  flex-1 gap-3`}
              >
                <span className="mt-4 text-start text-lg">{service.name}</span>
                <span className="flex  items-center justify-between gap-3">
                  <span className="flex-1 mb-4 pb-4">
                    <img
                      src="/img5.jpg"
                      width={300}
                      height={300}
                      alt="icon"
                      className=""
                    />
                  </span>
                  <VscArrowRight
                    size={30}
                    className="flex-1 group-hover:rotate-[-45deg] group-hover:text-green-700 group-hover:transition-all duration-700 ease-in-out"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;

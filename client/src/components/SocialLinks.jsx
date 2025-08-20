import React from "react";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const SocialLinks = ({className}) => {
  return (
    <div className={className}>
      <FaLinkedin className="text-4xl text-white" />
      <FaInstagramSquare className="text-4xl text-white" />
      <BiLogoFacebookCircle className="text-4xl text-white" />
    </div>
  );
};

export default SocialLinks;

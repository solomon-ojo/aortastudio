import React from "react";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialLinks = ({ className }) => {
  return (
    <div className={className}>
      <Link to={"#"}>
        <FaLinkedin className="text-4xl text-white" />
      </Link>{" "}
      <Link to={"#"}>
        <FaInstagramSquare className="text-4xl text-white" />
      </Link>{" "}
      <Link to={"#"}>
        <BiLogoFacebookCircle className="text-4xl text-white" />
      </Link>{" "}
    </div>
  );
};

export default SocialLinks;

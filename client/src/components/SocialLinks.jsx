import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";

const SocialLinks = ({ className }) => {
  return (
    <div className={className}>
      <Link to={"https://www.linkedin.com/company/aorta-studios/"}>
        <FaLinkedin className="text-4xl text-white" />
      </Link>{" "}
      <Link to={"mailto:info@aortastudios.com"}>
        <MdEmail className="text-4xl text-white" />
      </Link>{" "}
      <Link to={"tel:+491622403451"}>
        <MdPhone className="text-4xl text-white" />
      </Link>{" "}
    </div>
  );
};

export default SocialLinks;

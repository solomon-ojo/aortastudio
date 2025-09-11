import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const SocialLinks = ({ className }) => {
  return (
    <div className={className}>
      <a target="_blank" href="https://www.linkedin.com/company/aorta-studios/">
        <FaLinkedin className="text-4xl text-white" />
      </a>{" "}
      <a target="_blank" href="mailto:info@aortastudios.com">
        <MdEmail className="text-4xl text-white" />
      </a>
      <a href="tel:+491622403451">
        <MdPhone className="text-4xl text-white" />
      </a>
    </div>
  );
};

export default SocialLinks;

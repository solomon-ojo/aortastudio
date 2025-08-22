import React from "react";
import { Link } from "react-router-dom";
const UnityLink = ({ text,className }) => {
  return (
    <div className="h-10  flex items-center">
      <Link
        className={className}
        to={"#"}
      >
        {text}
      </Link>
    </div>
  );
};

export default UnityLink;

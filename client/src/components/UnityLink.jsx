import React from "react";
import { Link } from "react-router-dom";
const UnityLink = ({ text, className }) => {
  return (
    <div className="h-10  flex items-center">
      <div className={`${className} cursor-pointer `}>
        {text}
      </div>
    </div>
  );
};

export default UnityLink;

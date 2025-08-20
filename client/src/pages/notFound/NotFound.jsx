import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center  min-h-screen w-full ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-red-600 text-xl text-center">
          This page is not found
        </h1>
        <div className="flex items-center justify-center pt-5">
          <Link to={"/"} className="flex items-center justify-center">
            <FaArrowLeftLong className="text-white text-lg" />
            <button className="text-white px-3 py-2 rounded-2xl">
              Back to home page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

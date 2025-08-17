import React from "react";

const Container = ({ children }) => {
  return (
    <div className="px-10 w-full h-full  flex justify-center items-center  overflow-x-hidden">
      {children}
    </div>
  );
};

export default Container;

import React from "react";

const StatsAbout = () => {
  return (
    <section className="h-[460px] lg:h-[500px] w-full bg-sky-100 text-gray-800">
      <div className="flex flex-col lg:flex-row items-center h-full w-full">
        {/* left */}
        <div className="flex-1 h-2/3 lg:h-full w-full bg-red-600">left</div>
        {/* right */}
        <div className="flex-1 h-full w-full bg-green-600 text-white">
          right
        </div>
      </div>
    </section>
  );
};

export default StatsAbout;

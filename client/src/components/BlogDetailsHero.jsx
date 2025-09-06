import React from "react";

const BlogDetailsHero = () => {
  return (
    <section className="h-[400px] lg:h-[500px] w-full bg-emerald-50  text-gray-900 ">
      <div className="flex flex-col lg:flex-row items-center h-full w-full pt-20">
        {/* left */}
        <div className="flex-1 h-3/5 lg:h-full w-full bg-red-600">
          <img
            src="/img7.jpg"
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
        {/* right */}
        <div className="flex-1 h-full w-full px-6 ">
          <p className="text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl pt-10 px-5">
            8 Software Development KPIs You Actually Need to Track in 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsHero;

import React from "react";
import Container from "./Container";

const h1Style = "text-6xl  py-1 ";
const ClientStoriesHero = () => {
  return (
    <section className=" h-[460px] lg:h-[650px] w-full bg-sky-100 text-gray-800">
      <Container>
        <div className="w-full h-full flex flex-col md:flex-row items-center gap-4 pt-20 ">
          {/* left*/}
          <div className="h-full flex-1 pt-14 ">
            <h3 className=" text-sm  lg:text-base py-5 uppercase font-medium">client stories</h3>
            {/* desktop */}
            <div className="hidden lg:block">
              <h1 className={h1Style}>Journey with our</h1>
              <h1 className={h1Style}>Clients: Real stories,</h1>
              <h1 className={h1Style}>Real success.</h1>
            </div>
            <div className="block lg:hidden">
              <h1 className="text-xl sm:text-3xl md:text-4xl ">
                Journey with our Clients: Real stories, Real success.
              </h1>
            </div>
          </div>
          {/* right */}
          <div className="h-full flex-1 flex items-center lg:justify-end ">
            <p className=" text-sm md:text-base w-full lg:w-2/3">
              Harnessing the power of emerging and integrated technologies for
              over 15 years, we have delivered more than 200 high-end projects
              across 11 different industries.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ClientStoriesHero;

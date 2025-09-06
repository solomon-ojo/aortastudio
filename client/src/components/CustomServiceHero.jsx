import React from "react";
import Container from "./Container";

const CustomServiceHero = () => {
  return (
    <section className="fixed top-[80px] bg-black left-0 w-full min-h-screen lg:top-0 lg:h-screen  overflow-hidden">
      <Container>
        <div className="w-full  flex flex-col  justify-center pt-20">
          <div className="w-full mt-10   text-white  flex items-center flex-col lg:flex-row ">
            <div className="flex-1 w-full h-full ">
              <h1 className=" text-4xl md:text-5xl lg:text-7xl">
                Custom software development
              </h1>
            </div>
            <div className="flex-1 w-full h-full pt-6 ">
              <p className="text-sm md:text-lg">
                It all begins with an idea to tackle a business problem and ends
                with a fully functional solution that adds real value to your
                operations. From Fortune 500 to startups, companies trust our
                teams to create custom software solutions and the infrastructure
                that powers them.
              </p>
            </div>
          </div>

          <div className="w-full h-[350px]  flex items-center mt-6 pt-5">
            <div className="w-full flex-1 h-full hidden lg:block"></div>
            <div className="w-full  flex-1 h-full   ">
              <img src="/activity_icon.svg" alt="image" className="h-full w-full  object-cover" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CustomServiceHero;

import React from "react";
import Container from "./Container";
import GeneralCapabilityCard from "./GeneralCapabilitiesCards";
import { Link } from "react-router-dom";

const GeneraCapability = () => {
  return (
    <section className="w-full min-h-screen  flex pt-20 bg-white relative pb-10">
      <Container>
        <div className="w-full">
          <h1 className="w-full text-xl md:text-3xl lg:text-6xl text-center py-6">
            General Capabilities
          </h1>
          <GeneralCapabilityCard />
          <div className="w-full pt-10 ">
            <div className="hidden lg:block">
              <h1 className="text-6xl">Why Our Custom Software</h1>
              <h1 className="text-6xl">Development Services?</h1>
            </div>
            <div className="lg:hidden">
              <h1 className="text-xl md:text-3xl">
                Why Our Custom Software Development Services?
              </h1>
            </div>
            <div className="w-full py-6">
              <p className="text-base md:text-xl lg:text-2xl w-[60%] ">
                At Aorta Studios, we believe that great software starts with
                understanding your unique business needs.
              </p>
            </div>
            <div className="w-full mb-5 py-2">
              <Link to={"#"}>
                <button className="text-gray-600 text-sm md:text-base ">
                  Read more
                </button>
              </Link>{" "}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GeneraCapability;

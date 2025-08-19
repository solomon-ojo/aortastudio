import React from "react";
import Container from "./Container";
import MethodologyActivities from "./MethodologyActivities";

const Methodology = () => {
  return (
    <section className="w-full min-h-screen bg-black relative z-40">
      <Container>
        <div className="text-white w-full py-20">
          {/* Desktop View */}
          <div className="hidden lg:block">
            <h1 className="text-6xl leading-tight">A look into our</h1>
            <h1 className="text-6xl  leading-tight">methodical process</h1>
          </div>
          {/* lg to smaller screen */}
          <div className="lg:hidden">
            <h1 className="text-2xl leading-tight">
              A look into our methodical process
            </h1>
          </div>
          <div className="w-full">
            <MethodologyActivities />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Methodology;

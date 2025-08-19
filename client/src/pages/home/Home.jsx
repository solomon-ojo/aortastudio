import React from "react";
import Hero from "../../components/Hero";
import Partners from "../../components/Partners";
import OurServices from "../../components/OurServices";
import CardCarousel from "../../components/CardCarousel";
import CompanyHistroy from "../../components/CompanyHistroy";
import WhatWeDo from "../../components/WhatWeDo";
import Industries from "../../components/Industries";
import Methodology from "../../components/Methodology";

const Home = () => {
  return (
    <main className="relative min-h-screen w-full ">
      <Hero />
      <Partners />
      <OurServices />
      <CardCarousel />
      <CompanyHistroy />
      <WhatWeDo />
      <Industries />
      <Methodology />
    </main>
  );
};

export default Home;

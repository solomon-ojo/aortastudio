import React from "react";
import Hero from "../../components/Hero";
import Partners from "../../components/Partners";
import OurServices from "../../components/OurServices";
import CardCarousel from "../../components/CardCarousel";
import CompanyHistroy from "../../components/CompanyHistroy";
import WhatWeDo from "../../components/WhatWeDo";

const Home = () => {
  return (
    <main className="relative min-h-screen w-full">
      <Hero />
      <Partners />
      <OurServices />
      <CardCarousel />
      <CompanyHistroy />
      <WhatWeDo />
    </main>
  );
};

export default Home;

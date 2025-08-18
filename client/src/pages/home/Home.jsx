import React from "react";
import Hero from "../../components/Hero";
import Partners from "../../components/Partners";
import OurServices from "../../components/OurServices";
import CardCarousel from "../../components/CardCarousel";
import CompanyHistroy from "../../components/CompanyHistroy";

const Home = () => {
  return (
    <main className="relative min-h-screen w-full">
      <Hero />
      <Partners />
      <OurServices />
      <CardCarousel />
      <CompanyHistroy />
    </main>
  );
};

export default Home;

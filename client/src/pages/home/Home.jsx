import React from "react";
import Hero from "../../components/Hero";
import Partners from "../../components/Partners";
import OurServices from "../../components/OurServices";
import CardCarousel from "../../components/CardCarousel";

const Home = () => {
  return (
    <main className="relative min-h-screen w-full">
      <Hero />
      <Partners />
      <OurServices />
      <CardCarousel />
    </main>
  );
};

export default Home;

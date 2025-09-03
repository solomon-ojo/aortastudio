import React from "react";
import Hero from "../../components/Hero";
import Partners from "../../components/Partners";
import OurServices from "../../components/OurServices";
import CardCarousel from "../../components/CardCarousel";
import CompanyHistroy from "../../components/CompanyHistroy";
import WhatWeDo from "../../components/WhatWeDo";
import Industries from "../../components/Industries";
import Methodology from "../../components/Methodology";
import OurTeam from "../../components/OurTeam";
import ContactSection from "../../components/ContactSection";
import MobilePartner from "../../components/MobilePartner";

const Home = () => {
  return (
    <main className="relative min-h-screen w-full ">
      <Hero />
      <Partners />
      <MobilePartner />
      <OurServices
        className={
          "w-full h-[400px] flex items-center  bg-black relative z-40  text-white "
        }
      />
      <CardCarousel
        className={"relative overflow-hidden w-full h-[500px] bg-black z-40"}
      />
      <CompanyHistroy />
      <WhatWeDo />
      <Industries />
      <Methodology className={"w-full min-h-screen bg-black relative z-40"} />
      <OurTeam />
      <ContactSection
        className={
          "w-full min-h-screen flex py-20 border-b border-gray-300 bg-black relative z-40"
        }
      />
    </main>
  );
};

export default Home;

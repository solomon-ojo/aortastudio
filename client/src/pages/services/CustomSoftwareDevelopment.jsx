import React from "react";
import Container from "../../components/Container";
import CustomServiceHero from "../../components/CustomServiceHero";
import SoftwareDevelopments from "../../components/SoftwareDevelopments";
import GeneraCapability from "../../components/GeneraCapability";
import OurServices from "../../components/OurServices";
import CardCarousel from "../../components/CardCarousel";
import HowWeEngineer from "../../components/HowWeEngineer";
import Methodology from "../../components/Methodology";
import ContactSection from "../../components/ContactSection";
import SoftwareDevelopmentAccordion from "../../components/SoftwareDevelopmentAccordion";
import ServiceCardCarousel from "../../components/ServiceCarousel";

const CustomSoftwareDevelopment = () => {
  return (
    <main className="min-h-screen relative w-full ">
      <CustomServiceHero />
      <SoftwareDevelopments />
      <SoftwareDevelopmentAccordion />
      <GeneraCapability />
      <OurServices
        className={
          "w-full h-[400px] flex items-center  bg-black relative   text-white "
        }
      />
      <ServiceCardCarousel
        className={"relative overflow-hidden w-full h-[500px] bg-black "}
      />
      <HowWeEngineer />
      <Methodology className={"w-full min-h-screen bg-black relative "} />
      <ContactSection
        className={
          "w-full min-h-screen flex py-20 border-b border-gray-300 bg-black relative"
        }
      />
    </main>
  );
};

export default CustomSoftwareDevelopment;

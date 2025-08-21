import React from "react";
import Container from "../../components/Container";
import CustomServiceHero from "../../components/CustomServiceHero";
import SoftwareDevelopments from "../../components/SoftwareDevelopments";
import GeneraCapability from "../../components/GeneraCapability";

const CustomSoftwareDevelopment = () => {
  return (
    <main className="min-h-screen w-full  z-40">
      <CustomServiceHero />
      <SoftwareDevelopments />
      <GeneraCapability />
    </main>
  );
};

export default CustomSoftwareDevelopment;

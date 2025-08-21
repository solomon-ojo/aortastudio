import React from "react";
import Container from "../../components/Container";
import CustomServiceHero from "../../components/CustomServiceHero";
import SoftwareDevelopments from "../../components/SoftwareDevelopments";

const CustomSoftwareDevelopment = () => {
  return (
    <main className="min-h-screen w-full relative">
      <CustomServiceHero />
      <SoftwareDevelopments />
    </main>
  );
};

export default CustomSoftwareDevelopment;

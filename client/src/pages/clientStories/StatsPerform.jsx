import React from "react";
import StatsPerformHero from "../../components/StatsPerformHero";
import StatsAbout from "../../components/StatsAbout";
import ContactSection from "../../components/ContactSection";

const StatsPerform = () => {
  return (
    <main className="w-full min-h-screen">
      <StatsPerformHero />
      <StatsAbout />
      <ContactSection className={"w-full min-h-screen flex py-20 border-b border-gray-300 bg-black relative z-40"} />
    </main>
  );
};

export default StatsPerform;

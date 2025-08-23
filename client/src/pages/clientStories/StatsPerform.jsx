import React from "react";
import StatsPerformHero from "../../components/StatsPerformHero";
import StatsAbout from "../../components/StatsAbout";

const StatsPerform = () => {
  return (
    <main className="w-full min-h-screen">
      <StatsPerformHero />
      <StatsAbout />
    </main>
  );
};

export default StatsPerform;

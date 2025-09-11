import React from "react";
import StatsPerformHero from "../../components/StatsPerformHero";
import ContactSection from "../../components/ContactSection";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { param } = useParams();

  return (
    <main className="w-full min-h-screen">
      <StatsPerformHero param={param} />
      <ContactSection
        className={
          "w-full min-h-screen flex py-20 border-b border-gray-300 bg-black relative z-40"
        }
      />
    </main>
  );
};

export default ProjectDetails;

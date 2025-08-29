import React from "react";
import ClientStoriesHero from "../../components/ClientStoriesHero";
import FeaturedStory from "../../components/FeaturedStory";
import ClientServices from "../../components/ClientServices";
import ContactSection from "../../components/ContactSection";

const Projects = () => {
  return (
    <main className="w-full min-h-screen">
      <ClientStoriesHero />
      <FeaturedStory />
      <ClientServices />
      <ContactSection
        className={
          "w-full min-h-screen flex py-20 border-b border-gray-300 bg-black relative z-40"
        }
      />
    </main>
  );
};

export default Projects;

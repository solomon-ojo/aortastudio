import React from "react";
import AboutHero from "../../components/AboutHero";
import OurStory from "../../components/OurStory";
import AboutClientStories from "../../components/AboutClientStories";
import AboutMethodology from "../../components/AboutMethodology";
import OurMission from "../../components/OurMission";

const About = () => {
  return (
    <main className="w-full min-h-screen relative">
      <AboutHero />
      <OurStory />
      <AboutClientStories />
      <div className="w-full relative ">
        <AboutMethodology />
        <OurMission />
      </div>
    </main>
  );
};

export default About;

import React from "react";
import AboutHero from "../../components/AboutHero";
import OurStory from "../../components/OurStory";
import AboutClientStories from "../../components/AboutClientStories";
import AboutMethodology from "../../components/AboutMethodology";
import OurMission from "../../components/OurMission";
import OurValues from "../../components/OurValues";
import OurStaff from "../../components/OurStaff";
import ContactSection from "../../components/ContactSection";

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
      <OurValues />
      {/* <OurStaff /> */}
      <ContactSection
        className={
          "w-full min-h-screen flex py-20 border-b border-gray-300 bg-black relative z-40"
        }
      />
    </main>
  );
};

export default About;

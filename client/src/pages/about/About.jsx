import React from "react";
import AboutHero from "../../components/AboutHero";
import OurStory from "../../components/OurStory";
import AboutClientStories from "../../components/AboutClientStories";

const About = () => {
  return (
    <main className="w-full min-h-screen relative">
      <AboutHero />
      <OurStory />
      <AboutClientStories />
    </main>
  );
};

export default About;

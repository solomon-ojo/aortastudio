import React from "react";
import ClientStoriesHero from "../../components/ClientStoriesHero";
import FeaturedStory from "../../components/FeaturedStory";
import ClientServices from "../../components/ClientServices";

const ClientStories = () => {
  return (
    <main className="w-full min-h-screen">
      <ClientStoriesHero />
      <FeaturedStory />
      <ClientServices />
    </main>
  );
};

export default ClientStories;

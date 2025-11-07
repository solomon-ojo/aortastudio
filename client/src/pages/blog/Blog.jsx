import React from "react";
import BlogHero from "../../components/BlogHero";
import FeaturedBlog from "../../components/FeaturedBlog";
import BlogCard from "../../components/BlogCards";
import ContactSection from "../../components/ContactSection";

const Blog = () => {
  return (
    <main className="w-full min-h-screen  ">
      <BlogHero />
      <FeaturedBlog />
      <BlogCard />
      <ContactSection
        className={
          "w-full min-h-screen flex py-20 border-b border-gray-300 bg-black relative z-40"
        }
      />
    </main>
  );
};

export default Blog;

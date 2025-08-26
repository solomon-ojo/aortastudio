import React from "react";
import BlogDetailsHero from "../../components/BlogDetailsHero";
import BlogArticle from "../../components/BlogArticle";
import OtherBlogs from "../../components/OtherBlogs";
import ContactSection from "../../components/ContactSection";

const BlogDetails = () => {
  return (
    <main className="min-h-screen w-full">
      <BlogDetailsHero />
      <BlogArticle />
      <OtherBlogs />
      <ContactSection />
    </main>
  );
};

export default BlogDetails;

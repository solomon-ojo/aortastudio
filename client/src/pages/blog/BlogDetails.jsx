import React from "react";
import BlogArticle from "../../components/BlogArticle";
import OtherBlogs from "../../components/OtherBlogs";
import ContactSection from "../../components/ContactSection";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { blogParam } = useParams();
  return (
    <main className="min-h-screen w-full">
      <BlogArticle blogParam={blogParam} />
      <OtherBlogs />
      <ContactSection />
    </main>
  );
};

export default BlogDetails;

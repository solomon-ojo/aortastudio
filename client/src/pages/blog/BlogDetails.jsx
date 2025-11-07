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
      <ContactSection
        className={
          "w-full min-h-screen flex py-20 border-b border-gray-300 bg-black relative z-40"
        }
      />
    </main>
  );
};

export default BlogDetails;

import React, { useState } from "react";
import { VscArrowRight } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { blogData } from "../utils/blogData";

const BlogCard = () => {
  const [hoveredCardId, setHoveredCardId] = useState(null);

  return (
    <section className="w-full   pt-12 bg-emerald-50">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   cursor-pointer">
        {blogData.map((blog) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            to={`/blog/${blog.blogParam}`}
            key={blog.blogParam}
            onMouseEnter={() => setHoveredCardId(blog.blogParam)}
            onMouseLeave={() => setHoveredCardId(null)}
            className="flex flex-col items-center justify-between h-[450px] lg:px-6 hover:bg-gray-200 shadow-md border border-gray-800"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-2/3 object-cover p-4"
              draggable={false}
            />
            <div className="p-2 text-center text-gray-900 text-xl font-semibold">
              {blog.title}
            </div>
            <div className="w-full pl-5 mb-4">
              <VscArrowRight
                size={30}
                className={`transition-all duration-300 ease-in-out ${
                  hoveredCardId === blog.id ? " -rotate-45" : "text-gray-600"
                }`}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogCard;

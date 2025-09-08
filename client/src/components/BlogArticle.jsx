import React, { useEffect, useState } from "react";
import Container from "./Container";
import { blogData } from "../utils/blogData";

const BlogArticle = ({ blogParam }) => {
  const [blogDetails, setBlogDetails] = useState(null);
  const fetchBlogDetails = () => {
    const targetBlogs = blogData.filter((blog) => blog.blogParam === blogParam);
    setBlogDetails(targetBlogs);
  };
  useEffect(() => {
    fetchBlogDetails();
  }, [blogParam]);
  // console.log("Blog Params are", blogDetails);
  return (
    <section className="w-full min-h-screen bg-white text-gray-700  pb-10">
      {blogDetails?.map((blog) => (
        <div key={blog.blogParam} className="w-full h-full">
          {/* Hero section */}
          <div className="h-[500px] w-full bg-emerald-50  text-gray-900 mb-12 ">
            <div className="flex flex-col lg:flex-row items-center h-full w-full pt-20">
              {/* left */}
              <div className="flex-1 h-3/5 lg:h-full w-full bg-red-600">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* right */}
              <div className="flex-1 h-full w-full px-3 lg:px-6 ">
                <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl pt-10  lg:px-5">
                  {blog.title}
                </p>
              </div>
            </div>
          </div>
          {/* Body section */}
          <Container>
            <div className="w-full h-full flex flex-col lg:flex-row gap-4 ">
              {/* left */}
              <div className="flex-1 h-full pr-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b py-5 text-xs sm:text-sm md:text-base">
                  <span className="">Author:</span>
                  <span className="">{blog.author}</span>
                </div>
                <div className="flex flex-col sm:flex-row  sm:items-center gap-4 border-b py-5 text-xs sm:text-sm md:text-base">
                  <span className="">Blog Subject:</span>
                  {blog.subject.map((sub, index) => (
                    <span key={index} className="">
                      {sub}
                    </span>
                  ))}
                  {/* <span className="">Business, Strategy</span> */}
                </div>{" "}
                <div className="flex flex-col sm:flex-row  sm:items-center gap-4 border-b py-5 text-xs sm:text-sm md:text-base">
                  <span className="">Date:</span>
                  <span className="">{blog.date}</span>
                </div>
              </div>
              {/* right */}
              <div className="flex-1 h-full text-sm md:text-base text-black">
                <div className="w-full h-full">
                  <div className="">
                    <p
                      dangerouslySetInnerHTML={{ __html: blog.preamble }}
                      className=""
                    ></p>
                  </div>
                  {blog?.sections?.map((section) => (
                    <div key={section.id} className="">
                      <h2
                        dangerouslySetInnerHTML={{ __html: section?.heading }}
                        className="py-4 text-xl text-gray-500"
                      ></h2>
                      {section?.paragraph?.map((p, idx) => {
                        if (typeof p === "string") {
                          // Plain string paragraph
                          return (
                            <p
                              key={idx}
                              dangerouslySetInnerHTML={{ __html: p }}
                            ></p>
                          );
                        }

                        if (typeof p === "object" && p !== null) {
                          return (
                            <div key={idx}>
                              <p
                                dangerouslySetInnerHTML={{ __html: p.text }}
                              ></p>
                              {Array.isArray(p.listItems) && (
                                <ul className="pl-4">
                                  {p.listItems.map((item, i) => (
                                    <li
                                      className="list-disc py-1 "
                                      key={i}
                                      dangerouslySetInnerHTML={{ __html: item }}
                                    ></li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          );
                        }

                        return null;
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>
      ))}
    </section>
  );
};

export default BlogArticle;

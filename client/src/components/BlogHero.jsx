import React from "react";
import Container from "./Container";

const BlogHero = () => {
  return (
    <section className=" h-[460px]  w-full border-b bg-sky-100 border-b-gray-800  text-gray-800 pt-20">
      <Container>
        <div className="w-full h-full pt-20">
          <div className="mt-10">
            <h2 className="uppercase text-sm font-semibold">our articles</h2>
            <h1 className="mt-10 text-2xl md:text-4xl lg:text-7xl ">Blog</h1>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BlogHero;

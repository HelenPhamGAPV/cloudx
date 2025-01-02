import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { blogList } from "../particles/DataLists";
import Introduction from "../organs/Introduction";
import Description from "../organs/Description";
import FeaturedForm from "../organs/FeaturedFrom";
import BlogList from "../organs/BlogList";

import genaiBlog from "../assets/genai-blog.png";

const Blog = () => {
  // console.log(blogList.featured);
  const [blogRedirect, setBlogRedirect] = useState();
  const navigate = useNavigate();

  const redirectBlog = (blog) => {
    // setBlogRedirect(blog);
    navigate(`/blog/${blog.id}`, {
      state: blog,
    })
  };

  return (
        <>
          <Introduction intro={blogList.intro} />
          <main className="mx-auto max-w-6xl bg-white px-6 py-24 sm:py-32 lg:max-w-6xl lg:px-8">
            <FeaturedForm
              backgroundImage={genaiBlog}
              data={blogList.featured}
              title="Featured"
            />
            <div className="lg:mt-18 lg:space-y-18 mt-16 space-y-16">
              {blogList.latest.map((item, index) => (
                <BlogList data={item} onClick={() => redirectBlog(item)}/>
              ))}
            </div>
          </main>
        </>
  );
};

export default Blog;

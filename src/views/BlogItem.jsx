import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {blogDetail} from "../particles/DataLists";
import Introduction from "../organs/Introduction";
import BlogContent from "../organs/BlogContent"

export default function BlogItem({}) {
  const [blogData, setBlogData] = useState();
  const { state } = useLocation();
  useEffect(() => {
    // const data = window.location.href.split("/")[4];
    setBlogData(state);
    console.log(state)
  }, []);
  return (
    <>
      {blogData ? (
        <>
          <Introduction
            className="mx-auto max-w-5xl items-center px-6 pb-14 pt-80 lg:px-0"
            intro={{img: blogData.img, title: blogData.title, desc: ""}}
          />
          <BlogContent data={{...blogData, content: blogDetail[blogData.id].content}} />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

"use client";
import Herosection from "@/app/components/Herosection/Herosection";
import { blogPosts } from "@/app/constant/Blog_post.txt";
import Image from "next/image";
import React from "react";
import { FaCalendarAlt, FaComments } from "react-icons/fa";

const BlogDetails = ({ post, sameCategory, otherCategory }) => {
console.log("Other Category Data:", otherCategory);
  return (
    <>
      <Herosection title="Blog Details" path="Home" span="//" next="Course" />
      <div className="max-w-5xl mx-auto flex flex-row justify-between mt-20 ">
        <div className="w-[70%] ">
          <Image src={post.image} alt="Post" width={550} height={400} />
          <div className="flex justify-between max-w-lg mt-4">
            <div className="flex gap-2  text-[#888888]">
              <FaCalendarAlt className="text-[#FC6441] flex items-center" />
              {post.date}
            </div>
            <div className="flex gap-2  text-[#888888]">
              <FaComments className="text-[#FC6441] flex items-center" />
              {post.comments}
            </div>
          </div>
          <div className=" text-[#333333] max-w-2xl">
            <h1 className="text-3xl font-bold mt-3">{post.description} </h1>
            <p className="text-[#333931]"> {post.paragraph}</p>
            <p className="mt-2 text-[#333931]">{post.para1}</p>
          </div>
          <div className="flex gap-6 mt-5 ">
            <Image src={post.img} alt="Post" width={300} height={200} />
            <Image src={post.img1} alt="Post" width={300} height={200} />
          </div>
          <h1 className="mt-4 text-2xl font-bold  ">{post.title}</h1>
          <p className="text-[#333931]">{post.subtitle}</p>
          <div className="flex justify-center mt-12">
            <Image src={post.img3} alt="Post" width={50} height={100} />
          </div>
          <h1 className="mt-4 font-bold text-lg ">{post.para2}</h1>
          <p className="mt-3 text-[#333931] text-center">{post.name}</p>
        </div>
       <div className="w-[30%]">
  <div>
    <h1 className="font-bold text-2xl">Recent Post</h1>

    {otherCategory.map((item, index) => (
      <div
        key={index}
        className="flex justify-center items-center gap-3 border-t border-[#E2E1E1] my-5 py-5"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div>
          <div className="flex gap-2 text-[#888888] text-sm">
            <FaCalendarAlt className="text-[#FC6441] flex items-center" />
            {item.date}
          </div>
          <h1 className="font-bold text-[12px] text-[#0E2A46]">
            {item.description}
          </h1>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </>
  );
};

export default BlogDetails;

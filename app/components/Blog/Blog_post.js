import React from "react";
import { GoArrowRight } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { blogPosts } from "@/app/constant/Blog_post.txt.js";

const Blog_post = ({
  showbutton = true,
  Blog,
  Most,
  BlogName,
  limit,
}) => {
    const displayedCourses = (blogPosts || []).slice(0, limit);
  
  return (
    <div className="w-full h-full flex flex-col justify-center items-center my-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full md:max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
          <div className="space-y-3">
            <p className={`border rounded-lg inline-flex text-sm sm:text-base bg-[#E9E2FF] text-[#704FE6] px-3 py-1${BlogName}`}>
              {Blog}
            </p>
            <h3 className="font-epilogue font-bold text-2xl sm:text-3xl md:text-[30px] leading-tight capitalize">
              {Most}
            </h3>
          </div>
          {showbutton &&(
          <div className="mt-2 md:mt-0">
            <div className="w-fit bg-[#704FE6] text-white rounded-3xl flex items-center shadow-md">
              <button className="px-4 py-2 text-sm md:text-base">Contact us</button>
              <div className="bg-[#785DD7] flex justify-center items-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full">
                <GoArrowRight />
              </div>
            </div>
          </div>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {displayedCourses.map((post) => (
            <div
              key={post.id}
              className="rounded-xl p-2 shadow-sm flex flex-col bg-cover bg-center bg-[url('/images/bg.jpg')]"
            >
              <img
                src={post.image}
                alt="blog post"
                className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-lg"
              />

              <div className="mt-4 flex gap-6 text-sm text-[#4D5756]">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-[#704FE6]" />
                  <p>{post.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <TiMessages className="text-[#704FE6]" />
                  <p>Comment ({post.comments})</p>
                </div>
              </div>
              <p className="mt-2 font-epilogue font-semibold text-base sm:text-lg md:text-xl leading-6 sm:leading-7 text-[#333] line-clamp-3">
                {post.description}
              </p>
              <div className="inline-flex mt-4">
                <div className="bg-[#E9E2FF] text-[#704FE6] rounded-3xl flex items-center">
                  <button className="px-4 py-2 text-sm md:text-base">Read More</button>
                  <div className="bg-[#E3DBFF] flex justify-center items-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full">
                    <GoArrowRight />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog_post;

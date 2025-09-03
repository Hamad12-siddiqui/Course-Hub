import React from "react";
import { FaCheck } from "react-icons/fa6";
import { features, stats } from "@/app/constant/Creating.txt.js";

const Creating = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:mt-36 mt-10 px-4 md:mb-20 sm:mb-36 mb-44">
      <div className="w-full md:max-w-5xl flex flex-col md:flex-row justify-between items-center gap-5 ml-0 md:ml-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-5">
          {/* Heading Tag */}
          <div className="flex flex-wrap justify-between items-center">
            <p className="bg-[#E9E2FF] text-[#704FE6] px-3 py-1 rounded-md font-sora font-medium text-[12px] sm:text-[14px] uppercase">
              WHY CHOOSE US
            </p>
            <img
              src="/images/image (16).svg"
              alt="decoration"
              className="w-16 sm:w-20"
            />
          </div>

          {/* Title */}
          <h3 className="text-center md:text-left font-epilogue font-bold text-2xl sm:text-3xl md:text-[32px] capitalize leading-snug">
            Creating A Community Of Life Long Learners.
          </h3>

          {/* Description */}
          <p className="text-center md:text-left font-sora font-normal text-[12px] sm:text-[14px] text-[#4D5756]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris..
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {features.map((item) => (
              <div
                key={item.id}
                className="bg-[#E9E2FF] py-4 px-5 space-y-3 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-2">
                  <FaCheck
                    size={20}
                    className="rounded-full text-white p-1 bg-[#704FE6]"
                  />
                  <h4 className="font-epilogue font-semibold text-[13px] sm:text-[14px] capitalize">
                    {item.title}
                  </h4>
                </div>
                <p className="font-sora font-normal text-[11px] sm:text-[13px] text-[#4D5756]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
          {/* Decorations */}
          <img
            src="/images/image (13).svg"
            alt="decoration"
            className="absolute top-0 left-2 md:-top-2 md:left-35.5 w-16 sm:w-28 lg:w-40 md:block hidden"
          />
          <img
            src="/images/image (4).svg"
            alt="decoration"
            className="absolute -top-8 -right-8 w-20 sm:w-28 lg:w-40 hidden md:block"
          />
          <img
            src="/images/image (15).svg"
            alt="decoration"
            className="absolute bottom-0 right-2 md:-bottom-2 md:-right-2 w-16 sm:w-28 lg:w-40 md:block hidden"
          />

          {/* Main Image */}
          <div className="bg-white relative w-[90%] sm:w-[80%] md:w-[70%]">
            <div className="p-1">
              <img
                src="/images/main.svg"
                alt="main"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Creating;

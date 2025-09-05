import React from "react";
import { GoArrowRight } from "react-icons/go";
import { images } from "@/app/constant/Our_instructor.txt.js";
import Link from "next/link";


const Our_instructor = () => {
  return (
    <div className="w-full flex   justify-center mt-10">
        <div className="mt-0 md:mt-25 pr-0 md:pr-10 md:block hidden ">
        <img
          src="/images/image (19).svg"
          alt="Instructor"
          className="w-15 md:w-12"
        />
        </div>
      <div className="w-full  md:max-w-5xl flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2 flex flex-col p-4">
          <div className="flex justify-between md:justify-center ml-0 md:ml-25">
            <div className="block md:hidden mt-0 md:mt-25 pr-0 md:pr-10   ">
        <img
          src="/images/image (19).svg"
          alt="Instructor"
          className="w-15 md:w-12"
        />
        </div>
            <img
              src="/images/image (17).svg"
              alt="Instructor"
              className="w-10 md:w-12"
            />
          </div>

          <div className="mt-8 md:mt-16 space-y-4">
            <p className="bg-[#E9E2FF] text-[#704FE6] text-center md:text-left px-4 py-1 rounded font-sora text-sm md:text-base uppercase w-fit">
              OUR INSTRUCTOR
            </p>

            <h3 className=" w-full md:max-w-sm font-epilogue font-bold text-2xl md:text-3xl lg:text-4xl capitalize leading-snug">
              Meet Our Expert Instructor
            </h3>

            <p className="font-sora text-sm md:text-base text-[#333931] leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris..
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link href="/Contact">

              <div className="bg-[#704FE6] text-white rounded-3xl flex items-center w-fit">
                <button className="px-4 py-2 text-sm md:text-base">
                  Contact us
                </button>
                <div className="bg-[#785DD7] flex justify-center items-center w-8 h-8 md:w-10 md:h-10 rounded-full">
                  <GoArrowRight />
                </div>
              </div>
              </Link>
              <Link href="/Teacher">
              <div className="bg-[#17254E] text-white rounded-3xl flex items-center w-fit">
                <button className="px-4 py-2 text-sm md:text-base">
                  Best Teacher
                </button>
                <div className="bg-[#1F3061] flex justify-center items-center w-8 h-8 md:w-10 md:h-10 rounded-full">
                  <GoArrowRight />
                </div>
              </div>
              </Link>
            </div>
          </div>

          <div className="flex justify-end md:justify-center ml-0 md:ml-25 mt-6">
            <img
              src="/images/image (18).svg"
              alt="Instructor"
              className="w-10 md:w-12"
            />
          </div>
        </div>

        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          {images.map((item) => (
            <img
              key={item.id}
              src={item.src}
              alt={item.alt}
              className="w-full object-contain rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Our_instructor;

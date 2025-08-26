import React from "react";
import { GoArrowRight } from "react-icons/go";


const Herosection = () => {
  return (
    <div className="relative w-full flex justify-end  bg-cover bg-center bg-[url('/images/bg.png')] ">
      {/* Bottom Image */}
      <img
        src="/images/image (3).svg"
        alt="image"
        className="w-24 h-24 object-cover absolute bottom-0 left-20 transform -translate-x-1/2"
      />

      {/* Center Image */}
      <img
        src="/images/image (4).svg"
        alt="image"
        className="w-40 h-40 object-cover absolute top-1/2 right-42 transform -translate-x-1/2 -translate-y-1/2 -z-10"
      />
      <div className="w-6xl flex-row lg:flex">
        <div className="ml-0 lg:ml-30 flex flex-col justify-center ">
          <p className="text-[#704FE6] uppercase">
            Welcome Edunity online courses
          </p>
          <h2 className="font-bold text-5xl text-[#17254E]">
            Achieving Your Dreams Through Education
          </h2>
          <p className="text-[#17254E] mt-4 w-full lg:w-[400px]">
            We are experienced in educationl platform and skilled strategies for
            the success of our online learning.
          </p>
          <div className="flex items-center gap-10">
            <div className="bg-[#704FE6] text-white rounded-3xl flex items-center w-fit mt-4">
              <button className="px-4 py-2">Create Account</button>
              <div className="bg-[#785DD7] flex justify-center items-center w-[40px] h-[40px] rounded-full">
                <GoArrowRight />
              </div>
            </div>
            <div className=" w-[40%] h-[40%]">
            <img src="/images/image (5).svg" alt="image" className="object-cover mt-4"/>
          </div>
          <div className="absolute right-35 z-[999]">
            <img
              src="/images/Background+Shadow.svg"
              alt="image"
              className="w-[70%] h-[70%] object-cover mt-4"
            />
          </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="/images/techer.svg"
            alt="image"
            className="w-full lg:w-xl h-auto lg:h-[400px] object-cover z-50"
          />
        </div>
       
      </div>
    </div>
  );
};

export default Herosection;
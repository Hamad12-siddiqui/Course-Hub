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
        className="w-40 h-40 object-cover absolute top-1/2 right-44 transform -translate-x-1/2 -translate-y-1/2 -z-10"
      />
      <div className=" w-6xl flex-row lg:flex my-4 lg:my-0">
        <div className="ml-0 lg:ml-10 flex flex-col justify-center text-center lg:text-left">
          {/* Top text */}
          <p className="text-[#704FE6] uppercase text-xs sm:text-sm md:text-base">
            Welcome Edunity online courses
          </p>
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl text-[#17254E] mt-2 leading-snug">
            Achieving Your Dreams Through Education
          </h2>
          <p className="text-[#17254E] mt-3 sm:mt-4 text-sm md:text-base w-full lg:w-[400px] mx-auto lg:mx-0">
            We are experienced in educational platform and skilled strategies
            for the success of our online learning.
          </p>

          {/* Buttons + Side Image + Shadow */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mt-6 relative">
            {/* Button */}
            <div className="bg-[#704FE6] text-white rounded-3xl flex items-center w-fit">
              <button className="px-4 py-2 text-sm md:text-base">
                Find courses
              </button>
              <div className="bg-[#785DD7] flex justify-center items-center w-8 h-8 md:w-10 md:h-10 rounded-full">
                <GoArrowRight />
              </div>
            </div>

            {/* Side small image */}
            <div className="hidden sm:block w-20 sm:w-28 md:w-45">
              <img
                src="/images/image (5).svg"
                alt="image"
                className="object-cover"
              />
            </div>

            {/* Background shadow */}
            <div className="absolut-none lg:absolute -right-6 -top-6 sm:-right-8 sm:-top-8 lg:right-10 lg:top-[-20] z-999 w-56 sm:w-32 md:w-40 lg:w-60">
              <img
                src="/images/Background+Shadow.svg"
                alt="image"
                className="object-contain w-full h-full"
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

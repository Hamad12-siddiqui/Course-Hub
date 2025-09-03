import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const OnlineLearning = () => {
  return (
    <div className="max-w-5xl mx-auto my-20 px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Images Section */}
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="flex items-center justify-center sm:justify-start">
            <Image
              src="/images/studygirl.svg"
              alt="Study girl"
              height={200}
              width={200}
              className="w-[150px] sm:w-[180px] h-auto"
            />
          </div>
          <div className="flex flex-col gap-4 items-center sm:items-start">
            <Image
              src="/images/experience.svg"
              alt="Experience"
              height={150}
              width={150}
              className="w-[150px] sm:w-[180px] h-auto"
            />
            <Image
              src="/images/studygirl1.svg"
              alt="Study girl 2"
              height={200}
              width={200}
              className="w-[200px] sm:w-[220px] h-auto"
            />
          </div>
        </div>

        {/* Text Content Section */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Image
              src="/images/abouticon.svg"
              alt="About"
              height={30}
              width={30}
            />
            <p className="uppercase text-[#FE543D] text-sm">about us</p>
          </div>

          <div className="mt-5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
              Benefit from our online learning expertise earn{' '}
              <span className="text-[#FE543D]">professional</span>
            </h1>
            <p className="mt-4 text-sm md:text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>

            <div className="flex flex-col md:flex-row gap-6 mt-6">
              <div className="flex-1">
                <h2 className="text-lg font-semibold mb-2">OUR MISSION:</h2>
                <p className="text-sm text-gray-700">
                  Suspendisse ultrice gravida dictum fusce placerat ultricies
                  integer quis auctor elit sed vulputate mi sit.
                </p>
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold mb-2">OUR VISION:</h2>
                <p className="text-sm text-gray-700">
                  Suspendisse ultrice gravida dictum fusce placerat ultricies
                  integer quis auctor elit sed vulputate mi sit.
                </p>
              </div>

            </div>
             <button className='inline-flex items-center gap-3 bg-[#2FC7A1] pl-4  text-white rounded-full hover:bg-[#2FC7A1] transition-colors mt-6'>
                                    Load More
                                    <span className='bg-[#35D7AE] p-4 rounded-full'>
                                        <FaArrowRight className="w-4 h-4" />
                                    </span>
                                </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineLearning;

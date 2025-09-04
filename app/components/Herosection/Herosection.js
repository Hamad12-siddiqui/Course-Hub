import React from "react";

const Herosection = ({ title, path,span,next }) => {
  return (
    <div className='w-full  bg-cover bg-center bg-no-repeat bg-[url("/images/bg(2).jpg")]'>
      <div className="flex justify-end items-center h-full mr-12 pt-6">
        <img
          src="/images/image (24).svg"
          alt="About Us"
          className="w-10 h-10"
        />
      </div>
      <div className="max-w-4xl flex justify-between ml-0 md:ml-12">
        <img
          src="/images/image (25).svg"
          alt="About Us"
          className="w-10 h-10 ml-5"
        />
        <img
          src="/images/image (26).svg"
          alt="About Us"
          className="w-15 h-15 mt-6  md:block hidden"
        />
        <div className="flex flex-col items-center">
          {/* Title */}
          <p className="font-epilogue font-bold text-[40px]  uppercase text-[#0E2A46]">
            {title}
          </p>

          {/* Path */}
          <div className="space-x-8">
            <p className="text-[#0E2A46] font-sora font-normal text-[16px]">
              {path}<span className="text-[#FC6441] mx-1">{span}</span>{next}
            </p>
          </div>
        </div>
        <img
          src="/images/image (27).svg"
          alt="About Us"
          className="w-8 h-8 mt-25 mb-6"
        />
      </div>
    </div>
  );
};

export default Herosection;

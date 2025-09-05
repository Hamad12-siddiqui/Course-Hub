import React from "react";

const Herosection = ({ 
  title,
  path,
  span,
  next,
className}) => {
  return (
    <div className='w-full h-[200px] bg-cover bg-center bg-no-repeat bg-[url("/images/bg(2).jpg")]'>
      <div className="flex flex-col justify-center items-center mx-5 pt-5">
      <div className="w-full flex  justify-between">
       
        <img
          src="/images/image (25).svg"
          alt="About Us"
          className="w-10"
        />
    
        <img
          src="/images/image (24).svg"
          alt="About Us"
          className="w-10 h-10"
        />
      </div>
      <div className="max-w-4xl flex justify-between ml-0 md:ml-12 mb-12">
       
        <div className="w-full md:w-fit flex flex-col justify-center items-center text-center">
          {/* Title */}
          <p className="font-epilogue font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] uppercase text-[#0E2A46]">
  {title}
</p>


          {/* Path */}
          <div className="space-x-8">
            <p className="text-[#0E2A46] font-sora font-normal text-[16px]">
              {path}<span className="text-[#FC6441] mx-1">{span}</span>{next}
            </p>
          </div>
        </div>
       
      </div>
      </div>
       
    </div>
  );
};

export default Herosection;

import React from "react";

const Testimonial = () => {
  return (
    <div className="flex justify-center items-center my-20 px-4">
      <div className="w-5xl border-2 flex flex-col justify-center items-center">
        <div className="bg-[#E9E2FF] text-[#704FE6]">
          <p className="font-sora font-normal text-[14px] py-1 px-4 uppercase">
            testimonial
          </p>
        </div>
        <h3 className=" w-[600px] text-center font-epilogue font-bold text-[45px] capitalize">
          Creating A Community Of Life Long Learners.
        </h3>
        <div>
          <p className="font-sora font-normal text-[17px]">
            “Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim
            enim. Amet consectetur adipiscing”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

import Bannar from "@/app/components/Bannar/Bannar";
import PauseOnHover from "@/app/components/Carsoule/Carsoule";
import React from "react";

const Testimonial = () => {
  return (
    <>
   
    
 
    <div className=" w-full relative flex justify-center items-center mt-20 pt-10 md:px-4 px-0 bg-[url('/images/mapbg.jpg')] bg-cover bg-center">

      <div className="w-5xl flex flex-col justify-center items-center md:mt-10 mt-24">
        <div className="bg-[#E9E2FF] text-[#704FE6]">
          <p className="font-sora font-normal text-sm py-1 md:px-4 px-0 uppercase">
            testimonial
          </p>
        </div>
        <h3 className=" md:max-w-xl w-full text-center  font-bold md:text-5xl text-2xl mt-6 capitalize">
          Creating A Community Of Life Long Learners.
        </h3>
        <div>
      
        </div>
      </div>
    </div>
       <PauseOnHover />
    </>
  );
};

export default Testimonial;

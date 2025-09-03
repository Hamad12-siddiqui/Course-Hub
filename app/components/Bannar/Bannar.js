import React from 'react'
import { stats } from "@/app/constant/Creating.txt.js";


const Banner = () => {
  return (
    <div className="w-full flex justify-center items-center px-4 ">
      <div className="w-full md:max-w-5xl bg-[#FFD25D] rounded-2xl md:rounded-full py-6 px-6 
        bg-cover bg-no-repeat bg-[url('/images/bg(3).png')]">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center md:text-left">
          {stats.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-center gap-3"
            >
              {/* Icon */}
              <img
                src={item.icon}
                alt={item.label}
                className="w-10 h-10 object-contain"
              />

              {/* Text Section */}
              <div>
                <p className="font-epilogue font-bold text-[20px] sm:text-[25px] capitalize">
                  {item.number}
                </p>
                <p className="text-[#0E2A46] font-sora font-normal text-[12px] sm:text-[14px] capitalize">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Banner

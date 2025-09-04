import React from "react";
import { GoArrowRight } from "react-icons/go";
import { IoIosCopy } from "react-icons/io";
import { IoTimer } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { courses } from "../../constant/Edunity.txt.js";
import Link from "next/link.js";


const Edunity = ({ 
  label,    
  heading,   
  buttonText,   
  showButton = true, 
  customClass = "" ,
  buttonClass = "",
  iconClass = "" ,
  limit = 6   
}) => {
  const displayedCourses = (courses || []).slice(0, limit);

  return (
    <div className="flex justify-center items-center my-8 w-full bg-[url('/images/multishade.jpg')] bg-cover bg-center py-16">
      <div className={`w-full md:max-w-5xl p-0 lg:p-6 ${customClass}`}>

        {/* Label */}
        {label && (
          <h1 className="w-fit py-1 px-2 bg-[#E9E2FF] text-[#704FE6] text-center flex mx-auto md:mx-0">
            {label}
          </h1>
        )}

        {/* Heading + Button */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <h3 className="font-epilogue font-bold text-lg sm:text-[32px] md:text-[40px] capitalize text-[#17254E] max-w-xl text-center lg:text-left">
            {heading}
          </h3>

          {showButton && (
            <Link href="/Course">
             <div className={`flex items-center self-center lg:self-auto rounded-3xl mt-2 ${buttonClass}`}>
            <button className="px-4 py-2 text-sm sm:text-base">
              {buttonText}
            </button>
            <div className={`flex justify-center items-center w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] rounded-full ${iconClass}`}>
              <GoArrowRight />
            </div>
          </div>
            </Link>
          )}
        </div>

        {/* Course Cards */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
          {displayedCourses.map((course) => (
            <div
              key={course.id}
              className="border-2 border-dashed border-[#704FE6] p-2 bg-[#F4F5F8] rounded-xl shadow-sm hover:shadow-md transition"
            >
              {/* Thumbnail */}
              <div className="flex justify-center">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="object-cover w-full max-h-[180px] rounded-lg"
                />
              </div>

              <div className="bg-[url('/images/brows.svg')] object-contain bg-no-repeat">
                {/* Rating & Price */}
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center gap-2">
                    <img
                      src="/images/Symbol.svg"
                      alt="rating"
                      className="w-[60px] h-7" // fixed
                    />
                    <p className="text-[#4D5756] text-sm sm:text-base">
                      {course.rating}k
                    </p>
                  </div>
                  <p className="text-[#704FE6] font-semibold text-sm sm:text-base">
                    ${course.price}.00
                  </p>
                </div>

                {/* Title */}
                <p className="font-epilogue mt-2 text-start text-[#0E2A46] font-semibold text-lg sm:text-xl capitalize leading-snug">
                  {course.title}
                </p>

                {/* Lessons, Duration, Students */}
                <div className="flex flex-wrap justify-between items-center py-2 px-1 rounded-md bg-white text-sm sm:text-base">
                  <div className="flex items-center">
                    <IoIosCopy size={12} className="text-black" />
                    <p className="text-[#4D5756] text-xs">Lesson {course.lessons}</p>
                  </div>
                  <div className="flex items-center">
                    <IoTimer size={14} className="text-black" />
                    <p className="text-[#4D5756] text-xs">{course.duration}</p>
                  </div>
                  <div className="flex items-center">
                    <FaUser size={12} className="text-black" />
                    <p className="text-[#4D5756] text-xs">Students {course.students}</p>
                  </div>
                </div>

                {/* Instructor & Enroll */}
                <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={course.image}
                      alt={course.instructor}
                      className="object-cover w-10 h-10 rounded-full"
                    />
                    <p className="text-sm sm:text-base">{course.instructor}</p>
                  </div>
                   <Link href={`/${course.slug}`}>
                  <div className="w-full sm:w-[100px]">
                   
                    <div className="flex justify-center items-center bg-[#704FE6] text-white rounded-3xl mt-2 sm:mt-0 gap-2">
                      <button className="py-1 text-sm sm:text-base">Enroll</button>
                      <GoArrowRight />
                    </div>
                    
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      

      </div>
    </div>
  );
};

export default Edunity;

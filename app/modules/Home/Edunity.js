import React from "react";
import { GoArrowRight } from "react-icons/go";
import { IoIosCopy } from "react-icons/io";
import { IoTimer } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { courses } from "../../constant/Edunity.txt.js";

const Edunity = () => {
  return (
    <div className="flex justify-center items-center my-8">
      <div className="w-full max-w-5xl text-center">
        {/* Heading + Button */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          {/* Heading */}
          <h3 className="font-epilogue font-bold text-[24px] sm:text-[32px] md:text-[40px] lg:text-[45px] leading-[1.3] capitalize text-[#17254E] max-w-2xl text-center lg:text-left">
            Edunity Course student can join with us.
          </h3>

          {/* Button */}
          <div className="flex items-center self-center lg:self-auto bg-[#704FE6] text-white rounded-3xl mt-2">
            <button className="px-4 py-2 text-sm sm:text-base">Load More Course</button>
            <div className="bg-[#785DD7] flex justify-center items-center w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] rounded-full">
              <GoArrowRight />
            </div>
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="border-2 border-dashed border-[#704FE6] p-4 rounded-xl shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="flex justify-center">
                <img
                  src="/images/Container.svg"
                  alt="Edunity Course"
                  className="object-cover w-full max-h-[180px] rounded-lg"
                />
              </div>

              {/* Rating & Price */}
              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center gap-2">
                  <img src="/images/Symbol.svg" alt="rating" className="w-10 h-5" />
                  <p className="text-[#4D5756]  text-sm sm:text-base">{course.rating}k</p>
                </div>
                <p className="text-[#704FE6] font-semibold text-sm sm:text-base">${course.price}.00</p>
              </div>

              {/* Title */}
              <p className="font-epilogue mt-2 text-start text-[#0E2A46] font-semibold text-lg sm:text-xl capitalize leading-snug">
                {course.title}
              </p>

              {/* Lessons, Duration, Students */}
              <div className="flex flex-wrap justify-between items-center py-3 bg-white text-sm sm:text-base">
                <div className="flex items-center gap-1">
                  <IoIosCopy className="text-[#704FE6]" />
                  <p className="text-[#4D5756]">Lesson {course.lessons}</p>
                  <IoTimer className="ml-2 text-[#704FE6]" />
                </div>
                <div className="flex items-center gap-2">
                  <p>{course.duration}</p>
                  <FaUser className="text-[#704FE6]" />
                </div>
                <p className="text-center w-full sm:w-auto">Students {course.students}</p>
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
                <div className="w-full sm:w-[150px]">
                  <div className="flex justify-center items-center bg-[#704FE6] text-white rounded-3xl mt-2 sm:mt-0">
                    <button className="px-4 py-2 text-sm sm:text-base">Enroll</button>
                    <GoArrowRight />
                  </div>
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

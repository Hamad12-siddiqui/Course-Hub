"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { teachers } from "@/app/constant/Teacher.txt";
import { FaShareAlt } from "react-icons/fa";
import Link from "next/link"; // 👈 Link import kiya

const MeetInstructor = ({
  showAll = false,
  className = "flex flex-row justify-center md:justify-start",
  classbook = "flex flex-col w-full items-center justify-center sm:flex-col md:flex-row md:justify-between md:items-center lg:flex-row lg:justify-between lg:items-center ",
  showIcon = false,
  classteacher = "text-lg text-[#FF9E0E]",
  classicon = " text-white bg-[#00BEAE]",
  classrole = "text-[#FF9E0E]",
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    if (startIndex + itemsPerPage < teachers.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleItems = showAll
    ? teachers
    : teachers.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full bg-[#E8E8F4] pt-16">
      <div className="max-w-5xl mx-auto ">
        <div className={` ${className} gap-2`}>
          {!showIcon && (
            <Image src="/images/book.svg" alt="logo" width={15} height={15} />
          )}
          <p className={` ${classteacher}`}>Teacher</p>
        </div>

        <div className={`${classbook}`}>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-3">
              Meet Our Instructor
            </h1>
          </div>

          {!showAll && (
            <div className="flex gap-4">
              <button onClick={handlePrev} disabled={startIndex === 0}>
                <IoIosArrowRoundBack
                  className={`border rounded-full ${
                    startIndex === 0
                      ? "text-gray-300 border-gray-300"
                      : "text-[#00BEAE] border-[#00BEAE]"
                  }`}
                  size={36}
                />
              </button>
              <button
                onClick={handleNext}
                disabled={startIndex + itemsPerPage >= teachers.length}
              >
                <IoIosArrowRoundForward
                  className={`border rounded-full ${
                    startIndex + itemsPerPage >= teachers.length
                      ? "text-gray-300 border-gray-300"
                      : "text-[#00BEAE] border-[#00BEAE]"
                  }`}
                  size={36}
                />
              </button>
            </div>
          )}
        </div>

        <div
          className={`grid gap-4 py-6 
            ${
              showAll
                ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
            }
          `}
        >
          {visibleItems.map((item, index) => (
            <div key={index} className="relative p-2 bg-white rounded-xl">
              {/* 👇 Card wrapped inside Link */}
              <Link href={`/Teacher/${item.slug}`}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={250}
                  height={250}
                  className="w-full md:mx-auto pt-1"
                />
                <h1 className="text-2xl font-bold mt-2">{item.name}</h1>
                <p className={`${classrole} my-1`}>{item.role}</p>
              </Link>

              {/* Share Icon (outside link, so it won’t trigger navigation) */}
              <FaShareAlt
                size={30}
                className={`absolute p-2 right-5 bottom-17 ${classicon}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetInstructor;

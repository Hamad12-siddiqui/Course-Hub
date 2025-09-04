"use client";
import { useState } from "react";
import React from "react";
import { IoIosCopy } from "react-icons/io";
import { IoTimer } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const Details = ({ course }) => {
  const [activeTab, setActiveTab] = useState("overview");

  if (!course) {
    return <div className="text-red-500">Course not found</div>;
  }

  return (
    <div className="w-full h-full flex justify-center items-center px-4">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-6 my-10">
        {/* Left Section */}
        <div className="w-full lg:w-2/3">
          <div className="p-2">
            {/* Thumbnail */}
            <div className="flex justify-center">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="object-cover w-full max-h-[400px] rounded-lg"
              />
            </div>

            {/* Rating & Title */}
            <div className="mt-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img
                    src="/images/Symbol.svg"
                    alt="rating"
                    className="w-[60px] h-7"
                  />
                  <p className="text-[#4D5756] text-sm sm:text-base">
                    {course.rating}k
                  </p>
                </div>
              </div>

              <p className="font-epilogue mt-2 text-start text-[#0E2A46] font-semibold text-lg sm:text-xl capitalize leading-snug">
                {course.title}
              </p>

              {/* Lessons, Duration, Students */}
              <div className="flex flex-wrap gap-4 items-center py-2 px-1 text-sm sm:text-base">
                <div className="flex items-center gap-1">
                  <IoIosCopy size={14} className="text-black" />
                  <p className="text-[#4D5756] text-xs sm:text-sm">
                    Lesson {course.lessons}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <IoTimer size={16} className="text-black" />
                  <p className="text-[#4D5756] text-xs sm:text-sm">
                    {course.duration}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <FaUser size={14} className="text-black" />
                  <p className="text-[#4D5756] text-xs sm:text-sm">
                    Students {course.students}
                  </p>
                </div>
              </div>
              <div className="border" />

              {/* Tabs */}
              <div>
                <div className="flex flex-wrap gap-3 my-4">
                  {["overview", "curriculum", "instructor", "reviews"].map(
                    (tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-md capitalize text-sm sm:text-base ${
                          activeTab === tab
                            ? "bg-[#704FE6] text-white"
                            : "bg-gray-200 text-black"
                        }`}
                      >
                        {tab}
                      </button>
                    )
                  )}
                </div>

                {/* Tab Content */}
                <div className="w-full p-4 bg-gray-50 rounded-md">
                  {activeTab === "overview" && (
                    <div>
                      <h2 className="font-bold text-lg mb-2">
                        Course Description
                      </h2>
                      <p className="text-sm sm:text-base">{course.overview}</p>
                    </div>
                  )}

                  {activeTab === "curriculum" && (
                    <div>
                      <h2 className="font-bold text-lg mb-2">Curriculum</h2>
                      <ul className="list-disc ml-6 text-sm sm:text-base">
                        {course.curriculum.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeTab === "instructor" && (
                    <div>
                      <h2 className="font-bold text-lg mb-2">Instructor</h2>
                      <p className="text-sm sm:text-base">
                        {course.instructorInfo}
                      </p>
                    </div>
                  )}

                  {activeTab === "reviews" && (
                    <div>
                      <h2 className="font-bold text-lg mb-2">Reviews</h2>
                      {course.reviews.length > 0 ? (
                        course.reviews.map((r, i) => (
                          <div key={i} className="mb-2 text-sm sm:text-base">
                            <p>
                              <b>{r.user}</b>: {r.comment} ⭐{r.rating}
                            </p>
                          </div>
                        ))
                      ) : (
                        <p>No reviews yet.</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Sidebar) */}
        <div className="w-full lg:w-1/3 h-auto p-4 bg-[#E8E8F4] rounded-md mt-2 space-y-3">
          {/* Image */}
          <img
            src={course.thumbnail}
            alt={course.title}
            className="rounded-lg w-full h-40 object-cover"
          />

          {/* Price Section */}
          <div>
            <div className="flex justify-between items-center">
              <p className="text-gray-600 text-sm">Course Fee</p>
              <p className="font-bold text-lg text-gray-900">
                ${course.price}{" "}
                <span className="line-through text-gray-400 text-sm">$120</span>
              </p>
            </div>
            <p className="text-xs text-gray-500">29-Day Money-Back Guarantee</p>
          </div>

          {/* Button */}
          <button className="w-full bg-[#704FE6] text-white font-semibold py-2 rounded-md hover:bg-[#5a3fc2] transition">
            BUY NOW
          </button>

          {/* Details */}
          <div className="mt-3 text-sm text-gray-700 space-y-2">
            <div className="flex justify-between">
              <span>{course.time}</span>
              <span>Start Date</span>
            </div>
            <div className="flex justify-between">
              <span>Enrolled</span>
              <span>{course.students}</span>
            </div>
            <div className="flex justify-between">
              <span>Lectures</span>
              <span>{course.lectures}</span>
            </div>
            <div className="flex justify-between">
              <span>Skill Level</span>
              <span>{course.skillLevel}</span>
            </div>
            <div className="flex justify-between">
              <span>ClassName Day</span>
              <span>{course.schedule}</span>
            </div>
            <div className="flex justify-between">
              <span>Language</span>
              <span>{course.language}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

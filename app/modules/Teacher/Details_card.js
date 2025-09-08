"use client";
import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaSkype, FaLinkedinIn } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Details_card = ({ teacher }) => {
  return (
    <div className="w-full min-h-screen p-4 sm:p-6 flex justify-center">
      <div className="bg-[#E8E8F4] max-w-4xl w-full p-4 sm:p-6 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Profile Card */}
        <div className="flex flex-col items-center text-center md:text-left">
          {/* Teacher Image */}
          <Image
            src={teacher.image}
            alt={teacher.name}
            width={220}
            height={220}
            className="rounded-lg object-cover"
          />

          {/* Social Icons */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-4 pb-5 text-[#333931] border-b border-[#D9D9D9] w-full">
            <a href={teacher.contact.socials.facebook}>
              <FaFacebookF
                size={30}
                className="hover:text-blue-600 p-2 bg-white rounded-full"
              />
            </a>
            <a href={teacher.contact.socials.twitter}>
              <FaTwitter
                size={30}
                className="hover:text-blue-600 p-2 bg-white rounded-full"
              />
            </a>
            <a href={teacher.contact.socials.skype}>
              <FaSkype
                size={30}
                className="hover:text-blue-600 p-2 bg-white rounded-full"
              />
            </a>
            <a href={teacher.contact.socials.linkedin}>
              <FaLinkedinIn
                size={30}
                className="hover:text-blue-600 p-2 bg-white rounded-full"
              />
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-6 ml-0 md:ml-10 space-y-3 text-sm sm:text-base text-gray-600 w-full">
            <p className="flex items-center justify-center md:justify-start gap-2">
              <IoCall className="text-[#FC6441]" /> {teacher.contact.phone}
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <MdLocationOn className="text-[#FC6441]" />
              {teacher.contact.address}
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <MdEmail className="text-[#FC6441]" /> {teacher.contact.email}
            </p>
          </div>

          {/* Button */}
                <Link href="/Instructor_Registration">

          <div className="w-full flex justify-center md:justify-start">
            <button className="flex justify-between items-center gap-3 bg-[#704FE6] text-white rounded-full cursor-pointer mt-6 pl-4 pr-2 py-1">
              Contact us teacher
              <span className="bg-[#785DD7] p-3 sm:p-4 rounded-full">
                <FaArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
          </Link>
        </div>

        {/* Right Detail Section */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-md p-6 sm:p-8">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            {teacher.name}
          </h1>
          <p className="text-sm uppercase text-orange-500 font-semibold mb-4">
            {teacher.role}
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">{teacher.bio}</p>

          <h2 className="text-base sm:text-lg font-bold text-gray-800 mt-6 mb-2">
            Education:
          </h2>
          <p className="text-gray-600 leading-relaxed">{teacher.education}</p>

          <h2 className="text-base sm:text-lg font-bold text-gray-800 mt-6 mb-4">
            Expertise & Skills:
          </h2>
          <div className="space-y-4">
            {teacher.expertise.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between text-xs sm:text-sm font-medium text-gray-700">
                  <span>{skill.skill}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#89BAB44D] h-2 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details_card;

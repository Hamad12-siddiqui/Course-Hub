"use client";
import React from "react";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import Navbar from "./components/Navbar";
import Herosection from "../app/components/Herosection/Herosection";
import FooterMain from "./components/Footer/FooterMain";

const Not_found = () => {
  return (
    <div>
      <Navbar />
      <Herosection title="404 Page" path="Home" span="//" next="pages" />
      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between py-8 px-6 gap-10">
        <div className="flex flex-col justify-center text-center lg:text-left max-w-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Sorry, Page Not Found!
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link
            href="/"
            className="mt-6 flex items-center justify-center text-center lg:justify-start bg-[#704FE6] text-white rounded-3xl w-fit mx-auto lg:mx-0"
          >
            <div className="bg-[#785DD7] flex justify-center items-center w-8 h-8 md:w-10 md:h-10 rounded-full">
              <GoArrowLeft />
            </div>
            <button
              type="button"
              className="px-4 py-2 text-sm md:text-base font-medium"
            >
              Back To Home
            </button>
          </Link>
        </div>
        <div className="flex justify-center">
          <img
            src="/images/notfound.svg"
            alt="notfound"
            className="w-64 sm:w-80 md:w-[350px] lg:w-[400px] h-auto"
          />
        </div>
      </div>
      <FooterMain />
    </div>
  );
};

export default Not_found;

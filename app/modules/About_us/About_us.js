import Navbar from "@/app/components/Navbar";
import React from "react";
import Herosection from "../../components/Herosection/Herosection";
import OnlineLearning from "./Online-Learning";
import Edunity from "@/app/components/Edunity/Edunity";

const About_us = () => {
  return (
    <>
      <Navbar />
      <Herosection
        title="About Us"
        path="Home"
        span="//"
        next="About Us"
      />
      <OnlineLearning />
      <Edunity
        label="Our Courses"
        heading="Creating A Community Of Life Long Learners."
        buttonText="Explore courses"
        buttonClass="bg-[#FC6441] text-white rounded-none"
        iconClass="bg-[#FC6441]"
        limit={3}
      />
    </>
  );
};

export default About_us;

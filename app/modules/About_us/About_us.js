import Navbar from '@/app/components/Navbar'
import React from 'react'
import Herosection from '../../components/Herosection/Herosection'
import OnlineLearning from './Online-Learning'
import Banner from '@/app/components/Bannar/Bannar'
import Testimonial from '../Home/Testimonial'
import MeetInstructor from './MeetInstructor'
import FooterMain from '@/app/components/Footer/FooterMain'

const About_us = () => {
  return (
    <>
    <Navbar />
    <Herosection/>
    <OnlineLearning />
   <div className='relative'>
    <Testimonial/>
    <div className="absolute  md:-top-12 sm:-top-20 -top-44 w-full mx-auto ">
      <Banner backgroundColorClass = 'bg-[#FC6441]' />
    </div>
    </div>
    <MeetInstructor />
    <FooterMain />
    </>
  );
};

export default About_us;

import Navbar from '@/app/components/Navbar'
import Herosection from '@/app/components/Herosection/Herosection'
import React from 'react'
import Details from './Details'
import Footer from '@/app/components/Footer/Footer'
import FooterMain from '@/app/components/Footer/FooterMain'

const Course_Details = ({ course}) => {
  return (
    <>
    <Navbar/>
    <Herosection
        title="Course Details"
        path="Home"
        span="//"
        next="Course"
        className=" font-semibold text-xl text-center"
      />
      <Details  course={course}/>
      <FooterMain/>
    
    
    </>
  )
}

export default Course_Details

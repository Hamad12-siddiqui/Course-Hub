import Navbar from '@/app/components/Navbar'
import React from 'react'
import Herosection from '../../components/Herosection/Herosection.js'
import FooterMain from '@/app/components/Footer/FooterMain.js'
import MeetInstructor from '../About_us/MeetInstructor.js'

const Teacher = () => {
  return (
    <>
    <Navbar/>
     <Herosection
        title="Teacher"
        path="Home"
        span="//"
        next="Teacher"
      />
      <MeetInstructor
      showAll = "false"
      showIcon = "false"
      classbook = "text-center"
      className="text-center"
      classicon='bg-[#FC6441] text-white'
      classrole='text-[#7768E5]'
      classteacher='text-[#7768E5] bg-[#E9E2FF] py-1 px-2 w-fit mx-auto text-center'

     
      />
      <FooterMain/>

    </>
  )
}

export default Teacher

import React from 'react'
import Details_card from './Details_card'
import Navbar from '@/app/components/Navbar'
import Herosection from '@/app/components/Herosection/Herosection.js'
import MeetInstructor from '../About_us/MeetInstructor'

const Teacher_details = ({teacher}) => {
  return (
    
      <>
      <Navbar/>
         <Herosection
        title="Teacher Details"
        path="Home"
        span="//"
        next="Teacher"
        className=""

      />
      <Details_card teacher={teacher}/>
      <MeetInstructor/>
      </>
  )
}

export default Teacher_details

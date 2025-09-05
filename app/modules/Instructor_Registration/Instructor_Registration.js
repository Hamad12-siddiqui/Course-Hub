import Navbar from '@/app/components/Navbar'
import React from 'react'
import Herosection from '@/app/components/Herosection/Herosection.js'
import Registration_from from './Registration_from'

const Instructor_Registration = () => {
  return (
    <>
    <Navbar/>
     <Herosection
    title="Instructor Registration"
        path="Home"
        span="//"
        next="Instructor"
      />
      <Registration_from/>

    </>
  )
}

export default Instructor_Registration

import Navbar from '@/app/components/Navbar'
import React from 'react'
import Herosection from '../../components/Herosection/Herosection'
import Edunity from '@/app/components/Edunity/Edunity'
import FooterMain from '@/app/components/Footer/FooterMain'

const Course = () => {
  return (
    <>
      <Navbar/>
        <Herosection
        title="Course"
        path="Home"
        span="//"
        next="Course"
      />
       <Edunity
        label="Top Popular Course"
        heading="Edunity Course Student can join with us."
          showButton = {false} 
          limit={6}
      />
      <FooterMain />
    </>
  )
}

export default Course

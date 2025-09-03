import Navbar from '@/app/components/Navbar'
import React from 'react'
import Herosection from '../../components/Herosection/Herosection'
import Edunity from '@/app/components/Edunity/Edunity'
import Footer from '@/app/components/Footer/Footer'

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
        buttonText="Load More Course"
        buttonClass="bg-[#704FE6] text-white"
        iconClass="bg-[#785DD7]"
        limit={6}
      />
      <Footer />
    </>
  )
}

export default Course

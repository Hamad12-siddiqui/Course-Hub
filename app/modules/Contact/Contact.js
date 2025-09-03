import Navbar from '@/app/components/Navbar'
import React from 'react'
import Herosection from '@/app/components/Herosection/Herosection'
import Contact_us from './Contact_us'
import Footer from '@/app/components/Footer/Footer'

const Contact = () => {
  return (
    <>
    <Navbar/>
     <Herosection
        title="Contact Us"
        path="Home"
        span="//"
        next="Contact Us"
      />
      <Contact_us/>
      <Footer/>
    </>
  )
}

export default Contact

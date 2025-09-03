import React from 'react'
import Navbar from '../../components/Navbar.js'
import Herosection from './Herosection.js'
import Browse from './Browse.js'
import Edunity from './Edunity.js'
import Creating from './Creating.js'
import Testimonial from './Testimonial.js'
import Footer from '@/app/components/Footer/Footer.js'
import LearnGrow from './Learn-Grow.js'
import YourGain from './Your-Gain.js'
import Our_instructor from './Our_instructor.js'
import Blog_post from './Blog_post.js'
import Newsletter from './Newsletter.js'
import Session from './Session.js'


const Home = () => {
  return (
    <>
    <Navbar/>
    <Herosection/>
    <Browse/>
    <Edunity/>
     <LearnGrow />
     <Session/>
    <Creating/>
    <Testimonial/>
   <Our_instructor/>
   <div className='bg-[#F2F2F2]  mt-20' >
    <YourGain />
   
    <Blog_post/>
    <Newsletter/>
    </div>
    <Footer />
    </>
  )
}

export default Home

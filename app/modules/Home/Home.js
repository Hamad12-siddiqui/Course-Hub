import React from 'react'
import Navbar from '../../components/Navbar.js'
import Herosection from './Herosection.js'
import Browse from './Browse.js'
import Edunity from './Edunity.js'
import Creating from './Creating.js'
import Testimonial from './Testimonial.js'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Herosection/>
    <Browse/>
    <Edunity/>
    <Creating/>
    <Testimonial/>
    </>
  )
}

export default Home

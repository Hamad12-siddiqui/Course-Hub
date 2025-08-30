import React from 'react'
import Navbar from '../../components/Navbar.js'
import Herosection from './Herosection.js'
import Browse from './Browse.js'
import Edunity from './Edunity.js'
import Footer from '@/app/components/Footer/Footer.js'
import LearnGrow from './Learn-Grow.js'


const Home = () => {
  return (
    <>
    <Navbar/>
    <Herosection/>
    <Browse/>
    <Edunity/>
    <LearnGrow />
    <Footer />
    </>
  )
}

export default Home

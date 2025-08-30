import React from 'react'
import Navbar from '../../components/Navbar.js'
import Herosection from './Herosection.js'
import Browse from './Browse.js'
import Edunity from './Edunity.js'
import Footer from '@/app/components/Footer/Footer.js'


const Home = () => {
  return (
    <>
    <Navbar/>
    <Herosection/>
    <Browse/>
    <Edunity/>
    <Footer />
    </>
  )
}

export default Home

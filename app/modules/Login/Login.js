"use client"
import Navbar from '@/app/components/Navbar'
import React from 'react'
import { useState } from 'react';
import {Login_from} from './Login_from'
import Herosection from '@/app/components/Herosection/Herosection'
import FooterMain from '@/app/components/Footer/FooterMain';

const Login = () => {
    const [isLogin, setIsLogin] = useState(false);

  return (
    <>
    <Navbar/>
    <Herosection
  title={isLogin ? "Sign in" : "Sign Up"}
  path="Home"
  span="//"
  next={isLogin ? "sign in" : "Sign Up"}
/>

      <Login_from isLogin={isLogin} setIsLogin={setIsLogin} />
      <FooterMain/>
    </>
  )
}

export default Login

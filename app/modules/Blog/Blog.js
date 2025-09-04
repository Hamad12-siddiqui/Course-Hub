import Navbar from '@/app/components/Navbar'
import React from 'react'
import Herosection from '@/app/components/Herosection/Herosection'
import Blog_post from '@/app/components/Blog/Blog_post'
import Footer from '@/app/components/Footer/Footer'

const Blog = () => {
  return (
    <>
    
    <Navbar/>
    <Herosection
        title="Blog"
        path="Home"
        span="//"
        next="Blog"
      />
      <Blog_post
          showbutton={false}
          Blog=""
          Most=""
          BlogName="none"
          limit={6}
          className='border-none'
        />
        <Footer/>
    </>
  )
}

export default Blog

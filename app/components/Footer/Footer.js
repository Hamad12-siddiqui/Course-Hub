import { gallery, links, SERVICES } from '@/app/constant/Footer.txt.js'
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { SiPixabay } from "react-icons/si";
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[url('/images/footerbg.jpg')] bg-cover bg-center w-full py-20 px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8 items-start">

        <div className="flex flex-col   ">
          <div className="flex items-center gap-2 mb-3">
            <Image src="/images/logo.svg" alt="logo" width={200} height={200} />

          </div>
          <p className="text-white text-sm leading-relaxed max-w-xs">
            Interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu.
          </p>

          <div className='flex gap-2'>
            <div className=" gap-3 mt-2 bg-[#E9E2FF] p-2 rounded-full">
              <FaFacebookF className='text-[#704FE6] text-xl cursor-pointer' />
            </div>
            <div className=" gap-3 mt-2 bg-[#E9E2FF] p-2 rounded-full">
              <FaInstagram className='text-[#704FE6] text-xl cursor-pointer' />

            </div>
            <div className=" gap-3 mt-2 bg-[#E9E2FF] p-2 rounded-full">
              <FaTwitter className='text-[#704FE6] text-xl cursor-pointer' />

            </div>
            <div className=" gap-3 mt-2 bg-[#E9E2FF] p-2 rounded-full">
              <FaPinterest className='text-[#704FE6] text-xl cursor-pointer' />
            </div>
          </div>
        </div>
        <div className='flex justify-center flex-col items-center'>
          <h2 className="text-white text-lg font-semibold mb-3 ">Our Services:</h2>
          <ul className="space-y-2 ">
            {SERVICES.map((item) => (
              <li key={item.id} className="text-white text-sm flex items-center gap-2">
                <span className="text-white">&#8250;</span> {item.title}
              </li>
            ))}
          </ul>
        </div>
        {/* Quick Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">Quick Links:</h2>
          <ul className="space-y-2">
            {links.map((item) => (
              <li key={item.id} className="text-white text-sm flex items-center gap-2">
                <span className="text-=white">&#8250;</span> {item.title}
              </li>
            ))}
          </ul>
        </div>
        {/* Gallery */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">Gallery</h2>
          <div className="grid grid-cols-3 gap-2">
            {gallery.map((item, index) => (
              <div key={index} className="rounded overflow-hidden">
                <img src={item.img} alt={item.alt || `Gallery image ${index + 1}`} className="w-full h-16 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
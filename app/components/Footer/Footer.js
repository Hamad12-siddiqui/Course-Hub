import { gallery, links, SERVICES } from '@/app/constant/Footer.txt.js'
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { SiPixabay } from "react-icons/si";
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-[url('/images/footerbg.jpg')] bg-cover bg-center w-full py-10 md:py-20 px-4 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 items-start">

          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <Image src="/images/logo.svg" alt="logo" width={200} height={200} className="w-40 md:w-[200px]" />
            </div>
            <p className="text-white text-sm leading-relaxed max-w-xs">
              Interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu.
            </p>

            <div className='flex gap-3'>
              <div className="bg-[#E9E2FF] p-2 rounded-full hover:bg-[#704FE6] hover:text-white transition-colors">
                <FaFacebookF className='text-[#704FE6] text-xl cursor-pointer hover:text-white' />
              </div>
              <div className="bg-[#E9E2FF] p-2 rounded-full hover:bg-[#704FE6] hover:text-white transition-colors">
                <FaInstagram className='text-[#704FE6] text-xl cursor-pointer hover:text-white' />
              </div>
              <div className="bg-[#E9E2FF] p-2 rounded-full hover:bg-[#704FE6] hover:text-white transition-colors">
                <FaTwitter className='text-[#704FE6] text-xl cursor-pointer hover:text-white' />
              </div>
              <div className="bg-[#E9E2FF] p-2 rounded-full hover:bg-[#704FE6] hover:text-white transition-colors">
                <FaPinterest className='text-[#704FE6] text-xl cursor-pointer hover:text-white' />
              </div>
            </div>
          </div>

          <div className='flex flex-col items-start sm:items-center lg:items-center mt-8 sm:mt-0'>
            <h2 className="text-white text-lg font-semibold mb-3">Our Services:</h2>
            <ul className="space-y-2">
              {SERVICES.map((item) => (
                <li key={item.id} className="text-white text-sm flex items-center gap-2 hover:text-[#E9E2FF] transition-colors">
                  <span className="text-white">&#8250;</span> {item.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className='mt-8 sm:mt-0'>
            <h2 className="text-white text-lg font-semibold mb-3">Quick Links:</h2>
            <ul className="space-y-2">
              {links.map((item) => (
                <li key={item.id} className="text-white text-sm flex items-center gap-2 hover:text-[#E9E2FF] transition-colors">
                  <span className="text-white">&#8250;</span> {item.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <div className='mt-8 sm:mt-0'>
            <h2 className="text-white text-lg font-semibold mb-3">Gallery</h2>
            <div className="grid grid-cols-3 gap-2">
              {gallery.map((item, index) => (
                <div key={index} className="rounded overflow-hidden hover:opacity-80 transition-opacity">
                  <img src={item.img} alt={item.alt || `Gallery image ${index + 1}`} className="w-full h-16 object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
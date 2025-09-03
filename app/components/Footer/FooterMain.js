import { address, gallery, links, SERVICES } from '@/app/constant/Footer.txt.js'
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPinterest, FaTwitter } from "react-icons/fa";
import Image from 'next/image'
import React from 'react'

const FooterMain = () => {
    return (
        <footer className="bg-[url('/images/footermain.jpg')] bg-cover bg-center w-full">
            {/* Top Address Section */}
            <div className='border-b border-[#FFFFFF4D]'>
                <div className='max-w-6xl mx-auto px-4'>
                    <div className='flex flex-col md:flex-row md:justify-between'>
                        {address.map((item, index) => (
                            <div
                                key={index}
                                className={`flex gap-3 py-6 min-h-20 w-full md:justify-center justify-start items-center border-[#FFFFFF4D] 
                                    ${index !== address.length - 1 ? 'md:border-r' : ''}
                                    ${index < address.length - 1 ? 'mb-4 md:mb-0' : ''}`}
                            >
                                <div className='flex items-center'>
                                    <item.icon className='text-white text-2xl' />
                                </div>
                                <div className='text-white text-left'>
                                    <h1 className='capitalize font-semibold'>{item.text}</h1>
                                    <p className='text-sm'>{item.addr}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Grid Section */}
            <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Logo and Socials */}
                <div className="flex flex-col space-y-4">
                    <Image src="/images/redlogo.svg" alt="logo" width={200} height={200} className="w-36 md:w-40" />
                    <p className="text-white text-sm leading-relaxed">
                        Interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu.
                    </p>
                    <div className='flex gap-3'>
                        {[FaFacebookF, FaInstagram, FaTwitter, FaPinterest].map((Icon, idx) => (
                            <div key={idx} className="bg-[#4D5756] p-2 rounded-full hover:bg-[#FC6441] transition-colors">
                                <Icon className='text-white text-xl cursor-pointer' />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Services */}
                <div className='flex flex-col'>
                    <h2 className="text-white text-lg font-semibold mb-3">Our Services:</h2>
                    <ul className="space-y-2">
                        {SERVICES.map((item) => (
                            <li key={item.id} className="text-white text-sm flex items-center gap-2 hover:text-[#E9E2FF] transition-colors">
                                <span className="text-white">&#8250;</span> {item.title}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Gallery */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-3">Gallery</h2>
                    <div className="grid grid-cols-3 gap-2">
                        {gallery.map((item, index) => (
                            <div key={index} className="rounded overflow-hidden hover:opacity-80 transition-opacity">
                                <img src={item.img} alt={item.alt || `Gallery image ${index + 1}`} className="w-full h-16 object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Subscribe */}
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-white">Subscribe</h2>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 mb-4 text-white rounded border border-white bg-white bg-opacity-10 placeholder:text-gray-400 py-3 focus:outline-none focus:ring-2 focus:ring-[#FC6441]"
                    />
                    <button className="w-full bg-[#f45b39] hover:bg-[#e04a2f] text-white font-bold py-2 rounded transition-colors">
                        SUBSCRIBE NOW
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default FooterMain;

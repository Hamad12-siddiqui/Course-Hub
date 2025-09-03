import React from "react";
import { FaPhoneAlt, FaClock, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

const Contact_us = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className=" w-full max-w-5xl  relative bg-[#F9F9F9] rounded-lg shadow-md flex flex-col md:flex-row">
         <div>
        <img
          src="/images/image (28).svg"
          alt="decoration"
          className="absolute bottom-0 left-0 w-28 md:w-40 md:block hidden "
        />
        </div>
    
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0E2A46] mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Suspendisse ultrice gravida dictum fusce placerat ultricies integer
          </p>

          <div className="bg-white relative shadow-sm p-6 rounded-lg space-y-6">
           
            {/* Address */}
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#FC6441] text-xl mt-1" />
              <div>
                <p className="text-gray-600">Our Address</p>
                <p className="font-semibold text-[#0E2A46]">
                  1564 Goosetown Drive <br />
                  Matthews, NC 28105
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3">
              <FaClock className="text-[#FC6441] text-xl mt-1" />
              <div>
                <p className="text-gray-600">Hours Of Operation</p>
                <p className="font-semibold text-[#0E2A46]">
                  Mon - Fri: 9.00am to 5.00pm
                </p>
                <p className="text-sm text-gray-500">[2nd Sat Holiday]</p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-[#FC6441] text-xl mt-1" />
              <div>
                <p className="text-gray-600">Contact</p>
                <p className="font-semibold text-[#0E2A46]">
                  +99-35895-4565
                </p>
                <p className="font-semibold text-[#0E2A46]">
                  supportyou@info.com
                </p>
              </div>
            </div>
          </div>
          <div className='flex gap-3 justify-center md:justify-end mt-6'>
                        <div className="bg-white p-2 rounded-full hover:bg-[#FC6441] hover:text-white transition-colors">
                          <FaFacebookF className='text-[#FC6441] text-xl cursor-pointer hover:text-white' />
                        </div>
                        <div className="bg-white p-2 rounded-full hover:bg-[#FC6441] hover:text-white transition-colors">
                          <FaInstagram className='text-[#FC6441] text-xl cursor-pointer hover:text-white' />
                        </div>
                        <div className="bg-white p-2 rounded-full hover:bg-[#FC6441] hover:text-white transition-colors">
                          <FaTwitter className='text-[#FC6441] text-xl cursor-pointer hover:text-white' />
                        </div>
                        <div className="bg-white p-2 rounded-full hover:bg-[#FC6441] hover:text-white transition-colors">
                          <FaPinterest className='text-[#FC6441] text-xl cursor-pointer hover:text-white' />
                        </div>
                      </div>
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col">
  <form className="space-y-2">
    {/* Name */}
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-[#0E2A46] mb-1">
        Name*
      </label>
      <input
        id="name"
        type="text"
        placeholder="Enter your name"
        className="w-full px-4 py-3 rounded-md bg-white shadow-lg focus:outline-none "
      />
    </div>

    {/* Email */}
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-[#0E2A46] mb-1">
        Email Address*
      </label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-3 rounded-md  focus:outline-none bg-white shadow-lg"
      />
    </div>

    {/* Phone */}
    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-[#0E2A46] mb-1">
        Phone*
      </label>
      <input
        id="phone"
        type="text"
        placeholder="Enter your phone"
        className="w-full px-4 py-3 rounded-md  focus:outline-none bg-white shadow-lg"
      />
    </div>

    {/* Subject */}
    <div>
      <label htmlFor="subject" className="block text-sm font-medium text-[#0E2A46] mb-1">
        Subject*
      </label>
      <input
        id="subject"
        type="text"
        placeholder="Enter subject"
        className="w-full px-4 py-3 rounded-md  focus:outline-none bg-white shadow-lg"
      />
    </div>

    {/* Message */}
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-[#0E2A46] mb-1">
        Message
      </label>
      <textarea
        id="message"
        rows="1"
        placeholder="Write your message"
        className="w-full px-4 py-3 rounded-md  focus:outline-none bg-white shadow-lg"
      ></textarea>
    </div>

    {/* Button */}
    <button
      type="submit"
      className="bg-[#704FE6] hover:bg-[#5b3ed1] text-white px-6 py-3 rounded-md font-semibold w-fit shadow-md"
    >
      SEND MESSAGE
    </button>
  </form>
</div>


        {/* Decorative bottom-left image */}
        
      </div>
    </div>
  );
};

export default Contact_us;

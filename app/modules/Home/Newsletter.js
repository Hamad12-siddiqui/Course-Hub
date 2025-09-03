import React from 'react'

const Newsletter = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#704FE6] relative my-10">
      <div className="w-full md:max-w-6xl flex flex-col justify-center items-center   p-4 md:p-0">
        {/* Left Image */}
        <img
          src="/images/image (20).svg"
          alt="left decoration"
          className="absolute left-0 top-0  w-20 sm:w-28 md:w-40 lg:w-52 "
        />

        {/* Right Image */}
        <img
          src="/images/image (21).svg"
          alt="right decoration"
          className="absolute right-0 bottom-0 w-20 sm:w-28 md:w-40 lg:w-52 "
        />

        {/* Top right small image */}
        <div className="w-full flex justify-end mt-2">
          <img
            src="/images/image (22).svg"
            alt="image"
            className="w-8 sm:w-10 md:w-12"
          />
        </div>

        {/* Content */}
        <div className="w-full md:max-w-5xl flex flex-col md:flex-row justify-between items-center gap-6 mt-6">
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-white text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Join Our Newsletter
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg">
              Subscribe our newsletter to get our latest update & news.
            </p>
          </div>

          {/* Input Section */}
          <div className="relative w-full md:w-1/3 bg-white rounded-lg mt-4 md:mt-0">
            {/* Input field */}
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 pr-28 rounded-lg focus:outline-none text-black text-sm sm:text-base"
            />

            {/* Button inside input */}
            <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-black text-white px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md whitespace-nowrap">
              subscribe now
            </button>
          </div>
        </div>

        {/* Bottom left small image */}
        <div className="w-full flex justify-start mt-6">
          <img
            src="/images/image (23).svg"
            alt="image"
            className="w-8 sm:w-10 md:w-12"
          />
        </div>
      </div>
    </div>
  )
}

export default Newsletter

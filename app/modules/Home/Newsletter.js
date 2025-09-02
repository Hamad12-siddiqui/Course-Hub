import React from 'react'

const Newsletter = () => {
  return (
   <div className="w-full flex flex-col justify-center items-center bg-[#704FE6] relative">
    <div className='w-full md:max-w-6xl flex flex-col justify-center items-center mb-10'>
  {/* Left Image */}
  <img
    src="/images/image (20).svg"
    alt="left decoration"
    className="absolute left-0 top-23 -translate-y-1/2 w-32 sm:w-40 md:w-52"
  />

  {/* Right Image */}
  <img
    src="/images/image (21).svg"
    alt="right decoration"
    className="absolute right-0 -bottom-15 -translate-y-1/2 w-32 sm:w-40 md:w-52"
  />
  <div className='w-full flex justify-end mt-2'>
    <img
    src="/images/image (22).svg"
    alt="image"
    className='w-12'

    />
  </div>

  <div className='w-full md:max-w-5xl flex justify-center items-center '>
  <div className="w-full text-white">
    <h2 className="text-2xl md:text-4xl font-bold">Join Our Newsletter</h2>
    <p className="mt-4 text-sm">
      Subscribe our newsletter to get our latest update & news.
    </p>
  </div>
   <div className="relative w-[500px]">
        {/* Input field */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 pr-32 rounded-lg border border-gray-300 focus:outline-none"
        />
        
        {/* Button inside input */}
        <button className="absolute top-1/2 right-1 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-md">
          subscribe now
        </button>
      </div>
      </div>
  </div>
</div>

  )
}

export default Newsletter

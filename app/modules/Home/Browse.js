'use client'
import React from 'react'
import { categories } from '@/app/constant/Browse.txt.js'
import Image from 'next/image'

const Browse = () => {
  return (
    <div className="flex justify-center items-center my-8 px-4 w-full">
      <div className=" max-w-5xl text-center p-0 lg:p-6">
        {/* Heading */}
        <h3 className="font-epilogue font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] capitalize text-[#17254E] mb-6">
          Browse By Categories
        </h3>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`flex justify-start items-center gap-4 py-4 px-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ${category.bgColor}`}
            >
              <Image
                src={category.icon}
                alt={category.name}
                width={10}
                height={10}
                className="w-10 h-10 sm:w-12 sm:h-12 object-cover"
              />
              <p className="font-epilogue font-bold text-base sm:text-lg md:text-xl">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Browse

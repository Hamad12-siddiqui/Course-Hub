import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const LearnGrow = () => {
    return (
        <>
            <div className='max-w-6xl mx-auto flex lg:flex-row flex-col px-4 lg:px-6 py-8 lg:py-16 gap-8'>
                {/* Left section with images */}
                <div className='lg:w-[40%] w-full lg:mx-0 mx-auto'>
                    <div className='flex gap-2 items-end justify-center lg:justify-start'>
                        <div>
                            <Image
                                src="/images/learnsection.svg"
                                height={250}
                                width={250}
                                className="rounded-bl-2xl w-[200px] sm:w-[250px] h-auto"
                                alt="Learning section illustration"
                            />
                        </div>
                        <div className='relative z-10'>
                            <Image
                                src="/images/learntower.svg"
                                height={150}
                                width={150}
                                className="w-[120px] sm:w-[150px] h-auto"
                                alt="Learning tower illustration"
                            />
                            <div className='w-36 sm:block hidden'>
                                <Image
                                    src="/images/image (4).svg"
                                    height={200}
                                    width={200}
                                    className='absolute -top-8 left-9 -z-10 w-[160px] sm:w-[200px] h-auto'
                                    alt="Decorative learning image"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 ml-4 sm:ml-16 relative'>
                        <Image
                            src="/images/learngroup.svg"
                            height={370}
                            width={370}
                            className="w-[300px] sm:w-[370px] h-auto"
                            alt="Group of learners illustration"
                        />
                        
                        <Image
                            src="/images/experienceyear.svg"
                            height={170}
                            width={170}
                            className='absolute -top-14 left-22 z-50 w-[140px] sm:w-[170px] h-auto'
                            alt="Experience year badge"
                        />
                    </div>
                </div>

                {/* Right section with content */}
                <div className='lg:w-[60%] w-full lg:mx-0 mx-auto'>
                    <div className='mb-6 lg:mb-10 flex justify-end'>
                        <Image
                            src="/images/flower.svg"
                            alt="Decorative flower"
                            height={50}
                            width={50}
                            className="w-[40px] sm:w-[50px] h-auto"
                        />
                    </div>
                    <div className='space-y-4'>
                        <h1 className='text-[#704FE6] bg-[#E9E2FF] text-sm font-normal inline-block px-4 py-1.5 rounded-sm'>
                            Our about us
                        </h1>
                        <p className='text-3xl lg:text-5xl font-bold max-w-2xl leading-tight'>
                            Learn & Grow your Skills From anywhere
                        </p>
                        <p className='text-base sm:text-lg max-w-2xl text-gray-600'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris..
                        </p>
                    </div>

                    <div className='grid sm:grid-cols-2 gap-6 mt-8 mb-8'>
                        <div className='space-y-2'>
                            <h2 className='text-lg font-bold'>Flexible Classes</h2>
                            <p className='text-gray-600'>
                                Suspendisse ultrice gravida dictum
                                fusce placerat ultricies integer quis
                                auctor elit sed vulputate mi sit.
                            </p>
                        </div>
                        <div className='space-y-2'>
                            <h2 className='text-lg font-bold'>Flexible Classes</h2>
                            <p className='text-gray-600'>
                                Suspendisse ultrice gravida dictum
                                fusce placerat ultricies integer quis
                                auctor elit sed vulputate mi sit.
                            </p>
                        </div>
                    </div>

                    <button className='inline-flex items-center gap-3 bg-[#785DD7] pl-4  text-white rounded-full hover:bg-[#6a4ec8] transition-colors'>
                        Load More
                        <span className='bg-[#6a4ec8] p-4 rounded-full'>
                            <FaArrowRight className="w-4 h-4" />
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default LearnGrow
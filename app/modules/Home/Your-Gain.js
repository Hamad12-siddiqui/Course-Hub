"use client "
import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const YourGain = () => {
    return (
        <div className='w-full relative'>
            <div className='absolute top-20 left-10 md:block hidden'>
                <Image
                    src="/images/balls.svg"
                    alt='Decorative Balls'
                    width={50}
                    height={50}
                />
            </div>
            <div className='absolute top-0 right-0 '>
                <Image
                    src="/images/layer.svg"
                    alt='Decorative Balls'
                    width={200}
                    height={200}
                />
            </div>
            <div className='absolute top-10 right-20 '>
                <Image
                    src="/images/greenflower.svg"
                    alt='Decorative Balls'
                    width={50}
                    height={50}
/>
            </div>
            <div className='max-w-5xl mx-auto pt-10 md:pt-20 '>
                <div className='px-4 sm:px-0 relative'>
                    
                    <h1 className='bg-[#E9E2FF] w-fit text-start text-[#704FE6] rounded-sm md:mx-auto text-sm sm:text-base py-1'>
                        Choose your career
                    </h1>
                    <h1 className='text-3xl text-start md:text-center sm:text-4xl md:text-5xl font-bold  my-4' >
                        Discover your gain
                    </h1>
                    <div className='absolute top-10 left-20 md:block hidden '>
                        <Image
                            src="/images/waves.svg"
                            alt='Decorative Balls'
                            width={80}
                            height={80}
                        />
                    </div>
            </div>
                <div className='flex flex-col md:flex-row gap-4 '>
                    <div className='w-full '>
                        <div className="bg-[url('/images/yourgainbg1.svg')] bg-[#704FE6] bg-center bg-cover rounded-lg overflow-hidden">
                            <div className='flex flex-col sm:flex-row justify-between '>
                                <div className='pt-6 sm:pt-10 text-white'>
                                    <p className='text-base sm:text-lg ml-4 sm:ml-6'>Start from today</p>
                                    <h1 className='text-base sm:text-lg font-bold ml-4 sm:ml-6 mt-2 max-w-[250px]'>Join our training courses & Build your skill.</h1>
                                    <button className='flex flex-row gap-2 items-center bg-[#FFD25D] rounded-full ml-4 sm:ml-6 mt-4 sm:mt-5 hover:bg-[#ffc845] transition-colors'>
                                        <p className='pl-4 py-2 text-sm sm:text-base'>Join now</p>
                                        <div className='text-black bg-[#FEB65C] p-3 sm:p-4 rounded-full'><FaArrowRight /></div>
                                    </button>
                </div>
                                <div className='pt-6 sm:pt-10'>
                                    <Image
                                        src="/images/yourgainlady2.svg"
                                        alt='Your Gain Image'
                                        width={300}
                                        height={300}
                                        className='w-[200px] sm:w-[250px] md:w-[300px] h-auto'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full'>
                        <div className="bg-[url('/images/yourgainbg2.svg')] bg-[#FFD25D] bg-center bg-cover rounded-lg overflow-hidden">
                            <div className='flex flex-col sm:flex-row justify-between'>
                                <div className='pt-6 sm:pt-10 text-white'>
                                    <p className='text-base sm:text-lg ml-4 sm:ml-6'>Start from today</p>
                                    <h1 className='text-base sm:text-lg font-bold ml-4 sm:ml-6 mt-2 max-w-[250px]'>Join our training courses & Build your skill.</h1>
                                    <button className='flex flex-row gap-2 items-center bg-[#704FE6] rounded-full ml-4 sm:ml-6 mt-4 sm:mt-5 hover:bg-[#5f3ed4] transition-colors'>
                                        <p className='pl-4 py-2 text-sm sm:text-base'>Join now</p>
                                        <div className='text-black bg-[#785DD7] p-3 sm:p-4 rounded-full'><FaArrowRight /></div>
                                    </button>
                                </div>

                                <div className='pt-6 sm:pt-10'>
                                    <Image
                                        src="/images/yourgainman.svg"
                                        alt='Your Gain Image'
                                        width={183}
                                        height={183}
                                        className='w-[150px] sm:w-[192px] h-auto'
                                    />
                                </div>
                                <div className='absolute bottom-0 left-24 md:block hidden '>
                                    <Image
                                        src="/images/sun.svg"
                                        alt='Decorative Balls'
                                        width={50}
                                        height={50}
                      />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourGain
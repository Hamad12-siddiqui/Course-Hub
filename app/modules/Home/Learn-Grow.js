import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const LearnGrow = () => {
    return (
        <>
            <div className='max-w-6xl mx-auto flex lg:flex-row flex-col'>

                <div className='w-[40%] lg-mx-0 mx-auto'>
                    <div className='flex gap-2 items-end'>
                        <div>
                            <Image src="/images/learnsection.svg" height={250} width={250} className="rounded-bl-2xl" alt="Learning section illustration" />
                        </div>
                        <div className='relative z-10 '>
                            <Image src="/images/learntower.svg" height={150} width={150} alt="Learning tower illustration" />
                            <div className='w-36'>
                                <Image src="/images/image (4).svg" height={200} width={200} className='absolute -top-8 left-9 -z-10 ' alt="Decorative learning image" /></div>
                        </div>
                    </div>
                    <div className='mt-4 ml-16 relative'>
                        <Image src="/images/learngroup.svg" height={370} width={370} alt="Group of learners illustration" />
                        <Image src="/images/experienceyear.svg" height={170} width={170} className='absolute -top-14 left-22 z-50' alt="Experience year badge" /> </div>
                </div>
                <div className='w-[60%] lg:mx-0 mx-auto'>
                    <div className='mb-10 flex justify-end'>
                        <Image
                        src = "/images/flower.svg"
                        alt = "Decorative flower"
                        height = {50}
                        width = {50}
                        
                        />
                    </div>
                    <div>
                        <h1 className='text-[#704FE6] bg-[#E9E2FF] text-sm font-normal max-w-28 text-center px-2 py-1 rounded-sm'> Our about us </h1>
                        <p className='text-5xl font-bold my-5 max-w-2xl'>Learn & Grow your  Skills
                            From anywhere</p>
                        <p className='mb-5 max-w-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris..</p>
                    </div>
                    <div className='flex max-w-2xl '>
                        <div className=''>
                            <h1 className='text-lg font-bold'>Flexible classNamees</h1>
                            <p className='mb-4 '>Suspendisse ultrice gravida dictum
                                fusce placerat ultricies integer quis
                                auctor elit sed vulputate mi sit.</p>
                        </div>
                        <div>
                            <h1 className='text-lg font-bold'>Flexible classNamees</h1>

                            <p className='mb-4'>
                                Suspendisse ultrice gravida dictum
                                fusce placerat ultricies integer quis
                                auctor elit sed vulputate mi sit.
                            </p>

                        </div>

                    </div>

                    <button className='flex items-center text-center gap-2 bg-[#785DD7] px-3 py-2 text-white rounded-full'>
                        Load More
                        <p className='bg-[#785DD7] p-2.5 rounded-full '>

                            <FaArrowRight />
                        </p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default LearnGrow
'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'

const MeetInstructor = () => {
    const data = [
        { img: "/images/instructor1.svg", name: "Micheal Hammond", Feild: "Teacher" },
        { img: "/images/instructor2.svg", name: "Cheryl Curry", Feild: "Teacher" },
        { img: "/images/instructor4.svg", name: "Jimmy Sifuentes", Feild: "Teacher" },
        { img: "/images/instructor3.svg", name: "Willie Diaz", Feild: "Teacher" },
        { img: "/images/instructor4.svg", name: "Jimmy Sifuentes", Feild: "Teacher" },
        { img: "/images/instructor3.svg", name: "Willie Diaz", Feild: "Teacher" },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 4;

    const handleNext = () => {
        if (startIndex + itemsPerPage < data.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const visibleItems = data.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className='w-full bg-[#E8E8F4] pt-16'>
            <div className='max-w-5xl mx-auto '>
                <div className='flex justify-between items-center'>
                    <div>
                        <div className='flex flex-row gap-2'>
                            <Image
                                src="/images/book.svg"
                                alt="logo"
                                width={15}
                                height={15}
                            />
                            <p className='text-lg text-[#FF9500]'>Teacher</p>
                        </div>
                        <h1 className='text-5xl font-bold mt-3'>Meet Our Instructor</h1>
                    </div>
                    <div className='flex gap-4'>
                        <button onClick={handlePrev} disabled={startIndex === 0}>
                            <IoIosArrowRoundBack
                                className={`border rounded-full ${startIndex === 0 ? 'text-gray-300 border-gray-300' : 'text-[#00BEAE] border-[#00BEAE]'}`}
                                size={36}
                            />
                        </button>
                        <button onClick={handleNext} disabled={startIndex + itemsPerPage >= data.length}>
                            <IoIosArrowRoundForward
                                className={`border rounded-full ${startIndex + itemsPerPage >= data.length ? 'text-gray-300 border-gray-300' : 'text-[#00BEAE] border-[#00BEAE]'}`}
                                size={36}
                            />
                        </button>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6'>
                    {visibleItems.map((item, index) => (
                        <div key={index} className='p-2 bg-white rounded-xl'>
                            <Image
                                src={item.img}
                                alt={item.name}
                                width={250}
                                height={250}
                                className='mx-auto pt-1'
                            />
                            <h1 className='text-2xl font-bold mt-2'>{item.name}</h1>
                            <p className='text-[#7768E5] my-1'>{item.Feild}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MeetInstructor;

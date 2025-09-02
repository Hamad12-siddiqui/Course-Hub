'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";

const data = [
    {
        img : "/images/coma.svg",
        name: "Kathy Sullivan",
        position: "CEO at ordian it",
        testimonial: "“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Orcinulla pellentesque dignissim enim.Amet consectetur adipiscing”"
    },
    {
        img : "/images/coma.svg",
        name: "Kathy Sullivan",
        position: "CEO at ordian it",
        testimonial: "“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Orcinulla pellentesque dignissim enim.Amet consectetur adipiscing”"
    },
    {
        img : "/images/coma.svg",
        name: "Kathy Sullivan",
        position: "CEO at ordian it",
        testimonial: "“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Orcinulla pellentesque dignissim enim.Amet consectetur adipiscing”"
    },
    {
        img : "/images/coma.svg",
        name: "Kathy Sullivan",
        position: "CEO at ordian it",
        testimonial: "“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Orcinulla pellentesque dignissim enim.Amet consectetur adipiscing”"
    },
]
function PauseOnHover() {
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getSlideSettings = () => {
        if (windowWidth <= 480) {
            return {
                dots: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1500,
                pauseOnHover: true
                
            };
        } else if (windowWidth <= 600) {
            return {
                dots: false,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 1500,
                pauseOnHover: true,
                initialSlide: 2
            };
        } else {
            return {
                dots: false,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1500,
                pauseOnHover: true,
                  centerMode: true,

            };
        }
    };

    const settings = getSlideSettings();
    return (
        <div className="max-w-5xl mx-auto  ">
            {typeof window !== 'undefined' && (
                <Slider {...settings} className="">
                    {data.map((item, index) => (
                        <div key={index} className={`border mx-auto relative p-4 mt-10 -z-10 rounded-3xl  = useContext(second) ${windowWidth <= 480 ? 'max-w-[250px]' :
                                windowWidth <= 600 ? 'max-w-[270px]' :
                                    'max-w-[290px]'
                            }`}>
                            <Image 
                                src={item.img}
                                width={50}
                                height={50}
                                alt="comma"
                                className="absolute -top-7 left-0 z-50"
                                />
                            <p className={`font-sora font-normal ${windowWidth <= 480 ? 'text-sm' : 'text-md'}`}>
                                {item.testimonial}
                            </p>
                            <h1 className={`font-epilogue font-semibold ${windowWidth <= 480 ? 'text-base' : 'text-lg'} mt-6`}>
                                {item.name}
                            </h1>
                            <p className="font-sora font-normal text-sm">{item.position}</p>
                        </div>    
                    ))}
                </Slider>
            )}
           
        </div>
    );
}

export default PauseOnHover;

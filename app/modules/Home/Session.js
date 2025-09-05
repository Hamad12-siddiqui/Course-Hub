"use client";
import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const Session = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full h-[200px] flex justify-center items-center overflow-hidden">
      {/* Video as Background */}
      <video
        ref={videoRef}
        src="/images/video.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover"
         autoPlay
  muted
  loop
      />

      {/* Overlay (optional dark layer for readability) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Content above video */}
      <div className=" w-full md:max-w-5xl pt-4 pb-1 relative z-10 flex  items-end h-full text-white">
        <div className="">
            <p className="font-[Sora] font-semibold text-md text-[#FFD25D] capitalize ">Join Our New Session</p>
        <h2 className=" max-w-2xl text-2xl md:text-4xl font-bold ">
          Call To Enroll Your Child (+91)958423452
        </h2>
        </div>
        <button
          onClick={togglePlay}
          className="flex items-center gap-2 bg-white text-[#704FE6] p-4 rounded-full "
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
          {isPlaying ? "" : ""}
        </button>
      </div>
    </div>
  );
};

export default Session;

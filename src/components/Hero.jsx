import { useGSAP } from '@gsap/react';
import React, { useRef, useState } from 'react'
import { BsPlayFill } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
function Hero() {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isClicked, setIsClicked] = useState(false);
    const totalvideos = 4;
    const nextVideoRef = useRef();

    const handleMiniVdClick = () => {
        setIsClicked(true);
        setCurrentIndex((currentIndex % totalvideos) + 1);
    }
    
    const getVideoSrc = (index) => {
        return `../public/videos/hero-${index}.mp4`;
    }

    useGSAP(() => {
        if (isClicked) {
            // gsap.set("#next-video", { visibility: "visible" });

            // gsap.to("#next-video", {
            //     transformOrigin: "center center",
            //     scale: 1,
            //     width: "100%",
            //     height: "100%",
            //     duration: 1,
            //     ease: "power1.inOut",
            //     onStart: () => nextVideoRef.current.play(),
            // })
            gsap.from("#current-video", {
                transformOrigin: "center center",
                scale: 0,
                duration: 1,
                ease: "power1.inOut",
            })
        }
    }, {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    });
    
    useGSAP(() => {
        gsap.set("#video-frame", {
            clipPath : "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
            borderRadius : "0% 0% 40% 10%"
        })
        gsap.from("#video-frame", {
            clipPath : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius : "0 0 0 0",
            ease : "power1.inOut",
            scrollTrigger : {
                trigger : "#video-frame", 
                start : "center center", 
                end : "bottom center",
                scrub : true,
            }
            
        })
    }, {

    })
    return (
        <div id='home' className='relative h-dvh w-screen overflow-x-hidden' >

            <div id='video-frame' className='relative h-dvh w-screen overflow-hidden z-10 rounded-lg bg-blue-75'>
                <div>
                    <div className="mask-clip-path absolute-center absolute z-50  size-64  cursor-pointer  overflow-hidden rounded-lg" >
                        <div
                            onClick={handleMiniVdClick}
                            className='origin-center  scale-50 opacity-0 transition-all duration-500 hover:scale-150 hover:opacity-100'
                        >
                            <video
                                ref={nextVideoRef}
                                src={getVideoSrc(currentIndex % totalvideos +1 )}
                                autoPlay
                                loop
                                muted
                                id="current-video"
                                // className='size-64 origin-center  scale-150 object-center object-cover'
                                className="size-64 origin-center scale-150 object-cover object-center"
                            />
                        </div>
                    </div>
                </div>


                {/* <video
                    ref={nextVideoRef}
                    src={getVideoSrc(currentIndex)}
                    // autoPlay
                    id='next-video'
                    loop
                    muted
                    className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                // className='absolute left-0 top-0 size-64 object-center object-cover'
                /> */}
                <video
                    ref={nextVideoRef}
                    src={getVideoSrc(
                        currentIndex
                    )} autoPlay
                    loop
                    muted
                    className="absolute left-0 top-0 size-full object-cover object-center"
                />

                <h1 className='special-font hero-heading z-40 text-blue-75 absolute bottom-5 right-5 '>
                    G<b>a</b>ming
                </h1>

                <div className='absolute left-0 top-0 z-40 size-full'>
                    <div className='mt-[5rem] px-5 sm:px-10'>
                        <h1 className='special-font hero-heading text-blue-75 '>
                            r<b>e</b>defi<b>n</b>e
                        </h1>
                        <p className='font-robert-regular text-blue-50 text-xl mb-10'>enter the megagame layer <br /> unleash the game economy</p>

                        <button className='rounded-full bg-yellow-300 px-10 p-3 '>
                            <p className='flex justify-center items-center gap-4 font-general'>
                                <BsPlayFill />  watch Trailer
                            </p>
                        </button>

                    </div>
                </div>
            </div>
                <h1 className='special-font hero-heading text-black   absolute bottom-5 right-5 '>
                    G<b>a</b>ming
                </h1>
        </div>
    )
}

export default Hero
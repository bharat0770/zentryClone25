import { useGSAP } from '@gsap/react';
import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import AnimatedText from './AnimatedText';
gsap.registerPlugin(ScrollTrigger   );
function About() {
    useGSAP(() => {

        const clipAnimation =  gsap.timeline({
            scrollTrigger : {
                trigger : "#clip", 
                start : "center center",
                end : "+=800 center", 
                scrub : 0.5, 
                pin : true,
                pinSpacing : true,          
            }
        })
        
        clipAnimation.to(".mask-clip-path",{
            width : "100vw", 
            height : "100vh",
            borderRadius  : 0
        } )
    })
    return (
        <div id='about' className='w-scree min-h-screen '>
            <div className='relative mb-8 mt-36 flex flex-col items-center'>
                <h2 className='font-general text-sm uppercase md:text-[16px]'>
                    welcome to zentry
                </h2>
                <AnimatedText 
                title={"discover  the worlds largest shared adventure"}
                containerClass={"mt-5 text-center !text-black"}
                />



                <div className='h-screen relative bg-green-500' id='clip'>
                    <div className='mask-clip-path  about-image bg-blue-500 w-screen'>
                        <img
                            src="img/about.webp"
                            alt="about image"
                            className='absolute left-0 top-0 size-full object-cover'
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About; 
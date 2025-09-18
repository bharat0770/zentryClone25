import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
import { useWindowScroll } from "react-use";

const navItems = ["home", "about", "features", "contact"];

function NavBar() {
    const navRef = useRef();
    const { y: currentScrollY } = useWindowScroll();
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);

    useEffect(() => {
        console.log("currentScrollY ", currentScrollY);
        if (currentScrollY == 0) {
            setIsNavVisible(true);
            navRef.current.classList.remove("bg-gray-800");
        } else if (lastScrollY < currentScrollY) {
            setIsNavVisible(false);
            navRef.current.classList.add("bg-gray-800");
        } else if (lastScrollY > currentScrollY) {
            setIsNavVisible(true);
        }
        setLastScrollY(currentScrollY); 
    }, [currentScrollY])
    useEffect(() => {
        gsap.to(navRef.current, {
            y : isNavVisible ?  0  : -100,
            opacity : isNavVisible ? 1 : 0, 
            duration : 0.2

        })
    }, [isNavVisible]); 
    //    useEffect(() => {
    //     console.log("changing"); 
    //     // navRef.current.classList.add(isNavVisible ? "!visible" : "!invisible");
    //     if(isNavVisible){
    //     navRef.current.classList.add("!visible");
    //     }else{
    //     navRef.current.classList.remove("!visible");
            
    //     }
    // }, [isNavVisible]);
    return (
        <div ref={navRef} className='fixed z-50 w-[100dvw] y-100  bg-gray-800 m-1 rounded-lg'>
            <div className='w-100dvw flex     bg-transparent  justify-between p-5 px-10'>
                <div className='font-zentry text-3xl text-white'>
                    l o g o
                </div>
                <div className='gap-5 text-white font-general text-2xl hidden lg:flex'>
                    {
                        navItems.map((e, idx) => {
                            return <a href={`#${e}`} key={idx} className='hover:underline'>{e}</a>
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default NavBar
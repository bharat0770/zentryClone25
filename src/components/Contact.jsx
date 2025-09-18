import React from 'react'



function Contact() {
    return (
        <div id='contact' className='h-screen w-screen px-8 py-36 lg:px-24 '>
            <div className='relative my-16 bg-black min-h-96 rounded-lg p-8'>
                <div
                    className='absolute hidden md:flex flex-col justify-between  top-0 h-full max-w-80 overflow-hidden '
                >
                    <img
                        src="img/contact-1.webp"
                        alt=""
                        className=" md:scale-100 top-0 object-cover  object-center [clip-path:polygon(16%_0%,89%_15%,75%_100%,0%_97%)] "
                    />
                    <img
                        src="img/contact-2.webp"
                        alt=""
                        className="relative [clip-path:polygon(16%_0%,89%_15%,85%_60%,20%_57%)] mr-auto  md:scale-150 top-50 object-cover  object-center"
                    // className="[clip-path:polygon(16%_0%,89%_15%,75%_100%,0%_97%)] md:scale-125"

                    />
                </div>

                <div
                    className='absolute -top-40  left-[10%]   w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80'
                >
                    <img
                        src="img/swordman-partial.webp"
                        alt=""
                        className="absolute md:scale-125"
                    />
                    <img
                        src="img/swordman.webp"
                        alt=""
                        className="sword-man-clip-path md:scale-125"
                    // className="[clip-path:polygon(16%_0%,89%_15%,75%_100%,0%_97%)] md:scale-125"

                    />
                </div>
                <div className='relative flex flex-col items-center text-center w-full h-full '>
                    <p className='font-general text-[10px] uppercase  text-white w-1/2'> JOIN Zentry</p>
                    <p className='special-font mt-10 font-zentry text-[3rem] md:text-[6rem] w-full md:w-1/2 text-white leading-[0.9]  '>
                        Let's build the new era  of  gaming  together
                    </p>
                    <button className='px-10 py-3 mt-5 text-general text-black bg-blue-50 rounded-full'>Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
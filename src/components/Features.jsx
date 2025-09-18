import React, { useRef, useState } from 'react'
// const BentoCard = ({ src, title, description }) => {
//     return <div className='relative size-full'>
//         <video
//             src={src}
//             muted
//             loop
//             autoPlay
//             className='absolute left-0 top-0 object-cover object-center'
//         />
//         <h1 className='absolute left-5 top-5 z-50 font-zentry text-white special-font text-5xl' >
//            {title}
//         </h1 >
//         <p className='absolute left-5 top-20 z-50 font-robert-medium text-white text-2xl w-1/2'>
//             {description}</p>
//     </div>
// }
const BentoCard = ({ src, title, description }) => {
    return (
        <div className="relative w-full h-full overflow-hidden rounded-2xl hover:border hover:border-blue-50">
            <video
                src={src}
                muted
                loop
                autoPlay
                playsInline
                className="absolute  w-full h-full object-cover"
            />
            <h1 className="absolute left-5 top-5 z-10 font-zentry text-white special-font text-5xl">
                {title}
            </h1>
            <p className="absolute left-5 top-20 z-10 font-robert-medium text-white text-2xl w-1/2">
                {description}
            </p>
        </div>
    )
}

const BentoTilt = ({ children, classname = "" }) => {
    const [transformStyle, setTransformStyle] = useState();
    const itemRef = useRef();
    const handleMouseMove = (e) => {
        if (!itemRef.current) return;
        const { left, top, width, height } = itemRef.current.getBoundingClientRect();
        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;
        const tiltX = (relativeX - 0.5) * 5;
        const tiltY = (relativeY - 0.5) * -5;
        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`;
        setTransformStyle(newTransform);
    }

    const handleMouseLeave = () => {
        setTransformStyle("");
    }

    return <div className={classname} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transform : transformStyle}}>
        {children}
    </div>
}
function Features() {
    return (
        <div id='features' className='max-w-screen min-h-screen bg-black px-10'>
            <h2 className='font-robert-medium text-3xl text-blue-50 mb-20'>
                Features
            </h2>

            <div className='parent-grid relative grid gap-10  grid-cols-1 lg:grid-cols-2 w-full h-[200vh]  lg:h-[100vh]'>
                <div className='relative'>
                    <BentoTilt classname='h-full w-full'>
                        <BentoCard
                            src="videos/feature-1.mp4"
                            title={<>raid<b>n</b>t</>}
                            description="a cross-platform metagame app, turning  your activities across Web2 games into a  rewarding adventure"
                        />
                    </BentoTilt>
                </div>

                <div className='relative grid gap-10 grid-cols-1 overflow-hidden '>
                    <BentoTilt classname='h-full w-full'>
                    <BentoCard
                        src="videos/feature-2.mp4"
                        title={<>raid<b>n</b>t</>}
                        description="a cross-platform metagame app, turning  your activities across Web2 games into a  rewarding adventure"
                        />
                        </BentoTilt>
                        <BentoTilt classname='h-full w-full'>
                    <BentoCard
                        src="videos/feature-4.mp4"
                        title={<>az<b>u</b>l</>}
                        description="a cross-platform metagame app, turning  your activities across Web2 games into a  rewarding adventure"
                        />
                        </BentoTilt>
                </div>
            </div>
        </div>

    )
}

export default Features
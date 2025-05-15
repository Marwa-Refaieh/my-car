import React from 'react';
import hero from '../assets/hero.jpeg'

const Hero = () => {
    return (
        <section className="relative h-[90vh] w-full mt-16 ">
            {/* خلفية صورة السيارة */} 
            <img
                src={hero}
                alt="Car Background"
                className="w-full h-full object-cover object-center"
            />

            {/* طبقة تغيم معتمة */}
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            {/* النص فوق الصورة */}
            <div className="absolute inset-0 flex flex-col justify-center  px-10">
                <h1 className="text-Myprimary text-4xl sm:text-5xl lg:text-8xl font-bold max-w-lg ">
                    Find A Car
                </h1>
                <h2 className="text-white text-2xl sm:text-2xl lg:text-4xl font-bold max-w-lg ">Quick And Super Easy!</h2>
            </div>
        </section>

    );
}

export default Hero;

import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/banner.png'
const Banner = () => {
    return (
       <section className='container bg-gray-800'>
         <div className='grid grid-cols-2 items-center'>
            <div>
                <p className='text-emerald-300'>WORKOUT LIBRARY</p>
            <h2 className='font-bold text-3xl'> TRAIN WITH INTENT. LOG <br />EVERY SET.</h2>
            <p className='text-gray-500'>
                FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
            </p>
            <button className="btn btn-accent">BROWSE WORKOUTS</button>
            </div>
            <div>
                <Image src={bannerImg} alt='' />
            </div>
        </div>
       </section>
    );
};

export default Banner;
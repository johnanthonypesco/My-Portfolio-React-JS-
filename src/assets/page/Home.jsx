import React from 'react';
import Nav from '../components/Nav.jsx';
import Me from '../images/me.jpg';

export default function Home() {
    return (
        <>
            <Nav/>
            <main>
                <section id='home' className='px-10 sm:px-32 mt-24 flex flex-col-reverse lg:flex-row items-center justify-center'>
                    <div className='w-full lg:w-1/2 flex flex-col gap-4 items-start'>
                        <h1 className='text-3xl lg:text-4xl font-bold mt-5 lg:mt-0'>Hi, I'm <span className='text-[#f12711] text-4xl lg:text-5xl'>John Anthony Pesco</span></h1>
                        <p className='text-3xl font-semibold'>I'm a System Developer/ Web Developer</p>
                        
                        <div className='flex gap-4 mt-5'>
                            <button className='px-4 py-2 border border-[#f12711] rounded-lg hover:cursor-pointer hover:-translate-y-1 transition duration-300'>Contact Me</button>
                            <button id='downloadcv' className='px-4 py-2 rounded-lg hover:cursor-pointer hover:-translate-y-1 transition duration-300'>Download CV</button>
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2 flex items-center justify-center'>
                        <img src={Me} alt="" className='w-[450px] rounded-full'/>
                    </div>
                </section>


            </main>
        </>
    );
}
import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav.jsx';
import Me from '../images/me.jpg';

const textToType = "I'm a System Developer / Web Developer";

export default function Home() {
    const [typedText, setTypedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index === textToType.length) {
            const resetTimer = setTimeout(() => {
                setTypedText('');
                setIndex(0);
            }, 2000);

            return () => clearTimeout(resetTimer);
        }

        const typingTimer = setTimeout(() => {
            setTypedText(textToType.substring(0, index + 1));
            setIndex(prevIndex => prevIndex + 1);
        }, 50);

        return () => clearTimeout(typingTimer);
    }, [index, textToType]);

    return (
        <>
            <Nav />
            <main className='z-0'>
                <section id='home' className='px-10 sm:px-32 mt-24 flex flex-col-reverse lg:flex-row items-center justify-center'>
                    <div className='w-full lg:w-1/2 flex flex-col gap-4 items-start'>
                        <h1 id='h1' className='text-3xl lg:text-4xl font-bold mt-5 lg:mt-0'>Hi, I'm <span className='text-[#f12711] text-4xl lg:text-5xl'>John Anthony Pesco</span></h1>
                        <p id='p' className='text-3xl font-regular'>
                            {typedText}
                            <span className="blinking-cursor">|</span>
                        </p>
                        <div className='flex gap-4 mt-5'>
                            <button className='px-4 py-2 border border-[#f12711] rounded-lg hover:cursor-pointer hover:-translate-y-1 transition duration-300'>Contact Me</button>
                            <button id='downloadcv' className='px-4 py-2 rounded-lg hover:cursor-pointer hover:-translate-y-1 transition duration-300'>Download CV</button>
                        </div>
                    </div>

                    <div id='homeimg' className='w-full lg:w-1/2 flex items-center justify-center'>
                        <img src={Me} alt="" className='w-[450px] rounded-full'/>
                    </div>
                </section>
            </main>
        </>
    );
}
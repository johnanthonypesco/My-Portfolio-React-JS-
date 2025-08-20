import React from 'react';
import { useState } from 'react';
import '../css/nav.css';
// import logo from '../images/logo.png';

export default function Nav() {

    const [open, setOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center px-5 lg:px-20 h-16 fixed top-0 left-0 right-0 bg-black z-1" id='nav'>
            <h1 className='text-2xl font-bold tracking-wider text-[#f12711]'>Anthony</h1>
                <ul className={'flex gap-8 lg:flex lg:static lg:opacity-100 lg:p-0 lg:flex-row lg:items-center absolute bg-black top-[62px] right-0 left-0 p-5 flex-col opacity-0 transition duration-300 ' + (open ? 'opacity-100' : 'opacity-0')}>

                <li><a href="#" className='hover:text-[#f12711] font-medium tracking-wide transition duration-300'>Home</a></li>
                <li><a href="#" className='hover:text-[#f12711] font-medium tracking-wide transition duration-300'>About Me</a></li>
                <li><a href="#" className='hover:text-[#f12711] font-medium tracking-wide transition duration-300'>Contact Me</a></li>
            <button id='downloadcv' className='px-4 py-2 rounded-lg bg-[#1DA1F2] flex items-center justify-center w-fit font-semibold hover:-translate-y-1 transform duration-300'>Download CV</button>
            </ul>

            <i class={"fa-solid fa-bars text-2xl hover:text-[#f12711] transition duration-300 hover:cursor-pointer lg:hidden block" + (open ? ' fa-xmark' : ' fa-bars')} onClick={() => setOpen(!open)}></i>
        </nav>
    );
}
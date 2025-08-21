import Social from '../components/Social.jsx';

export default function Footer(){
    return(
        <footer className="py-10 flex flex-col justify-center items-center lg:mt-0">
            <h1 className="text-center text-[30px] font-semibold uppercase text-[#f12711]">Anthony</h1>
            <ul className="flex gap-[30px] items-center mt-5">
                <a href="#home" className="uppercase hover:text-[#f12711] font-semibold">Home</a>
                <a href="#about" className="uppercase hover:text-[#f12711] font-semibold">About Me</a>
                <a href="#portfolio" className="uppercase hover:text-[#f12711] font-semibold">Portfolio</a>
                <a href="#contact" className="uppercase hover:text-[#f12711] font-semibold">Contact Me</a>
            </ul>
            <Social />
            <hr className="bg-[#f12711] h-[2px] w-[30%] mt-10" />
            <p className="mt-5 font-regular flex items-center gap-2">Copyright <span className="text-[#f12711] font-bold text-[20px]">&copy;</span> John Anthony Pesco. All Rights Reserved</p>
        </footer>
    );  
}
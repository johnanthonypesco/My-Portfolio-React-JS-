import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav.jsx';
import Social from '../components/Social.jsx';
import Footer from '../components/Footer.jsx';
import Me from '../images/me.jpg';
import Me2 from '../images/meee.jpg';
import AssetCreation from '../images/Assetcreation.png';
import BPO from '../images/bpo.png';
import Humanitarian from '../images/humanitarian.png';
import Thriving from '../images/thriving.png';
import DataAnalytics from '../images/dataanalytics.png';
import Best from '../images/best.jpg';
import Database from '../images/Database.jpg';
import Css from '../images/Css.jpg';
import Iccs from '../images/Iccs.jpg';
import Mcsn from '../images/Mcsn.jpg';
import Suss from '../images/Suss.jpg';
import NCII from '../images/NCII-CSS.jpg';
import Innovex from '../images/Innovex.jpg';
import AwsArchitecting from '../images/Aws Cloud Architecting.jpg';
import AwsDeveloping from '../images/Aws Cloud Developing.jpg';
import Ampms from '../images/ampms.jpg';
import Lucidity from '../images/lucidity.png';
import Catalog from '../images/catalog.JPG';
import Evaluator from '../images/evaluator.png';
import PetMed from '../images/PetMed.png';
import Resort from '../images/resort.JPG';
import AcademiCheck from '../images/academicheck.png';
import ArkVisions from '../images/arkvisions.png';
import Rmpoims from '../images/rmpoims.png';

const textToType = "I'm a System Developer / Web Developer";

const certificates = [
  { src: NCII, alt: "NCII - CSS"},
  { src: AwsArchitecting, alt: "AWS Cloud Architecting"},
  { src: AwsDeveloping, alt: "AWS Cloud Developing"},
  { src: Innovex, alt: "Innovex"},
  { src: Database, alt: "Database Management"},
  { src: Best, alt: "Best Student Award"},
  { src: Iccs, alt: "ICCS - CSS"},
  { src: Css, alt: "CSS"},
  { src: Suss, alt: "Suss"},
  { src: Mcsn, alt: "Mcsn" },
  { src: AssetCreation, alt: "Certificate in Asset Creation"},
  { src: BPO, alt: "Certificate in BPO"},
  { src: Humanitarian, alt: "Certificate in Humanitarian Studies"},
  { src: Thriving, alt: "Certificate in Thriving in a Digital World"},
  { src: DataAnalytics, alt: "Certificate in Data Analytics"},
];

const projects = [
    { src: Rmpoims, title: 'RCT MED PHARMA ORDERING AND INVENTORY MANAGEMENT SYSTEM', description: 'RMPOIMS is our capstone project that allows you to place orders, track inventory, and manage transactions with ease.', link: 'https://github.com/johnanthonypesco/RMPOIMS.git' },
    { src: AcademiCheck, title: 'ACADEMICHECK', description: 'A AcademiCheck is a system that focuses on student attendance monitoring.', link: 'https://github.com/Jann100815/ATTENDANCE-MONITORING-SYSTEM.git' },
    { src: ArkVisions, title: 'ARK VISIONS APPOINTMENT SYSTEM', description: 'A Ark Visions Appointment System is a system that the user can book their chosen services.', link: 'https://github.com/SDEG77/TRIPLE-SUBJECTS.git' },
    { src: Ampms, title: 'Ampms', description: 'AMPMS is a Attendance and Payroll Management System of a Team Intelligence', link: 'https://drive.google.com/drive/u/0/folders/1FDmpdUwRW2DiYjfQ7QK-EZBhkCwT8Zxz' },
    { src: Lucidity, title: 'Lucidity', description: 'Lucidity is a e-commerce website/system that the user can view, add to cart, and checkout a item.', link: 'https://drive.google.com/drive/u/0/folders/12dtdeChUzOsxb90m_78Ug9XzFnBALmII' },
    { src: Catalog, title: 'Team Intelligence Catalog', description: 'A Team Intelligence Catalouge is a website that the user can view their offered services.', link: 'https://drive.google.com/drive/u/0/folders/12qPFnp4GGBbYl8MEjB3n60Iu8CsrCfY3' },
    { src: Evaluator, title: 'Student Evaluator System', description: 'A Student Evaluator System is a system that the Faculty can evaluate a student.', link: 'https://drive.google.com/drive/folders/10otrZ1e4egxKKygwayfgjQzvtslx3bGx?fbclid=IwAR3yZP-rFoXD__SbUddjfAwBOinNcY-2-OI6vPZ-vZf_RLCAReeVQGzh2Fk' },
    { src: PetMed, title: 'PetMed', description: 'PetMed is an android application that the user can book their chosen services to their pets', link: 'https://drive.google.com/drive/u/0/folders/15wNFdyvziDln1nbbUNN9vI57bI24qeuO' },
    { src: Resort, title: 'Resort Management System', description: 'A resort management system is the user can book his/her chosen room of the hotel.', link: 'https://drive.google.com/drive/folders/10otrZ1e4egxKKygwayfgjQzvtslx3bGx?fbclid=IwAR3yZP-rFoXD__SbUddjfAwBOinNcY-2-OI6vPZ-vZf_RLCAReeVQGzh2Fk' },
];

export default function Home() {
    const [typedText, setTypedText] = useState('');
    const [index, setIndex] = useState(0);
    const [formData , setFormData] = useState({
        name: '',
        subject: '',
        message: ''
    })

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

    const handleFormSubmit = (e) => {
      e.preventDefault();
      console.log('Form data submitted:', formData);
      alert('Message sent! (Simulated)');
      setFormData({
        fullName: '',
        email: '',
        message: ''
      });
    };

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
            <main className='pb-20'>
                <section id='home' className='px-10 sm:px-32 mt-32 flex flex-col-reverse lg:flex-row items-center justify-center scroll-mt-24'>
                    <div className='w-full lg:w-1/2 flex flex-col gap-4 items-start'>
                        <h1 id='h1' className='text-3xl lg:text-4xl font-bold mt-5 lg:mt-0'>Hi, I'm <span className='text-[#f12711] text-4xl lg:text-5xl'>John Anthony Pesco</span></h1>
                        <p id='p' className='text-3xl font-regular'>
                            {typedText}
                            <span className="blinking-cursor">|</span>
                        </p>

                        {/* Social Components here */}
                        <Social />
                        {/* Social Components here */}

                        <div className='flex gap-4 mt-5'>
                            <button className='px-4 py-2 border border-[#f12711] rounded-lg hover:cursor-pointer hover:-translate-y-1 transition duration-300'>Contact Me</button>
                            <button onClick={() => window.open("https://pescojohnanthony.jobs180.com/", '_blank')} id='downloadcv' className='flex items-center gap-2 px-4 py-2 rounded-lg hover:cursor-pointer hover:-translate-y-1 transition duration-300'><i class="fa-solid fa-file-export"></i>Download CV</button>
                        </div>
                    </div>

                    <div id='homeimg' className='w-full lg:w-1/2 flex items-center justify-center'>
                        <img src={Me} alt="" className='w-[450px] rounded-full'/>
                    </div>
                </section>

                <section id='about' className='flex flex-col justify-center mt-36 px-10 sm:px-32'>
                    <h1 id='abouttitle' className='text-center text-2xl font-bold mt-24'>About Me</h1>

                    <div id='aboutcontent' className='flex flex-col lg:flex-row justify-center gap-10 mt-24'>
                        <div id='toright' className='flex justify-center'>
                            <img src={Me2} alt="" className='w-[500px] h-[400px]'/>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <p id='toleft' class="text-justify tracking-wide leading-8">
                                I'm <span class="text-[#f12711] font-bold uppercase text-[20px]">John Anthony Pesco</span> a goal-oriented person who is driven to succeed 
                                and is driven by ambition. I push myself toward achievement under the 
                                direction of a results-oriented attitude, gaining the respect of both 
                                colleagues and peers. My goal acts as a compass, pointing the way in 
                                the direction of ongoing success. I am well-known in the business world 
                                for my laser-like focus and unyielding tenacity. My dedication to greatness 
                                is recognized by peers and colleagues alike, which has cemented my standing 
                                as a renowned authority in the pursuit of success.
                            </p>

                            <button id='downloadcv' className='flex items-center gap-2 px-4 py-2 rounded-lg hover:cursor-pointer hover:-translate-y-1 transition duration-300 mt-10 lg:mt-24'><i class="fa-solid fa-file-export"></i>Download my CV</button>
                        </div>
                    </div>

                    <h1 id='abouttitle' className='text-center text-2xl font-bold mt-24'>Skill Set</h1>
                    <p id='totop' className='text-center mt-5 text-[#f12711] text-lg'>Front-End Development</p>

                    <div className="flex flex-wrap gap-10 justify-center mt-10">
                        <img id='toright' src="https://www.svgrepo.com/show/353925/javascript.svg" alt="JavaScript logo" className='w-[100px]' />
                        <img id='tobottom' src="https://www.svgrepo.com/show/353884/html-5.svg" alt="HTML logo" className='w-[100px]'/>
                        <img id='totop' src="https://www.svgrepo.com/show/452185/css-3.svg"  alt="Css logo" className='w-[100px]'/>
                        <img id='tobottom' src="https://www.svgrepo.com/show/374118/tailwind.svg" alt="Tailwind logo" className='w-[100px]'/>
                        <img id='totop' src="https://www.svgrepo.com/show/452092/react.svg" alt="React logo" className='w-[100px]'/>
                        <img id='toleft' src="https://www.svgrepo.com/show/353498/bootstrap.svg" alt="Bootstrap logo" className='w-[100px]' />
                    </div>

                    <p id='tobottom' className='text-center text-[#f12711] mt-10 text-lg'>Back-End Development</p>
                   
                    <div className="flex flex-wrap justify-center gap-10 mt-10">
                        <img id='toright' src="https://www.svgrepo.com/show/354180/php.svg" alt="PHP logo" className="w-[100px] rounded-[10px]" />
                        <img id='tobottom' src="https://www.svgrepo.com/show/376337/node-js.svg" alt="Node.js logo" className="w-[100px] rounded-[10px]" />
                        <img id='totop' src="https://www.svgrepo.com/show/303251/mysql-logo.svg" alt="MySQL logo" className="w-[100px] rounded-[10px]" />
                        <img id='toleft' src="https://www.svgrepo.com/show/303232/mongodb-logo.svg" alt="MongoDB logo" className="w-[100px] rounded-[10px]" />
                    </div>

                    <p id='totop' className='text-center text-[#f12711] mt-10 text-lg'>Others</p>
                    <div id="animatescroll" className="flex flex-wrap justify-center gap-10 mt-10">
                        <img id='toright' src="https://www.svgrepo.com/show/374187/word.svg" alt="Microsoft Word logo" className="w-[100px] rounded-[10px]" />
                        <img id='totop' src="https://www.svgrepo.com/show/373589/excel.svg" alt="Microsoft Excel logo" className="w-[100px] rounded-[10px]" />
                        <img id='tobottom' src="https://cdn.brandfetch.io/id9mVQlyB1/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" alt="Canva logo" className="w-[100px] rounded-[10px]" />
                        <img id='totop' src="https://www.svgrepo.com/show/373989/powerpoint.svg" alt="Microsoft PowerPoint logo" className="w-[100px] rounded-[10px]" />
                        <img id='tobottom' src="https://www.svgrepo.com/show/452202/figma.svg" alt="Figma logo" className="w-[100px] rounded-[10px]" />
                        <img id='toleft' src="https://www.svgrepo.com/show/373968/photoshop.svg" alt="Adobe Photoshop logo" className="w-[100px] rounded-[10px]" />
                        </div>
                </section>

                <section id='portfolio' className='flex flex-col justify-center items-center px-10 sm:px-20 mt-36 scroll-mt-20'>
                    <h1 id='portfoliotitle' className='text-2xl font-bold'>Portfolio</h1>
                    <p id='totop' className='text-[#f12711] mt-5 text-lg'>Checkout my Certificates</p>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {certificates.map((certificate, index) => (
                            <img
                                key={index}
                                id="tobottom"
                                src={certificate.src}
                                alt={certificate.alt}
                                className="w-[330px] h-[250px] border-[#036d6b] border-[1px] rounded-[15px]"
                            />
                        ))}
                    </div>

                    <p id='totop' className='text-[#f12711] mt-24 text-lg'>Checkout my Projects</p>

                    <div className="mt-10 flex flex-wrap gap-5 justify-center">
                        {projects.map((project, index) => (
                            <div key={index} className="w-fit flex flex-col w-[330px] h-[300px]">
                                <img id='totop' src={project.src} alt={project.title} className="w-[330px] h-[170px] rounded-[15px]"/>
                                <p className="text-[#f12711] font-semibold px-1 mt-1 w-[340px]">{project.title}</p>
                                <p className="w-[340px] text-[12px] px-1">{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center text-[13px] mt-auto px-1 border-b-[1px] border-[#f12711] w-fit mt-3 hover:gap-4 font-semibold transition-all duration-300">
                                    Visit Project<i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="contact" className="flex flex-col items-center mt-36 scroll-mt-20">
                    <h1 id="contacttitle" className="text-center text-2xl font-bold">Contact Me</h1>
                    <h1 id='totop' className="text-lg text-[#f12711] mt-5">Get in touch</h1>
                    <form onSubmit={handleFormSubmit} className="px-5 lg:px-12 py-12 w-fit flex flex-col justify-center items-center gap-5 mt-10 border-[#f12711] border-[1px] rounded-xl">
                        <div className="flex flex-col lg:flex-row justify-center gap-5 relative">
                            <div id='toright' className="flex flex-col px-5 w-full">
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name"
                                    value={formData.fullName}
                                    onChange={handleFormChange}
                                    className="border-[#f12711] border-[1px] w-full px-3 py-2 rounded-[12px] outline-none text-black"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    className="border-[#f12711] border-[1px] w-full px-3 py-2 rounded-[12px] outline-none mt-3 text-black"
                                />
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleFormChange}
                                    className="border-[#f12711] border-[1px] h-[100px] w-full px-3 py-2 rounded-[12px] outline-none mt-3 text-black"
                                ></textarea>
                                <button type="submit" className="font-semibold bg-gradient-to-r from-[#f5af19] to-[#f12711] uppercase text-white px-[30px] py-2 rounded-[12px] mt-3 w-fit">Send</button>
                            </div>
                            <div id='toleft' className="flex flex-col">
                                <p className="flex gap-4 items-center"><i className="fa-solid fa-location-dot text-[#f12711] text-[20px]"></i>Location: San Cristobal, Licab, Nueva Ecija</p>
                                <p className="flex gap-4 items-center mt-4"><i className="fa-solid fa-phone text-[#f12711] text-[20px]"></i>Phone: 09193294773</p>
                                <p className="flex gap-4 items-center mt-4"><i className="fa-solid fa-envelope text-[#f12711] text-[20px]"></i>Email: joli.pesco.au@phinmaed.com</p>
                            </div>
                        </div>
                    </form>
                </section>
            </main>

            <Footer />
        </>
    );
}
import React, { useEffect } from "react";
import { moon, github, linkedin, instagram, twitter, picture, crown, app, globe } from '../assets'
import resume from '../assets/Divine-Edwin-Resume.pdf'
// import AOS from "aos";
// import 'aos/dist/aos.css';
// import { GiHamburgerMenu } from "react-icons/fa";

const Header = () => {

    // useEffect(() => {
    //     AOS.init({
    //       duration: 1000 // set the animation duration (in milliseconds)
    //     });
    //   }, []); 
    // AOS.init();

    // const handleDownload = () => {
    //     window.open('../assets/Divine-Edwin-Resume.pdf', '_blank', 'download')
    // }

    return (
        <>
            <nav className="xl:flex hidden justify-between items-center px-10 my-5 font-inter">
                <p data-aos="fade-right" className="text-lg font-bold font-shrik">Divine <span className="text-[#7E74F1]">Edwin</span></p>

                <ul data-aos="fade-down" className="flex gap-x-5 text-cinder-dark font-inter">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolios">Portfolios</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div data-aos="fade-left" className="flex gap-x-5">
                    <img className="cursor-pointer" src={moon} alt="moon-icon" />
                    <button href={resume} download className="border rounded-lg px-3 py-2 font-semibold text-cinder-dark font-inter">Resume</button>
                </div>
            </nav>

            {/* <nav>
                <p className="text-lg font-bold font-inter">Divine Edwin</p>
                <GiHamburgerMenu />
            </nav> */}

            <section className="flex gap-20 flex-col xl:flex-row md:flex-row my-40 justify-around items-center">
                <div data-aos="zoom-in" className="flex flex-col gap-5 mx-20 xl:mx-0">
                    <div className="flex gap-3">
                        <p className="border-2 w-4 h-1 my-2 text-[#D9D9D9]"></p>
                        <p className="text-sm font-light text-cinder-light tracking-widest font-inter">MY NAME IS</p>
                    </div>
                    <h1 className="text-cinder-dark text-6xl font-bold font-pjs">Divine <span className="text-[#7E74F1]">Edwin.</span></h1>
                    <p className="text-sm w-72 xl:w-96 leading-8 font-inter">
                        Creative frontend developer, who specializes in designing visually appealing and intuitive user interfaces that improve user experience.
                        Proficient in Html, Tailwind Css, Javascript and React.
                    </p>
                    <div className="flex items-center gap-5">
                        <a href="https://github.com/Cheeh1"><img src={github} alt="twitter-icon" /></a>
                        <a href="https://twitter.com/iamcheeh"><img src={twitter} alt="twitter-icon" /></a>
                        <a href="https://www.linkedin.com/in/divineedwin/"><img src={linkedin} alt="linkedin-icon" /></a>
                    </div>
                </div>
                <div className="w-96 md:w-96">
                    <img data-aos="flip-right" src={picture} alt="Picture" />
                </div>
            </section>

            <section className=" flex flex-col items-center gap-20 p-20 bg-[#FBFBFB]" id="services">
                <div data-aos="zoom-in-down" className="flex flex-col gap-2 items-center">
                    <div className="flex gap-3">
                        <p className="border-2 w-4 h-1 my-2.5 text-[#D9D9D9]"></p>
                        <p className="text-md font-light text-cipher-light tracking-widest font-inter">SERVICES</p>
                    </div>
                    <p className="text-cinder-dark font-bold text-3xl font-pjs xl:ml-20">Specialized in</p>
                </div>

                <div className="flex flex-col gap-20 xl:flex-row md:flex-row xl:gap-72">
                    <div data-aos="zoom-in" className="flex flex-col justify-center gap-3 items-center bg-white p-10 border rounded-lg">
                        <img className="border rounded-lg bg-[#F5F3FE] p-3 w-12" src={globe} alt="globe" />
                        <p className="font-pjs text-sm">Web Development</p>
                        <p className="font-inter w-50 xl:w-64 text-center">
                            Create and maintain your websites, as well as track their performance and traffic capacity.
                        </p>
                    </div>
                    <div data-aos="zoom-in" className="flex flex-col justify-center gap-3 items-center bg-white p-10 border rounded-lg">
                        <img className="border rounded-lg bg-[#F5F3FE] p-3 w-12" src={crown} alt="app" />
                        <p className="font-pjs text-sm text-center">Technical Writing</p>
                        <p className="font-inter xl:w-64 text-center">
                            Create content on web-related topics for simplicity and better comprehension.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Header
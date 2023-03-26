import React from "react";
import { moon, github, linkedin, instagram, twitter, picture, crown, app, globe } from '../assets'

const Header = () => {
    return (
        <>
            <nav className="flex justify-between items-center px-10 my-5 font-inter">
                <p className="text-lg font-bold font-inter">Divine Edwin</p>

                <ul className="flex gap-x-5 text-cinder-dark font-inter">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolios">Portfolios</a></li>
                    <li><a href="#experiences">Experience</a></li>
                    <li><a href="#blog">Blog</a></li>
                </ul>

                <div className="flex gap-x-5">
                    <img className="cursor-pointer" src={moon} alt="moon-icon" />
                    <button className="border rounded-lg px-3 py-2 font-semibold text-cinder-dark font-inter">Resume</button>
                </div>
            </nav>

            <section className="flex my-40 mx-24 ">
                <div className="flex flex-col gap-5">
                    <div className="flex gap-3">
                        <p className="border-2 w-4 h-1 my-2 text-[#D9D9D9]"></p>
                        <p className="text-sm font-light text-cinder-light tracking-widest font-inter">MY NAME IS</p>
                    </div>
                    <h1 className="text-cinder-dark text-6xl font-bold font-pjs">Divine <span className="text-[#7E74F1]">Edwin.</span></h1>
                    <p className="text-sm w-3/5 leading-8 font-inter">
                        Creative front-end developer with more than +2 years of experience in enterprise companies and startups.
                        Proficient in Html, Tailwind Css, Javascript and React. Passionate about UI/UX
                    </p>
                    <div className="flex items-center gap-5">
                        <a href="#instagram"><img src={instagram} alt="instagram-icon" /></a>
                        <a href="#github"><img src={github} alt="twitter-icon" /></a>
                        <a href="#twitter"><img src={twitter} alt="twitter-icon" /></a>
                        <a href="#linkedin"><img src={linkedin} alt="linkedin-icon" /></a>
                    </div>
                </div>
                <div>
                    <img src={picture} alt="Picture" />
                </div>
            </section>

            <section className=" flex flex-col gap-20 p-20 bg-[#FBFBFB]">
                <div className="flex flex-col gap-2 items-center">
                    <div className="flex gap-3">
                        <p className="border-2 w-4 h-1 my-2.5 text-[#D9D9D9]"></p>
                        <p className="text-md font-light text-cipher-light tracking-widest font-inter">SERVICES</p>
                    </div>
                    <p className="text-cinder-dark font-bold text-3xl font-pjs ml-20">Specialized in</p>
                </div>

                <div className="flex gap-20 justify-evenly">
                    <div className="flex flex-col justify-center gap-3 items-center bg-white py-10 px-10 border rounded-md">
                        <img className="border rounded-lg bg-[#F5F3FE] p-3 w-12" src={crown} alt="crown" />
                        <p className="font-pjs text-sm">UI/UX Design</p>
                        <p className="font-inter w-60 text-center">Turn what you have in mind of a digital product into reality.
                            For any platform you consider.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center gap-3 items-center bg-white py-10 px-10 border rounded-md">
                        <img className="border rounded-lg bg-[#F5F3FE] p-3 w-12" src={app} alt="app" />
                        <p className="font-pjs text-sm">Application Development</p>
                        <p className="font-inter w-64 text-center">
                            Standard designing, building, and implementing your applications
                            with documentation.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center gap-3 items-center bg-white py-10 px-10 border rounded-md">
                        <img className="border rounded-lg bg-[#F5F3FE] p-3 w-12" src={globe} alt="globe" />
                        <p className="font-pjs text-sm">Web Development</p>
                        <p className="font-inter w-64 text-center">
                            Create and maintain your websites and also take care of
                            its performance and traffic capacity.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Header
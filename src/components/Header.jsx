import React, { useEffect } from "react";
import { github, linkedin, twitter, picture} from '../assets'
// import AOS from "aos";
// import 'aos/dist/aos.css';

const Header = () => {

    // useEffect(() => {
    //     AOS.init({
    //       duration: 1000 // set the animation duration (in milliseconds)
    //     });
    //   }, []); 
    // AOS.init();

    return (
        <>
            <section className="flex gap-20 flex-col xl:flex-row md:flex-row my-28 justify-around items-center">
                <div data-aos="zoom-in" className="flex flex-col gap-5 mx-20 xl:mx-0">
                    <div className="flex gap-3">
                        <p className="border-2 w-4 h-1 my-2 text-[#D9D9D9]"></p>
                        <p className="text-sm font-light text-cinder-light tracking-widest font-inter">MY NAME IS</p>
                    </div>
                    <h1 className="text-cinder-dark text-6xl font-bold font-pjs">Divine <span className="text-purplelight">Edwin.</span></h1>
                    <p className="text-sm w-72 xl:w-96 leading-8 font-inter">
                        Creative frontend developer, who specializes in designing visually appealing and intuitive user interfaces that improve user experience.
                        Proficient in Html, Tailwind Css, Javascript and React.
                    </p>
                    <div className="flex items-center gap-5">
                        <a href="https://github.com/Cheeh1" target='_blank'><img src={github} alt="github" /></a>
                        <a href="https://twitter.com/iamcheeh" target='_blank'><img src={twitter} alt="twitter" /></a>
                        <a href="https://www.linkedin.com/in/divineedwin/" target='_blank'><img src={linkedin} alt="linkedin" /></a>
                    </div>
                </div>
                <div className="xl:w-96">
                    <img data-aos="flip-right" src={picture}alt="Picture" />
                </div>
            </section>
        </>
    )
}
export default Header
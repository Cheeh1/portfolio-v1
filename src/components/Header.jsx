import React from "react";
// import { divine } from "../assets";
import divine from "/images/divine.jpg"
import Aos from "aos";

const Header = () => {
  Aos.init({
    // duration: 500,
    once: true,
  });

  return (
    <>
      <section className="flex gap-y-20 flex-col xl:flex-row md:flex-row my-28 justify-around items-center">
        <div className="flex flex-col gap-5 mx-20 xl:mx-0">
          <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="200" className="flex gap-3">
            <p className="border-2 w-4 h-1 my-2 text-[#D9D9D9]"></p>
            <p className="text-sm font-light text-cinder-light dark:text-white tracking-widest font-inter">
              MY NAME IS
            </p>
          </div>
          <h1 data-aos="fade-right" data-aos-duration="800" data-aos-delay="400" className="text-cinder-dark-mode text-5xl font-bold font-pjs xl:text-6xl">
            Divine Edwin.
          </h1>
          <p data-aos="fade-right" data-aos-duration="800" data-aos-delay="600" className="text-md w-80 xl:w-96 leading-8 font-inter">
          A Frontend Developer focused on building fast, scalable, and maintainable web applications.    
          I care deeply about performance, clean architecture, and delivering seamless user experiences. <br /> Skilled in React, Next.js, JavaScript, TypeScript, and Tailwind CSS, 

          </p>
          <div  className="flex items-center gap-5">
            <a data-aos="fade-right" data-aos-duration="800" data-aos-delay="800" href="https://github.com/Cheeh1" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github fa-xl"></i>
            </a>
            <a data-aos="fade-right" data-aos-duration="800" data-aos-delay="900" href="https://twitter.com/iamcheeh" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-twitter fa-xl"></i>
            </a>
            <a data-aos="fade-right" data-aos-duration="800" data-aos-delay="1100" href="https://www.linkedin.com/in/divineedwin/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin-in fa-xl"></i>
            </a>
            <a data-aos="fade-right" data-aos-duration="800" data-aos-delay="1200" href="https://cheehdevworkshop.hashnode.dev/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-blogger fa-xl"></i>
            </a>
          </div>
        </div>
        <div className="xl:w-96 w-80" data-aos="flip-right" data-aos-duration="800" data-aos-delay="900">
          <img className="rounded-xl" src={divine} alt="Picture" />
        </div>
      </section>
    </>
  );
};
export default Header;

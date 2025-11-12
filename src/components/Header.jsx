import React from "react";
import divine from "/images/divine.jpg"
import Aos from "aos";

const Header = () => {
  Aos.init({
    once: true,
  });

  return (
    <>
      <section className="min-h-[calc(100vh-80px)] flex items-center bg-gradient-to-br from-grey via-white to-grey dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-[1600px] mx-auto px-6 py-20 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-around gap-12 lg:gap-20">
            
            <div className="flex-1 flex flex-col gap-6 max-w-2xl">
              <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="200" className="flex items-center gap-3">
                <div className="h-0.5 w-12 bg-cinder-dark-mode "></div>
                <p className="text-sm font-medium text-cinder-light dark:text-gray-300 tracking-widest font-inter uppercase">
                  Frontend Developer
                </p>
              </div>

              <div>
                <h1 
                  data-aos="fade-right" 
                  data-aos-duration="800" 
                  data-aos-delay="400" 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold font-pjs mb-4"
                >
                  <span className="text-cinder-dark dark:text-gray-100">Hi, I&apos;m </span>
                  <span className="text-cinder-dark-mode dark:text-cinder-dark-mode">
                    Divine Edwin
                  </span>
                </h1>
                
                <div 
                  data-aos="fade-right" 
                  data-aos-duration="800" 
                  data-aos-delay="500"
                  className="h-1 w-24 bg-cinder-dark-mode rounded-full mb-6"
                ></div>
              </div>

              <p 
                data-aos="fade-right" 
                data-aos-duration="800" 
                data-aos-delay="600" 
                className="text-base md:text-lg leading-relaxed font-inter text-cinder-light dark:text-gray-300"
              >
                A Frontend Developer focused on building <span className="font-semibold text-cinder-dark dark:text-gray-100">fast, scalable, and maintainable</span> web applications. I care deeply about performance, clean architecture, and delivering seamless user experiences.
              </p>

              <div 
                data-aos="fade-right" 
                data-aos-duration="800" 
                data-aos-delay="700"
                className="flex flex-wrap gap-3 text-sm font-medium text-cinder-light dark:text-gray-100 font-inter"
              >
                <span className="px-4 py-2 bg-white dark:bg-cinder-dark-mode rounded-full shadow-sm border border-gray-200">React</span>
                <span className="px-4 py-2 bg-white dark:bg-cinder-dark-mode rounded-full shadow-sm border border-gray-200">Next.js</span>
                <span className="px-4 py-2 bg-white dark:bg-cinder-dark-mode rounded-full shadow-sm border border-gray-200">TypeScript</span>
                <span className="px-4 py-2 bg-white dark:bg-cinder-dark-mode rounded-full shadow-sm border border-gray-200">Javascript</span>
              </div>

              <div 
                data-aos="fade-right" 
                data-aos-duration="800" 
                data-aos-delay="800"
                className="flex items-center gap-4 pt-4"
              >
                <a 
                  href="https://github.com/Cheeh1" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-cinder-dark-mode shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-cinder-dark dark:text-gray-100 hover:text-cinder-dark-mode"
                  aria-label="GitHub"
                >
                  <i className="fa-brands fa-github fa-xl"></i>
                </a>
                <a 
                  href="https://twitter.com/iamcheeh" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-cinder-dark-mode shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-cinder-dark dark:text-gray-100 hover:text-cinder-dark-mode"
                  aria-label="Twitter"
                >
                  <i className="fa-brands fa-twitter fa-xl"></i>
                </a>
                <a 
                  href="https://www.linkedin.com/in/divineedwin/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-cinder-dark-mode shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-cinder-dark dark:text-gray-100 hover:text-cinder-dark-mode"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in fa-xl"></i>
                </a>
                <a 
                  href="https://cheehdevworkshop.hashnode.dev/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-cinder-dark-mode shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-cinder-dark dark:text-gray-100 hover:text-cinder-dark-mode"
                  aria-label="Blog"
                >
                  <i className="fa-brands fa-blogger fa-xl"></i>
                </a>
              </div>

              <div 
                data-aos="fade-right" 
                data-aos-duration="800" 
                data-aos-delay="900"
                className="flex gap-4 pt-2"
              >
                <a 
                  href="#contact"
                  className="sm:px-8 px-6 py-3 bg-cinder-dark-mode text-white font-medium font-inter rounded-lg shadow-lg hover:shadow-xl hover:bg-opacity-90 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Get In Touch
                </a>
                <a 
                  href="/images/divineResume.pdf"
                  target="_blank"
                  download="Divine Edwin Resume.pdf"
                  className="sm:px-8 px-6 py-3 bg-white dark:bg-gray-700 text-cinder-dark dark:text-gray-100 font-medium font-inter rounded-lg shadow-lg hover:shadow-xl border-2 border-cinder-dark-mode transform hover:-translate-y-1 transition-all duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>

            <div 
              data-aos="fade-left" 
              data-aos-duration="800" 
              data-aos-delay="600"
              className="flex-shrink-0 relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cinder-dark-mode to-blue-600 rounded-2xl blur-2xl opacity-20 dark:opacity-30 animate-pulse"></div>
              <div className="relative">
                <img 
                  className="rounded-2xl shadow-2xl w-full md:h-96 lg:h-[450px] object-contain border-4 border-white dark:border-gray-700" 
                  src={divine} 
                  alt="Divine Edwin"
                />
                <div className="absolute -bottom-6 right-0 sm:-right-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border-2 border-cinder-dark-mode dark:border-cinder-dark-mode">
                  <p className="text-sm font-medium text-cinder-dark dark:text-gray-100 font-inter">
                    Available for work
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-xs text-cinder-light dark:text-gray-300 font-inter">Open to opportunities</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
export default Header;

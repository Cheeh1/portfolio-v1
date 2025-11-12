import React from "react";
import Aos from "aos";

const Skills = [
  {
    icon: "fa-html5",
    name: "HTML"
  },
  {
    icon: "fa-css3",
    name: "CSS"
  },
  {
    icon: "fa-js",
    name: "JAVASCRIPT"
  },
  {
    icon: "fa-react",
    name: "REACT"
  },
  {
    icon: "fa-git-alt",
    name: "GIT"
  },
  {
    icon: "fa-sass",
    name: "SASS"
  },
  {
    icon: "redux.svg",
    name: "RTK"
  },
  {
    icon: "ts-logo.svg",
    name: "TYPESCRIPT"
  },
  {
    icon: "Vitejs.svg",
    name: "VITE"
  },
  {
    icon: "npm.svg",
    name: "NPM"
  },
  {
    icon: "firebase.svg",
    name: "FIREBASE"
  },
  {
    icon: "tailwindcss.svg",
    name: "TAILWIND"
  },
  {
    icon: "fa-github",
    name: "GITHUB"
  },
  {
    icon: "nextjs-icon.svg",
    name: "NEXT.JS"
  },
]

const About = () => {
  Aos.init({
    once: true,
  });
  return (
    <>
      <div className="bg-grey dark:bg-gray-900 py-20" id="about">
        <div className="flex flex-col gap-2 items-center mb-16" data-aos="zoom-in-down" data-aos-duration="800">
          <div className="flex gap-3">
            <p className="border-2 w-4 h-1 my-2.5 text-[#D9D9D9]"></p>
            <p className="text-md font-light text-cinder-light dark:text-gray-100 tracking-widest font-inter">
              LEARNING PATH
            </p>
          </div>
          <p className="text-cinder-dark dark:text-cinder-dark-mode font-bold text-3xl font-pjs">
            ABOUT & SKILLS
          </p>
        </div>

        <div className="max-w-[1600px] mx-auto px-6">
          <div 
            data-aos="fade-up" 
            data-aos-duration="800"
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 mb-12"
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-cinder-dark dark:text-gray-100 font-pjs mb-6 flex items-center gap-3">
                <span className="text-4xl">👋</span>
                Hello, I&apos;m Divine Edwin
              </h3>
              <div className="text-cinder-light dark:text-gray-300 font-inter leading-relaxed space-y-4 text-base md:text-lg">
                <p>
                  I&apos;m a <span className="font-semibold text-cinder-dark-mode dark:text-blue-400">Frontend Developer</span> passionate about building fast, scalable, and user-friendly web applications. I combine clean, maintainable code with modern technologies like React, Next.js, JavaScript, TypeScript, and Tailwind CSS to create high-performing interfaces that deliver great user experiences.
                </p>
                <p>
                  Beyond aesthetics, I focus on performance optimization, code architecture, and scalability, ensuring that the solutions I build grow well with users.
                </p>
                <p className="font-medium text-cinder-dark dark:text-gray-100">
                  Thank you for visiting my portfolio!
                </p>
              </div>
            </div>
          </div>

          <div 
            data-aos="fade-up" 
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <h3 className="text-xl md:text-2xl font-bold text-cinder-dark dark:text-gray-100 font-pjs mb-8 text-center">
              Technologies & Tools
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 md:gap-8">
              {Skills.map((skill, index) => (
                <div 
                  key={index} 
                  data-aos="zoom-in" 
                  data-aos-duration="600"
                  data-aos-delay={index * 50}
                  className="flex flex-col gap-3 items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="text-cinder-dark dark:text-gray-100 group-hover:text-cinder-dark-mode dark:group-hover:text-blue-400 transition-colors duration-300">
                    {skill.icon.includes(".svg") ? (
                      <img 
                        src={`/images/${skill.icon}`} 
                        className="w-10 h-10 md:w-12 md:h-12 object-contain" 
                        alt={skill.name} 
                      />
                    ) : (
                      <i className={`fa-brands ${skill.icon} text-4xl md:text-5xl`}></i>
                    )}
                  </div>
                  <p className="text-xs md:text-sm font-medium text-cinder-dark dark:text-gray-100 font-pjs text-center">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;

import React from "react";
// import { Skills } from "../data/data";

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
]

const About = () => {
  return (
    <>
      <div className="bg-grey dark:bg-gray-900" id="about">
        <div className="flex flex-col py-10 gap-2 items-center">
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

        <div className="flex flex-col md:flex-row md:gap-0 xl:flex-row justify-evenly items-center gap-20 pt-5 pb-20">
          <div>
            <p className="xl:w-96 w-80 font-inter text-cinder-light dark:text-gray-100 leading-8">
              Hello👋 and welcome to my portfolio! I&apos;m Divine Edwin, a Frontend
              developer who is passionate about creating beautiful, interactive,
              and user-friendly websites. I enjoy researching new design trends
              and technologies as a creative problem solver. My knowledge of
              frontend development extends beyond coding. I also create
              technical content. Thank you for visiting my portfolio! Please
              feel free to browse through my projects.
            </p>
          </div>
          <div className="grid grid-rows-4 grid-cols-3 gap-x-1 xl:gap-x-10 gap-y-5 items-center">
            {Skills.map((skill,index) => (
              <div key={index} className="flex flex-col gap-3 text-cinder-dark dark:text-gray-100 font-pjs items-center">
                {skill.icon.includes(".svg") ? (<img src={`/images/${skill.icon}`} className="w-8 -mt-1" alt={skill.name} />) : (<i className={`fa-brands ${skill.icon} fa-2xl`}></i>)}
                <p>{skill.name}</p>
              </div>
            ))}
           
          </div>
        </div>
      </div>
    </>
  );
};
export default About;

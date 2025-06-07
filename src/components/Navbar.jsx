import React, { useState } from "react";
import { moon, sun } from "../assets";
import Menu from "./Menu";
import Aos from "aos";

const Links = [
  {
    href: "#about",
    label: "ABOUT"
  },
  {
    href: "#projects",
    label: "PROJECTS"
  },
  {
    href: "#blog",
    label: "BLOG"
  },
  {
    href: "#contact",
    label: "CONTACT"
  },
]


// eslint-disable-next-line react/prop-types
const Navbar = ({ darkMode, darkToggle }) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  Aos.init();

  return (
    <>
      <nav data-aos="zoom-in" data-aos-duration="800" 
        className={`flex md:flex relative justify-between items-center px-10 py-5 font-inter ${darkMode ? "dark" : ""
          }`}
        id="navbar"
      >
        <p className="text-lg font-bold font-inter text-cinder-dark-mode">
          <i className="text-3xl fa-solid fa-code"></i>
        </p>

        <ul className="xl:flex md:flex hidden xl:gap-12 md:gap-5 font-sm text-cinder-dark dark:text-white font-inter">
          {Links.map((link, index) => (
            <li key={index}>
              <a
                className="hover:text-cinder-dark-mode transition-colors duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-cinder-dark-mode after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden xl:flex md:flex gap-x-5 items-center">
          <div tabIndex="0" onClick={darkToggle} className="cursor-pointer">
            {!darkMode ? (
              <img src={moon} alt="moon-icon" />
            ) : (
              <img
                src={sun}
                className="bg-white p-1 rounded-xl"
                alt="sun-icon"
              />
            )}
          </div>
          <a
            href="/images/divineResume.pdf"
            target="_blank"
            download="Divine Edwin Resume.pdf"
            className="border rounded-lg p-2 text-cinder-dark dark:text-gray-100 font-pjs hover:text-cinder-dark-mode dark:hover:text-cinder-dark-mode hover:shadow-md hover:font-semibold" rel="noreferrer"
          >
            Resume
          </a>
        </div>
        <div className="block md:hidden xl:hidden" onClick={openModal}>
          <i className="fa-solid fa-bars fa-xl"></i>
        </div>
      </nav>

      <Menu
        toggle={modal}
        action={openModal}
        darkMode={darkMode}
        darkToggle={darkToggle}
      />
    </>
  );
};
export default Navbar;

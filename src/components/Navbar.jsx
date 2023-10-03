import React, { useState } from "react";
import { moon, sun } from "../assets";
import Menu from "./Menu";


const Navbar = ({ darkMode, darkToggle }) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <nav
        className={`flex md:flex relative justify-between items-center px-10 py-5 font-inter ${
          darkMode ? "dark" : ""
        }`}
        id="navbar"
      >
        <p className="text-lg font-bold font-inter text-cinder-dark-mode">
          <i className="text-3xl fa-solid fa-code"></i>
        </p>

        <ul className="xl:flex md:flex hidden xl:gap-12 md:gap-5 font-sm text-cinder-dark dark:text-white font-inter">
          <li>
            <a
              className="hover:text-cinder-dark-mode hover:border hover:rounded-lg hover:shadow-md hover:font-semibold hover:p-2"
              href="#about"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              className="hover:text-cinder-dark-mode hover:border hover:rounded-lg hover:shadow-md hover:font-semibold hover:p-2"
              href="#portfolios"
            >
              PORTFOLIOS
            </a>
          </li>
          <li>
            <a
              className="hover:text-cinder-dark-mode hover:border hover:rounded-lg hover:shadow-md hover:font-semibold p-2"
              href="#blog"
            >
              BLOG
            </a>
          </li>
          <li>
            <a
              className="hover:text-cinder-dark-mode hover:border hover:rounded-lg hover:shadow-md hover:font-semibold hover:p-2"
              href="#contact"
            >
              CONTACT
            </a>
          </li>
        </ul>

        <div className="hidden xl:flex md:flex gap-x-5 items-center">
          <div onClick={darkToggle} className="cursor-pointer">
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
            href="https://drive.google.com/file/d/1XU04hRe1KN2qr1R9MVj39_eUIptkIg4B/view?usp=share_link"
            target="_blank"
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

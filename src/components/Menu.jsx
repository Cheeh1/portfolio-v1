import React from "react";
import { moon, sun } from "../assets";

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

const Menu = (props) => {
  const modal = props.toggle;
  const openModal = props.action;
  const darkMode = props.darkMode;
  const darkToggle = props.darkToggle;

  return (
    <>
      <main className={!modal ? "hidden" : "block"}>
        <section className="absolute top-0 z-50">
          <nav
            className={`xl:hidden md:hidden w-full  py-20 h-full gap-20 fixed flex flex-col justify-between items-center px-10 font-inter ${darkMode ? "dark" : "bg-[#453ca4]"
              }`}
          >
            {/* <p className="text-xl font-bold font-inter text-gray-100 dark:text-cinder-dark-mode">DIVINE <span className="text-gray-100 dark:text-purplelight">EDWIN</span></p> */}
            <div onClick={openModal} className="absolute top-10 right-10">
              <i className="fa-solid text-gray-100 fa-x fa-2xl"></i>
            </div>

            <ul
              className="flex flex-col gap-20 text-xl items-center text-white font-pjs"
            >
              {Links.map((link, index) => (
                <li key={index}>
                  <a
                    className=" hover:text-white hover:border-purple hover:rounded-lg hover:shadow-xl hover:shadow-violet hover:p-5 hover:font-bold"
                    href={link.href}
                    onClick={openModal}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-center gap-10">
              <div onClick={darkToggle} className="cursor-pointer">
                {!darkMode ? (
                  <img
                    className="w-8 bg-white p-1 rounded-xl"
                    src={moon}
                    alt="moon-icon"
                    onClick={openModal}
                  />
                ) : (
                  <img
                    src={sun}
                    className="w-8 bg-white p-1 rounded-xl"
                    alt="sun-icon"
                    onClick={openModal}
                  />
                )}
              </div>
              <a
                href="src/assets/images/resume.pdf"
                target="_blank"
                download="Divine Edwin Resume.pdf"
                onClick={openModal}
                className="border rounded-lg p-3 text-2xl font-pjs hover:shadow-xl hover:shadow-violet text-gray-100" rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </nav>
        </section>
      </main>
    </>
  );
};
export default Menu;

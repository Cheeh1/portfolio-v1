import React from 'react'
import { moon, menuBtn } from '../assets'

const Navbar = () => {
    return (
        <>
            <nav className="xl:flex hidden justify-between items-center px-10 my-5 font-inter">
                <p data-aos="fade-right" className="text-lg font-bold font-shrik">Divine <span className="text-purple">Edwin</span></p>

                <ul data-aos="fade-down" className="flex gap-x-5 font-medium text-cinder-dark font-inter">
                    <li><a className="hover:text-purple hover:font-semibold" href="#about">About</a></li>
                    <li><a className="hover:text-purple hover:font-semibold" href="#portfolios">Portfolios</a></li>
                    <li><a className="hover:text-purple hover:font-semibold" href="#blog">Blog</a></li>
                    <li><a className="hover:text-purple hover:font-semibold" href="#contact">Contact</a></li>
                </ul>

                <div data-aos="fade-left" className="flex gap-x-5">
                    <img className="cursor-pointer" src={moon} alt="moon-icon" />
                    <a href='https://drive.google.com/file/d/1XU04hRe1KN2qr1R9MVj39_eUIptkIg4B/view?usp=share_link' target='_blank'
                        className="border rounded-lg px-3 py-2 font-semibold text-cinder-dark font-inter hover:text-purple hover:font-bold">Resume</a>
                </div>
            </nav>

            <nav className="flex xl:hidden justify-around gap-32 my-5">
                <p className="text-lg font-bold font-shrik">Divine <span className="text-purple">Edwin</span></p>
                <img className="w-5 cursor-pointer" src={menuBtn} alt='icon' />
            </nav>
        </>
    )
}
export default Navbar
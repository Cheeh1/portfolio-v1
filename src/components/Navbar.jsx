import React, { useState } from 'react'
import { moon, menuBtn, close } from '../assets'
import Menu from './Menu'

const Navbar = () => {

    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(!modal)
        console.log(modal)
    }


    return (
        <>
            <nav className="xl:flex md:flex relative hidden justify-between items-center px-10 my-5 font-inter" id='top'>
                <p data-aos="fade-right" className="text-lg font-bold font-shrik">Divine <span className="text-purplelight">Edwin</span></p>

                <ul data-aos="fade-down" className="flex gap-12 font-sm text-cinder-dark font-inter">
                    <li><a className="hover:text-purplelight hover:border hover:rounded-lg hover:shadow-md hover:font-semibold hover:p-3" href="#about">ABOUT</a></li>
                    <li><a className="hover:text-purplelight hover:border hover:rounded-lg hover:shadow-md hover:font-semibold hover:p-3" href="#portfolios">PORTFOLIOS</a></li>
                    <li><a className="hover:text-purplelight hover:border hover:rounded-lg hover:shadow-md hover:font-semibold hover:p-3" href="#blog">BLOG</a></li>
                    <li><a className="hover:text-purplelight hover:border hover:rounded-lg hover:shadow-md hover:font-semibold hover:p-3" href="#contact">CONTACT</a></li>
                </ul>

                <div data-aos="fade-left" className="flex gap-x-5">
                    <img className="cursor-pointer" src={moon} alt="moon-icon" />
                    <a href='https://drive.google.com/file/d/1XU04hRe1KN2qr1R9MVj39_eUIptkIg4B/view?usp=share_link' target='_blank'
                        className="border rounded-lg p-2 text-cinder-dark font-pjs hover:text-purplelight hover:shadow-md  hover:font-semibold">Resume</a>
                </div>
            </nav>

            {/* mobile navbar */}
            <nav className="flex xl:hidden md:hidden justify-around gap-32 my-5">
                <p className="text-lg font-bold font-shrik">Divine <span className="text-purplelight">Edwin</span></p>
                <div onClick={openModal}>
                    {!modal ? <i class="fa-solid fa-bars fa-xl"></i> : <i class="fa-solid fa-x fa-xl"></i>}
                </div>
            </nav>

            < Menu toggle={modal} />
        </>
    )
}
export default Navbar
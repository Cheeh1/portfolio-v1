import React, { useState } from 'react'
import { moon, menuBtn, close, sun } from '../assets'
import Menu from './Menu'

const Navbar = ({darkMode, darkToggle}) => {

    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <nav className={`xl:flex md:flex relative hidden justify-between items-center px-10 py-5 font-inter ${darkMode ? 'dark' : ''}`} id='navbar'>
                <p data-aos="fade-right" className="text-lg font-bold font-shrik text-cinder-dark dark:text-cinder-dark-mode">Divine <span className="text-purplelight">Edwin</span></p>

                <ul data-aos="fade-down" className='flex gap-12 font-sm text-cinder-dark dark:text-white font-inter'>
                    <li><a className="hover:text-purplelight hover:border hover:rounded-lg hover:shadow-md hover:font-semibold hover:p-3" href="#about">ABOUT</a></li>
                    <li><a className="hover:text-purplelight hover:border hover:rounded-lg hover:shadow-md hover:font-semibold hover:p-3" href="#portfolios">PORTFOLIOS</a></li>
                    <li><a className="hover:text-purplelight hover:border hover:rounded-lg hover:shadow-md hover:font-semibold hover:p-3" href="#blog">BLOG</a></li>
                    <li><a className="hover:text-purplelight hover:border hover:rounded-lg hover:shadow-md hover:font-semibold hover:p-3" href="#contact">CONTACT</a></li>
                </ul>

                <div data-aos="fade-left" className="flex gap-x-5 items-center">
                    <div onClick={darkToggle} className="cursor-pointer">
                        {!darkMode ? <img src={moon} alt="moon-icon" /> : <img src={sun} className='bg-white p-1 rounded-xl' alt='sun-icon' />}
                    </div>
                    <a href='https://drive.google.com/file/d/1XU04hRe1KN2qr1R9MVj39_eUIptkIg4B/view?usp=share_link' target='_blank'
                        className='border rounded-lg p-2 text-cinder-dark dark:text-white font-pjs hover:text-purplelight hover:shadow-md hover:font-semibold'>Resume</a>
                </div>
            </nav>

            {/* mobile navbar */}
            <nav className={`flex xl:hidden md:hidden justify-around gap-32 py-5 ${darkMode ? 'dark' : ''}`}>
                <p className="text-lg font-bold text-cinder-dark font-shrik">Divine <span className="text-purplelight">Edwin</span></p>
                <div onClick={openModal}>
                    {!modal ? <i className="fa-solid fa-bars fa-xl"></i> : <i className="fa-solid fa-x fa-xl"></i>}
                </div>
            </nav>

            < Menu toggle={modal} darkMode={darkMode} darkToggle={darkToggle}/>
        </>
    )
}
export default Navbar
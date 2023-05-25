import React from 'react'
import { moon, sun } from '../assets'

const Menu = (props) => {

    const modal = props.toggle
    const darkMode = props.darkMode
    const darkToggle = props.darkToggle

    return (
        <>
            <main className={!modal ? 'hidden' : 'block'}>
                <section className='absolute top-0 z-50'>
                    <nav className={`xl:hidden md:hidden w-56  py-20 h-full gap-20 fixed flex flex-col justify-between items-center px-10 font-inter ${darkMode ? 'dark' : 'bg-purplelight'}`}>
                        {/* <p data-aos="fade-right" className="text-lg font-bold font-shrik">Divine <span className="text-purple">Edwin</span></p> */}

                        <ul data-aos="fade-down" className='flex flex-col gap-20 text-xl items-center text-cinder-dark dark:text-white font-pjs'>
                            <li><a className=" hover:text-white hover:border-purple hover:rounded-lg hover:shadow-xl hover:shadow-violet hover:p-5 hover:font-bold" href="#about">ABOUT</a></li>
                            <li><a className="hover:text-white hover:border-purple hover:rounded-lg hover:shadow-xl hover:shadow-violet hover:p-5 hover:font-bold" href="#portfolios">PORTFOLIOS</a></li>
                            <li><a className="hover:text-white hover:border-purple hover:rounded-lg hover:shadow-xl hover:shadow-violet hover:p-5 hover:font-bold" href="#blog">BLOG</a></li>
                            <li><a className="hover:text-white hover:border-purple hover:rounded-lg hover:shadow-xl hover:shadow-violet hover:p-5 hover:font-bold" href="#contact">CONTACT</a></li>
                        </ul>

                        <div data-aos="fade-left" className="flex flex-col items-center gap-10">
                            <div onClick={darkToggle} className="cursor-pointer">
                                {!darkMode ? <img className="w-8" src={moon} alt="moon-icon" /> : <img src={sun} className='w-8 bg-white p-1 rounded-xl' alt='sun-icon' />}
                            </div>
                            <a href='https://drive.google.com/file/d/1XU04hRe1KN2qr1R9MVj39_eUIptkIg4B/view?usp=share_link' target='_blank'
                                className="border rounded-lg p-3 text-2xl text-cinder-dark font-pjs hover:shadow-xl hover:shadow-violet dark:text-white hover:text-white">Resume</a>
                        </div>
                    </nav>
                </section>
            </main>

        </>
    )
}
export default Menu
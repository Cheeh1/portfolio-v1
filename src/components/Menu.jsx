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
                    {/* Navigation */}
                    <nav className={`xl:hidden md:hidden w-56  py-20 h-full gap-20 fixed flex flex-col justify-between items-center px-10 font-inter ${darkMode ? 'dark' : 'bg-[#453ca4]'}`}>
                        {/* <p className="text-lg font-bold font-shrik">Divine <span className="text-purple">Edwin</span></p> */}

                        {/* Navigation links */}
                        <ul className='flex flex-col gap-20 text-xl items-center text-white font-pjs'>
                            <li><a className=" hover:text-white hover:border-purple hover:rounded-lg hover:shadow-xl hover:shadow-violet hover:p-5 hover:font-bold" href="#about">ABOUT</a></li>
                            <li><a className="hover:text-white hover:border-purple hover:rounded-lg hover:shadow-xl hover:shadow-violet hover:p-5 hover:font-bold" href="#portfolios">PORTFOLIOS</a></li>
                            <li><a className="hover:text-white hover:border-purple hover:rounded-lg hover:shadow-xl hover:shadow-violet hover:p-5 hover:font-bold" href="#blog">BLOG</a></li>
                            <li><a className="hover:text-white hover:border-purple hover:rounded-lg hover:shadow-xl hover:shadow-violet hover:p-5 hover:font-bold" href="#contact">CONTACT</a></li>
                        </ul>

                        {/* Dark mode toggle and resume link */}
                        <div className="flex flex-col items-center gap-10">
                            <div onClick={darkToggle} className="cursor-pointer">
                                {/* Moon or sun icon based on dark mode */}
                                {!darkMode
                                    ?
                                    <img className="w-8 bg-white p-1 rounded-xl" src={moon} alt="moon-icon" />
                                    :
                                    <img src={sun} className='w-8 bg-white p-1 rounded-xl' alt='sun-icon' />}
                            </div>
                            <a href='https://drive.google.com/file/d/1XU04hRe1KN2qr1R9MVj39_eUIptkIg4B/view?usp=share_link' target='_blank'
                                className="border rounded-lg p-3 text-2xl font-pjs hover:shadow-xl hover:shadow-violet text-white">Resume</a>
                        </div>
                    </nav>
                </section>
            </main>

        </>
    )
}
export default Menu
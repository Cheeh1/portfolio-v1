import React from 'react'
import { moon } from '../assets'

const Menu = (props) => {
    const modal = props.toggle
    const action = props.action

    return (
        <>
            <main className={ !modal ? 'hidden' : 'block'}>
                <section className='absolute top-0'>
                    <nav className="xl:hidden md:hidden w-56 bg-purplelight py-20 h-full gap-20 fixed flex flex-col justify-between items-center px-10 font-inter">
                        {/* <p data-aos="fade-right" className="text-lg font-bold font-shrik">Divine <span className="text-purple">Edwin</span></p> */}

                        <ul data-aos="fade-down" className="flex flex-col gap-20 text-xl items-center text-black font-inter">
                            <li><a className=" hover:text-white hover:border-purple hover:rounded-lg hover:shadow-xl hover:shadow-violet hover:p-5 hover:font-bold" href="#about">ABOUT</a></li>
                            <li><a className="hover:text-white hover:border-purple hover:rounded-lg hover:shadow-xl hover:shadow-violet hover:p-5 hover:font-bold" href="#portfolios">PORTFOLIOS</a></li>
                            <li><a className="hover:text-white hover:border-purple hover:rounded-lg hover:shadow-xl hover:shadow-violet hover:p-5 hover:font-bold" href="#blog">BLOG</a></li>
                            <li><a className="hover:text-white hover:border-purple hover:rounded-lg hover:shadow-xl hover:shadow-violet hover:p-5 hover:font-bold" href="#contact">CONTACT</a></li>
                        </ul>

                        <div data-aos="fade-left" className="flex flex-col items-center gap-10">
                            <img className="cursor-pointer w-8" src={moon} alt="moon-icon" />
                            <a href='https://drive.google.com/file/d/1XU04hRe1KN2qr1R9MVj39_eUIptkIg4B/view?usp=share_link' target='_blank'
                                className="border rounded-lg p-3 text-2xl text-black font-pjs hover:shadow-xl hover:shadow-violet hover:text-white">Resume</a>
                        </div>
                    </nav>
                </section>
            </main>

        </>
    )
}
export default Menu
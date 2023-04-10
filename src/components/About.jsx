import React from 'react'
import { Progress } from '@mantine/core'

const About = () => {
    return (
        <>
            <section className='bg-grey' id='about'>
                <div data-aos="zoom-in-down" className="flex flex-col py-10 gap-2 items-center">
                    <div className="flex gap-3">
                        <p className="border-2 w-4 h-1 my-2.5 text-[#D9D9D9]"></p>
                        <p className="text-md font-light text-cipher-light tracking-widest font-inter">LEARNING PATH</p>
                    </div>
                    <p className="text-cinder-dark font-bold text-3xl font-pjs xl:ml-36">ABOUT & SKILLS</p>
                </div>

                <div className='flex flex-col md:flex-row md:gap-0 xl:flex-row justify-evenly items-center gap-20 pt-5 pb-20'>
                    <div data-aos="fade-right">
                        <p className='xl:w-96 w-80 font-inter text-cinder-light leading-8'>
                            Hello👋 and welcome to my portfolio! I'm Divine Edwin, a Frontend developer who is passionate about creating beautiful, interactive, and user-friendly websites.
                            I enjoy researching new design trends and technologies as a creative problem solver. My knowledge of frontend development extends beyond coding. I also work as a technical writer.
                            Thank you for visiting my portfolio! Please feel free to browse through my projects.
                        </p>
                    </div>
                    <div data-aos="fade-left" className='flex flex-col gap-6'>
                        <div className='flex flex-col gap-1'>
                            <p className='text-cinder-dark font-inter font-semibold text-md'>HTML</p>
                            <Progress className='xl:w-96 w-80 h-3' color="#7E74F1" value={100} size="xl" radius="xl" animate />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-cinder-dark font-inter font-semibold text-md'>CSS & SASS</p>
                            <Progress className='xl:w-96 w-80 h-3' color="#7E74F1" value={100} size="xl" radius="xl" animate />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-cinder-dark font-inter font-semibold text-md'>TAILWIND</p>
                            <Progress className='xl:w-96 w-80 h-3' color="#7E74F1" value={100} size="xl" radius="xl" animate />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-cinder-dark font-inter font-semibold text-md'>JAVASCRIPT</p>
                            <Progress className='xl:w-96 w-80 h-3' color="#7E74F1" value={100} size="xl" radius="xl" animate />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-cinder-dark font-inter font-semibold text-md'>REACT</p>
                            <Progress className='xl:w-96 w-80 h-3' color="#7E74F1" value={100} size="xl" radius="xl" animate />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About
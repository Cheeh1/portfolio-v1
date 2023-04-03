import React from 'react'
import { item1, item2, item3, link, github, globe } from '../assets'

const Content = () => {
    return (
        <>
            <section className='mt-20' id='portfolios'>
                <div className="flex flex-col gap-2 items-center">
                    <div className="flex gap-3">
                        <p className="border-2 w-4 h-1 my-2.5 text-[#D9D9D9]"></p>
                        <p className="text-md font-light text-cipher-light tracking-widest font-inter">MY WORKS</p>
                    </div>
                    <p className="text-cinder-dark font-bold text-3xl font-pjs xl:ml-36">Featured Portfolios</p>
                </div>

                <div className='mt-20 flex flex-col gap-20 xl:flex-row xl:justify-evenly'>
                    <div
                        className="w-96 h-full border-solid border-1 rounded bg-white overflow-hidden shadow-md">
                        <img className="w-96 h-80 sm:48 object-cover" src={item1} alt="item" />
                        <div className="mt-4 ml-10 mb-5 flex flex-col gap-3">
                            <span className="text-xl text-cinder-dark font-semibold">Agency Website.</span>
                            <div className='flex gap-5 items-center'>
                                <span className="text-sm border text-cinder-light rounded-md p-2">Wordpress</span>
                                <a href='#link1' target="_blank"><img src={link} alt="link-icon" /></a>
                                <a href='#github' target="_blank"><img src={github} alt="link-icon" /></a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-96 h-full border-solid border-1 rounded bg-white overflow-hidden shadow-md">
                        <img className="w-96 h-80 sm:48 object-cover" src={item2} alt="item" />
                        <div className="mt-4 ml-10 mb-5 flex flex-col gap-3">
                            <span className="text-xl text-cinder-dark font-semibold">Dashboard Website.</span>
                            <div className='flex gap-5 items-center'>
                                <span className="text-sm text-cinder-light border rounded-md p-2">React</span>
                                <a href='#link2' target="_blank"><img src={link} alt="link-icon" /></a>
                                <a href='#github' target="_blank"><img src={github} alt="link-icon" /></a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-96 h-full border-solid border-1 rounded bg-white overflow-hidden shadow-md">
                        <img className="w-96 h-80 sm:48 object-cover" src={item3} alt="item" />
                        <div className="mt-4 ml-10 mb-5 flex flex-col gap-3">
                            <span className="text-xl text-cinder-dark font-semibold">Support Center Website.</span>
                            <div className='flex gap-5 items-center'>
                                <span className="text-sm text-cinder-light border rounded-md p-2">PHP</span>
                                <a href='#link3' target="_blank"><img src={link} alt="link-icon" /></a>
                                <a href='#github' target="_blank"><img src={github} alt="link-icon" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Content
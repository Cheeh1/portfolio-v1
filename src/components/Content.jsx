import React from 'react'
import { item1, item2, item3, link } from '../assets'

const Content = () => {
    return (
        <>
            <section className='pt-32' id='portfolios'>
                <div className="flex flex-col gap-2 items-center">
                    <div className="flex gap-3">
                        <p className="border-2 w-4 h-1 my-2.5 text-[#D9D9D9]"></p>
                        <p className="text-md font-light text-cipher-light tracking-widest font-inter">MY WORKS</p>
                    </div>
                    <p className="text-cinder-dark font-bold text-3xl font-pjs ml-36">Featured Portfolios</p>
                </div>

                <div className='mt-32 flex justify-evenly'>
                    <div
                        class="w-96 h-full border-solid border-1 rounded bg-white overflow-hidden shadow-md relative cursor-pointer">
                        <img class="w-96 h-80 sm:48 object-cover" src={item1} alt="item" />
                        <div class="mt-4 ml-10 flex flex-col gap-3">
                            <span class="text-xl font-semibold">Agency Website.</span>
                            <div className='flex gap-5 items-center'>
                                <span class="text-sm border rounded-md p-2">Wordpress</span>
                                <img src={link} alt="link-icon" />
                            </div>
                        </div>
                    </div>
                    <div
                        class="w-96 h-full border-solid border-1 rounded bg-white overflow-hidden shadow-md relative cursor-pointer">
                        <img class="w-96 h-80 sm:48 object-cover" src={item2} alt="item" />
                        <div class="mt-4 ml-10 flex flex-col gap-3">
                            <span class="text-xl font-semibold">Dashboard Website.</span>
                            <div className='flex gap-5 items-center'>
                                <span class="text-sm border rounded-md p-2">React</span>
                                <img src={link} alt="link-icon" />
                            </div>
                        </div>
                    </div>
                    <div
                        class="w-96 h-full border-solid border-1 rounded bg-white overflow-hidden shadow-md relative cursor-pointer">
                        <img class="w-96 h-80 sm:48 object-cover" src={item3} alt="item" />
                        <div class="mt-4 ml-10 flex flex-col gap-3">
                            <span class="text-xl font-semibold">Support Center Website.</span>
                            <div className='flex gap-5 items-center'>
                                <span class="text-sm border rounded-md p-2">PHP</span>
                                <img src={link} alt="link-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Content
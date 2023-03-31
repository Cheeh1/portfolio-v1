import React from 'react'
import { TextInput, Textarea } from '@mantine/core'
import { mail, phone, instagram, github, twitter, linkedin } from '../assets'

const Footer = () => {
    return (
        <>
            <section className='flex justify-evenly py-20 bg-[#FBFBFB]'>
                <div className='flex flex-col gap-10'>
                    <TextInput
                        className='w-96'
                        placeholder="Name"
                        size="md"
                    // error="Minimum Character is 3"
                    />
                    <TextInput
                        className='w-96'
                        placeholder="Email"
                        size="md"
                    // error="Input your email"
                    />
                    <Textarea
                        className='w-96'
                        placeholder="Message"
                        // error="Minimum character is 5"
                        size="xl"
                    />
                    <button className='p-3 bg-[#7E74F1] text-[#F5F3FE] rounded-lg font-inter font-medium'>
                        Send message
                    </button>
                </div>

                <div className='flex flex-col gap-6'>
                    <div className='flex gap-3 items-center'>
                        <img className='bg-[#F5F3FE] p-2 rounded-xl' src={phone} alt="phone" />
                        <div className='flex flex-col'>
                            <p className='font-inter text-cinder-dark font-semibold'>Phone</p>
                            <p className='font-inter text-cinder-light font-normal text-md'>(+234)8155931977</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='bg-[#F5F3FE] p-2 rounded-xl' src={mail} alt="phone" />
                        <div className='flex flex-col'>
                            <p className='font-inter text-cinder-dark font-semibold'>E-Mail</p>
                            <p className='font-inter text-cinder-light font-normal text-md'>edwindivine5@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex flex-col items-center gap-2 py-14'>
                <div className="flex items-center gap-5">
                    <a href="#instagram"><img src={instagram} alt="instagram-icon" /></a>
                    <a href="#github"><img src={github} alt="twitter-icon" /></a>
                    <a href="#twitter"><img src={twitter} alt="twitter-icon" /></a>
                    <a href="#linkedin"><img src={linkedin} alt="linkedin-icon" /></a>
                </div>
                <div className='text-cinder-light font-medium font-inter tracking-widest'>© 2022  -  Divine Edwin</div>
            </section>

        </>
    )
}
export default Footer
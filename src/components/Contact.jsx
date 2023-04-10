import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { mail, phone, github, twitter, linkedin } from '../assets'


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    //registering the form input function
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value,
            };
        });
    };

    // Form validation using react-hook-form
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <>
            <section id='contact' className='flex gap-20 flex-col md:flex-row md:gap-0 xl:flex-row items-center justify-evenly py-20'>
                <form data-aos="zoom-out-down" onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 items-center'>
                    <section className='flex flex-col gap-5'>
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="xl:w-96 w-80 py-2 pl-5 text-sm font-inter font-medium rounded-md border placeholder-cinder-light placeholder-opacity-60"
                                id="first_name"
                                onChange={handleChange}
                                defaultValue={formData.name}
                                {...register("name", { required: true, minLength: 3 })}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm font-pjs mt-1">Minimum of 3 characters</p>
                            )}
                        </div>
                        <div>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                className="xl:w-96 w-80 py-2 pl-5 text-sm font-inter font-medium rounded-md border placeholder-cinder-light placeholder-opacity-60"
                                id="email"
                                onChange={handleChange}
                                defaultValue={formData.email}
                                {...register("email", {
                                    required: true,
                                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                                })}
                            />
                            {errors.email && <p className="text-red-500 text-sm font-pjs mt-1">Not a valid email format</p>}
                        </div>
                        <div>
                            <textarea
                                id="message"
                                name="message"
                                className="xl:w-96 w-80 h-32 py-3 pl-5 text-sm font-inter font-medium rounded-md border placeholder-cinder-light placeholder-opacity-60"
                                placeholder="Send me a message and I will reply you as soon as possible..."
                                onChange={handleChange}
                                defaultValue={formData.message}
                                {...register("message", { required: true, minLength: 10 })}
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm font-pjs">Characters too short</p>}
                        </div>
                    </section>
                    <button type='submit' className='p-3 w-80 bg-[#7E74F1] text-[#F5F3FE] rounded-lg font-inter font-medium'>
                        Send message
                    </button>
                </form>

                <div data-aos="zoom-out-up" className='flex flex-col gap-6'>
                    <div className='flex gap-3 items-center'>
                        <img className='bg-[#F5F3FE] p-2 rounded-xl' src={phone} alt="phone" />
                        <div className='flex flex-col'>
                            <p className='font-inter text-cinder-dark font-semibold'>Phone</p>
                            <a href='tel:+2348155931977' className='font-inter text-cinder-light font-normal text-sm'>(+234)8155931977</a>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='bg-[#F5F3FE] p-2 rounded-xl' src={mail} alt="phone" />
                        <div className='flex flex-col'>
                            <p className='font-inter text-cinder-dark font-semibold'>E-Mail</p>
                            <a href='mailto:edwindivine5@gmail.com' className='font-inter text-cinder-light font-normal text-sm'>edwindivine5@gmail.com</a>
                        </div>
                    </div>
                </div>
            </section>

            <section data-aos="zoom-out-down" className='flex flex-col items-center gap-2 py-5 bg-grey'>
                <div className="flex items-center gap-5">
                    <a href="https://github.com/Cheeh1" target='_blank'><img src={github} alt="github" /></a>
                    <a href="https://twitter.com/iamcheeh" target='_blank'><img src={twitter} alt="twitter" /></a>
                    <a href="https://www.linkedin.com/in/divineedwin/" target='_blank'><img src={linkedin} alt="linkedin" /></a>
                </div>
                <p className='text-cinder-light font-medium font-inter tracking-widest'>© 2023  -  Divine Edwin</p>
                <p className='text-cinder-light font-medium font-inter tracking-widest'>Designed by  -  Caleb Nyong</p>
            </section>

            <div>
                <a className='bg-grey pb-3 flex justify-center text-2xl font-extrabold font-pjs text-cinder-dark' href='#top'>TOP</a>
            </div>

        </>
    )
}
export default Contact
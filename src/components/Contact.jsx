import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { mail, phone } from '../assets'


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Handle form input changes
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
                {/* Contact Form */}
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 items-center'>
                    <section className='flex flex-col gap-5'>
                        {/* Name input */}
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="form"
                                id="first_name"
                                onChange={handleChange}
                                defaultValue={formData.name}
                                {...register("name", { required: true, minLength: 3 })}
                            />
                            {errors.name && (
                                <p className="error-message">Minimum of 3 characters</p>
                            )}
                        </div>
                        {/* Email input */}
                        <div>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                className="form"
                                id="email"
                                onChange={handleChange}
                                defaultValue={formData.email}
                                {...register("email", {
                                    required: true,
                                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                                })}
                            />
                            {errors.email && <p className="error-message">Not a valid email format</p>}
                        </div>
                        {/* Message textarea */}
                        <div>
                            <textarea
                                id="message"
                                name="message"
                                className="h-32 form"
                                placeholder="Send me a message and I will reply you as soon as possible..."
                                onChange={handleChange}
                                defaultValue={formData.message}
                                {...register("message", { required: true, minLength: 10 })}
                            ></textarea>
                            {errors.message && <p className="error-message">Characters too short</p>}
                        </div>
                    </section>
                    <button type='submit' className='p-3 w-80 bg-purplelight text-[#F5F3FE] rounded-lg font-inter font-medium'>
                        Send message
                    </button>
                </form>

                {/* Contact Information */}
                <div className='flex flex-col gap-6'>
                    {/* Phone */}
                    <div className='flex gap-3 items-center'>
                        <img className='bg-[#F5F3FE] p-2 rounded-xl' src={phone} alt="phone" />
                        <div className='flex flex-col'>
                            <p className='contact'>Phone</p>
                            <a href='tel:+2348155931977' className='conact-info'>(+234)8155931977</a>
                        </div>
                    </div>
                    {/* Email */}
                    <div className='flex items-center gap-3'>
                        <img className='bg-[#F5F3FE] p-2 rounded-xl' src={mail} alt="phone" />
                        <div className='flex flex-col'>
                            <p className='contact'>E-Mail</p>
                            <a href='mailto:edwindivine5@gmail.com' className='conact-info'>edwindivine5@gmail.com</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact
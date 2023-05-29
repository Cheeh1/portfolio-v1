import React from 'react'

const Footer = ({darkMode}) => {
    return (
        <>
            <section data-aos="zoom-out-down" className={`relative flex flex-col items-center gap-2 py-10 ${darkMode ? 'dark' : 'bg-grey'}`}>
                <div className="flex items-center gap-5">
                    <a href="https://github.com/Cheeh1" target='_blank'><i class="fa-brands fa-github fa-xl"></i></a>
                    <a href="https://twitter.com/iamcheeh" target='_blank'><i class="fa-brands fa-twitter fa-xl"></i></a>
                    <a href="https://www.linkedin.com/in/divineedwin/" target='_blank'><i class="fa-brands fa-linkedin-in fa-xl"></i></a>
                    <a href="https://cheehdevworkshop.hashnode.dev/" target="_blank"><i className="fa-brands fa-blogger fa-xl"></i></a>
                </div>
                <p className='text-cinder-light dark:text-white font-medium font-inter tracking-widest'>© 2023  -  Divine Edwin</p>
                {/* <p className='text-cinder-light font-medium font-inter tracking-widest'>Designed by  -  Caleb Nyong</p> */}
            </section>

            {/* <div>
                <a className='bg-grey pb-3 flex justify-center text-2xl font-extrabold font-pjs text-cinder-dark' href='#top'>TOP</a>
            </div> */}

            {/* <div>
               <a href='#navbar' className=''> <i className="fa-solid absolute fa-arrow-up right-5 fa-2xl"></i></a>
            </div> */}
        </>
    )
}
export default Footer


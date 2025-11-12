import React, { useState } from "react";
import link from "../assets/icons/link.png"

const Project = [
{
        type: "Personal Project",
        title: "Digital Archive",
        images: ["archive/digital5.png", "archive/digital6.png", "archive/digital7.png", "archive/digital1.png", "archive/digital2.png", "archive/digital3.png", "archive/digital4.png", ],
        description: "Digital Archive is a web-based project management and archiving system built for higher institutions to streamline final year project supervision. It allows admins to create departments and coordinators, while coordinators can add students and supervisors, and assign students based on supervision limits. Supervisors can review project topics and files, upload corrections, and send feedback or notifications to students. Students can easily submit project topics, upload files for review, and receive updates. The platform enhances communication, organization, and transparency in managing final year projects, ensuring a seamless and efficient academic workflow.",
        skills: "Next.js, Typescript, Nestjs, MySql",
        github: "https://github.com/Cheeh1",
        web: "https://digital-archive-pied.vercel.app/",
        
    },
    {
        type: "Personal Project",
        title: "ParkAccess",
        images: ["parkaccess/parkaccess1.png", "parkaccess/parkaccess2.png", "parkaccess/parkaccess.png", "parkaccess/parkaccess4.png", "parkaccess/parkaccess5.png", "parkaccess/parkaccess6.png", "parkaccess/parkaccess7.png", "parkaccess/parkaccess8.png"],
        description: "ParkAccess is a full-stack web application that streamline the process of booking and managing parking spaces. Users can easily view available parking slots in real time, make reservations, and track their booking history. On the other end, companies can register parking lots, set custom pricing, monitor bookings, and gain insights through payment analytics. I handled both the frontend and backend development, ensuring the system is secured, scalable, user-friendly, and optimized for performance.",
        skills: "React, Typescript, Express, Mongodb",
        github: "https://github.com/Cheeh1/parkaccess-urban-reserve",
        web: "https://parkaccess-urban-reserve.vercel.app/",
       
    },
    {
        type: "Company Project",
        title: "EngageAm ",
        images: ["engageAm/engageAm1.png", "engageAm/engageAm2.png", "engageAm/engageam.png", "engageAm/engageAm3.png", "engageAm/engageAm4.png", "engageAm/engageAm5.png", "engageAm/engageAm6.png"],
        description: "EngageAm is a community-driven platform that helps users grow their social media engagement by rewarding genuine interactions. Whether you're looking for likes, comments, views, or followers, EngageAm uses a point-based system where users earn points for engaging with others and spend those points to receive engagement in return. I was responsible for developing the frontend, ensuring a smooth, responsive, and user-friendly experience.",
        skills: "Next.js, Typescript, PHP, MySql",
        github: "https://github.com/Cheeh1",
        web: "https://engageam.app/",
       
    },
    {
        type: "Personal Project",
        title: "Furniture Store",
        images: ["furniture/furniture1.png", "furniture/furniture2.png", "furniture-store-edit.png", "furniture/furniture3.png", ],
        description: "This is an eCommerce website built for furniture enthusiasts, offering a smooth and user-friendly shopping experience. Users can browse through a curated selection of furniture, add items to their cart or favorites, create accounts, and securely complete purchases using the Paystack payment gateway. The project showcases my proficiency in building interactive and dynamic frontend applications, with features like authentication, state management using Redux Toolkit, and seamless payment integration.",
        skills: "React, Typescript, Firebase, RTK",
        github: "https://github.com/Cheeh1/furniture-ecommerce-site",
        web: "https://furniture-ecommerce-store.netlify.app/",
        
    },
    {
        type: "Personal Project",
        title: "MovieBox",
        images: ["moviebox.webp", "moviebox/moviebox1.png", "moviebox/moviebox2.png"],
        description: "This movie website allows users to explore a vast database of films, search for specific titles, view detailed information about each movie, watch trailers, and save their favorites for quick access. The project highlights my ability to integrate third-party APIs and effectively manage user preferences using LocalStorage, creating a smooth and engaging browsing experience",
        skills: "React, Javascript, Tailwind, TMDB API",
        github: "https://github.com/Cheeh1/movie-box",
        web: "https://movieboxsite.netlify.app/",
      
    },
   
]

/* eslint-disable react/prop-types */
const ProjectCard = ({ project, index }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => 
            prev === project.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => 
            prev === 0 ? project.images.length - 1 : prev - 1
        );
    };

    const goToImage = (idx) => {
        setCurrentImageIndex(idx);
    };

    return (
        <div 
            data-aos="fade-up" 
            data-aos-duration="800"
            data-aos-delay={index * 100}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col"
        >
           
            <div className="relative overflow-hidden group h-80 bg-gray-100 dark:bg-gray-700">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cinder-dark-mode/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                
                
                <img 
                    className="w-full h-full object-contain md:object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    src={`/images/${project.images[currentImageIndex]}`} 
                    alt={`${project.title} - ${currentImageIndex + 1}`}
                />

              
                {project.images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-900 text-cinder-dark dark:text-gray-100 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                            aria-label="Previous image"
                        >
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-900 text-cinder-dark dark:text-gray-100 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                            aria-label="Next image"
                        >
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>

                       
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                            {project.images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => goToImage(idx)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        idx === currentImageIndex 
                                            ? 'bg-white w-6' 
                                            : 'bg-white/50 hover:bg-white/75'
                                    }`}
                                    aria-label={`Go to image ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}

              
                {project.images.length > 1 && (
                    <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full z-20">
                        {currentImageIndex + 1} / {project.images.length}
                    </div>
                )}
            </div>

           
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold text-cinder-dark-mode dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full font-inter">
                            {project.type}
                        </span>
                    </div>

                    <h3 className="text-2xl font-bold text-cinder-dark dark:text-gray-100 font-pjs mb-3">
                        {project.title}
                    </h3>

                    <p className="text-cinder-light dark:text-gray-300 font-inter leading-relaxed mb-4 text-sm">
                        {project.description}
                    </p>
                </div>

                <div>
                    <div className="flex flex-wrap gap-2 mb-5">
                        {project.skills.split(",").map((skill, idx) => (
                            <span 
                                key={idx} 
                                className="text-xs font-medium text-cinder-dark dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-md font-inter border border-gray-200 dark:border-gray-600"
                            >
                                {skill.trim()}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4 items-center">
                        <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center gap-2 text-cinder-dark dark:text-gray-100 hover:text-cinder-dark-mode dark:hover:text-blue-400 transition-colors duration-200"
                        >
                            <i className="fa-brands fa-github fa-lg"></i>
                            <span className="text-sm font-medium font-inter">Code</span>
                        </a>
                        <a 
                            href={project.web} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center gap-2 text-cinder-dark dark:text-gray-100 hover:text-cinder-dark-mode dark:hover:text-blue-400 transition-colors duration-200"
                        >
                            <img className="w-4 h-4" src={link} alt="link" />
                            <span className="text-sm font-medium font-inter">Live Demo</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
/* eslint-enable react/prop-types */

const Projects = () => {
    return (
        <>
            <section className="bg-grey dark:bg-gray-900 py-20" id="projects">
                <div className="flex flex-col gap-2 items-center" data-aos="zoom-in-down" data-aos-duration="800">
                    <div className="flex gap-3">
                        <p className="border-2 w-4 h-1 my-2.5 text-[#D9D9D9]"></p>
                        <p className="text-md font-light text-cinder-light dark:text-gray-100 tracking-widest font-inter">
                            MY WORKS
                        </p>
                    </div>
                    <p className="text-cinder-dark dark:text-cinder-dark-mode font-bold text-3xl font-pjs">
                        PROJECTS
                    </p>
                </div>

                <div className="max-w-[1600px] mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {Project.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </section>
        </>
    );
};
export default Projects;

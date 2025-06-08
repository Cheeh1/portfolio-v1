import React from "react";
import link from "../assets/icons/link.png"

const Project = [

    {
        type: "Company Project",
        title: "EngageAm ",
        image: "engageam.png",
        description: "EngageAm is a community-driven platform that helps users grow their social media engagement by rewarding genuine interactions. Whether you're looking for likes, comments, views, or followers, EngageAm uses a point-based system where users earn points for engaging with others and spend those points to receive engagement in return. I was responsible for developing the frontend, ensuring a smooth, responsive, and user-friendly experience.",
        skills: "Next.js, Typescript, PHP, MySql",
        github: "https://github.com/Cheeh1",
        web: "https://engageam.app/",
        style: true
    },
    {
        type: "Personal Project",
        title: "ParkAccess",
        image: "parkaccess.png",
        description: "ParkAccess is a full-stack web application that streamline the process of booking and managing parking spaces. Users can easily view available parking slots in real time, make reservations, and track their booking history. On the other end, companies can register parking lots, set custom pricing, monitor bookings, and gain insights through payment analytics. I handled both the frontend and backend development, ensuring the system is secured, scalable, user-friendly, and optimized for performance.",
        skills: "React, Typescript, Express, Mongodb",
        github: "https://github.com/Cheeh1/parkaccess-urban-reserve",
        web: "https://parkaccess-urban-reserve.vercel.app/",
        style: false
    },
    {
        type: "Personal Project",
        title: "Furniture Store",
        image: "furniture-store-edit.png",
        description: "This is an eCommerce website built for furniture enthusiasts, offering a smooth and user-friendly shopping experience. Users can browse through a curated selection of furniture, add items to their cart or favorites, create accounts, and securely complete purchases using the Paystack payment gateway. The project showcases my proficiency in building interactive and dynamic frontend applications, with features like authentication, state management using Redux Toolkit, and seamless payment integration.",
        skills: "React, Typescript, Firebase, RTK",
        github: "https://github.com/Cheeh1/furniture-ecommerce-site",
        web: "https://furniture-ecommerce-store.netlify.app/",
        style: true
    },
    // {
    //     type: "Personal Project",
    //     title: "Task Manager",
    //     image: "task manager.png",
    //     description: " An efficient task management solution that features Authentication with Firebase, storage with Firestore, logout, account deletion, reset password and Task management like adding, deleting and marking tasks as completed ensuring an organized to-do list.",
    //     skills: "React.js, Typescript, Firebase, RTK",
    //     github: "https://github.com/Cheeh1/Task-manager-app",
    //     web: "https://task-manager-app-ng.netlify.app/",
    //     style: false
    // },
    {
        type: "Personal Project",
        title: "MovieBox",
        image: "moviebox.webp",
        description: "This movie website allows users to explore a vast database of films, search for specific titles, view detailed information about each movie, watch trailers, and save their favorites for quick access. The project highlights my ability to integrate third-party APIs and effectively manage user preferences using LocalStorage, creating a smooth and engaging browsing experience",
        skills: "React, Javascript, Tailwind, TMDB API",
        github: "https://github.com/Cheeh1/movie-box",
        web: "https://movieboxsite.netlify.app/",
        style: false
    },
    // {
    //     type: "Personal Project",
    //     title: "Tenzies game",
    //     image: "tenzies.png",
    //     description: "In this project, I designed and built an interactive web-based version of Tenzi in which participants roll dice to create a winning combination and a confetti for celebration after winning.",
    //     skills: "React.js, Javascript, SCSS",
    //     github: "https://github.com/Cheeh1/tenzies-game",
    //     web: "https://tenzies-web-game.netlify.app/",
    //     style: false
    // }
]

const Projects = () => {
    return (
        <>
            <section className="mt-20" id="projects">
                <div className="flex flex-col gap-2 items-center" data-aos="zoom-in-down" data-aos-duration="800">
                    <div className="flex gap-3">
                        <p className="border-2 w-4 h-1 my-2.5 text-[#D9D9D9]"></p>
                        <p className="text-md font-light text-cinder-light dark:text-white tracking-widest font-inter">
                            MY WORKS
                        </p>
                    </div>
                    <p className="text-cinder-dark dark:text-cinder-dark-mode font-bold text-3xl font-pjs">
                        PROJECTS
                    </p>
                </div>

                <div className="flex flex-col gap-32 md:gap-20 items-center xl:gap-24 mt-20">
                    {Project.map((project, index) => (
                        <div key={index} className={`flex flex-col ${project.style ? "xl:flex-row-reverse md:flex-row-reverse" : "xl:flex-row md:flex-row"} justify-evenly gap-14 md:gap-5 md:mx-5 xl:gap-20 items-center`}>
                            <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="500" className="flex flex-col gap-3 rounded-lg bg-grey dark:bg-gray-300 shadow-xl shadow-gray-300 dark:shadow-black p-5 px-5">
                                <p className="font-bold text-cinder-light text-lg font-pjs">{project.type}</p>
                                <p className="text-2xl xl:text-3xl -mt-2 font-extrabold text-cinder-dark-mode font-pjsk">{project.title}</p>
                                <p className="font-semibold text-sm -mt-2 xl:text-md text-cinder-dark font-inter w-72 xl:w-96">
                                    {project.description}
                                </p>
                                <div className="flex gap-3 text-cinder-light font-medium font-inter">
                                    {project.skills.split(",").map((skill, index) => (
                                        <p key={index} className="border rounded-md text-sm xl:text-md border-cinder-light p-1">{skill}</p>
                                    ))}
                                </div>
                                <div className="flex gap-5 items-center">
                                    <a href={project.github} target="_blank" rel="noreferrer"><i className="fa-brands text-gray-900 fa-github fa-xl"></i></a>
                                    <a href={project.web} target="_blank" rel="noreferrer"><img className="w-5" src={link} alt="logo" /></a>
                                </div>
                            </div>
                            <div data-aos="flip-left" data-aos-duration="800" data-aos-delay="500" className="w-full max-w-md xl:w-full md:w-96 px-5 xl:px-0" >
                                <img className="border bg-grey dark:border-gray-700 w-full h-auto xl:h-72 md:h-64 rounded-lg" src={`/images/${project.image}`} alt="project-img" />
                            </div>
                        </div>

                    ))}
                </div>
            </section>
        </>
    );
};
export default Projects;

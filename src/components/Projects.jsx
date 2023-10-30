import React from "react";
import link from "../assets/icons/link.png"

const Project = [

    {
        type: "Personal Project",
        title: "Task Manager",
        image: "task manager.png",
        description: " An efficient task management solution that features Authentication with Firebase, storage with Firestore, logout, account deletion, reset password and Task management like adding, deleting and marking tasks as completed ensuring an organized to-do list.",
        skills: "React.js, Typescript, Firebase, RTK",
        github: "https://github.com/Cheeh1/Task-manager-app",
        web: "https://task-manager-app-ng.netlify.app/",
        style: true
    },
    {
        type: "Personal Project",
        title: "MovieBox",
        image: "moviebox.webp",
        description: "A movie website where users can search through a large database of movies, get extensive information about each movie, watch trailers of them,and save their favourites.I used my knowledge on API and Localstorage to achieve this.",
        skills: "React.js, Javascript, Tailwind, API",
        github: "https://github.com/Cheeh1/movie-box",
        web: "https://movieboxsite.netlify.app/",
        style: false
    },
    {
        type: "Personal Project",
        title: "DragNdrop Gallery",
        image: "DragNdrop.png",
        description: "An interactive image gallery that allows users to search for images by category and, on top of that, rearrange the images however they decide to. I integrated an API to enhance the variety of images available, as well as a drag-and-drop library to handle the drag and drop feature.",
        skills: "React.js, Typescript, Tailwind, API",
        github: "https://github.com/Cheeh1/dragNdrop-gallery",
        web: "https://movieboxsite.netlify.app/",
        style: true
    },
    {
        type: "Personal Project",
        title: "Crappo",
        image: "crappo.webp",
        description: "A landing page for a cryptocurrency investment firm and what they offer potential customers.",
        skills: "React.js, SCSS",
        github: "https://github.com/Cheeh1/crypto-site",
        web: "https://crappocryptosite.netlify.app/",
        style: false
    },
    {
        type: "Personal Project",
        title: "Tenzies game",
        image: "tenzies.png",
        description: "In this project, I designed and built an interactive web-based version of Tenzi in which participants roll dice to create a winning combination and a confetti for celebration after winning.",
        skills: "React.js, Javascript, SCSS",
        github: "https://github.com/Cheeh1/tenzies-game",
        web: "https://tenzies-web-game.netlify.app/",
        style: true
    }
]

const Projects = () => {
    return (
        <>
            <section className="mt-20" id="projects">
                <div className="flex flex-col gap-2 items-center">
                    <div className="flex gap-3">
                        <p className="border-2 w-4 h-1 my-2.5 text-[#D9D9D9]"></p>
                        <p className="text-md font-light text-cinder-light dark:text-white tracking-widest font-inter">
                            MY WORKS
                        </p>
                    </div>
                    <p className="text-cinder-dark dark:text-cinder-dark-mode font-bold text-3xl font-pjs">
                        PORTFOLIOS
                    </p>
                </div>

                <div>
                    {Project.map((project, index) => (
                        <div key={index} className={`flex flex-col ${project.style ? "xl:flex-row-reverse" : "xl:flex-row"} mt-20 justify-evenly gap-20 px-28 items-center`}>
                            <div className="flex flex-col gap-5 rounded-lg bg-grey dark:bg-gray-300 shadow-xl shadow-gray-300 dark:shadow-black p-5 px-5">
                                <p className="font-bold text-cinder-light text-lg font-pjs">{project.type}</p>
                                <p className="text-[30px] xl:text-[40px] font-extrabold text-cinder-dark-mode font-pjsk">{project.title}</p>
                                <p className="font-semibold text-md xl:text-lg text-cinder-dark font-inter w-72 xl:w-96">
                                    {project.description}
                                </p>
                                <div className="flex gap-3 text-cinder-light font-medium font-inter">
                                    {project.skills.split(",").map((skill, index) => (
                                        <p key={index} className="border rounded-md border-cinder-light p-1">{skill}</p>
                                    ))}
                                </div>
                                <div className="flex gap-5 items-center">
                                    <a href={project.github} target="_blank" rel="noreferrer"><i className="fa-brands text-gray-900 fa-github fa-xl"></i></a>
                                    <a href={project.web} target="_blank" rel="noreferrer"><img className="w-5" src={link} alt="logo" /></a>
                                </div>
                            </div>
                            <div className="border bg-grey dark:border-gray-700">
                                <img src={`/images/${project.image}`} alt="project-img" />
                            </div>
                        </div>

                    ))}
                </div>
            </section>
        </>
    );
};
export default Projects;

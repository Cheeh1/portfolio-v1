import React from "react";
import { link, crappo, tenzies, moviebox, task } from "../assets";

const Projects = () => {
    return (
        <>
            <section className="mt-20" id="portfolios">
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

                <div className="flex flex-col xl:flex-row-reverse mt-20 justify-evenly gap-20 px-28 items-center">
                    <div className="flex flex-col gap-5 rounded-lg bg-grey dark:bg-gray-300 shadow-xl shadow-gray-300 dark:shadow-black p-5 px-5">
                        <p className="font-bold text-cinder-light text-lg font-pjs">Personal Project</p>
                        <p className="text-[30px] xl:text-[40px] font-extrabold text-cinder-dark-mode font-pjsk">Task Manager</p>
                        <p className="font-semibold text-md xl:text-lg text-cinder-dark font-inter w-72 xl:w-96">
                            An efficient task management solution that features Authentication with Firebase, storage with Firestore,
                            logout, account deletion, reset password and Task management like adding,deleting
                            and marking tasks as completed ensuring an organized to-do list.
                        </p>
                        <div className="flex gap-3 text-cinder-light font-medium font-inter">
                            <p className="border rounded-md border-cinder-light p-1">React.js</p>
                            <p className="border rounded-md border-cinder-light p-1">Typescript</p>
                            <p className="border rounded-md border-cinder-light p-1">Tailwind</p>
                            <p className="border rounded-md border-cinder-light p-1">Firebase</p>
                            <p className="border rounded-md border-cinder-light p-1">RTK</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <a href="https://github.com/Cheeh1/Task-manager-app" target="_blank" rel="noreferrer"><i className="fa-brands text-gray-900 fa-github fa-xl"></i></a>
                            <a href="https://tenzies-web-game.netlify.app/" target="_blank" rel="noreferrer"><img className="w-5" src={link} alt="logo" /></a>
                        </div>
                    </div>
                    <div className="border bg-grey dark:border-gray-700">
                        <img src={task} alt="project-img" />
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row mt-16 justify-evenly gap-20 px-28 items-center">
                    <div className="flex flex-col gap-5 rounded-lg bg-grey shadow-xl shadow-gray-300 dark:shadow-black dark:bg-gray-300 p-5 px-5">
                        <p className="font-bold text-cinder-light text-lg font-pjs">Personal Project</p>
                        <p className="text-[30px] xl:text-[40px] font-extrabold text-cinder-dark-mode font-pjsk">MovieBox</p>
                        <p className="font-semibold text-md xl:text-lg text-cinder-dark font-inter w-72 xl:w-96">
                            A movie website where users can search through a large database of movies,
                            get extensive information about each movie, watch trailers of them,
                            and save their favourites. I used my knowledge on API and Localstorage to achieve this.
                        </p>
                        <div className="flex gap-3 text-cinder-light font-medium font-inter">
                            <p className="border rounded-md border-cinder-light p-1">React.js</p>
                            <p className="border rounded-md border-cinder-light p-1">Tailwind CSS</p>
                            <p className="border rounded-md border-cinder-light p-1">IMDB API</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <a href="https://github.com/Cheeh1/movie-box" target="_blank" rel="noreferrer"><i className="fa-brands text-gray-900 fa-github fa-xl"></i></a>
                            <a href="https://movieboxsite.netlify.app/" target="_blank" rel="noreferrer"><img className="w-5" src={link} alt="logo" /></a>
                        </div>
                    </div>
                    <div>
                        <img src={moviebox} alt="project-img" />
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row-reverse mt-20 justify-evenly gap-20 px-28 items-center">
                    <div className="flex flex-col gap-5 rounded-lg bg-grey dark:bg-gray-300 shadow-xl shadow-gray-300 dark:shadow-black p-5 px-5">
                        <p className="font-bold text-cinder-light text-lg font-pjs">Personal Project</p>
                        <p className="text-[30px] xl:text-[40px] font-extrabold text-cinder-dark-mode font-pjsk">Crappo</p>
                        <p className="font-semibold text-md xl:text-lg text-cinder-dark font-inter w-72 xl:w-96">
                            A landing page for a cryptocurrency investment firm and what they offer potential customers.
                        </p>
                        <div className="flex gap-3 text-cinder-light font-medium font-inter">
                            <p className="border rounded-md border-cinder-light p-1">React.js</p>
                            <p className="border rounded-md border-cinder-light p-1">Scss</p>
                            {/* <p className="border rounded-md border-cinder-dark p-1">Animation</p> */}
                        </div>
                        <div className="flex gap-5 items-center">
                            <a href="https://github.com/Cheeh1/crypto-site" target="_blank" rel="noreferrer"><i className="fa-brands text-gray-900 fa-github fa-xl"></i></a>
                            <a href="https://crappocryptosite.netlify.app/" target="_blank" rel="noreferrer"><img className="w-5" src={link} alt="logo" /></a>
                        </div>
                    </div>
                    <div>
                        <img src={crappo} alt="project-img" />
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row mt-20 justify-evenly gap-20 px-28 items-center">
                    <div className="flex flex-col gap-5 rounded-lg bg-grey dark:bg-gray-300 shadow-xl shadow-gray-300 dark:shadow-black p-5 px-5">
                        <p className="font-bold text-cinder-light text-lg font-pjs">Personal Project</p>
                        <p className="text-[30px] xl:text-[40px] font-extrabold text-cinder-dark-mode font-pjsk">Tenzies game</p>
                        <p className="font-semibold text-md xl:text-lg text-cinder-dark font-inter w-72 xl:w-96">
                            In this project, I designed and built an interactive web-based version of Tenzi in
                            which participants roll dice to create a winning combination and a confetti for
                            celebration after winning.
                        </p>
                        <div className="flex gap-3 text-cinder-light font-medium font-inter">
                            <p className="border rounded-md border-cinder-light p-1">React.js</p>
                            <p className="border rounded-md border-cinder-light p-1">Scss</p>
                            <p className="border rounded-md border-cinder-light p-1">Animation</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <a href="https://github.com/Cheeh1/tenzies-game" target="_blank" rel="noreferrer"><i className="fa-brands text-gray-900 fa-github fa-xl"></i></a>
                            <a href="https://tenzies-web-game.netlify.app/" target="_blank" rel="noreferrer"><img className="w-5" src={link} alt="logo" /></a>
                        </div>
                    </div>
                    <div className="border bg-grey dark:border-gray-700">
                        <img src={tenzies} alt="project-img" />
                    </div>
                </div>
            </section>
        </>
    );
};
export default Projects;

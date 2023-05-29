import React from 'react'
import { link, github, crappo, tenzies, rick } from '../assets'

const Works = () => {

    return (
        <>
            <section className='mt-20' id='portfolios'>
                <div>
                    <div className="flex flex-col gap-2 items-centeportfolio-item-1">
                        <p className="border-2 w-4 h-1 my-2.5 text-[#D9D9D9]"></p>
                        <p className="text-md font-light text-cinder-light dark:text-white tracking-widest font-inter">MY WORKS</p>
                    </div>
                    <p className="text-cinder-dark dark:text-cinder-dark-mode font-bold text-3xl font-pjs xl:ml-72">FEATURED PORTFOLIOS</p>
                </div>

                 {/* Portfolio Items */}
                <div className='mt-20 flex flex-col gap-20 xl:gap-0 xl:flex-row justify-evenly items-center'>
                    {/* Portfolio Item: Crappo Landing Page */}
                    <div
                        className="portfolio-item">
                        <img className="portfolio-img" src={crappo} alt="item" />
                        <div className="portfolio-item-1">
                            <span className="portfolio-title">Crappo Landing Page.</span>
                            <div className='portfolio-item-2'>
                                <span className="portfolio-lang">React</span>
                                <a href='https://crappocryptosite.netlify.app/' target="_blank"><img src={link} alt="link-icon" /></a>
                                <a href='https://github.com/Cheeh1/crypto-site' target="_blank"><img src={github} alt="link-icon" /></a>
                            </div>
                        </div>
                    </div>
                    {/* Portfolio Item: Tenzies Game */}
                    <div
                        className="portfolio-item">
                        <img className="portfolio-img" src={tenzies} alt="item" />
                        <div className="portfolio-item-1">
                            <span className="portfolio-title">Tenzies Game.</span>
                            <div className='portfolio-item-2'>
                                <span className="text-sm text-cinder-light border rounded-md p-2">React</span>
                                <a href='https://tenzies-web-game.netlify.app/' target="_blank"><img src={link} alt="link-icon" /></a>
                                <a href='https://github.com/Cheeh1/tenzies-game' target="_blank"><img src={github} alt="link-icon" /></a>
                            </div>
                        </div>
                    </div>
                    {/* Portfolio Item: RickandMorty API Website */}
                    <div
                        className="portfolio-item">
                        <img className="portfolio-img" src={rick} alt="item" />
                        <div className="portfolio-item-1">
                            <span className="portfolio-title">RickandMorty API Website.</span>
                            <div className='portfolio-item-2'>
                                <span className="text-sm text-cinder-light border rounded-md p-2">React</span>
                                <a href='https://rickandmortyapipr.netlify.app/' target="_blank"><img src={link} alt="link-icon" /></a>
                                <a href='https://github.com/Cheeh1/rickandmorty-api-project' target="_blank"><img src={github} alt="link-icon" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
export default Works
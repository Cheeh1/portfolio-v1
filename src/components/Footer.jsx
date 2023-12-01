import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <section className="flex flex-col items-center gap-2 py-10 bg-grey dark:bg-gray-900">
          <div className="flex items-center gap-5">
            <a data-aos="fade-right" data-aos-duration="800" data-aos-delay="700" href="https://github.com/Cheeh1" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github fa-xl"></i>
            </a>
            <a data-aos="fade-right" data-aos-duration="800" data-aos-delay="800" href="https://twitter.com/iamcheeh" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-twitter fa-xl"></i>
            </a>
            <a data-aos="fade-right" data-aos-duration="800" data-aos-delay="900" href="https://www.linkedin.com/in/divineedwin/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin-in fa-xl"></i>
            </a>
            <a data-aos="fade-right" data-aos-duration="800" data-aos-delay="1000" href="https://cheehdevworkshop.hashnode.dev/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-blogger fa-xl"></i>
            </a>
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="800" data-aos-delay="700" className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <i className="text-2xl fa-regular fa-envelope"></i>
              <div className="flex flex-col">
                <a
                  href="mailto:edwindivine5@gmail.com"
                  className="font-inter text-cinder-light dark:text-grey font-normal text-sm"
                >
                  edwindivine5@gmail.com
                </a>
              </div>
            </div>
          </div>
          <p data-aos="zoom-in-up" data-aos-duration="800" data-aos-delay="800" className="text-cinder-light dark:text-white font-medium font-inter tracking-widest">
            © 2023 - Divine Edwin
          </p>
          {/* <p className='text-cinder-light font-medium font-inter tracking-widest'>Designed by  -  Caleb Nyong</p> */}
        </section>

        <div>
          <a
            className="bg-grey dark:bg-gray-900 pb-3 flex justify-center text-2xl font-extrabold font-pjs text-cinder-dark dark:text-white"
            href="#top"
          >
            TOP
          </a>
        </div>
      </footer>
    </>
  );
};
export default Footer;

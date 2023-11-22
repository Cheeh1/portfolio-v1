import React from "react";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="flex gap-10 flex-col mt-20  md:gap-0  items-center justify-evenl py-10"
      >
        <div className="flex flex-col gap-2 items-center">
          <div className="flex gap-3">
            <p className="border-2 w-4 h-1 my-2.5 text-[#D9D9D9]"></p>
            <p className="text-md font-light text-cinder-light dark:text-white tracking-widest font-inter">
              MY CONTACT
            </p>
          </div>
          <p className="text-cinder-dark dark:text-cinder-dark-mode font-bold text-3xl font-pjs">
            SEND A MESSAGE
          </p>
        </div>

        <div className="flex flex-col gap-5 items-center text-center py-10 px-10 xl:px-72">
          <h1 className="xl:text-[50px] text-[45px] font-pjs font-bold text-cinder-dark dark:text-cinder-dark-mode">Get In Touch</h1>
          <p className="text-lg font-inter text-cinder-light text-center">I&apos;m currently looking for any new opportunities, my inbox is always open. Whether you have a question,
            want to collaborate on a project or just want to say hi,
            I&apos;ll definitely get back to you!
          </p>
          <a href="mailto:edwindivine5@gmail.com"><button className="border rounded-md p-3 font-inter text-xl font-bold w-40 text-cinder-dark dark:text-cinder-dark-mode border-cinder-light shadow-xl shadow-gray-300 dark:shadow-black">Say Hello</button></a>
        </div>
      </section>
    </>
  );
};
export default Contact;

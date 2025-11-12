import React from "react";
import Aos from "aos";

const experiences = [
  {
    company: "Deebo",
    position: "Frontend Developer",
    period: "August 2025 - Present",
    responsibilities: [
      "Led the frontend development of the MVP, transforming detailed Figma designs into a responsive, high-performing web interface.",
      "Collaborated closely with the product manager to define core features, refine user flows, and ensure alignment between design, functionality, and business goals.",
      "Integrated Korapay payment gateway to support secure and seamless event-related transactions.",
      "Developed key platform functionalities, including cart management, multi-step event creation flows, and dynamic content rendering.",
      "Worked alongside backend engineers to connect and optimize RESTful API endpoints, ensuring robust data handling and consistent user experience.",
      "Focused on building a scalable, maintainable frontend architecture, improving development efficiency and platform reliability."
    ]
  },
  {
    company: "EngageAm",
    position: "Frontend Developer",
    period: "December 2024 - July 2025",
    responsibilities: [
      "Developed and maintained a user engagement platform that enables users to earn and spend points by interacting with each other's social media posts (likes, comments, etc.).",
      "Implemented a Monnify-based payment integration for purchasing engagement points, enabling seamless transactions and revenue generation.",
      "Built real-time analytics dashboards, allowing users to monitor who engaged with their posts and track their performance.",
      "Created a dispute and flagging system that enables users to report suspicious or false engagements, improving platform trust and fairness.",
      "Collaborated closely with cross-functional teams to ensure scalable frontend architecture and smooth user experience.",
      "Contributed to a product now serving over 5,000 users, ensuring stability and responsiveness under growing usage."
    ]
  },
  {
    company: "Cimpla Africa",
    position: "Frontend Developer Intern",
    period: "May 2024 - November 2024",
    responsibilities: [
      "Built and launched a fully responsive company website using React and TailwindCSS, increasing visitor engagement and improving product visibility.",
      "Designed and implemented a waitlist landing page that successfully captured leads and stored user data securely in the database.",
      "Co-developed a core product dashboard with real-time data integration, enabling better monitoring and decision-making for internal stakeholders.",
      "Streamlined team collaboration through Git/GitHub and Google Meet, reducing development bottlenecks and improving feature delivery speed.",
      "Played a key role in integrating clean UI components and improving cross-device responsiveness, resulting in positive user feedback."
    ]
  },
  {
    company: "Credit Direct Finance Limited",
    position: "Frontend Developer Intern",
    period: "June 2024 - September 2024",
    responsibilities: [
      "Built a \"Log a Ticket\" feature for a financial application, streamlining user support and improving issue resolution tracking.",
      "Worked closely with product and business teams to implement feedback-driven enhancements and deliver timely bug fixes.",
      "Actively participated in Agile meetings including daily stand-ups, sprint planning, and code reviews, contributing to team efficiency and knowledge sharing.",
      "Used Git and GitHub for source control and collaborated effectively via Microsoft Teams and Jira to ensure timely task delivery.",
      "Helped develop an enterprise platform by building core user workflows, integrating RESTful APIs, and collaborating with QA to meet product specifications and quality standards."
    ]
  },
  {
    company: "Blue Devtech Solutions",
    position: "Frontend Developer Intern",
    period: "September 2023 - November 2023",
    responsibilities: [
      "Developed and optimized responsive UI components using React and TailwindCSS, improving user engagement and visual consistency across devices.",
      "Integrated backend APIs and third-party libraries to enhance data flow, app functionality, and user interaction.",
      "Collaborated with team members via Google Meet and Trello, reducing miscommunication and boosting sprint velocity.",
      "Used Git and GitHub for version control, ensuring smooth collaboration and delivery of production-ready features."
    ]
  }
];

const Experience = () => {
  Aos.init({
    once: true,
  });

  return (
    <div className="bg-grey dark:bg-gray-800" id="experience">
      <div className="flex flex-col py-10 gap-2 items-center" data-aos="zoom-in-down" data-aos-duration="800">
        <div className="flex gap-3">
          <p className="border-2 w-4 h-1 my-2.5 text-[#D9D9D9]"></p>
          <p className="text-md font-light text-cinder-light dark:text-gray-100 tracking-widest font-inter">
            CAREER JOURNEY
          </p>
        </div>
        <p className="text-cinder-dark dark:text-cinder-dark-mode font-bold text-3xl font-pjs">
          WORK EXPERIENCE
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-20">
        {experiences.map((exp, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={index * 100}
            className="mb-12 last:mb-0"
          >
            <div className="border-l-2 border-cinder-light dark:border-gray-600 pl-6 ml-2">
              <div className="relative">
                <div className="absolute -left-[1.85rem] top-1.5 w-3 h-3 rounded-full bg-cinder-dark dark:bg-cinder-dark-mode border-2 border-white dark:border-gray-800"></div>
                
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-cinder-dark dark:text-gray-100 font-pjs">
                    {exp.position}
                  </h3>
                  <p className="text-lg font-semibold text-cinder-light dark:text-gray-300 font-inter">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-inter mt-1">
                    {exp.period}
                  </p>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.responsibilities.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 text-cinder-light dark:text-gray-300 font-inter leading-relaxed"
                    >
                      <span className="text-cinder-dark dark:text-cinder-dark-mode mt-1.5 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

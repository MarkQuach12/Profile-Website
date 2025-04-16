import React from "react";
import image from "/src/image.png";
import {
  BiSun,
  BiMoon,
  BiCurrentLocation,
  BiEnvelope,
  BiPhone,
  BiLogoGithub,
  BiLogoLinkedin,
} from "react-icons/bi";

function HeaderLeft({ darkMode, toggleDarkMode }) {
  return (
    <div
      className="min-h-screen flex-1 relative p-10
    transition-all duration-500 dark:bg-black dark:text-white
    sm:border-r dark:border-gray-700"
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={image} alt="" className="w-32 rounded-full" />

          <div className="text-center space-y-1">
            <h1 className="text-4xl font-light">
              <span className="font-semibold"> Mark Quach</span>
            </h1>
            <h3 className="text-xl font-light dark:text-white">
              University Student
            </h3>
          </div>
        </div>

        <button className="absolute right-10 top-10" onClick={toggleDarkMode}>
          {darkMode ? (
            <BiSun className="text-2xl" />
          ) : (
            <BiMoon className="text-2xl" />
          )}
        </button>

        <div
          className="flex flex-col items-start justify=start gap-5
        border-b p-5 dark: border-gray-700"
        >
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <BiCurrentLocation className="text-xl" />
              <span> Sydney, Australia</span>
            </li>
            <li className="flex items-center gap-2">
              <BiEnvelope className="text-xl" />
              <span> mark.quach1324@gmail.com</span>
            </li>
          </ul>
        </div>

        <div
          className="flex flex-col items-start justify-start gap-5
            border-b p-5 dark: border-gray-700"
        >
          <h1 className="text-baes font-semibold md:text-2xl"> Socials</h1>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <BiLogoGithub className="text-xl" />
              <a href="https://github.com/MarkQuach12" target="_blank">
                {" "}
                @MarkQuach12
              </a>
            </li>
            <li className="flex items-center gap-2">
              <BiLogoLinkedin className="text-xl" />
              <a
                href="https://www.linkedin.com/in/mark-quach-4570362a0/"
                target="_blank"
              >
                Mark Quach
              </a>
            </li>
          </ul>
        </div>

        <div
          className="flex flex-col items-start justify-start gap-5
            border-b p-5 dark: border-gray-700"
        >
          <h1 className="text-base font-semibold md:text-2xl"> Education</h1>

          <ul>
            <li className="relative flex flex-col gap-1 border-l p-6">
              <span className="font-semibold md:text-lg">
                Computer Science and Commerce (Finance)
              </span>
              <span className="font-light"> University of New South Wales</span>
              <span className="text-sm text-gray-400"> 2022 - ongoing</span>
            </li>
            <li className="relative flex flex-col gap-1 border-l p-6">
              <span className="font-semibold md:text-lg">
                High School Student
              </span>
              <span className="font-light"> Prairiewood High School</span>
              <span className="text-sm text-gray-400"> 2016 - 2021</span>
              <span className="text-sm text-gray-400">
                Top 1% of NSW Students
              </span>
            </li>
          </ul>
        </div>

        <div
          className="flex flex-col items-start justify-start gap-5
            border-b p-5 dark: border-gray-700"
        >
          <h1 className="text-base font-semibold md:text-2xl"> Skills</h1>
          <div className="flex flex-wrap gap-3">
            <div className="flex flex-wrap gap-3">
              <span
                className="rounded-xl bg-black text-white p-3 text-center
                        dark:bg-white dark:text-black"
              >
                JavaScript
              </span>
              <span
                className="rounded-xl bg-black text-white p-3 text-center
                        dark:bg-white dark:text-black"
              >
                Python
              </span>
              <span
                className="rounded-xl bg-black text-white p-3 text-center
                        dark:bg-white dark:text-black"
              >
                Java
              </span>
              <span
                className="rounded-xl bg-black text-white p-3 text-center
                        dark:bg-white dark:text-black"
              >
                C
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <span
                className="rounded-xl bg-black text-white p-3 text-center
                        dark:bg-white dark:text-black"
              >
                SQL
              </span>
              <span
                className="rounded-xl bg-black text-white p-3 text-center
                        dark:bg-white dark:text-black"
              >
                Postgresql
              </span>
              <span
                className="rounded-xl bg-black text-white p-3 text-center
                        dark:bg-white dark:text-black"
              >
                HTML
              </span>
              <span
                className="rounded-xl bg-black text-white p-3 text-center
                        dark:bg-white dark:text-black"
              >
                CSS
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <span
                className="rounded-xl bg-black text-white p-3 text-center
                        dark:bg-white dark:text-black"
              >
                React
              </span>
              <span
                className="rounded-xl bg-black text-white p-3 text-center
                        dark:bg-white dark:text-black"
              >
                Tailwind CSS
              </span>
              <span
                className="rounded-xl bg-black text-white p-3 text-center
                        dark:bg-white dark:text-black"
              >
                Expressjs
              </span>
              <span
                className="rounded-xl bg-black text-white p-3 text-center
                        dark:bg-white dark:text-black"
              >
                Node.js
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <span
                className="rounded-xl bg-black text-white p-3 text-center
                        dark:bg-white dark:text-black"
              >
                Firebase
              </span>
              <span
                className="rounded-xl bg-black text-white p-3 text-center
                        dark:bg-white dark:text-black"
              >
                MongoDB
              </span>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col items-start justify-start gap-5
            border-b p-5 dark: border-gray-700"
        >
          <h1 className="text-base font-semibold md:text-2xl">
            Personal Projects
          </h1>

          <ul>
            <li className="relative flex flex-col gap-1 border-l p-6">
              <span className="font-semibold md:text-lg">
                HSC Random Tools
              </span>
              <div className="flex items-center justify-start gap-4">
                <div className="flex items-center gap-2">
                  <a href="https://hsc-random-tools.vercel.app/" target="_blank" className="text-blue-500 hover:text-blue-700"> Website </a>
                </div>
                <div className="flex items-center gap-1">
                  <BiLogoGithub className="text-xl" />
                  <a
                    href="https://github.com/MarkQuach12/HSCRandomTools"
                    target="_blank"
                  >
                    {" "}
                    @MarkQuach12
                  </a>
                </div>
              </div>
              <ul className="list-disc text-base text-gray-600 dark:text-gray-400 pl-6">
                <li>
                  Developed HSC Random Tools, a full-stack platform using React, TypeScript and Flask to assist NSW students with HSC
                  planning with 1 000+ historical records for scaled mark prediction and 10 000+ entries for Band 6 performance analysis
                </li>
                <li>
                  Built a raw mark scaler using BeautifulSoup for data scraping and polynomial regression with BIC-based model selection to
                accurately forecast HSC outcomes with 95% accuracy
                </li>
                <li>
                  Designed a responsive UI with ShadCN and Tailwind CSS, integrated with a Flask API, enabling real-time querying
                </li>
              </ul>
            </li>

            <li className="relative flex flex-col gap-1 border-l p-6">
              <span className="font-semibold md:text-lg">CleanSlate</span>
              <div className="flex items-center justify-start gap-2">
                <div className="flex items-center gap-1">
                  <BiLogoGithub className="text-xl" />
                  <a
                    href="https://github.com/MarkQuach12/CleanSlate"
                    target="_blank"
                  >
                    {" "}
                    @MarkQuach12
                  </a>
                </div>
              </div>
              <ul className="list-disc text-base text-gray-600 dark:text-gray-400 pl-6">
                <li>
                  Led a team to develop a team of 5 to develop a full stack MERN
                  application that utilises ReactJS, Tailwind CSS, Tailwind UI,
                  NodeJS and ExpressJS to develop a habit tracking app, which
                  empowers individuals to develop healthier habits.
                </li>
                <li>
                  Designed and developed the frontend using React Routers,
                  Tailwind CSS and Tailwind UI to create a seamless design.
                </li>
                <li>
                  Integrated the OpenAI API to automatically generate daily
                  quotes.
                </li>
              </ul>
            </li>

            <li className="relative flex flex-col gap-1 border-l p-6">
              <span className="font-semibold md:text-lg">Room Directions</span>
              <div className="flex items-center justify-start gap-2">
                <div className="flex items-center gap-1">
                  <BiLogoGithub className="text-xl" />
                  <a
                    href="https://github.com/MarkQuach12/Room-Directions"
                    target="_blank"
                  >
                    {" "}
                    @MarkQuach12
                  </a>
                </div>
              </div>
              <ul className="list-disc text-base text-gray-600 dark:text-gray-400 pl-6">
                <li>
                  Developed a web app in a team of 4 aspiring developers that
                  integrates Google Maps API, allowing users to find specific
                  rooms on the UNSW Sydney Campus by given specific directions.
                </li>
                <li>
                  Developed a web application within a 10-week span, emphasising
                  frameworks such as React, Tailwind CSS and Firebase.
                </li>
                <li>
                  Implemented user authentication, including sign-on and sign-up
                  pages, using Firebase as well as developed the home page.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderLeft;

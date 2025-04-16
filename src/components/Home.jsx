import React from "react";

function Home() {
  return (
    <div
      className="min-h-screen flex-[3] transition-all duration-500 dark:bg-white
		dark:text-black"
    >
      <main
        className="flex max-w-[1000px] flex-col gap-10 p-5
			md: mx-10 md:py-14"
      >
        <div className="space-y-5">
          <h1 className="text-2xl font-bold md:text-4xl">About</h1>
          <div className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
            <p>
              I am a university student with a passion for web development. I have
              experience in building web applications using modern technologies
              such as React, Node.js, and MongoDB. I am always eager to learn new
              technologies and improve my skills. I am currently looking for new
              opportunities to work on exciting projects and grow as a developer.
            </p>
            <p className="mt-5">
              Beyond that, I am also a high school tutor, mentoring and helping high school students
              improve their academic performance. I have a strong background in
              teaching and am passionate about helping others learn and succeed.
            </p>
          </div>
        </div>

        <div className="max-w-3xl space-y-8">
          <h1 className="text-2xl font-bold md:text-4xl"> Experience </h1>
          <div className="space-y-10">
            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                MQ Tutoring Founder
              </h3>
              <h2 className="font-light"> Founder and Head Tutor (June 2023 - Present) </h2>
              <div className="text-base text-gray-600 dark:text-gray-400">
                <li>
                  Coordinated with student's learning needs and tailor lessons accordingly to achieve a 60% band 6 rate (90+%).
                </li>
                <li>
                  Created a supportive environment to help students feel more comfortable and engaged whilst
                  learning Mathematics, which led to an average exam mark increase of 20.
                </li>
              </div>
            </div>

            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                MJ Home Loan (Jun 2021 - Present)
              </h3>
              <h2 className="font-light"> Office Administrator with IT Support </h2>
              <div className="text-base text-gray-600 dark:text-gray-400">
                <li>
                  Handled general administrative duties, including scheduling, document management,
                  and data entry to ensure smooth office operations.
                </li>
                <li>
                  Managed and oversaw the society’s marketing efforts,
                    including campaign planning, digital presence, and outreach,
                    ensuring effective communication with the broader student
                    community, such as successfully marketing Freerooms, and
                    increasing its monthly users by 4x.
                </li>
              </div>
            </div>

            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                Stepping Stone Education
              </h3>
              <h2 className="font-light">
                Mathematics Tutor (Aug 2022 - Dec 2023)
              </h2>
              <div className="text-base text-gray-600 dark:text-gray-400">
                <li>
                  Building positive relationships with academic clients, and leading students to achieve high results in their subjects with above 90 ATARs.
                </li>
                <li>
                  Evaluated the effectiveness of the resources through various
                  assessments and incorporated feedback for continuous improvement.
                </li>
                <li>
                  Implemented strategies to accommodate diverse learning styles and abilities.
                </li>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl space-y-8">
          <h1 className="text-2xl font-bold md:text-4xl"> Extracurricular </h1>
          <div className="space-y-10">
            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                Vice-President of Internals & Welfare Officer
              </h3>
              <h2 className="font-light"> Software Development Society (Oct 2024 - Present) </h2>
              <div className="text-base text-gray-600 dark:text-gray-400">
                <li>
                  Oversee the operations of HR, organizing internal bonding
                  initiatives that engage over 250 internal members, fostering
                  a strong sense of community and collaboration within the
                  society.
                </li>
                <li>
                  Oversee the Training Program's leadership involving
                  overseeing 30 trainees and 20 training leads each term, by
                  providing strategic guidance on the program structure,
                  curriculum development, and operational improvements to
                  enhance trainee and leads learning experience.
                </li>
              </div>
            </div>

            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                Marketing Director
              </h3>
              <h2 className="font-light"> Software Development Society (Nov 2023 - Dec 2024) </h2>
              <div className="text-base text-gray-600 dark:text-gray-400">
                <li>
                  Led a team of 10 marketing subcommittee members, driving
                  collaboration and creative strategy, which successfully
                  promoted events such as Starlight and Techspire which
                  attracted over 150 attendees.
                </li>
                <li>
                  Managed and oversaw the society’s marketing efforts,
                  including campaign planning, digital presence, and outreach,
                  ensuring effective communication with the broader student
                  community, such as successfully marketing Freerooms, and
                  increasing its monthly users by 4x.
                </li>
              </div>
            </div>

            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                Youth Advisor
              </h3>
              <h2 className="font-light">
                Fairfield Council Youth Adivsory Committee (Jun 2021 - Jun 2023)
              </h2>
              <div className="text-base text-gray-600 dark:text-gray-400">
                <li>
                  Advocated for and empowered youth voices in local
                  communities by organizing discussion forums on prevalent
                  social issues (e.g. COVID in Fairfield, poor teen mental
                  health)
                </li>
                <li>
                  Coordinated local events dedicated to empowering and
                  providing a social outlet for socioeconomic minorities,
                  including the 'Bring it On' festival, which attracted over
                  4,000 attendees.
                </li>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;

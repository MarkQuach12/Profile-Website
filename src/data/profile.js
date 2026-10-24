export const profile = {
  name: "Mark Quach",
  icon: "🌊",
  subtitle:
    "Computer Science & Commerce student at UNSW · Founder of MQ Tutoring · Sydney, Australia",
  location: "Sydney, Australia",
  email: "mark.quach1324@gmail.com",
  github: { handle: "@MarkQuach12", url: "https://github.com/MarkQuach12" },
  linkedin: { url: "https://www.linkedin.com/in/mark-quach-4570362a0/" },
  focus: [
    { label: "Web development", color: "blue" },
    { label: "Education", color: "purple" },
    { label: "Finance", color: "yellow" },
  ],
};

export const sections = [
  { id: "about", emoji: "👋", label: "About" },
  { id: "projects", emoji: "🗂️", label: "Projects" },
  { id: "experience", emoji: "💼", label: "Experience" },
  { id: "extracurricular", emoji: "🤝", label: "Extracurricular" },
  { id: "education", emoji: "🎓", label: "Education" },
  { id: "skills", emoji: "🧰", label: "Skills" },
  { id: "writing", emoji: "✍️", label: "Writing" },
  { id: "contact", emoji: "✉️", label: "Contact" },
];

export const about = {
  callout:
    "I'm a university student who loves building for the web, and a high school tutor who loves helping people learn.",
  paragraphs: [
    "I build web applications with modern tools like React, Node.js and MongoDB, and I'm always keen to pick up new technologies and sharpen my skills. I'm currently looking for opportunities to work on exciting projects and grow as a developer.",
    "Beyond code, I mentor high school students to improve their academic performance. I have a strong background in teaching and I'm passionate about helping others learn and succeed.",
  ],
};

export const projects = [
  {
    title: "HSC Random Tools",
    emoji: "📈",
    art: "chart",
    description:
      "A full-stack platform helping NSW students plan for the HSC with scaled-mark prediction and Band 6 analysis.",
    tags: [
      { label: "React", color: "blue" },
      { label: "TypeScript", color: "purple" },
      { label: "Flask", color: "gray" },
    ],
    links: [
      { label: "Website", url: "https://hsc-random-tools.vercel.app/" },
      { label: "GitHub", url: "https://github.com/MarkQuach12/HSCRandomTools" },
    ],
    highlights: [
      "Built with React, TypeScript and Flask, with 1,000+ historical records for scaled mark prediction and 10,000+ entries for Band 6 performance analysis.",
      "Raw mark scaler using BeautifulSoup for data scraping and polynomial regression with BIC-based model selection, forecasting HSC outcomes with 95% accuracy.",
      "Responsive UI with shadcn/ui and Tailwind CSS, integrated with a Flask API for real-time querying.",
    ],
  },
  {
    title: "CleanSlate",
    emoji: "✅",
    art: "habits",
    description:
      "A MERN habit-tracking app that helps people build healthier habits, with AI-generated daily quotes.",
    tags: [
      { label: "MERN", color: "blue" },
      { label: "OpenAI", color: "purple" },
      { label: "Team lead", color: "yellow" },
    ],
    links: [{ label: "GitHub", url: "https://github.com/MarkQuach12/CleanSlate" }],
    highlights: [
      "Led a team of 5 building a full-stack MERN app with React, Tailwind CSS, Tailwind UI, Node.js and Express.",
      "Designed and built the frontend with React Router, Tailwind CSS and Tailwind UI.",
      "Integrated the OpenAI API to generate a daily quote.",
    ],
  },
  {
    title: "Room Directions",
    emoji: "🧭",
    art: "map",
    description:
      "A web app that gives step-by-step directions to specific rooms on the UNSW Sydney campus.",
    tags: [
      { label: "React", color: "blue" },
      { label: "Firebase", color: "orange" },
      { label: "Google Maps", color: "green" },
    ],
    links: [{ label: "GitHub", url: "https://github.com/MarkQuach12/Room-Directions" }],
    highlights: [
      "Built in a team of 4 over 10 weeks with React, Tailwind CSS and Firebase, integrating the Google Maps API.",
      "Implemented sign-in and sign-up with Firebase Authentication, and built the home page.",
    ],
  },
  {
    title: "This website",
    emoji: "🌊",
    art: "page",
    description:
      "A calm, block-based personal site with light and dark themes and writing synced from Notion.",
    tags: [
      { label: "React", color: "blue" },
      { label: "Vite", color: "purple" },
      { label: "Notion API", color: "gray" },
    ],
    links: [{ label: "GitHub", url: "https://github.com/MarkQuach12/Profile-Website" }],
    highlights: [],
  },
];

export const experience = [
  {
    role: "Founder & Head Tutor",
    org: "MQ Tutoring",
    years: "Jun 2023 – now",
    tags: [
      { label: "Education", color: "purple" },
      { label: "Leadership", color: "blue" },
    ],
    highlights: [
      "Tailor lessons to each student's learning needs, achieving a 60% Band 6 rate (90+%).",
      "Created a supportive environment that keeps students engaged in Mathematics, leading to an average exam mark increase of 20.",
    ],
  },
  {
    role: "Mathematics Tutor",
    org: "Stepping Stone Education",
    years: "Aug 2022 – Dec 2023",
    tags: [{ label: "Education", color: "purple" }],
    highlights: [
      "Built positive relationships with students and led them to strong results, with ATARs above 90.",
      "Evaluated teaching resources through assessments and incorporated feedback for continuous improvement.",
      "Adapted strategies to diverse learning styles and abilities.",
    ],
  },
  {
    role: "Office Administrator & IT Support",
    org: "MJ Home Loan",
    years: "Jun 2021 – now",
    tags: [
      { label: "Operations", color: "gray" },
      { label: "IT", color: "blue" },
    ],
    highlights: [
      "Handle scheduling, document management and data entry to keep the office running smoothly.",
    ],
  },
];

export const extracurricular = [
  {
    role: "Vice-President of Internals & Welfare Officer",
    org: "Software Development Society",
    years: "Oct 2024 – now",
    tags: [
      { label: "Leadership", color: "blue" },
      { label: "Community", color: "pink" },
    ],
    highlights: [
      "Oversee HR operations and internal bonding initiatives for 250+ internal members.",
      "Guide the Training Program's 30 trainees and 20 training leads each term, shaping its structure, curriculum and operations.",
    ],
  },
  {
    role: "Marketing Director",
    org: "Software Development Society",
    years: "Nov 2023 – Dec 2024",
    tags: [{ label: "Marketing", color: "orange" }],
    highlights: [
      "Led a 10-person marketing subcommittee, promoting events such as Starlight and Techspire to 150+ attendees.",
      "Ran campaign planning, digital presence and outreach, including marketing Freerooms and growing its monthly users 4x.",
    ],
  },
  {
    role: "Youth Advisor",
    org: "Fairfield Council Youth Advisory Committee",
    years: "Jun 2021 – Jun 2023",
    tags: [{ label: "Community", color: "pink" }],
    highlights: [
      "Organised forums on social issues affecting local youth, such as COVID in Fairfield and teen mental health.",
      "Coordinated community events including the 'Bring it On' festival, which attracted over 4,000 attendees.",
    ],
  },
];

export const education = [
  {
    role: "Computer Science and Commerce (Finance)",
    org: "University of New South Wales",
    years: "2022 – now",
    tags: [{ label: "University", color: "blue" }],
  },
  {
    role: "Higher School Certificate",
    org: "Prairiewood High School",
    years: "2016 – 2021",
    tags: [{ label: "Top 1% of NSW", color: "yellow" }],
  },
];

export const skills = [
  { group: "Languages", color: "blue", items: ["JavaScript", "TypeScript", "Python", "Java", "C", "SQL", "HTML", "CSS"] },
  { group: "Frameworks", color: "purple", items: ["React", "Node.js", "Express.js", "Flask", "Tailwind CSS"] },
  { group: "Data", color: "yellow", items: ["PostgreSQL", "MongoDB", "Firebase"] },
];

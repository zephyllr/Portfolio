export const ABOUT = "About";
export const EDUCATION = "Education";
export const SKILLS = "Skills";
export const EXPERIENCES = "Experience";
export const PROJECTS = "Projects";
export const GAME_DESIGNS = "Game Designs";

export const PORTFOLIO_DATA = [
  ABOUT,
  EDUCATION,
  SKILLS,
  EXPERIENCES,
  PROJECTS,
  GAME_DESIGNS,
];

export const PERSONAL_DATA = {
  first_name: "Alice",
  last_name: "Lu",
  email: "alice.lu@nyu.edu",
  role: "Software Engineer",
  github: "https://github.com/zephyllr",
  linkedin: "https://www.linkedin.com/in/alice-lu",
  weebly: "https://zephyllr.weebly.com",
};

export const EDUCATION_DATA = {
  id: EDUCATION,
  institution: "New York University",
  college: "Courant Institute of Mathematical Sciences",
  degree: "B.A. in Computer Science, Minor in Mathematics",
  graduation: "Sep 2016 - Dec 2019",
  courses: [
    "Data Structures",
    "Computer Systems Organization",
    "Basic Algorithms",
    "Operating Systems",
    "Discrete Mathematics",
    "Data Analysis",
    "Linear Algebra",

    "Parallel Computing",
    "Computer Networking",
    "Algorithmic Problem Solving",
    "Applied Internet Technology",
    "Intro to Engineering and Design",
    "Database Design and Web Implementation",
  ],
};

export const EXPERIENCES_DATA = [
  {
    company: "Oscar Health",
    role: "Software Engineer",
    dept: "Indivual Family Plan",
    date: "Mar 2020 - Present",
  },
  {
    company: "Microsoft",
    role: "Software Engineer Intern",
    dept: "Azure",
    date: "Jun 2019 - Aug 2019",
  },
  {
    company: "NYU Stern School of Business",
    role: "Full Stack Web Developer",
    dept: "IT Enterprise Operations and Solutions",
    date: "Sep 2016 - May 2019",
  },
  {
    company: "Bank of America Merrill Lynch",
    role: "Summer Technology Analyst",
    dept: "Credit Risk Technology",
    date: "Jun 2018 - Aug 2018",
  },
  {
    company: "NYU Tandon School of Engineering",
    role: "General Engineering Teaching Assistant",
    dept: "EG1003 Intro to Engineering and Design",
    date: "Jul 2017 - Dec 2017",
  },
];

export const GAME_DESIGNS_DATA = [
  {
    name: "Element Hockey",
    img_dir: "img/gameDesigns/elementHockey",
    file_count: 4,
    url: "https://apps.apple.com/us/app/element-hockey/id1175892583",
  },
  {
    name: "Color Drift",
    img_dir: "img/gameDesigns/colorDrift",
    file_count: 3,
    url: "https://apps.apple.com/us/app/color-drift/id1139572518",
  },
];

export const PROJECTS_DATA = [
  {
    name: "QR Portfolio",
    description:
      "Create and build your own online business card portfolio with QR codes",
    link: "https://github.com/zephyllr/QR-Portfolio",
    icons: ["mongodb", "express", "react", "nodejs", "javascript", "bootstrap"],
  },
  {
    name: "Google Code-U Chat App",
    description:
      "Instant messenger with features including admin dashboard, user profiles, mentions",
    link: "https://github.com/ZetongJia/CodeU-Spring-2018",
    icons: ["java"],
  },
  {
    name: "Instant Messenger",
    description:
      "Web multi-client instant messenger with public and private channels",
    link: "https://github.com/Tnek/Instant-Messenger",
    icons: ["python", "javascript", "bootstrap"],
  },
  {
    name: "IRMA: Instant Relief and Medical Attention App",
    description:
      "App that crowdsources first responders in case of emergencies via SMS and online",
    link: "https://github.com/zephyllr/IRMA",
    icons: ["python", "javascript", "bootstrap", "google", "mongodb"],
  },
  {
    name: "NYU ACM-Women's Chapter Website",
    description: "",
    link: "https://zephyllr.github.io/acmw_web/",
    icons: ["html5", "css3", "bootstrap"],
  },
  {
    name: "More Apps @Github",
    description: "",
    link: "https://github.com/zephyllr",
    icons: [],
  },
];

export const SKILLS_DATA = [
  {
    category_name: "Programming Languages",
    skill_set: ["python", "java", "javascript", "c"],
  },
  {
    category_name: "Web Technologies & Tools",
    skill_set: [
      "html5",
      "css3",
      "bootstrap",
      "mysql",
      "mongodb",
      "react",
      "django",
      "git",
      "docker",
    ],
  },
  { category_name: "Design Tools", skill_set: ["photoshop", "illustrator"] },
];

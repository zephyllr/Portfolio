export const ABOUT = "About";
export const EDUCATION = "Education";
export const SKILLS = "Skills";
export const EXPERIENCES = "Experience";
export const PROJECTS = "Projects";
export const GAME_DESIGNS = "Game Designs";

export const PORTFOLIO_DATA = [
  ABOUT,
  EXPERIENCES,
  EDUCATION,
  SKILLS,
  PROJECTS,
  GAME_DESIGNS,
];

export const PERSONAL_DATA = {
  firstName: "Alice",
  lastName: "Lu",
  email: "alice.lu@nyu.edu",
  role: "Software Engineer",
  github: "https://github.com/zephyllr",
  linkedin: "https://www.linkedin.com/in/alice-lu",
  weebly: "https://zephyllr.weebly.com",
};

export const EDUCATION_DATA = {
  institution: "New York University",
  college: "Courant Institute of Mathematical Sciences",
  degree: "B.A. in Computer Science, Minor in Mathematics",
  graduation: "Sep 2016 - Dec 2019",
  honors: "Cum Laude, University Honors Scholar",
  courses: [
    "Data Structures",
    "Computer Systems Organization",
    "Basic Algorithms",
    "Operating Systems",
    "Discrete Mathematics",
    "Data Analysis",
    "Linear Algebra",
    "Intro to Engineering and Design",

    "Algorithmic Problem Solving",
    "Applied Internet Technology",
    "Computer Networking",
    "Database Design and Web Implementation",
    "Large Scale Web Applications",
    "Parallel Computing",
    "Programming Languages",
    "Social Networking",
  ],
  logo: "img/experiences/nyu.png",
};

export const EXPERIENCES_DATA = [
  {
    company: "Oscar Health",
    role: "Software Engineer",
    dept: "Indivual Family Plan",
    date: "Mar 2020 - Present",
    logo: "img/experiences/oscar.png",
  },
  {
    company: "Microsoft",
    role: "Software Engineer Intern",
    dept: "Azure",
    date: "Jun 2019 - Aug 2019",
    logo: "img/experiences/microsoft.png",
  },
  {
    company: "NYU Stern School of Business",
    role: "Full Stack Web Developer",
    dept: "IT Enterprise Operations and Solutions",
    date: "Sep 2016 - May 2019",
    logo: "img/experiences/nyu.png",
  },
  {
    company: "Bank of America Merrill Lynch",
    role: "Summer Technology Analyst",
    dept: "Credit Risk Technology",
    date: "Jun 2018 - Aug 2018",
    logo: "img/experiences/boa.png",
  },
  {
    company: "NYU Tandon School of Engineering",
    role: "General Engineering Teaching Assistant",
    dept: "EG1003 Intro to Engineering and Design",
    date: "Jul 2017 - Dec 2017",
    logo: "img/experiences/nyu.png",
  },
];

export const GAME_DESIGNS_DATA = [
  {
    name: "Element Hockey",
    imgDir: "img/gameDesigns/elementHockey",
    fileCount: 4,
    url: "https://apps.apple.com/us/app/element-hockey/id1175892583",
  },
  {
    name: "Color Drift",
    imgDir: "img/gameDesigns/colorDrift",
    fileCount: 3,
    url: "https://apps.apple.com/us/app/color-drift/id1139572518",
  },
];

export const PROJECTS_DATA = [
  {
    name: "Twitter Sentiment Analysis",
    description:
      "A real-time data visualization subscription for twitter sentiment analysis",
    link: "https://github.com/zephyllr/twitter-sentiment-analysis",
    icons: ["python", "django", "mongodb", "docker"],
  },
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
    name: "IRMA: Instant Relief and Medical Attention",
    description:
      "App that crowdsources first responders in case of emergencies via SMS and online",
    link: "https://github.com/zephyllr/IRMA",
    icons: ["python", "javascript", "bootstrap", "google", "mongodb"],
  },
  {
    name: "NYU ACM-Women's Chapter Website",
    description: "",
    link: "https://zephyllr.github.io/acmwWeb/",
    icons: ["html5", "css3", "bootstrap"],
  },
  {
    name: "More Projects @Github",
    description: "",
    link: "https://github.com/zephyllr",
    icons: [],
  },
];

export const SKILLS_DATA = [
  {
    categoryName: "Programming Languages",
    skillSet: ["python", "javascript", "java"],
  },
  {
    categoryName: "Web Technologies & Tools",
    skillSet: [
      "html5",
      "css3",
      "sass",
      "bootstrap",
      "react",
      "django",
      "mysql",
      "mongodb",
      "git",
      "docker",
    ],
  },
  { categoryName: "Design Tools", skillSet: ["photoshop", "illustrator"] },
];

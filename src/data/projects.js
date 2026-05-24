import pollAppImage from "../assests/projectImages/poll-app.png";
import movieAppImage from "../assests/projectImages/movie-app.png";
import churchAppImage from "../assests/projectImages/church-app.png";
import todoAppImage from "../assests/projectImages/todo-app.png";
import contactAppImage from "../assests/projectImages/contact-app.png";
import countriesAppImage from "../assests/projectImages/country-app.png";
import calculatorAppImage from "../assests/projectImages/calculator-app.png";
import numberFactAppImage from "../assests/projectImages/number-fact-app.png";
import aiPodcastImage from "../assests/projectImages/ai-podcast.png";
import aiNewsGeneratorImage from "../assests/projectImages/ai-newsGenerator.png";
import aiLearningPathImage from "../assests/projectImages/ai-learningPath.png";

export const projectCategories = [
  "All",
  "Fullstack",
  "React",
  "HTML & CSS",
  "AI Automation & LLM's",
  "Typescript",
];

export const allProjects = [
  {
    title: "AskIt - Polling Platform",
    screenshot: pollAppImage,
    description:
      "Interactive polling platform that allows users to create, manage, and participate in polls with dynamic vote tracking and analytics.",
    points: [
      "Developed using the MERN stack with responsive and user-friendly interfaces",
      "Integrated MongoDB for storing and managing poll, vote, and user-related data",
    ],

    techUsed: ["React", "Node.js", "MongoDB", "Express.js"],

    category: "Fullstack",

    featured: true,

    liveLink: "https://askit-ashy.vercel.app/",
  },

  {
    title: "Church Management Web Application",
    screenshot: churchAppImage,
    description:
      "Full-stack church management application designed to digitize and simplify the management of member records, attendance, finances, and church equipment.",
    points: [
      "Built secure authentication and data management features using the MERN stack",
      "Developed modules for member management, attendance tracking, finance records, and equipment monitoring",
    ],

    techUsed: ["React", "Node.js", "MongoDB", "Express.js"],

    category: "Fullstack",

    featured: true,

    liveLink: "https://lwag-frontend-6vos.vercel.app/",
  },

  {
    title: "Movie Discovery App",

    screenshot: movieAppImage,

    description:
      "Interactive movie application with API integrations and responsive browsing experience.",

    points: [
      "Integrated third-party APIs and dynamic routing",
      "Optimized responsive UI rendering",
    ],

    techUsed: ["React", "REST APIs", "CSS"],

    category: "React",

    featured: true,

    liveLink: "https://movie-app-ggql.vercel.app/",
  },

  {
    title: "Contact Manager Application",

    screenshot: contactAppImage,

    description:
      "Responsive contact management web application that enables users to organize, store, and manage personal contacts with persistent local storage support.",

    points: [
      "Developed a component-based React application with add and delete contact functionalities",
      "Implemented browser local storage integration to persist contact data without backend services",
    ],

    techUsed: ["React.js", "JavaScript", "CSS", "Local Storage"],

    category: "React",

    featured: false,

    liveLink: "https://contact-manager-app-phi.vercel.app/",
  },

  {
    title: "AI Podcast Generator",
    screenshot: aiPodcastImage,
    description:
      "AI-powered podcast generation platform that automates script creation and voice synthesis from user-provided topics using workflow automation and LLM technologies.",
    points: [
      "Built an automated n8n workflow integrating Gemini LLM and Murf.ai for podcast script and voice generation",
      "Developed a frontend interface using Lovable AI to collect topics and deliver AI-generated podcast audio dynamically",
    ],

    techUsed: ["n8n", "Gen AI Tools", "Automation", "API"],

    category: "AI Automation & LLM's",

    featured: true,

    liveLink: "https://bubbly-audio-box.lovable.app/",
  },

  {
    title: "Personal AI News Generator Agent",

    screenshot: aiNewsGeneratorImage,

    description:
      "Automated AI news aggregation agent that collects, summarizes, and delivers daily AI and technology updates using workflow automation and LLM-powered content processing.",

    points: [
      "Built an automated n8n workflow integrating RSS feeds, SERP API, and Gemini LLM for intelligent news aggregation and summarization",
      "Developed a scheduled email delivery system that sends curated AI news, tech updates, and upcoming AI events daily",
    ],

    techUsed: [
      "n8n",
      "Gen AI Tools",
      "API",
      "RSS Feeds",
      "Automation",
      "Email Integration",
    ],

    category: "AI Automation & LLM's",

    featured: false,

    liveLink:
      "https://github.com/Steffenkishore/Personal-AI-Tech-News-Email-Generator-using-n8n",
  },

  {
    title: "Personal Learning AI Agent",

    screenshot: aiLearningPathImage,

    description:
      "AI-powered personal learning assistant built using n8n automation workflows that generates customized learning paths, creates structured study documents, and schedules learning tasks automatically.",

    points: [
      "Integrated Gemini LLM with n8n workflows to generate personalized learning roadmaps based on user-input topics",
      "Automated Google Docs and Google Calendar integration to create study materials and schedule learning events dynamically",
    ],

    techUsed: [
      "n8n",
      "Gen AI Tools",
      "API",
      "Automation",
      "AI Agents",
      "Google Docs & Calender Integration",
    ],

    category: "AI Automation & LLM's",

    featured: false,

    liveLink:
      "https://github.com/Steffenkishore/Personal-Learning-Path-Generator-using-n8n",
  },

  {
    title: "Todo Task Management App",

    screenshot: todoAppImage,

    description:
      "Responsive task management web application that helps users organize daily activities with persistent local storage support.",

    points: [
      "Developed task creation, update, and deletion functionalities using JavaScript and Bootstrap",
      "Implemented browser local storage to persist user tasks without requiring a backend database",
    ],

    techUsed: ["HTML", "CSS", "JavaScript", "Bootstrap", "Local Storage"],

    category: "HTML & CSS",

    featured: false,

    liveLink: "https://steffenkishore.github.io/Todo_App/",
  },

  {
    title: "Numbers Fun Fact Website",

    screenshot: numberFactAppImage,

    description:
      "Interactive web application that generates interesting and educational facts for numbers using a public API and dynamic user input handling.",

    points: [
      "Integrated a pre-built Numbers API provided by NxtWave to fetch real-time facts for user-entered numbers",
      "Designed a responsive and engaging user interface using HTML, CSS, JavaScript, and Bootstrap",
    ],

    techUsed: ["HTML", "CSS", "JavaScript", "Bootstrap"],

    category: "HTML & CSS",

    featured: false,

    liveLink: "https://numberfunfact.ccbp.tech/",
  },

  {
    title: "Countries Population Explorer",

    screenshot: countriesAppImage,

    description:
      "Interactive web application that displays country population data using an external API provided by NxtWave.",

    points: [
      "Integrated an API to retrieve and display country population data dynamically",
      "Built a responsive user interface for exploring country populations using JavaScript and Bootstrap",
    ],

    techUsed: ["HTML", "CSS", "JavaScript", "Bootstrap"],

    category: "HTML & CSS",

    featured: false,

    liveLink: "https://popofcountries.ccbp.tech",
  },

  {
    title: "Calculator Web Application",

    screenshot: calculatorAppImage,

    description:
      "Interactive calculator web application designed to perform basic arithmetic operations with a clean user interface.",

    points: [
      "Implemented arithmetic functionalities including addition, subtraction, multiplication, division, and modulus operations using JavaScript",
      "Built a calculator interface with input validation and dynamic display handling",
    ],

    techUsed: ["HTML", "CSS", "JavaScript"],

    category: "HTML & CSS",

    featured: false,

    liveLink: "https://steffenkishore.github.io/calculator/",
  },
];

export const featuredProjects = allProjects.filter(
  (project) => project.featured,
);
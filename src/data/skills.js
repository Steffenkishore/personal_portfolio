import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";

import {
  SiJavascript,
  SiPython,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiRender,
  SiVercel,
  SiN8N,
  SiTypescript,
} from "react-icons/si";

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Bootstrap", icon: FaBootstrap },
    ],
  },

  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
    ],
  },

  {
    category: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
      { name: "Java", icon: FaJava },
    ],
  },

  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },

  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Render", icon: SiRender },
      { name: "Vercel", icon: SiVercel },
      { name: "n8n", icon: SiN8N },
    ],
  },

  {
    category: "Currently Learning",
    isLearning: true,

    skills: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "LLMs", icon: SiPython },
    ],
  },
];

// src/components/Projects.jsx
import React from "react";

const projects = [
  {
    title: "Church Management Desktop Web App",
    date: "February 2026",
    description:
      "Built a full-stack Church Management System to digitize and centralize church operations.",
    tech: "React.js, Node.js, Express.js, MongoDB",
    points: [
      "Implemented modules for managing members, equipment, finance, attendance, and other church operations. ",
      "Solved the challenge of managing church operations manually by digitizing data into a centralized system ",
    ],
    link: "https://lwag-frontend-6vos.vercel.app/",
  },
  {
    title: "AskIt - Live Polling Web App",
    date: "September 2025",
    description:
      "Real-time polling platform to create, share, and participate in live polls with instant visual analytics.",
    tech: "MERN Stack",
    points: [
      "Built a MERN stack web app with live result updates, secure multi-user access, and customizable polling interfaces.",
      "Integrated data visualization to convert responses into real-time insights for smarter decision-making.",
    ],
    link: "https://askit-ashy.vercel.app/",
  },
  {
    title: "Live Movie Explorer App",
    date: "May 2025",
    description:
      "Dynamic movie listing app that displays real-time popular movies and lets users manage a favorites list.",
    tech: "React.js, JavaScript, HTML, CSS",
    points: [
      "Fetched and rendered live movie data using API integration with structured React components.",
      "Enabled users to view details, manage favorites, and navigate to official movie pages via clickable cards.",
    ],
    link: "https://movie-app-ggql.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.title}
            className="card project-card project-card-color"
          >
            <h3>{project.title}</h3>
            <p className="card-subtitle">
              {project.date} • {project.tech}
            </p>
            <p>{project.description}</p>
            <ul className="card-list">
              {project.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Live Demo →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


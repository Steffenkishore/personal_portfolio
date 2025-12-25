// src/components/Projects.jsx
import React from "react";

const projects = [
  {
    title: "Live Polling Web App",
    date: "September 2025",
    description:
      "Real-time polling platform to create, share, and participate in live polls with instant visual analytics.",
    tech: "MERN Stack",
    points: [
      "Built a MERN stack web app with live result updates, secure multi-user access, and customizable polling interfaces.",
      "Integrated data visualization to convert responses into real-time insights for smarter decision-making.",
    ],
    link: "https://poll-app-client.onrender.com",
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
    link: "https://steffenkishore.github.io/movie-app",
  },
  {
    title: "Smart To-Do List Web App",
    date: "January 2025",
    description:
      "Task management web app that helps users organize and track daily activities with persistence across sessions.",
    tech: "HTML, CSS, JavaScript, Bootstrap",
    points: [
      "Implemented task creation, update, delete, and strike-through functionalities with an intuitive UI.",
      "Used browser local storage to retain tasks even after page refresh.",
    ],
    link: "https://steffenkishore.github.io/Todo_App",
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


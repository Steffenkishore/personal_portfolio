/**
 * All Projects page component.
 * Displays complete project collection
 * with category filtering.
 */

import "./AllProjects.css";

import { useMemo, useState } from "react";

import { motion } from "framer-motion";

import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";

import { allProjects, projectCategories } from "../../data/projects";

function AllProjects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return allProjects;
    }

    return allProjects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="all-projects">
      <div className="section-container">
        {/* TOP */}
        <motion.div
          className="all-projects__top"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <div>
            <h1 className="all-projects__heading">All Projects</h1>

            <p className="all-projects__description">
              A complete collection of projects exploring full-stack
              development, automation, scalable UI engineering, and interactive
              web experiences.
            </p>
          </div>

          <a href="/" className="all-projects__back-button">
            <FaArrowLeft />
            Go Back
          </a>
        </motion.div>

        {/* TABS */}
        <div className="all-projects__tabs">
          {projectCategories.map((category) => (
            <button
              key={category}
              className={`all-projects__tab ${
                activeCategory === category ? "all-projects__tab--active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="all-projects__grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="all-projects__card"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
            >
              {/* IMAGE */}
              <div className="all-projects__image-wrapper">
                <img
                  src={project.screenshot}
                  alt={project.title}
                  className="all-projects__image"
                />
              </div>

              {/* CONTENT */}
              <div className="all-projects__content">
                <h3 className="all-projects__card-title">{project.title}</h3>

                <p className="all-projects__card-description">
                  {project.description}
                </p>

                <div className="all-projects__points">
                  {project.points.map((point) => (
                    <div className="all-projects__point" key={point}>
                      <span className="all-projects__point-marker"></span>

                      <p>{point}</p>
                    </div>
                  ))}
                </div>

                {/* TECH STACK */}
                <div className="all-projects__tech-stack">
                  {project.techUsed.map((tech) => (
                    <span key={tech} className="all-projects__tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="all-projects__live-link"
                >
                  Live Preview
                  <FaExternalLinkAlt />
                </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllProjects;

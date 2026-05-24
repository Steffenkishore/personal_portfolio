/**
 * Featured Projects section component.
 * Displays selected portfolio projects
 * with cinematic cards and live project links.
 */

import "./projects.css";

import { motion } from "framer-motion";

import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

import { featuredProjects } from "../../data/projects";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-container">
        {/* HEADER */}
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="projects__heading-content">
            <p className="projects__subtitle">Featured Work</p>

            <h2 className="projects__title">
              Selected projects that showcase real-world engineering and product
              thinking.
            </h2>

            <p className="projects__description">
              A curated collection of projects focused on scalable architecture,
              interactive user experiences, and practical problem-solving.
            </p>
          </div>

          <motion.a
            href="/projects"
            className="projects__view-all"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.96 }}
          >
            View All Projects
            <FaArrowRight />
          </motion.a>
        </motion.div>

        {/* PROJECTS */}
        <div className="projects__grid">
          {featuredProjects.map((project, index) => (
            <motion.div
              className="projects__card"
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
            >
              {/* IMAGE */}
              <div className="projects__image-wrapper">
                <img
                  src={project.screenshot}
                  alt={project.title}
                  className="projects__image"
                />
              </div>

              {/* CONTENT */}
              <div className="projects__content">
                <h3 className="projects__card-title">{project.title}</h3>

                <p className="projects__card-description">
                  {project.description}
                </p>

                <div className="projects__points">
                  {project.points.map((point) => (
                    <div className="projects__point" key={point}>
                      <span className="projects__point-marker"></span>

                      <p>{point}</p>
                    </div>
                  ))}
                </div>

                {project.liveLink && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="projects__live-link"
                    whileHover={{ y: -3 }}
                  >
                    Live Preview
                    <FaExternalLinkAlt />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

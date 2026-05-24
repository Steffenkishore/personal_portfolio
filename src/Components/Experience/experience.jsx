/**
 * Experience section component.
 * Displays internship journey using
 * cinematic alternating timeline cards.
 */

import "./experience.css";

import { motion } from "framer-motion";

import { experienceData } from "../../data/experience";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="section-container">
        {/* HEADER */}
        <motion.div
          className="experience__header"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="experience__subtitle">Experience</p>

          <h2 className="experience__title">
            Real-world engineering experience through embedded systems and IoT
            development.
          </h2>

          <p className="experience__description">
            Hands-on internship experiences focused on embedded systems,
            microcontroller programming, hardware integration, and practical IoT
            solution development.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="experience__timeline">
          {experienceData.map((experience, index) => (
            <motion.div
              className="experience__item"
              key={experience.company}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
            >
              <div className="experience__dot"></div>

              {/* META */}
              <div className="experience__meta">
                <span className="experience__period">{experience.period}</span>

                <h3 className="experience__company">{experience.company}</h3>

                <p className="experience__role">{experience.role}</p>

                <p className="experience__location">{experience.location}</p>
              </div>

              {/* CARD */}
              <motion.div
                className="experience__card"
                whileHover={{ y: -8 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                }}
              >
                <p className="experience__card-description">
                  {experience.description}
                </p>

                <div className="experience__highlights">
                  {experience.highlights.map((highlight) => (
                    <div className="experience__highlight" key={highlight}>
                      <span className="experience__highlight-marker"></span>

                      <p>{highlight}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

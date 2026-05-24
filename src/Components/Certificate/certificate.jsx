/**
 * Learning section component.
 * Displays certifications, courses,
 * and technical learning journey.
 */

import "./certificates.css";

import { motion } from "framer-motion";

import { certificates, courseJourney } from "../../data/certificates";

function Certificates() {
  return (
    <section className="learning" id="learning">
      <div className="section-container">
        {/* HEADER */}
        <motion.div
          className="learning__header"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="learning__subtitle">Certifications & Learning</p>

          <h2 className="learning__title">
            Continuous learning through hands-on development and technical
            exploration.
          </h2>

          <p className="learning__description">
            Building strong engineering foundations through real-world projects,
            structured learning programs, certifications, and problem-solving
            practice.
          </p>
        </motion.div>

        {/* LAYOUT */}
        <div className="learning__layout">
          {/* COURSE */}
          <motion.div
            className="learning__course-card"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="learning__course-glow"></div>

            <span className="learning__course-provider">
              {courseJourney.provider}
            </span>

            <h3 className="learning__course-title">{courseJourney.title}</h3>

            <p className="learning__course-duration">
              {courseJourney.duration}
            </p>

            <p className="learning__course-description">
              {courseJourney.description}
            </p>

            {/* TECH */}
            <span className="learning__section-label">
              Technologies Explored
            </span>

            <div className="learning__technologies">
              {courseJourney.technologies.map((technology) => (
                <span key={technology} className="learning__technology">
                  {technology}
                </span>
              ))}
            </div>

            {/* ACHIEVEMENTS */}
            <span className="learning__section-label">Learning Highlights</span>

            <div className="learning__achievements">
              {courseJourney.achievements.map((achievement) => (
                <div key={achievement} className="learning__achievement">
                  <span className="learning__achievement-marker"></span>

                  <p>{achievement}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CERTIFICATES */}
          <div className="learning__certificates">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.title}
                className="learning__certificate-card"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
              >
                <span className="learning__certificate-date">
                  {certificate.date}
                </span>

                <h3 className="learning__certificate-title">
                  {certificate.title}
                </h3>

                <p className="learning__certificate-provider">
                  {certificate.provider}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;

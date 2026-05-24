/**
 * Creative Education section.
 * Displays academic journey using a futuristic
 * dashboard-inspired grid layout.
 */

import "./education.css";
import { motion } from "framer-motion";

function Education() {
  return (
    <section className="education" id="education">
      <div className="education__gradient-orb"></div>

      <div className="education__container section-container">
        {/* HEADER */}
        <motion.div
          className="education__header"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          
        >
          <p className="education__subtitle">Academic Journey</p>

          <h2 className="education__title">
            Engineering curiosity into scalable digital solutions.
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="education__grid">
          {/* MAIN CARD */}
          <motion.div
            className="education__main-card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -10 }}
          >
            <div className="education__beam"></div>

            <span className="education__tag">Bachelor of Engineering</span>

            <h3 className="education__college">
              St. Joseph’s College of Engineering
            </h3>

            <p className="education__branch">
              Electronics & Communication Engineering
            </p>

            <p className="education__description">
              Building a strong foundation in communication systems,
              problem-solving, software engineering, and modern
              technology-driven innovation.
            </p>

            <div className="education__footer">
              <div>
                <span className="education__label">Duration</span>

                <p className="education__value">2022 — 2026</p>
              </div>

              <div>
                <span className="education__label">Location</span>

                <p className="education__value">Chennai, India</p>
              </div>
            </div>
          </motion.div>

          {/* CGPA CARD */}
          <motion.div
            className="education__metric-card education__metric-card--large"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <span className="education__metric-label">Current CGPA</span>

            <h3 className="education__metric-number">8.32</h3>

            <div className="education__metric-glow"></div>
          </motion.div>

          
        </div>
      </div>
    </section>
  );
}

export default Education;

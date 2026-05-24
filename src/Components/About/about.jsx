/**
 * About section component.
 * Displays developer introduction, experience highlights,
 * and animated information cards.
 */

import "./about.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container section-container">
        {/* LEFT CONTENT */}
        <motion.div
          className="about__content"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="about__subtitle">About Me</p>

          <h2 className="about__title">
            Crafting scalable web experiences with modern technologies.
          </h2>

          <p className="about__description">
            I am an engineering graduate and aspiring software developer
            passionate about creating modern, scalable, and user-focused web
            applications.
          </p>

          <p className="about__description">
            As a MERN Stack developer, I have gained hands-on experience through
            real-world projects and practical training using technologies like
            React.js, Node.js, MongoDB, and SQL. I enjoy transforming ideas into
            responsive and functional digital experiences while continuously
            improving my development skills.
          </p>

          <p className="about__description">
            Along with web development, I am actively learning Java for
            problem-solving and strengthening my programming fundamentals. I am
            also exploring AI tools, workflow automation using n8n, and
            LLM-based applications to stay aligned with the rapidly evolving
            AI-driven technology landscape. My goal is to combine AI with web
            development to build smarter, more innovative solutions for the
            future.
          </p>
        </motion.div>

        {/* RIGHT SIDE CARDS */}
        <motion.div
          className="about__cards"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="about__card"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <h3 className="about__card-number">3+</h3>
            <p className="about__card-text">
              Years of Dedicated Self-Learning in Software Development
            </p>
          </motion.div>

          <motion.div
            className="about__card"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <h3 className="about__card-number">10+</h3>
            <p className="about__card-text">
              Full-stack projects & experiments built
            </p>
          </motion.div>

          <motion.div
            className="about__card"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <h3 className="about__card-number">MERN</h3>
            <p className="about__card-text">
              Focused on scalable modern web architecture
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

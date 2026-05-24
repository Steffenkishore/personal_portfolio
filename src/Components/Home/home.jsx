/**
 * Hero section component.
 * Displays whileInViewd introduction, CTA buttons,
 * profile image, and social presence.
 */

import "./Home.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

import profileImage from "../../assests/my_profile.png";
import resumePdf from "../../assests/Steffen_Kishore_Resume.pdf";

function home() {
  return (
    <section className="hero" id="home">
      <div className="hero__background-glow hero__background-glow--one"></div>
      <div className="hero__background-glow hero__background-glow--two"></div>

      <div className="hero__container section-container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.9 }}
        >
          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.1 }}
          >
            Full Stack Developer
          </motion.p>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ delay: 0.2 }}
          >
            I'm Steffen Kishore R
          </motion.h1>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ delay: 0.3 }}
          >
            MERN Stack Developer passionate about scalable web applications,
            immersive UI experiences, and modern full-stack engineering.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.4 }}
          >
            <a href="#projects">
              <button className="hero__primary-button">
                View Projects
                <FaArrowRight />
              </button>
            </a>

            <a href={resumePdf} download="Steffen_Kishore_Resume.pdf">
              <button className="hero__secondary-button">
                Download Resume
              </button>
            </a>
          </motion.div>

          <motion.div
            className="hero__socials"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="https://github.com/Steffenkishore "
              target="_blank"
              className="hero__social-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/steffenkishore"
              target="_blank"
              className="hero__social-link"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__image-wrapper"
          initial={{ opacity: 0, scale: 0.7, rotate: -4 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 90,
          }}
        >
          <div className="hero__image-card">
            <img src={profileImage} alt="Profile" className="hero__image" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default home;

/**
 * Footer component.
 * Displays portfolio signature,
 * navigation links, socials,
 * and closing statement.
 */

import "./footer.css";

import { motion } from "framer-motion";

import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__gradient-orb"></div>

      <div className="section-container">
        {/* TOP */}
        <motion.div
          className="footer__top"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* LEFT */}
          <div className="footer__branding">
            <span className="footer__tag">Full Stack Developer</span>

            <h2 className="footer__title">Steffen Kishore</h2>

            <p className="footer__description">
              Building modern digital experiences with scalable architecture,
              interactive UI, and continuous innovation.
            </p>
          </div>

          {/* CENTER */}
          <div className="footer__links">
            <span className="footer__links-title">Navigation</span>

            <a href="#about">About</a>

            <a href="#skills">Skills</a>

            <a href="#projects">Projects</a>

            <a href="#experience">Experience</a>

            <a href="#contact">Contact</a>
          </div>

          {/* RIGHT */}
          <div className="footer__socials-wrapper">
            <span className="footer__links-title">Connect</span>

            <div className="footer__socials">
              <motion.a
                href="https://github.com/Steffenkishore"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
                whileHover={{ y: -5 }}
              >
                <FaGithub />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/steffenkishore"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
                whileHover={{ y: -5 }}
              >
                <FaLinkedin />
              </motion.a>
            </div>

            <motion.a
              href="#home"
              className="footer__scroll-top"
              whileHover={{ y: -4 }}
            >
              <FaArrowUp />
            </motion.a>
          </div>
        </motion.div>

        {/* BOTTOM */}
        <motion.div
          className="footer__bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <p>
            © {currentYear} Steffen Kishore. Crafted with React.js & creativity.
          </p>

          <span className="footer__bottom-line"></span>

          <p>Designed & developed with attention to detail.</p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;

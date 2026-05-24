/**
 * Contact section component.
 * Displays contact information and
 * Web3Forms-powered contact form.
 */

import "./contact.css";

import { motion } from "framer-motion";

import toast from "react-hot-toast";

import { FaPhoneAlt, FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();

    toast.loading("Sending message...", {
      id: "contact-toast",
    });

    const formData = new FormData(event.target);

    formData.append("access_key", process.env.REACT_APP_ACCESS_TOKEN);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Message sent successfully 🚀", {
        id: "contact-toast",
      });

      event.target.reset();
    } else {
      toast.error("Something went wrong!", {
        id: "contact-toast",
      });
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__gradient-orb"></div>

      <div className="section-container">
        {/* HEADER */}
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="contact__subtitle">Contact</p>

          <h2 className="contact__title">
            Let’s Start Building and Learning Together
          </h2>

          <p className="contact__description">
            I’m currently looking for opportunities to gain real-world
            experience, contribute to meaningful projects, and grow as a
            developer. Whether it’s an internship, freelance opportunity,
            collaboration, or a simple tech discussion and I’d love to connect
            and learn from it.
          </p>
        </motion.div>

        {/* LAYOUT */}
        <div className="contact__layout">
          {/* LEFT SIDE */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="contact__info-card">
              <div className="contact__info-glow"></div>

              <h3 className="contact__info-title">Get In Touch</h3>

              <p className="contact__info-text">
                Open to internships, entry-level software opportunities, project
                collaborations, and learning experiences.
              </p>

              {/* ITEMS */}
              <div className="contact__items">
                <a
                  href="mailto:kishoresteffen@gmail.com"
                  className="contact__item"
                >
                  <MdEmail className="contact__icon" />

                  <div>
                    <span>Email</span>

                    <p>kishoresteffen@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+919944192246" className="contact__item">
                  <FaPhoneAlt className="contact__icon" />

                  <div>
                    <span>Phone</span>

                    <p>+91 9944192246</p>
                  </div>
                </a>

                <div className="contact__item">
                  <FaLocationDot className="contact__icon" />

                  <div>
                    <span>Location</span>

                    <p>Chennai, Tamil Nadu</p>
                  </div>
                </div>
              </div>

              {/* SOCIALS */}
              <div className="contact__socials">
                <a
                  href="https://linkedin.com/in/steffenkishore"
                  target="_blank"
                  rel="noreferrer"
                  className="contact__social-link"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/Steffenkishore"
                  target="_blank"
                  rel="noreferrer"
                  className="contact__social-link"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            className="contact__form-wrapper"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <form className="contact__form" onSubmit={onSubmit}>
              <div className="contact__form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="contact__form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="contact__form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="contact__form-group">
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project or opportunity..."
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="contact__submit-button"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
              >
                Send Message
                <FaArrowRight />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

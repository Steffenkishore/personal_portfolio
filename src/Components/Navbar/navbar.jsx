/**
 * Navbar component.
 * Displays responsive navigation with
 * glassmorphism UI and mobile menu.
 */

import "./navbar.css";

import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  {
    name: "Home",
    href: "#home",
  },

  {
    name: "About Me",
    href: "#about",
  },

  {
    name: "Education",
    href: "#education",
  },

  {
    name: "Skills",
    href: "#skills",
  },

  {
    name: "Experience",
    href: "#experience",
  },

  {
    name: "Projects",
    href: "#projects",
  },

  {
    name: "Certificates",
    href: "#learning",
  },

  {
    name: "Contact",
    href: "#contact",
  },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <motion.header
      className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="navbar__container section-container">
        {/* LOGO */}
        <a href="#home" className="navbar__logo">
          <span className="navbar__logo-highlight">S</span>
          teffen.
        </a>

        {/* DESKTOP NAV */}
        <nav className="navbar__desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="navbar__link">
              {link.name}
            </a>
          ))}
        </nav>

        {/* CONTACT BUTTON */}
        <a href="#contact" className="navbar__contact-button">
          Let’s Talk
        </a>

        {/* MOBILE MENU BUTTON */}
        <button className="navbar__menu-button" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="navbar__mobile-link"
                onClick={() => setIsMenuOpen(false)}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.05,
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;

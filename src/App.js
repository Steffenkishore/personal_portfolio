// src/App.jsx
import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import "./components.css";
import About from "./Components/About/about";
import Hero from "./Components/Hero/hero";
import Education from "./Components/Education/education";
import Skills from "./Components/Skills/skills";
import Experience from "./Components/Experience/experience";
import Projects from "./Components/Projects/projects";
import Certificates from "./Components/Certificate/certificate";
import Contact from "./Components/Contact/contact";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => setIsMobileMenuOpen(false);
    window.addEventListener("hashchange", handleRouteChange);
    return () => window.removeEventListener("hashchange", handleRouteChange);
  }, []);

  // Show scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">Steffen Kishore</div>

        {/* Desktop Navigation */}
        <nav className="navbar-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </a>
          <a href="#education" onClick={() => setIsMobileMenuOpen(false)}>
            Education
          </a>
          <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>
            Skills
          </a>
          <a href="#experience" onClick={() => setIsMobileMenuOpen(false)}>
            Experience
          </a>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>
            Projects
          </a>
          <a href="#certificates" onClick={() => setIsMobileMenuOpen(false)}>
            Certificates
          </a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}

      {/* Main Content */}
      <main>
        <Toaster position="top-right" reverseOrder={false} />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          className={`scroll-top-btn ${showScrollTop ? "show" : ""}`}
          onClick={scrollToTop}
          aria-label="Back to top"
          style={{ fontSize: "28px" }}
        >
          ↑
        </button>
      )}

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} Steffen Kishore R. Built with React.
      </footer>
    </div>
  );
};

export default App;

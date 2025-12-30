// src/components/Hero.jsx
import React from "react";
import profile_pic from "../../assests/my_profile_pic_noBg.png";
import resumePdf from "../../assests/Steffen_Kishore_Resume.pdf";

const Home = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-tag">Full Stack Developer (MERN)</p>
        <h1>
          Hi, I'm <span>Steffen Kishore R</span>
        </h1>
        <p className="hero-subtitle">
          Tech enthusiast focused on MERN stack and back-end systems, building
          reliable web applications and continuously upskilling.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a
            href={resumePdf}
            download="Steffen_Kishore_Resume.pdf"
            className="btn secondary"
          >
            Download Resume
          </a>
        </div>
        <div className="hero-links">
          <a
            href="mailto:kishoresteffen@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/steffenkishore"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Steffenkishore"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="profile-pic-con">
        <img
          src={profile_pic}
          alt="profile_pic"
          style={{ height: "500px", width: "auto" }}
        />
      </div>
    </section>
  );
};

export default Home;

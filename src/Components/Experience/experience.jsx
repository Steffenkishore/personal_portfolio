// src/components/Experience.jsx
import React from "react";

const Experience = () => {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">Experience & Training</h2>

      <div className="card">
        <h3>Fullstack Development (Training)</h3>
        <p className="card-subtitle">
          CCBP 4.0 Certification Program, NxtWave (online) | Jun 2022 - Present
        </p>
        <ul className="card-list">
          <li>
            Completed 3 years of intensive full-stack development training with
            hands-on MERN stack projects.
          </li>
          <li>
            Cleared multiple structured assessments, code reviews, and
            industry-oriented practice modules.
          </li>
          <li>
            Built real-world applications covering frontend, backend, REST APIs,
            authentication, databases, and deployment workflows.
          </li>
        </ul>
      </div>

      <div className="card">
        <h3>Embedded Systems Intern</h3>
        <p className="card-subtitle">
          TRIOS Tech Pvt Ltd, Chennai, Tamil Nadu | Jun 2025 - Jul 2025
        </p>
        <ul className="card-list">
          <li>
            Studied the basics of microcontrollers, embedded C coding, and
            interface design.
          </li>
          <li>
            Worked with sensors, actuators, and communication protocols such as
            UART, I2C, and SPI.
          </li>
          <li>
            Developed and tested basic embedded system prototypes through
            hands-on training.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;

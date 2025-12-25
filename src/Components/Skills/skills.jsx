// src/components/Skills.jsx
import React from "react";

const SkillGroup = ({ title, items }) => (
  <div className="skill-group">
    <h3>{title}</h3>
    <div className="skill-chips">
      {items.map((item) => (
        <span key={item} className="chip" style={{fontSize:"0.8rem"}}>
          {item}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        <SkillGroup
          title="Front-end"
          items={["HTML", "CSS", "JavaScript", "Bootstrap", "React.js"]}
        />
        <SkillGroup title="Back-end" items={["Node.js", "Express.js"]} />
        <SkillGroup title="Database" items={["MongoDB", "SQL"]} />
        <SkillGroup title="Programming Languages" items={["C++", "Python"]} />
        <SkillGroup title="Tools & Platforms" items={["Git", "GitHub"]} />
      </div>
    </section>
  );
};

export default Skills;

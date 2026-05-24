/**
 * Skills section component.
 * Displays categorized technologies using
 * responsive icon-card grids with staggered
 * scroll-triggered animations.
 */

import "./skills.css";

import { skillsData } from "../../data/skills";

import useScrollAnimation from "../../hooks/useScrollAnimation";

function Skills() {
  const [sectionRef, isVisible] = useScrollAnimation(0.2);

  return (
    <section className="skills__section" id="skills" ref={sectionRef}>
      <div className="skills__container section-container">
        {/* HEADING */}
        <div className="skills__heading-wrapper">
          <h2 className="skills__heading">Skills</h2>

          <p className="skills__subtext">
            Technologies I work with to build scalable, modern, and user-focused
            web applications.
          </p>
        </div>

        {/* SKILL GROUPS */}
        {skillsData.map((group) => (
          <div className="skills__group" key={group.category}>
            <p className="skills__category-label">{group.category}</p>

            <div className="skills__grid">
              {group.skills.map((skill, index) => {
                const IconComponent = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className={`
                      skills__card
                      ${isVisible ? "skills__card--visible" : ""}
                      ${group.isLearning ? "skills__card--learning" : ""}
                    `}
                    style={{
                      transitionDelay: `${index * 50}ms`,
                    }}
                  >
                    <IconComponent className="skills__icon" />

                    <p className="skills__name">{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

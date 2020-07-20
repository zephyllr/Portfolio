import React from "react";
import { SKILLS, SKILLS_DATA } from "./constants";

const generateSkillSet = (skillSet) =>
  skillSet.map((skill) => (
    <li className="list-inline-item" key={skill}>
      <i className={`devicon-${skill}-plain`} title={skill}></i>
    </li>
  ));

const generateSkillSets = () =>
  SKILLS_DATA.map(({ categoryName, skillSet }) => (
    <div key={categoryName}>
      <div className="subheading mb-3">{categoryName}</div>
      <ul className="list-inline dev-icons">{generateSkillSet(skillSet)}</ul>
    </div>
  ));

export const Skills = () => (
  <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
    <div className="my-auto">
      <h2 className="mb-5">{SKILLS}</h2>
      {generateSkillSets()}
    </div>
  </section>
);

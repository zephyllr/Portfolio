import React from "react";
import { SKILLS, SKILLS_DATA } from "./constants";

const generateSkillSet = (skill_set) =>
  skill_set.map((skill) => (
    <li class="list-inline-item" key={skill}>
      <i class={`devicon-${skill}-plain`}></i>
    </li>
  ));

const generateSkillSets = () =>
  SKILLS_DATA.map(({ category_name, skill_set }) => (
    <>
      <div class="subheading mb-3">{category_name}</div>
      <ul class="list-inline dev-icons">{generateSkillSet(skill_set)}</ul>
    </>
  ));

export const Skills = () => (
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
    <div class="my-auto">
      <h2 class="mb-5">{SKILLS}</h2>
      {generateSkillSets()}
    </div>
  </section>
);

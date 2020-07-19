import React from "react";
import { PROJECTS, PROJECTS_DATA } from "./constants";

const generateLanguageIcons = (icons) =>
  icons.map((icon) => (
    <li className="list-inline-item" key={icon}>
      <i className={`devicon-${icon}-plain`}></i>
    </li>
  ));

const generateProjects = () =>
  PROJECTS_DATA.map(({ name, description, link, icons }) => [
    <div className="subheading mb-0" key={name}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </div>,
    <p key={description}>
      {description}
      <ul className="list-inline dev-icons">{generateLanguageIcons(icons)}</ul>
    </p>,
  ]);

export const Projects = () => (
  <section
    className="resume-section p-3 p-lg-5 d-flex flex-column"
    id="projects"
  >
    <div className="my-auto">
      <h2 className="mb-5">{PROJECTS}</h2>
      {generateProjects()}
    </div>
  </section>
);

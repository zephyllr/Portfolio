import React from "react";
import { PERSONAL_DATA } from "./constants";

export const About = () => (
  <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
    <div className="my-auto">
      <h1 className="mb-0">
        {PERSONAL_DATA.firstName}{" "}
        <span className="text-primary">{PERSONAL_DATA.lastName}</span>
      </h1>
      <div className="subheading mb-5">
        <a href={`mailto:${PERSONAL_DATA.email}`}> {PERSONAL_DATA.email}</a>
      </div>
      <p className="lead mb-5">
        <b>{PERSONAL_DATA.role}</b>
      </p>
      <div className="social-icons">
        <a
          href={PERSONAL_DATA.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href={PERSONAL_DATA.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  </section>
);

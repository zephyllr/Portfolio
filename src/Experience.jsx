import React from "react";
import { EXPERIENCES, EXPERIENCES_DATA } from "./constants";

const generateExperiences = () =>
  EXPERIENCES_DATA.map(({ company, role, date, logo }) => (
    <div
      className="resume-item d-flex flex-column flex-sm-row mb-5"
      key={company}
    >
      <div className="resume-content mr-auto d-flex flex-row align-items-center">
        <img src={logo} height="52px" className="mr-4 mb-1 d-none d-sm-block" />
        <div>
          <h4 className="mb-0">{company}</h4>
          <div className="subheading mb-0">{role}</div>
        </div>
      </div>
      <div className="resume-date text-sm-right">
        <span className="text-primary">{date}</span>
      </div>
    </div>
  ));

export const Experience = () => (
  <section
    className="resume-section p-3 p-lg-5 d-flex flex-column"
    id="experience"
  >
    <div className="my-auto">
      <h2 className="mb-5">{EXPERIENCES}</h2>
      {generateExperiences()}
    </div>
  </section>
);

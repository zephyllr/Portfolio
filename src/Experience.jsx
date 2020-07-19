import React from "react";
import { EXPERIENCES, EXPERIENCES_DATA } from "./constants";

const generateExperiences = () =>
  EXPERIENCES_DATA.map(({ company, role, date, logo }) => (
    <div class="resume-item d-flex flex-column flex-md-row mb-5" key={company}>
      <div class="resume-content mr-auto d-flex flex-row align-items-center">
        <img src={logo} height="52px" class="mr-4 mb-1" />
        <div>
          <h4 class="mb-0">{company}</h4>
          <div class="subheading mb-0">{role}</div>
        </div>
      </div>
      <div class="resume-date text-md-right">
        <span class="text-primary">{date}</span>
      </div>
    </div>
  ));

export const Experience = () => (
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
    <div class="my-auto">
      <h2 class="mb-5">{EXPERIENCES}</h2>
      {generateExperiences()}
    </div>
  </section>
);

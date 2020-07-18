import React from "react";
import { EDUCATION, EDUCATION_DATA } from "./constants";

const generateCourses = (start) => {
  let end = EDUCATION_DATA.courses.length;
  if (start === 0) end = end & 1 ? (end + 1) / 2 : end / 2;
  else start = end & 1 ? (end + 1) / 2 : end / 2;

  const ul_items = [];
  for (let i = start; i < end; i++) {
    ul_items.push(<li key={i}>{EDUCATION_DATA.courses[i]}</li>);
  }
  return ul_items;
};

export const Education = () => (
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
    <div class="my-auto">
      <h2 class="mb-5">{EDUCATION}</h2>

      <div class="resume-item d-flex flex-column flex-md-row mb-5">
        <div class="resume-content mr-auto">
          <h3 class="mb-0">{EDUCATION_DATA.institution}</h3>
          <div class="subheading mb-3">{EDUCATION_DATA.college}</div>
          <div>{EDUCATION_DATA.degree}</div>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">{EDUCATION_DATA.graduation}</span>
        </div>
      </div>

      <div>
        <b>Relevant Courses:</b>
        <div class="row">
          <div class="col-6">{generateCourses(0)}</div>
          <div class="col-6">
            {generateCourses(EDUCATION_DATA.courses.length / 2)}
          </div>
        </div>
      </div>
    </div>
  </section>
);

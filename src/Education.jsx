import React from "react";
import { EDUCATION, EDUCATION_DATA } from "./constants";

const generateCourses = (courses) =>
  courses.map((course) => <li key={course}>{course}</li>);

const generateAllCourses = () => {
  const half = Math.ceil(EDUCATION_DATA.courses.length / 2);

  const firstColumn = EDUCATION_DATA.courses.splice(0, half);
  const lastColumn = EDUCATION_DATA.courses.splice(-half);

  return (
    <div class="row">
      <div class="col-6">{generateCourses(firstColumn)}</div>
      <div class="col-6">{generateCourses(lastColumn)}</div>
    </div>
  );
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
        {generateAllCourses()}
      </div>
    </div>
  </section>
);

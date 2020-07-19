import React from "react";
import { EDUCATION, EDUCATION_DATA } from "./constants";

const generateCourses = (courses) =>
  courses.map((course) => <li key={course}>{course}</li>);

const generateAllCourses = () => {
  const half = Math.ceil(EDUCATION_DATA.courses.length / 2);

  const firstColumn = EDUCATION_DATA.courses.splice(0, half);
  const lastColumn = EDUCATION_DATA.courses.splice(-half);

  return (
    <div className="row">
      <div className="col-sm-6">{generateCourses(firstColumn)}</div>
      <div className="col-sm-6">{generateCourses(lastColumn)}</div>
    </div>
  );
};

export const Education = () => (
  <section
    className="resume-section p-3 p-lg-5 d-flex flex-column"
    id="education"
  >
    <div className="my-auto">
      <h2 className="mb-5">{EDUCATION}</h2>

      <div className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">{EDUCATION_DATA.institution}</h3>
          <div className="subheading mb-3">{EDUCATION_DATA.college}</div>
          <div className="mb-1">
            <b>{EDUCATION_DATA.degree}</b>
          </div>
          <div className="mb-1">{EDUCATION_DATA.honors}</div>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">{EDUCATION_DATA.graduation}</span>
        </div>
      </div>

      <div>
        <b>Relevant Courses:</b>
        {generateAllCourses()}
      </div>
    </div>
  </section>
);

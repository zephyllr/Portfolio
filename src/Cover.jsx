import React from "react";
import { PERSONAL_DATA } from "./constants";

export const Cover = () => (
  <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
    <div class="my-auto">
      <h1 class="mb-0">
        {PERSONAL_DATA.first_name}{" "}
        <span class="text-primary">{PERSONAL_DATA.last_name}</span>
      </h1>
      <div class="subheading mb-5">
        <a href={`mailto:${PERSONAL_DATA.email}`}>{PERSONAL_DATA.email}</a>
      </div>
      <p class="lead mb-5">{PERSONAL_DATA.role}</p>
      <div class="social-icons">
        <a
          href={PERSONAL_DATA.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a
          href={PERSONAL_DATA.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  </section>
);

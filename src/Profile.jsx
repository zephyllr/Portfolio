import React from "react";
import { About } from "./About";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { GameDesigns } from "./GameDesigns";
import { Projects } from "./Projects";

export const Profile = () => (
  <div className="container-fluid p-0">
    <About />
    <hr className="m-0" />
    <Experience />
    <hr className="m-0" />
    <Education />
    <hr className="m-0" />
    <Skills />
    <hr className="m-0" />
    <Projects />
    <hr className="m-0" />
    <GameDesigns />
  </div>
);

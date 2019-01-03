import React from 'react';

class Experience extends React.Component {

  constructor(props) {
    super(props);
    this.state = [
      {
        company: "NYU Stern School of Business",
        role: "Application Developer",
        dept: "IT Enterprise Operations and Solutions",
        date: "Sep 2016 - Present",
      },
      {
        company: "Bank of America Merrill Lynch",
        role: "Summer Technology Analyst",
        dept: "Credit Risk Technology",
        date: "Jun 2018 - Aug 2018",
      },
      {
        company: "Google",
        role: "CodeU Program Participant - Developer",
        dept: "CodeU Program",
        date: "Jun 2018 - Aug 2018",
      },
      {
        company: "NYU Tandon School of Engineering",
        role: "Teaching Assistant",
        dept: "EG1003 Intro to Engineering and Design",
        date: "Jul 2017 - Dec 2017",
      }
    ];
  }

  renderExperiences() {
    let ul_items = [];
    for (let i = 0; i < this.state.length; i++){
      ul_items.push(
        <div class="resume-item d-flex flex-column flex-md-row mb-5">
          <div class="resume-content mr-auto">
            <h4 class="mb-0">{this.state[i].company}</h4>
            <div class="subheading mb-3">{this.state[i].role}</div>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">{this.state[i].date}</span>
          </div>
        </div>
      )
    }
    return ul_items;
  }

  render() {
    return (
      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div class="my-auto">
          <h2 class="mb-5">Experience</h2>
          {this.renderExperiences()}
        </div>
      </section>
    );
  }
}

export default Experience;



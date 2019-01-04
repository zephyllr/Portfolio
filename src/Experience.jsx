import React from 'react';

class Experience extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      exp: [
        {
          company: "Microsoft",
          role: "Incoming Software Engineer Intern",
          dept: "Azure",
          date: "",
        },
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
          company: "NYU Tandon School of Engineering",
          role: "General Engineering Teaching Assistant",
          dept: "EG1003 Intro to Engineering and Design",
          date: "Jul 2017 - Dec 2017",
        }
      ]
    };
  }

  renderExperiences() {
    let ul_items = [];
    for (let i = 0; i < this.state.exp.length; i++){
      ul_items.push(
        <div class="resume-item d-flex flex-column flex-md-row mb-5" key={i}>
          <div class="resume-content mr-auto">
            <h4 class="mb-0" key={this.state.exp[i].company}>{this.state.exp[i].company}</h4>
            <div class="subheading mb-0" key={this.state.exp[i].role}>{this.state.exp[i].role}</div>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary" key={this.state.exp[i].date}>{this.state.exp[i].date}</span>
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



import React from 'react';

class Education extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      institution: "New York University",
      college: "Courant Institute of Mathematical Sciences",
      degree: "B.A. in Computer Science, Minor in Mathematics",
      graduation: "Sep 2016 - May 2020",
      courses: [
        "Data Structures",
        "Computer Systems Organization",
        "Basic Algorithms",
        "Operating Systems", 
        "Discrete Mathematics",
        "Data Analysis",
        "Linear Algebra",

        "Parallel Computing",
        "Computer Networking",
        "Algorithmic Problem Solving",
        "Applied Internet Technology",
        "Intro to Engineering and Design",
        "Database Design and Web Implementation",
      ]
    };
  }

  renderCourses(start) {
    let end = this.state.courses.length;
    if (start === 0) end = end & 1 ? (end+1)/2 : end/2;
    else start = end & 1 ? (end+1)/2 : end/2;
    let ul_items = [];
    for (let i = start; i < end; i++){
      ul_items.push(<li key={i}>{this.state.courses[i]}</li>)
    }
    return ul_items;
  }

  render() {
    return (
      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div class="my-auto">
          <h2 class="mb-5">Education</h2>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">{this.state.institution}</h3>
              <div class="subheading mb-3">{this.state.college}</div>
              <div>{this.state.degree}</div>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">{this.state.graduation}</span>
            </div>
          </div>

          <div> <b>Relevant Courses:</b>
              <div class="row">
                <div class="col-6">
                  {this.renderCourses(0)}
                </div>
                <div class="col-6">
                  {this.renderCourses(this.state.courses.length/2)}
                </div>
              </div>
            </div> 

        </div>
      </section>
    );
  }
}

export default Education;



import React from 'react';

class Skills extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      progLangs: ["python", "java", "javascript", "c"],
      webTechs: ["html5", "css3", "bootstrap", "mysql", "django", "git", "docker"],
      designTools: ["photoshop", "illustrator"],
    };
  }

  renderSkillSet(category) {
    let ul_items = [];
    for (let i = 0; i < category.length; i++){
      let skill = "devicon-" + category[i] + "-plain";
      ul_items.push(
        <li class="list-inline-item">
          <i class={skill}></i>
        </li>);
    }
    return ul_items;
  }

  render() {
    return (
      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div class="my-auto">
          <h2 class="mb-5">Skills</h2>

          <div class="subheading mb-3">Programming Languages</div>
          <ul class="list-inline dev-icons">
            {this.renderSkillSet(this.state.progLangs)}
          </ul>

          <div class="subheading mb-3">Web Technologies &amp; Tools</div>
          <ul class="list-inline dev-icons">
            {this.renderSkillSet(this.state.webTechs)}
          </ul>

          <div class="subheading mb-3">Design Tools</div>
          <ul class="list-inline dev-icons">
            {this.renderSkillSet(this.state.designTools)}
          </ul>
        </div>
      </section>
    );
  }
}

export default Skills;



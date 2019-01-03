import React from 'react';

class Hacks extends React.Component {

  constructor(props) {
    super(props);
    this.state = [
      {
        name: "Google Code-U Chat App",
        descript: "Instant messenger with features including admin dashboard, user profiles, mentions",
        link: "https://github.com/Tnek/Instant-Messenger",
        icons: ["java"],
      },
      {
        name: "Instant Messenger",
        descript: "Web multi-client instant messenger with public and private channels",
        link: "https://github.com/Tnek/Instant-Messenger",
        icons: ["python", "javascript", "bootstrap"],
      },
      {
        name: "IRMA: Instant Relief and Medical Attention App",
        descript: "App that crowdsources first responders in case of emergencies via SMS and online",
        link: "https://github.com/zephyllr/IRMA",
        icons: ["python", "javascript", "bootstrap", "google", "mongodb"],
      },
      {
        name: "NYU ACM-Women's Chapter Website",
        descript: "",
        link: "https://zephyllr.github.io/acmw_web/",
        icons: ["html5", "css3", "bootstrap"],
      },
      {
        name: "More Apps @Github",
        descript: "",
        link: "https://github.com/zephyllr",
        icons: [],
      },
    ]
  }

  renderIcons(i) {
    let icons = [];
    for (let j = 0; j < this.state[i].icons.length; j++){
      let iconName = "devicon-" + this.state[i].icons[j] + "-plain";
      icons.push(
        <li class="list-inline-item">
          <i class={iconName}></i>
        </li>
      );
    }
    return icons
  }

  renderHacks() {
    let items = [];
    for (let i = 0; i < this.state.length; i++){
      items.push(
        <div class="subheading mb-0">
          <a href={this.state[i].link} target="_blank" rel="noopener noreferrer">{this.state[i].name}</a>
        </div>
      );

      items.push(
        <p>
          {this.state[i].descript}
          <ul class="list-inline dev-icons">
            {this.renderIcons(i)}
          </ul>
        </p>
      );

    }
    return items;
  }

  render() {
    return (
      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="hacks">
        <div class="my-auto">
          <h2 class="mb-5">Hacks</h2>
          {this.renderHacks()}
        </div>
      </section>
    );
  }
}

export default Hacks;
import React from 'react';

class Cover extends React.Component {
  render() {
    return (
      <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div class="my-auto">
          <h1 class="mb-0">Alice
            <span class="text-primary">Lu</span>
          </h1>
          <div class="subheading mb-5">
            <a href="mailto:alice.lu@nyu.edu">alice.lu@nyu.edu</a>
          </div>
          <p class="lead mb-5">
            Software Engineer<br/>
          </p>
          <div class="social-icons">
            <a href="https://www.linkedin.com/in/alice-lu/">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/zephyllr">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Cover;
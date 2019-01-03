import React from 'react';
import Cover from './Cover';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import GameDesigns from './GameDesigns';


class Profile extends React.Component {
  render() {
    return (
      <div class="container-fluid p-0">
        <Cover />
        <hr class="m-0" />
        <Education />
        <hr class="m-0" />
        <Skills />
        <hr class="m-0" />
        <Experience />
        <hr class="m-0" />
        <GameDesigns />

      </div>
    );
  }
}

export default Profile;
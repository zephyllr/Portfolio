import React from 'react';

class GameDesigns extends React.Component {

  constructor(props) {
    super(props);
    this.state = [
      // Game Name, img dir, ulr, img files
      ["Element Hockey", "elementHockey", "element-hockey/id1175892583", "main", "instructions", "setup", "about"],
      ["Color Drift", "colorDrift", "color-drift/id1139572518", "main", "setup", "settings"],
    ]
  }

  renderImages(i, path) {
    let imgs = [];
    for (let j = 3; j < this.state[i].length; j++){
      let fullPath = path + this.state[i][j] + ".png";

      imgs.push(
        <div class="resume-content mr-auto">
          <img class="mx-auto mb-2" src={fullPath} height="300" />
        </div>
      );
    }
    return imgs;
  }

  renderGameDesigns() {
    let items = [];
    let root = "img/gameDesigns";
    for (let i = 0; i < this.state.length; i++){
      let path = root + "/" + this.state[i][1] + "/";
      let url = "https://itunes.apple.com/us/app/" + this.state[i][2];
      items.push(
        <div class="subheading mb-3">
          {this.state[i][0]}
          <a href={url} target="_blank"> @AppStore</a>
        </div>);
      items.push(
        <div class="resume-item d-flex flex-column flex-md-row mb-5">
          {this.renderImages(i, path)};
        </div>
      );
    }
    return items;
  }

  render() {
    return (
      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="game-designs">
        <div class="my-auto">
          <h2 class="mb-5">Game Designs</h2>

          {this.renderGameDesigns()}

        </div>
      </section>
    );
  }
}

export default GameDesigns;
import React from 'react';

class GameDesigns extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      games: [
        // Game Name, img dir, ulr, img files+
        ["Element Hockey", "elementHockey", "element-hockey/id1175892583", "main", "instructions", "setup", "about"],
        ["Color Drift", "colorDrift", "color-drift/id1139572518", "main", "setup", "settings"],
      ]
    }
  }

  renderImages(i, path) {
    let imgs = [];
    for (let j = 3; j < this.state.games[i].length; j++){
      let fullPath = path + this.state.games[i][j] + ".png";

      imgs.push(
        <div class="resume-content mr-auto">
          <img class="mx-auto mb-2" src={fullPath} height="300" alt=""/>
        </div>
      );
    }
    return imgs;
  }

  renderGameDesigns() {
    let items = [];
    let root = "img/gameDesigns";
    for (let i = 0; i < this.state.games.length; i++){
      let path = root + "/" + this.state.games[i][1] + "/";
      let url = "https://itunes.apple.com/us/app/" + this.state.games[i][2];
      items.push(
        <div class="subheading mb-3" key={this.state.games[i][0]}>
          <a href={url} target="_blank" rel="noopener noreferrer">{this.state.games[i][0]}</a>
        </div>);
      items.push(
        <div class="resume-item d-flex flex-column flex-md-row mb-5" key={i}>
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
          <div class="subheading mb-3">
            <a href="https://zephyllr.weebly.com" target="_blank" rel="noopener noreferrer">Other ArtWork @Weebly</a>
          </div>

        </div>
      </section>
    );
  }
}

export default GameDesigns;
import React from 'react';

class Navbar extends React.Component {

  renderNavbarItem(val){
    let anchor = "#" + val.toLowerCase();
    return (
      <li className="nav-item" key={val}>
        <a className="nav-link js-scroll-trigger" href={anchor}>{val}</a>
      </li>
    );
  }

  renderNavbarItems(i) {
    let items = ["About", "Education", "Skills", "Experience", "Hacks", "Game-Designs"];
    let ul_items = [];
    for (let i = 0; i < items.length; i++) {
      ul_items.push(this.renderNavbarItem(items[i]));
    }
    return ul_items;
  }

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <span class="d-block d-lg-none">Alice Lu</span>
          <span class="d-none d-lg-block">
            <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt="profile pic" />
          </span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            {this.renderNavbarItems()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
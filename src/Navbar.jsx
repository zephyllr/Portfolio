import React from "react";
import { PERSONAL_DATA, PORTFOLIO_DATA } from "./constants";

const generateNavbarItems = () =>
  PORTFOLIO_DATA.map((link) => (
    <li className="nav-item" key={link}>
      <a className="nav-link js-scroll-trigger" href={"#" + link.toLowerCase()}>
        {link}
      </a>
    </li>
  ));

export const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">
          {PERSONAL_DATA.first_name} {PERSONAL_DATA.last_name}
        </span>
        <span class="d-none d-lg-block">
          <img
            class="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="img/profile.jpg"
            alt="profile pic"
          />
        </span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">{generateNavbarItems()}</ul>
      </div>
    </nav>
  );
};

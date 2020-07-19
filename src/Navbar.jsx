import React from "react";
import { PERSONAL_DATA, PORTFOLIO_DATA } from "./constants";

const generateNavbarItems = () =>
  PORTFOLIO_DATA.map((link) => (
    <li className="nav-item" key={link}>
      <a
        className="nav-link js-scroll-trigger"
        href={"#" + link.toLowerCase().replace(" ", "-")}
      >
        {link}
      </a>
    </li>
  ));

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">
          {PERSONAL_DATA.firstName} {PERSONAL_DATA.lastName}
        </span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="img/profile.jpg"
            alt="profile pic"
          />
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">{generateNavbarItems()}</ul>
      </div>
    </nav>
  );
};

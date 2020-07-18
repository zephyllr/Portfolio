import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Navbar } from "./Navbar";
import { Profile } from "./Profile";

class App extends Component {
  render() {
    return [<Navbar />, <Profile />];
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

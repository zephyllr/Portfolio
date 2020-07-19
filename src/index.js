import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from "./Navbar";
import { Profile } from "./Profile";

const App = () => (
  <>
    <Navbar />
    <Profile />
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));

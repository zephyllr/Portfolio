import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Profile from './Profile';

class Portfolio extends React.Component {
  render() {
    return [
      <Navbar key="navbar"/>,
      <Profile key="profile" />,
    ];
  }
}

ReactDOM.render(
  <Portfolio />,
  document.getElementById('root')
);

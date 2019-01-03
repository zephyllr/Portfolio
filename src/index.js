import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Profile from './Profile';

class Portfolio extends React.Component {
  render() {
    return [
      <Navbar />,
      <Profile />,
    ];
  }
}

ReactDOM.render(
  <Portfolio />,
  document.getElementById('root')
);

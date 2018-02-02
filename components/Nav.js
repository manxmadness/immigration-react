import React, { Component } from 'react';
import { Link } from 'react-router'


class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light fixed-top justify-content-center">
           <a className="navbar-brand" href="#"><img src="./assets/000_Title.png" width="100"/></a>
      </nav>
    );
  }
}

export default Nav;

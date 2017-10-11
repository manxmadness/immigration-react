import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';


class Pill extends Component {
  render() {
    return (
      <Main text="Before you leave you take the pill. During your travels you may come across bad men that want more from you than you want to give. They may choose force, but that is part of the cost to a safety place." imgUrl="../assets/ph.png" nextLink="/"/>
    );
  }
}

export default Pill;

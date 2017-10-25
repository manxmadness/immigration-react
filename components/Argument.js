import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Argument extends Component {
  render() {
    return (
      <Main text="An argument erupts. You see a glint out of the corner of your eye." imgUrl="../assets/Argument.png" nextLink="/Death1" />
    );
  }
}

export default Argument;

import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Fall extends Component {
  render() {
    return (
      <Main text={window.name3 + " gets tired and falls off the side of the train."} imgUrl="../assets/ph.png" nextLink="/Zetas"/>
    );
  }
}


export default Fall;

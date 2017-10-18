import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Mexico extends Component {
  render() {
    return (
      <Main text="Your party has reached the Mexican side of the Suchiate River." imgUrl="../assets/ph.png" nextLink="/Hike"/>
    );
  }
}


export default Mexico;

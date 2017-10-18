import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Hike extends Component {
  render() {
    return (
      <Main text="For the next three days you hike with little sleep. You trudge about 250 km." imgUrl="../assets/ph.png" nextLink="/Encounter"/>
    );
  }
}


export default Hike;

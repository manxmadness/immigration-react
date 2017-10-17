import React, { Component } from 'react';
import { Link } from 'react-router'
import MainTwo from './MainTwo';

class River extends Component {
  render() {
    return (
      <MainTwo text="Finally you reach the Suchiate River, the barrier between you and Mexico. How will you get across?" imgUrl="../assets/008_River.png" cta1="Make a raft" cta2="Swim" oneLink="/Raft" twoLink="/Swim"/>
    );
  }
}

export default River;

import React, { Component } from 'react';
import { Link } from 'react-router'
import MainTwo from './MainTwo';

class Story4 extends Component {
  render() {
    return (
      <MainTwo text="How will you get across?" imgUrl="../assets/ph.png" cta1="Make a raft" cta2="Swim" oneLink="/Raft" twoLink="/Swim"/>
    );
  }
}

export default Story4;

import React, { Component } from 'react';
import { Link } from 'react-router'
import MainTwo from './MainTwo';

class Story3 extends Component {
  render() {
    return (
      <MainTwo text="How would you like to proceed?" imgUrl="../assets/ph.png" cta1="Hire a coyote" oneLink="/Money"/>
    );
  }
}

export default Story3;

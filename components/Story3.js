import React, { Component } from 'react';
import { Link } from 'react-router'
import MainThree from './MainThree';

class Story3 extends Component {
  render() {
    return (
      <MainThree text="How would you like to proceed?" imgUrl="../assets/ph.png" cta1="Hire a coyote" cta2="Get a taxi" cta3="Take the bus to save money" oneLink="/Money" twoLink="/Taxi" threeLink="/Bus"/>
    );
  }
}

export default Story3;

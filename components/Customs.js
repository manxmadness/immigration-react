import React, { Component } from 'react';
import { Link } from 'react-router'
import MainTwo from './MainTwo';

class Customs extends Component {
  render() {
    return (
      <MainTwo text="Immigration and Customs Enforcement meets your party at the border. What do you do?" imgUrl="../assets/ph.png" cta1="You do not run." cta2="You run." oneLink="/Hieleras" twoLink="/" />
    );
  }
}

export default Customs;

import React, { Component } from 'react';
import { Link } from 'react-router'
import MainThree from './MainThree';


class Decision extends Component {
  render() {
    return (
      <MainThree text="This event leaves you at a crossroads. What will you do?" imgUrl="../assets/ph.png" cta1="Ignore" cta2="Join" cta3="Flee" oneLink="/" twoLink="/" threeLink="/Flee"/>
    );
  }
}

export default Decision;

import React, { Component } from 'react';
import { Link } from 'react-router'
import MainTwo from './MainTwo';


class Decision extends Component {
  render() {
    return (
      <MainTwo text="This event leaves you at a crossroads. What will you do?" imgUrl="../assets/ph.png" cta1="Ignore" cta2="Join" cta3="Flee" oneLink="/" twoLink="/" threeLink="/"/>
    );
  }
}

export default Decision;

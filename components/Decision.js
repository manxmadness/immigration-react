import React, { Component } from 'react';
import { Link } from 'react-router'
import MainTwo from './MainTwo';


class Decision extends Component {
  render() {
    return (
      <MainTwo text="It is time to make your decision:" imgUrl="../assets/ph.png" cta1="Ignore" cta2="Join" cta3="Flee" oneLink="/" twoLink="/" threeLink="/"/>
    );
  }
}

export default Decision;

import React, { Component } from 'react';
import { Link } from 'react-router'
import MainTwo from './MainTwo';


class Decision2 extends Component {
  render() {
    return (
      <MainTwo text="Now what will you do?" imgUrl="../assets/ph.png" cta1="It's time to leave" cta2="Pay" oneLink="/Flee" twoLink="/" />
    );
  }
}

export default Decision2;

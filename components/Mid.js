import React, { Component } from 'react';
import { Link } from 'react-router'
import MainTwo from './MainTwo';

class Mid extends Component {
  render() {
    return (
      <MainTwo text="You run out of cash in Chiquirines, about 45 km away from the Suchiate River. The taxi driver points you in the right direction. You watch the car drive away down the country road." imgUrl="../assets/006a_road.png" cta1="You and your party start walking." cta2="You take the day to rest." oneLink="/Man" twoLink="/Money"/>
    );
  }
}

export default Mid;

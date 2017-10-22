import React, { Component } from 'react';
import { Link } from 'react-router'
import MainTwo from './MainTwo';

class Story6 extends Component {
  render() {
    return (
      <MainTwo text="A few miles in to your ride a man comes around looking for fares. What do you do?" imgUrl="../assets/011_manontrain.png" cta1="Offer to do him a favor." cta2="Ignore the man, you don't have any money" oneLink="/Traffick" twoLink="/Story7" />
    );
  }
}

export default Story6;

import React, { Component } from 'react';
import { Link } from 'react-router'
import MainTwo from './MainTwo';

class Mid extends Component {
  render() {
    return (
      <MainTwo text="How do you respond?" imgUrl="../assets/002_phonecalls.png" cta1="You ignore the threats." cta2="You pay up." cta3="You change your number" oneLink="/Brother" twoLink="/" threeLink="/Phone2"/>
    );
  }
}

export default Mid;
